const fs = require('fs');
const path = require('path');
const tinify = require('tinify');

// Your TinyPNG API key
tinify.key = "2rpCH3B4HTYT9nMCYm5WcSFf8HpTwlbx";

// Function to optimize image
const optimizeImage = async (srcPath, destPath) => {
  try {
    const source = await tinify.fromFile(srcPath);
    await source.toFile(destPath);
    console.log(`Optimized: ${destPath}`);
  } catch (err) {
    console.error(`Error optimizing ${srcPath}: ${err.message}`);
  }
};

// Function to walk through directories and optimize images
const walkDir = async (srcDir, destDir) => {
  const files = fs.readdirSync(srcDir);
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir);
  }
  for (const file of files) {
    const srcPath = path.join(srcDir, file);
    const destPath = path.join(destDir, file);
    const stat = fs.statSync(srcPath);
    if (stat.isDirectory()) {
      await walkDir(srcPath, destPath);
    } else if (['.png', '.jpg', '.jpeg'].includes(path.extname(srcPath).toLowerCase())) {
      await optimizeImage(srcPath, destPath);
    }
  }
};

// Start the optimization
(async () => {
  const srcRootDir = '../../../../../vpsin/Downloads/anthony/';  // Replace with your source directory
  const destRootDir = '../../../../../vpsin/Downloads/anthony/webp/optimized'; // Replace with your destination directory
  await walkDir(srcRootDir, destRootDir);
})();
