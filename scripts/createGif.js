const GIFEncoder = require('gifencoder');
const fs = require('fs');
const PNG = require('png-js');
const path = require('path');

const encoder = new GIFEncoder(360, 360); // Set the dimensions of the GIF

// Create a write stream for the output GIF file
const writeStream = fs.createWriteStream('../src/assets/img/tonalex-gif/mouthpiece.gif');

// Pipe the encoder data into the write stream
encoder.createReadStream().pipe(writeStream);

encoder.start();
encoder.setRepeat(0); // Loop count (0 for infinite)
encoder.setDelay(500); // Frame delay in ms
encoder.setQuality(10); // Image quality (1 is highest, 100 is lowest)

const imagePaths = [
  '../src/assets/img/tonalex-gif/img1.png',
  '../src/assets/img/tonalex-gif/img2.png',
    '../src/assets/img/tonalex-gif/img3.png',
    '../src/assets/img/tonalex-gif/img4.png',
    '../src/assets/img/tonalex-gif/img5.png',
    '../src/assets/img/tonalex-gif/img6.png',
    '../src/assets/img/tonalex-gif/img7.png',
  
];

const addFrame = (imagePath) => {
  return new Promise((resolve, reject) => {
    // Check if the file exists
    if (fs.existsSync(imagePath)) {
      PNG.decode(imagePath, function(pixels) {
        encoder.addFrame(pixels);
        console.log(`Added frame from ${imagePath}`);
        resolve();
      });
    } else {
      console.error(`File ${imagePath} does not exist.`);
      reject(new Error(`File ${imagePath} does not exist.`));
    }
  });
};

(async () => {
  for (const imagePath of imagePaths) {
    await addFrame(imagePath);
  }
  encoder.finish();
  console.log('GIF creation completed.');
})();
