# Image Extraction & Cloudinary Setup

## Quick Start

```bash
# 1. Run extraction script
node scripts/extract-images.js

# Images will be downloaded to: temp/images/
# Report will be saved to: temp/image-report.csv
```

## What This Script Does

1. **Scans** all `.tsx` and `.ts` files in the project
2. **Extracts** all external image URLs (Unsplash, Google, etc.)
3. **Downloads** images to `temp/images/` folder
4. **Generates** CSV report with mappings

## Next Steps

### 1. Upload to Cloudinary

1. Sign up/login to [Cloudinary](https://cloudinary.com)
2. Go to Media Library → Upload
3. Upload all images from `temp/images/`
4. Note the folder name (e.g., `everleaf-medical`)

### 2. Get Cloudinary URLs

After upload, your Cloudinary URLs will be:

```
https://res.cloudinary.com/{cloud_name}/image/upload/{folder}/{filename}
```

### 3. Update Environment Variables

Create `.env` file:

```env
VITE_CLOUDINARY_CLOUD_NAME=your_cloud_name
VITE_CLOUDINARY_FOLDER=everleaf-medical
```

### 4. Use Helper Function

```tsx
import { getCloudinaryUrl } from "./utils/cloudinary";

// Usage
<img src={getCloudinaryUrl("image-1.jpg")} alt="..." />;
```

## CSV Report Format

```csv
Original URL,Local Filename,Cloudinary Name,Status
"https://unsplash.com/...",image-1.jpg,image-1,Downloaded
```

Use this report to:

- Track which images were downloaded
- Map original URLs to new Cloudinary URLs
- Update code references

## Tips

- **Compression:** Cloudinary handles automatic optimization
- **Responsive:** Use Cloudinary transformations for different sizes
- **Format:** Use `f_auto` for automatic format selection (WebP, etc.)

Example with transformations:

```
https://res.cloudinary.com/{cloud}/image/upload/f_auto,q_auto,w_800/{image}
```
