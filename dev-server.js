#!/usr/bin/env node

const { spawn } = require('child_process');
const path = require('path');

console.log('🚀 Starting SheetBest Templates Development Server...\n');

// Build initial version
console.log('📦 Initial build...');
const build = spawn('node', ['build.js'], { 
  stdio: 'inherit',
  cwd: __dirname 
});

build.on('close', (code) => {
  if (code === 0) {
    console.log('\n🔄 Starting file watcher and dev server...\n');
    
    // Start file watcher and server concurrently
    const watcher = spawn('npx', [
      'concurrently',
      '--kill-others',
      '--prefix', '[{name}]',
      '--names', 'watcher,server',
      '--prefix-colors', 'cyan,green',
      '"npx chokidar \\"templates/**/*\\" \\"src/**/*\\" -c \\"node build.js --watch\\""',
      '"npx http-server dist -p 3000 -o --cors"'
    ], {
      stdio: 'inherit',
      shell: true,
      cwd: __dirname
    });

    // Handle process termination
    process.on('SIGINT', () => {
      console.log('\n🛑 Shutting down development server...');
      watcher.kill();
      process.exit(0);
    });
  } else {
    console.error('❌ Initial build failed');
    process.exit(1);
  }
});