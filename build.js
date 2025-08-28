#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Configuration
const TEMPLATES_DIR = path.join(__dirname, 'templates');
const DIST_DIR = path.join(__dirname, 'dist');
const SRC_DIR = path.join(__dirname, 'src');

// Check if running in watch mode
const isWatchMode = process.argv.includes('--watch') || process.env.npm_lifecycle_event === 'watch:files';

// Ensure dist directory exists
if (fs.existsSync(DIST_DIR)) {
  fs.rmSync(DIST_DIR, { recursive: true, force: true });
}
fs.mkdirSync(DIST_DIR, { recursive: true });

const timestamp = new Date().toLocaleTimeString();
console.log(`🏗️  ${isWatchMode ? '[' + timestamp + '] Rebuilding' : 'Building'} SheetBest Templates...\n`);

// Copy main index page
console.log('📄 Copying main index page...');
fs.copyFileSync(
  path.join(SRC_DIR, 'index.html'),
  path.join(DIST_DIR, 'index.html')
);

// Copy shared assets
if (fs.existsSync(path.join(SRC_DIR, 'images'))) {
  console.log('🖼️  Copying shared images...');
  fs.cpSync(
    path.join(SRC_DIR, 'images'),
    path.join(DIST_DIR, 'images'),
    { recursive: true }
  );
}

// Copy each template
const templates = fs.readdirSync(TEMPLATES_DIR).filter(item => {
  const fullPath = path.join(TEMPLATES_DIR, item);
  return fs.statSync(fullPath).isDirectory();
});

console.log(`📦 Found ${templates.length} templates: ${templates.join(', ')}\n`);

templates.forEach(template => {
  console.log(`🔨 Processing ${template} template...`);
  
  const templateDir = path.join(TEMPLATES_DIR, template);
  const distTemplateDir = path.join(DIST_DIR, template);
  
  // Create template directory in dist
  fs.mkdirSync(distTemplateDir, { recursive: true });
  
  // Copy all template files
  const files = fs.readdirSync(templateDir);
  files.forEach(file => {
    const srcFile = path.join(templateDir, file);
    const destFile = path.join(distTemplateDir, file);
    
    if (fs.statSync(srcFile).isFile()) {
      fs.copyFileSync(srcFile, destFile);
      console.log(`   ✓ ${file}`);
    }
  });
});

// Create a simple routing file for development server
const routingConfig = {
  routes: templates.reduce((acc, template) => {
    acc[`/${template}`] = `/${template}/index.html`;
    return acc;
  }, {}),
  templates: templates
};

fs.writeFileSync(
  path.join(DIST_DIR, '_routes.json'),
  JSON.stringify(routingConfig, null, 2)
);

console.log(`\n✅ ${isWatchMode ? 'Rebuild' : 'Build'} completed successfully!`);
if (!isWatchMode) {
  console.log(`📁 Output directory: ${DIST_DIR}`);
  console.log(`🌐 Templates available at:`);
  templates.forEach(template => {
    console.log(`   - /${template}`);
  });
} else {
  console.log(`🔄 Watching for changes... (${templates.length} templates)`);
}