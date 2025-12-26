const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, 'out');
const distDir = path.join(__dirname, 'dist');

// Remove dist if exists
if (fs.existsSync(distDir)) {
    fs.rmSync(distDir, { recursive: true, force: true });
}

// Rename out to dist
if (fs.existsSync(outDir)) {
    fs.renameSync(outDir, distDir);
    console.log('Successfully moved out/ to dist/');
} else {
    console.error('Error: out/ directory not found after build');
    process.exit(1);
}
