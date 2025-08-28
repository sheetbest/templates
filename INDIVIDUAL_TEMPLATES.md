# Individual Template Development Guide

## 🎯 Overview

Each template is now completely self-contained and can be developed, tested, and deployed independently. This makes them ready for:
- Individual GitHub repositories
- GitHub template repositories ("Use this template")
- Standalone development
- Independent deployment

## 🏗️ Template Structure

Each template contains:
```
template-name/
├── index.html          # Complete, self-contained template
├── index.js            # Minimal entry point (can be empty)
├── README.md          # Comprehensive documentation
├── package.json       # Individual template dependencies
├── .gitignore         # Git ignore rules
```

## 🚀 Individual Development

### Option 1: Run from Main Project
```bash
# From main project root
npm run dev:feedback        # or testimonials, jobs, inventory
```

### Option 2: Run Directly in Template Directory
```bash
# Navigate to template
cd templates/feedback

# Install dependencies (first time only)
npm install

# Start development server
npm start        # Production-like server
npm run dev      # Development server (no cache)
npm run preview  # Preview with CORS enabled
```

### Option 3: No Server (Direct File Opening)
```bash
cd templates/feedback
open index.html  # Works directly in browser!
```

## 📦 Template Commands

Each template has these npm scripts:

- **`npm start`** - Serves template with caching enabled
- **`npm run dev`** - Serves with cache disabled (for development)  
- **`npm run preview`** - Serves with CORS enabled (for testing APIs)

## 🔄 Benefits for Future Submodule Migration

### Ready for Separate Repositories
- ✅ Each template has own `package.json`
- ✅ Individual dependencies managed
- ✅ Comprehensive README for each template
- ✅ Self-contained - no shared dependencies
- ✅ GitHub template ready structure

### Migration Process Will Be:
1. **Create individual repositories** for each template
2. **Copy template directory** to new repo
3. **Add as git submodule** to main project
4. **Update main build script** to handle submodules

### Current Development Benefits
- **Faster development** - work on single template
- **No build complexity** - templates work directly  
- **Easy testing** - test individual templates
- **Clean separation** - no cross-template dependencies

## 🛠️ Development Workflow Examples

### Working on Feedback Template
```bash
cd templates/feedback
npm install
npm run dev
# Edit index.html directly
# Browser shows changes immediately
```

### Testing Jobs Template  
```bash
cd templates/jobs
npm start
# Template served at localhost:3000
# Test job applications, etc.
```

### Adding New Template
1. Create new directory in `templates/`
2. Copy `package.json` from existing template
3. Create `index.html` with template content
4. Add `README.md` with documentation  
5. Run `npm start` in template directory
6. Main project auto-discovers new template on next build

## 🌐 Deployment Options

### Individual Template Deployment
Each template can be deployed to:
- GitHub Pages (just push the template directory)
- Netlify (drag & drop template folder)
- Vercel (import template directory)
- Any static hosting

### Main Project Deployment  
Main project builds all templates into `dist/`:
- Cloudflare Pages
- Netlify with build command
- Any platform supporting Node.js builds

The system is now fully prepared for the submodule migration while maintaining excellent developer experience!