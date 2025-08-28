# Sheet Best Templates

A collection of pre-built templates for Google Sheets integrations using the Sheet Best JS Library. Templates include feedback forms, testimonials, jobs boards, and inventory management systems powered by Tailwind CSS and vanilla JavaScript.

## ✨ Features

- **🚀 Zero Setup** - Each template works out of the box
- **📊 Google Sheets Backend** - No database required
- **📱 Responsive Design** - Mobile-first approach
- **🎨 Tailwind CSS** - Modern, utility-first styling
- **📦 Self-Contained** - Each template is standalone
- **🔧 Easy Customization** - Simple HTML/CSS/JS structure

## 🏗️ Build System

This project uses a simple Node.js build script instead of complex webpack configurations:

- **Templates** stored in `/templates/` directory
- **Simple build script** copies templates to `/dist/`
- **No complex dependencies** - just Node.js and http-server
- **Fast builds** - No bundling or compilation needed

## 🚀 Quick Start

1. **Clone the repository**:
   ```bash
   git clone https://github.com/sheetbest/templates.git
   cd templates
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Development with auto-reload**:
   ```bash
   npm run dev
   ```

4. **Production build**:
   ```bash
   npm run build
   ```

5. **Build and serve (no watching)**:
   ```bash
   npm start
   ```

## 📦 Available Templates

### 📝 [Feedback Form](./templates/feedback/)
A simple feedback form that collects responses directly in Google Sheets.
- Real-time form processing
- Topic categorization
- Success/error handling

### ⭐ [Testimonials](./templates/testimonials/)
Collect and display customer testimonials in a beautiful grid layout.
- Star rating system
- Approval workflow
- Responsive testimonial cards

### 💼 [Jobs Board](./templates/jobs/)
Complete job listing system with application management.
- Job search and filtering
- Application form integration
- Company and position tracking

### 📋 [Inventory Management](./templates/inventory/)
Full CRUD inventory system with stock tracking.
- Sortable data tables
- Low stock alerts
- Supplier management
- Item detail views

## 🛠️ Development

### Development Commands

**Main Project (with main site features):**
- **`npm run dev`** - Start development server with automatic rebuilds and file watching
- **`npm run build`** - Build templates with main site features (back buttons, badges)
- **`npm start`** - Build with main site features and serve
- **`npm run watch`** - Advanced: Run file watcher and server separately

**Main Project (standalone/clean mode):**
- **`npm run dev:standalone`** - Development server with clean templates
- **`npm run build:standalone`** - Build clean templates without main site features
- **`npm run start:standalone`** - Build standalone and serve
- **`npm run watch:standalone`** - File watcher with clean templates

**Advanced Options:**
- **`INJECT_FEATURES=false npm run dev`** - Use environment variable
- **`node dev-server.js --no-inject`** - Direct CLI control
- **`node build.js --help`** - Show all build options

**Individual Templates:**
- **`npm run dev:feedback`** - Run feedback template standalone
- **`npm run dev:testimonials`** - Run testimonials template standalone
- **`npm run dev:jobs`** - Run jobs template standalone
- **`npm run dev:inventory`** - Run inventory template standalone

**Or run directly in template directory:**
```bash
cd templates/feedback
npm install  # only needed once per template
npm start    # serves template on localhost:3000
```

### Development Workflow

**For Main Project Development:**
1. Run `npm run dev` to start development server
2. Edit any file in `templates/` or `src/`
3. Browser automatically refreshes with changes
4. Server runs on `http://localhost:3000`

**For Individual Template Development:**
1. `cd templates/[template-name]` (e.g., `cd templates/feedback`)
2. `npm install` (first time only)
3. `npm start` or `npm run dev`
4. Template serves directly on `http://localhost:3000`
5. Edit template files directly - no build step needed!

### Project Structure

```
sheetbest-templates/
├── templates/              # Individual template directories
│   ├── feedback/           # Feedback form template
│   ├── testimonials/       # Testimonials template
│   ├── jobs/               # Jobs board template
│   └── inventory/          # Inventory management template
├── src/
│   ├── index.html          # Main landing page
│   └── images/             # Shared assets
├── dist/                   # Built output (generated)
├── build.js                # Build script
├── dev-server.js           # Development server
├── package.json            # Dependencies and scripts
└── README.md              # This file
```

### Building Templates

The build process:
1. Copies main index page from `src/` to `dist/`
2. **Enhances templates** with main site features (back buttons, navigation)
3. Copies all templates from `templates/` to `dist/`
4. Copies shared assets (images, etc.)
5. Generates routing configuration

**Main Site Enhancements (configurable during build):**
- **Back Button** - Fixed top-left "Back to Templates" button
- **Template Badge** - Top-right indicator showing template name
- **Enhanced Navigation** - Smart back button with history fallback
- **Page Title** - Appends "- SheetBest Templates" to template titles

**Main Site Feature Control:**

The system supports flexible control of main site features through multiple methods:

**📋 Priority Order:**
1. CLI arguments (`--inject`, `--no-inject`, `--standalone`)
2. Environment variable (`INJECT_FEATURES=true/false`)
3. Default behavior (inject features)

**⚙️ Control Methods:**
```bash
# CLI Arguments (highest priority)
npm run build                         # Default: inject features
npm run build:standalone              # Clean templates
npm run dev:standalone                # Clean development
node build.js --no-inject             # Force clean build
node dev-server.js --inject           # Force inject in dev

# Environment Variables
INJECT_FEATURES=false npm run build   # Clean build via env var
INJECT_FEATURES=true npm run dev      # Force inject via env var

# Mixed Usage
INJECT_FEATURES=false npm run dev --inject  # CLI overrides env var
```

**🎯 Use Cases:**
- **Default mode**: Integrated template site experience
- **Standalone mode**: Individual template repositories, clean demos
- **Development**: Switch between modes while developing
- **CI/CD**: Control deployment mode via environment variables

These enhancements are **automatically injected** during build and don't modify the original template files.

### Creating New Templates

1. Create new directory in `templates/`
2. Add `index.html` (self-contained template)
3. Add `README.md` (documentation)
4. Run build script - template auto-discovered

## 🌐 Deployment

### Cloudflare Pages
1. Connect your repository
2. Set build command: `npm run build`
3. Set output directory: `dist`

### Other Platforms
The build outputs static files to `dist/` that can be deployed anywhere:
- Netlify
- Vercel
- GitHub Pages
- Any static hosting

## 📡 API Setup

Each template uses [SheetBest](https://sheetbest.com) to connect to Google Sheets:

1. Create a Google Sheet with the required columns
2. Sign up at [SheetBest](https://sheetbest.com)
3. Connect your sheet and get API endpoint
4. Update the template's `data-sheet-best` attribute

## 🎨 Customization

### Styling
Templates use Tailwind CSS via CDN. Modify classes directly in HTML or add custom CSS.

### Functionality
Each template uses vanilla JavaScript for maximum compatibility and easy customization.

### Form Fields
Add/remove form fields by updating both the HTML form and Google Sheets columns.

## 📚 Documentation

- [SheetBest API Documentation](https://docs.sheetbest.com)
- [Google Sheets API](https://developers.google.com/sheets/api)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## Contributing

We welcome contributions from the community! If you have a template that you would like to share, please follow these steps:

1. Fork the repository.
2. Create a new branch for your template:
    ```sh
    git checkout -b my-new-template
    ```
3. Add your template to the `templates` directory.
4. Commit your changes and push the branch to your fork:
    ```sh
    git commit -m "Add new template"
    git push origin my-new-template
    ```
5. Open a pull request with a description of your template.

## License

This repository is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

---

Thank you for using Sheet Best Templates! If you have any questions or need further assistance, please feel free to open an issue or contact us.
