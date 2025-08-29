#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Load environment variables from .env file
require('dotenv').config();

// Show help if requested
if (process.argv.includes('--help') || process.argv.includes('-h')) {
  console.log(`
🏗️  SheetBest Templates Build System

Usage: node build.js [options]

Options:
  --inject                     Force inject main site features
  --no-inject, --standalone    Build templates without main site features (back buttons, badges)
  --watch                      Watch mode (internal use)
  --help, -h                   Show this help message

Environment Variables (.env file or shell):
  INJECT_FEATURES=true|false   Control feature injection (CLI args take priority)
  GA4_MEASUREMENT_ID=G-XXXXXX  Google Analytics 4 measurement ID (optional)

Configuration:
  Copy .env.sample to .env and configure your environment variables

Examples:
  node build.js                        # Build with main site features (default)
  node build.js --standalone           # Build clean templates without navigation
  node build.js --no-inject            # Same as --standalone
  INJECT_FEATURES=false node build.js  # Use environment variable
  npm run build                        # Same as: node build.js
  npm run build:standalone             # Same as: node build.js --standalone
`);
  process.exit(0);
}

// Configuration
const TEMPLATES_DIR = path.join(__dirname, 'templates');
const DIST_DIR = path.join(__dirname, 'dist');
const SRC_DIR = path.join(__dirname, 'src');

// Check if running in watch mode
const isWatchMode = process.argv.includes('--watch') || process.env.npm_lifecycle_event === 'watch:files';

// Check if main site features should be injected
// Priority: CLI args > Environment variable > Default (true)
const injectMainSiteFeatures = process.argv.includes('--inject') ? true :
  process.argv.includes('--no-inject') || process.argv.includes('--standalone') ? false :
  process.env.INJECT_FEATURES === 'false' || process.env.INJECT_FEATURES === '0' ? false :
  process.env.INJECT_FEATURES === 'true' || process.env.INJECT_FEATURES === '1' ? true :
  true; // Default to injecting features

// Ensure dist directory exists
if (fs.existsSync(DIST_DIR)) {
  fs.rmSync(DIST_DIR, { recursive: true, force: true });
}
fs.mkdirSync(DIST_DIR, { recursive: true });

const timestamp = new Date().toLocaleTimeString();
const modeText = injectMainSiteFeatures ? 'with main site features' : 'standalone mode';
console.log(`🏗️  ${isWatchMode ? '[' + timestamp + '] Rebuilding' : 'Building'} SheetBest Templates (${modeText})...\n`);

// Function to inject main site features (back button, navigation, GA4)
function injectMainSiteFeaturesIntoHtml(htmlContent, templateName) {
  // Get GA4 measurement ID from environment variable
  const ga4MeasurementId = process.env.GA4_MEASUREMENT_ID;

  // GA4 initialization script (only inject if measurement ID is provided)
  const ga4Script = ga4MeasurementId ? `
  <!-- Google Analytics 4 (injected during build) -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=${ga4MeasurementId}"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${ga4MeasurementId}');

    // SheetBest Templates GA4 Event Tracking
    const TEMPLATE_SLUG = '${templateName}';

    // Track template view on page load
    document.addEventListener('DOMContentLoaded', function() {
      gtag('event', 'template_view', {
        'template_slug': TEMPLATE_SLUG
      });
    });

    // Function to track button clicks
    function trackTemplateEvent(eventName, templateSlug) {
      gtag('event', eventName, {
        'template_slug': templateSlug || TEMPLATE_SLUG
      });
    }

    // Add event listeners to template action buttons
    document.addEventListener('DOMContentLoaded', function() {
      // Track "Copy Google Sheet" button clicks
      const copyButtons = document.querySelectorAll('a[href*="docs.google.com"][href*="/copy"]');
      copyButtons.forEach(button => {
        button.addEventListener('click', function() {
          trackTemplateEvent('copy_sheet_click', TEMPLATE_SLUG);
        });
      });

      // Track "View code" button clicks
      const viewCodeButtons = document.querySelectorAll('a[href*="github.com"]:not([href*="/generate"])');
      viewCodeButtons.forEach(button => {
        button.addEventListener('click', function() {
          trackTemplateEvent('view_code', TEMPLATE_SLUG);
        });
      });

      // Track "Use this template" button clicks
      const useTemplateButtons = document.querySelectorAll('a[href*="github.com"][href*="/generate"]');
      useTemplateButtons.forEach(button => {
        button.addEventListener('click', function() {
          trackTemplateEvent('use_template', TEMPLATE_SLUG);
        });
      });
    });
  </script>
  ` : '';

  // Back button HTML
  const backButtonHtml = `
  <!-- Main Site Navigation (injected during build) -->
  <div id="main-site-nav" class="fixed top-4 left-4 z-50">
    <button onclick="navigateBack()" class="flex items-center px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-md hover:bg-gray-50 transition-colors">
      <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
      </svg>
      Back to Templates
    </button>
  </div>
  `;

  // Navigation script
  const navigationScript = `
  <script>
    // Main site navigation (injected during build)
    function navigateBack() {
      // Try to go back in history first
      if (window.history.length > 1 && document.referrer.includes(window.location.origin)) {
        window.history.back();
      } else {
        // Fallback to main templates page
        window.location.href = '/';
      }
    }

    // Add breadcrumb information
    document.addEventListener('DOMContentLoaded', function() {
      // Add template name to page title
      const originalTitle = document.title;
      document.title = originalTitle + ' - SheetBest Templates';

      // Optional: Add template indicator
      const templateInfo = document.createElement('div');
      templateInfo.className = 'fixed top-4 right-4 z-40 px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full font-medium';
      templateInfo.textContent = '${templateName.charAt(0).toUpperCase() + templateName.slice(1)} Template';
      document.body.appendChild(templateInfo);
    });
  </script>
  `;

  // Inject GA4 script in head section (only if measurement ID is provided)
  if (ga4MeasurementId) {
    htmlContent = htmlContent.replace(
      /<\/head>/i,
      `${ga4Script}</head>`
    );
  }

  // Inject back button after opening body tag
  htmlContent = htmlContent.replace(
    /(<body[^>]*>)/i,
    `$1${backButtonHtml}`
  );

  // Inject navigation script before closing body tag
  htmlContent = htmlContent.replace(
    /<\/body>/i,
    `${navigationScript}</body>`
  );

  return htmlContent;
}

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
      if (file === 'index.html') {
        // Process HTML file
        let htmlContent = fs.readFileSync(srcFile, 'utf8');

        // Inject main site features if enabled
        if (injectMainSiteFeatures) {
          htmlContent = injectMainSiteFeaturesIntoHtml(htmlContent, template);
        }

        fs.writeFileSync(destFile, htmlContent);
      } else {
        fs.copyFileSync(srcFile, destFile);
      }
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