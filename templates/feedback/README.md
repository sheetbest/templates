# Feedback Form Template

A simple feedback form that collects responses directly in Google Sheets using the SheetBest API.

## ✨ Features

- **Direct Google Sheets Integration** - No database required
- **Real-time Submissions** - Instant form processing
- **Responsive Design** - Works on all devices
- **Easy Customization** - Simple HTML structure
- **Tailwind CSS Styling** - Modern, clean design

## 🚀 Quick Start

1. **Clone this template**:
   ```bash
   git clone https://github.com/sheetbest/feedback-template.git
   cd feedback-template
   ```

2. **Open in browser**:
   ```bash
   open index.html
   ```

3. **Set up your Google Sheet**:
   - Create a new Google Sheet
   - Add columns: `Name`, `Topic`, `Feedback`
   - Connect via [SheetBest](https://sheetbest.com)

4. **Update the API endpoint**:
   ```html
   <form data-sheet-best="YOUR_SHEETBEST_API_URL">
   ```

## 📋 Sheet Format

Your Google Sheet should have these columns:

| Name | Topic | Feedback |
|------|-------|----------|
| Text | Text  | Text     |

## 🛠️ Customization

### Change Form Fields

Edit the form in `index.html`:

```html
<input type="text" name="Name" placeholder="Your name">
<select name="Topic">
  <option>Feature Request</option>
  <option>Bug</option>
</select>
<textarea name="Feedback" placeholder="Your feedback"></textarea>
```

### Update Styling

The template uses Tailwind CSS via CDN. Modify classes directly in the HTML or add custom CSS.

### Form Validation

Add validation attributes to inputs:

```html
<input type="text" name="Name" required>
<input type="email" name="Email" required>
```

## 📡 API Configuration

1. Visit [SheetBest](https://sheetbest.com)
2. Connect your Google Sheet
3. Get your API endpoint
4. Replace the `data-sheet-best` attribute value

## 📁 File Structure

```
feedback-template/
├── index.html          # Main template file
├── README.md          # This file
└── .gitignore         # Git ignore file
```

## 🌟 Live Demo

Open `index.html` in your browser to see the template in action.

## 📚 Documentation

- [SheetBest API Documentation](https://docs.sheetbest.com)
- [Google Sheets API](https://developers.google.com/sheets/api)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## 🤝 Contributing

Feel free to submit issues and pull requests!

## 📄 License

MIT License - feel free to use in your projects!