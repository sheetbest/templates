#!/usr/bin/env node

const { spawn } = require('child_process');
const path = require('path');

// Parse command line arguments for injection control
const args = process.argv.slice(2);
const noInject = args.includes('--no-inject') || args.includes('--standalone');
const inject = args.includes('--inject');

// Set environment variable for child processes
if (noInject) {
  process.env.INJECT_FEATURES = 'false';
} else if (inject) {
  process.env.INJECT_FEATURES = 'true';
}

const modeText = process.env.INJECT_FEATURES === 'false' ? ' (standalone mode)' : ' (with main site features)';
console.log(`🚀 Starting SheetBest Templates Development Server${modeText}...\n`);

// Build initial version
console.log('📦 Initial build...');
const build = spawn('node', ['build.js'], { 
  stdio: 'inherit',
  cwd: __dirname 
});

build.on('close', (code) => {
  if (code === 0) {
    console.log('\n🔄 Starting file watcher and dev server...\n');
    
    // Get port from environment or use default
    const port = process.env.PORT || 3000;
    
    // Start file watcher and server concurrently
    const watcher = spawn('npx', [
      'concurrently',
      '--kill-others',
      '--prefix', '[{name}]',
      '--names', 'watcher,server',
      '--prefix-colors', 'cyan,green',
      '"npx chokidar \\"templates/**/*\\" \\"src/**/*\\" -c \\"node build.js --watch\\""',
      `"npx http-server dist -p ${port} -o --cors"`
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