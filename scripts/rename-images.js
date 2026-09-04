import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const CSV_PATH = "../temp/image-report.csv";
const PROJECT_DIR = "../";

function parseCSV(csvContent) {
  const lines = csvContent.split("\n").filter((line) => line.trim());
  const records = [];

  for (let i = 1; i < lines.length; i++) {
    const line = lines[i];
    const match = line.match(/"([^"]+)","([^"]+)","([^"]+)","([^"]+)"/);
    if (match) {
      records.push({
        originalUrl: match[1],
        localFilename: match[2],
        cloudinaryName: match[3],
        status: match[4],
      });
    }
  }

  return records;
}

function getAllTsxFiles(dir) {
  let results = [];

  try {
    const files = fs.readdirSync(dir);

    files.forEach((file) => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);

      if (stat.isDirectory()) {
        if (
          ![
            "node_modules",
            "dist",
            "build",
            ".git",
            "temp",
            "scripts",
          ].includes(file)
        ) {
          results = results.concat(getAllTsxFiles(filePath));
        }
      } else if (file.endsWith(".tsx") || file.endsWith(".ts")) {
        results.push(filePath);
      }
    });
  } catch (error) {
    console.error(`Error reading directory ${dir}:`, error.message);
  }

  return results;
}

function escapeRegex(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function processImages() {
  console.log("🚀 Starting complete image URL replacement...\n");

  // Read CSV
  const csvPath = path.resolve(__dirname, CSV_PATH);
  const csvContent = fs.readFileSync(csvPath, "utf-8");
  const records = parseCSV(csvContent);

  console.log(`📄 Found ${records.length} images in CSV\n`);

  // Get all TSX files
  const projectDir = path.resolve(__dirname, PROJECT_DIR);
  const tsxFiles = getAllTsxFiles(projectDir);
  console.log(`📁 Scanning ${tsxFiles.length} code files...\n`);

  let totalReplacements = 0;
  let filesModified = 0;
  const modifiedFiles = new Set();

  // Process each image
  records.forEach((record) => {
    const { originalUrl, localFilename, status } = record;

    if (status !== "Downloaded") {
      return; // Skip failed downloads
    }

    const newPath = `/images/${localFilename}`;
    let replacementsForThisImage = 0;

    // Search and replace in ALL TSX files
    tsxFiles.forEach((filePath) => {
      try {
        let content = fs.readFileSync(filePath, "utf-8");

        // Check if this file contains the URL
        if (content.includes(originalUrl)) {
          // Replace ALL occurrences of this exact URL
          const escapedUrl = escapeRegex(originalUrl);
          const regex = new RegExp(escapedUrl, "g");
          const matches = content.match(regex);
          const count = matches ? matches.length : 0;

          if (count > 0) {
            content = content.replace(regex, newPath);
            fs.writeFileSync(filePath, content, "utf-8");

            replacementsForThisImage += count;
            modifiedFiles.add(filePath);
          }
        }
      } catch (error) {
        console.error(`Error processing ${filePath}:`, error.message);
      }
    });

    if (replacementsForThisImage > 0) {
      console.log(
        `✓ ${localFilename}: ${replacementsForThisImage} occurrence(s) replaced`,
      );
      totalReplacements += replacementsForThisImage;
    }
  });

  filesModified = modifiedFiles.size;

  console.log(`\n${"=".repeat(50)}`);
  console.log("✅ Complete!\n");
  console.log("📊 Summary:");
  console.log(`   - Total URL replacements: ${totalReplacements}`);
  console.log(`   - Code files modified: ${filesModified}`);
  console.log(
    `   - Images processed: ${records.filter((r) => r.status === "Downloaded").length}`,
  );
  console.log(`\n💡 Next steps:`);
  console.log(`   1. Copy temp/images/* to public/images/`);
  console.log(`   2. Run: git status`);
  console.log(`   3. Test the application`);
  console.log(`   4. Commit changes`);
}

// Run the script
try {
  processImages();
} catch (error) {
  console.error("❌ Error:", error);
  console.error(error.stack);
  process.exit(1);
}
