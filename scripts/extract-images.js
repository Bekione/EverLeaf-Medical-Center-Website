import fs from "fs";
import path from "path";
import https from "https";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Image Extraction Script for EverLeaf Medical Center
 */

const IMAGE_PATTERNS = [
  /src=["']([^"']+)["']/gi,
  /url\(["']?([^"')]+)["']?\)/gi,
];

const EXTERNAL_DOMAINS = [
  "unsplash.com",
  "images.unsplash.com",
  "googleusercontent.com",
];

const sourceDir = path.join(__dirname, "..");
const outputDir = path.join(__dirname, "..", "temp", "images");
const reportPath = path.join(__dirname, "..", "temp", "image-report.csv");

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const extractedImages = new Map();
let imageCounter = 1;

function isExternalUrl(url) {
  if (!url || url.startsWith("/") || url.startsWith(".")) return false;

  try {
    const urlObj = new URL(url);
    return EXTERNAL_DOMAINS.some((domain) => urlObj.hostname.includes(domain));
  } catch {
    return false;
  }
}

function generateFilename(url, index) {
  try {
    const urlObj = new URL(url);
    const pathname = urlObj.pathname;
    const ext = path.extname(pathname) || ".jpg";

    let name = pathname
      .split("/")
      .pop()
      .replace(/[^a-z0-9]/gi, "-")
      .toLowerCase();
    if (!name || name.length > 50) {
      name = `image-${index}`;
    }

    return `${name}${ext}`.replace(/--+/g, "-");
  } catch {
    return `image-${index}.jpg`;
  }
}

function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filepath);

    https
      .get(url, (response) => {
        if (response.statusCode === 301 || response.statusCode === 302) {
          https
            .get(response.headers.location, (redirectResponse) => {
              if (redirectResponse.statusCode !== 200) {
                reject(new Error(`Failed: ${redirectResponse.statusCode}`));
                return;
              }
              redirectResponse.pipe(file);
              file.on("finish", () => {
                file.close();
                resolve();
              });
            })
            .on("error", reject);
          return;
        }

        if (response.statusCode !== 200) {
          reject(new Error(`Failed: ${response.statusCode}`));
          return;
        }

        response.pipe(file);
        file.on("finish", () => {
          file.close();
          resolve();
        });
      })
      .on("error", (err) => {
        fs.unlink(filepath, () => {});
        reject(err);
      });
  });
}

function extractImagesFromContent(content) {
  const images = new Set();

  IMAGE_PATTERNS.forEach((pattern) => {
    const matches = content.matchAll(pattern);
    for (const match of matches) {
      const url = match[1];
      if (isExternalUrl(url)) {
        images.add(url);
      }
    }
  });

  return Array.from(images);
}

function scanDirectory(dir, fileList = []) {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      if (
        !["node_modules", ".git", "dist", "build", "temp", "scripts"].includes(
          file,
        )
      ) {
        scanDirectory(filePath, fileList);
      }
    } else if (file.endsWith(".tsx") || file.endsWith(".ts")) {
      fileList.push(filePath);
    }
  });

  return fileList;
}

async function main() {
  console.log("🔍 Scanning project for external images...\n");

  const files = scanDirectory(sourceDir);
  console.log(`📁 Found ${files.length} TypeScript/TSX files\n`);

  let totalImages = 0;
  files.forEach((file) => {
    const content = fs.readFileSync(file, "utf-8");
    const images = extractImagesFromContent(content);

    images.forEach((url) => {
      if (!extractedImages.has(url)) {
        const filename = generateFilename(url, imageCounter++);
        extractedImages.set(url, filename);
        totalImages++;
      }
    });
  });

  console.log(`🖼️  Found ${totalImages} unique external images\n`);

  if (totalImages === 0) {
    console.log("✅ No external images found!");
    return;
  }

  console.log("⬇️  Downloading images...\n");
  const csvLines = ["Original URL,Local Filename,Cloudinary Name,Status"];

  let downloaded = 0;
  let failed = 0;

  for (const [url, filename] of extractedImages.entries()) {
    const filepath = path.join(outputDir, filename);
    const cloudinaryName = filename.replace(/\.[^.]+$/, "");

    try {
      await downloadImage(url, filepath);
      csvLines.push(`"${url}","${filename}","${cloudinaryName}","Downloaded"`);
      downloaded++;
      console.log(`✓ ${filename}`);
    } catch (error) {
      csvLines.push(
        `"${url}","${filename}","${cloudinaryName}","Failed: ${error.message}"`,
      );
      failed++;
      console.log(`✗ ${filename} - ${error.message}`);
    }
  }

  fs.writeFileSync(reportPath, csvLines.join("\n"));

  console.log("\n📊 Summary:");
  console.log(`   Downloaded: ${downloaded}`);
  console.log(`   Failed: ${failed}`);
  console.log(`   Total: ${totalImages}`);
  console.log(`\n📄 Report saved to: ${reportPath}`);
  console.log(`📁 Images saved to: ${outputDir}`);
  console.log(
    "\n✅ Done! Upload images to Cloudinary and update the CSV with Cloudinary URLs.",
  );
}

main().catch(console.error);
