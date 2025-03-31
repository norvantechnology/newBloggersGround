// This script runs after the build process on Vercel
const fs = require('fs');
const path = require('path');

// Make sure the server directory exists in production
try {
  const publicDir = path.join(__dirname, 'dist', 'public');
  
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
    console.log('Created public directory for static files');
  }
  
  // Copy the client build files to the server's public directory
  const clientBuildDir = path.join(__dirname, 'client', 'dist');
  if (fs.existsSync(clientBuildDir)) {
    // Copy all files from client/dist to dist/public
    fs.readdirSync(clientBuildDir).forEach(file => {
      const srcPath = path.join(clientBuildDir, file);
      const destPath = path.join(publicDir, file);
      
      if (fs.lstatSync(srcPath).isDirectory()) {
        // Recursive copy of directories
        fs.cpSync(srcPath, destPath, { recursive: true });
      } else {
        // Copy individual files
        fs.copyFileSync(srcPath, destPath);
      }
    });
    
    console.log('Copied client build files to server public directory');
  } else {
    console.error('Client build directory not found:', clientBuildDir);
  }
} catch (error) {
  console.error('Error during post-build setup:', error);
}