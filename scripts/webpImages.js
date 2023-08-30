const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const convertToWebP = async (srcPath, destPath) => {
  try {
    await sharp(srcPath)
      .webp({ quality: 80 })
      .toFile(destPath);
    console.log(`Converted to WebP: ${destPath}`);
  } catch (err) {
    console.error(`Error converting ${srcPath} to WebP: ${err.message}`);
  }
};

const walkDir = async (srcDir, destDir) => {
  const files = fs.readdirSync(srcDir);
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir);
  }
  for (const file of files) {
    const srcPath = path.join(srcDir, file);
    const destPath = path.join(destDir, file).replace(/\.(jpg|jpeg|png)$/i, '.webp');
    const stat = fs.statSync(srcPath);
    if (stat.isDirectory()) {
      await walkDir(srcPath, destPath);
    } else if (['.png', '.jpg', '.jpeg'].includes(path.extname(srcPath).toLowerCase())) {
      await convertToWebP(srcPath, destPath);
    }
  }
};

(async () => {
  const srcRootDir = '../src/assets/img';  // Replace with your source directory
  const destRootDir = '../src/assets/webp'; // Replace with your destination directory
  await walkDir(srcRootDir, destRootDir);
})();
