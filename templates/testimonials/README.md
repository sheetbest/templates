# Testimonials Template

A testimonials component that allows collecting user testimonials and showcasing them in a beautiful grid layout, powered by Google Sheets and SheetBest API.

## ✨ Features

- **Collect Testimonials** - Easy form for users to submit reviews
- **Display Grid** - Beautiful responsive testimonial cards
- **Google Sheets Backend** - No database required
- **Real-time Updates** - New testimonials appear automatically
- **Star Ratings** - Visual rating system
- **Responsive Design** - Works on all devices

## 🚀 Quick Start

### Option 1: Direct Use (No Build Required)
```bash
git clone https://github.com/sheetbest/testimonials-template.git
cd testimonials-template
open index.html  # or double-click the file
```

### Option 2: Development Server
```bash
git clone https://github.com/sheetbest/testimonials-template.git
cd testimonials-template
npm install
npm start        # Opens browser to localhost:3000
```

### Option 3: Development with Auto-Reload
```bash
npm run dev      # Serves with cache disabled for development
```

## 📊 Set up your Google Sheet

1. **Set up your Google Sheet**:
   - Create a new Google Sheet
   - Add columns: `Name`, `Title`, `Company`, `Testimonial`, `Rating`, `Date`, `Approved`
   - Connect via [SheetBest](https://sheetbest.com)

4. **Update the API endpoints**:
   ```html
   <!-- For displaying testimonials -->
   <div data-sheet-best="YOUR_SHEETBEST_READ_URL/search?Approved=1">
   
   <!-- For submitting testimonials -->
   <form data-sheet-best="YOUR_SHEETBEST_WRITE_URL">
   ```

## 📋 Sheet Format

Your Google Sheet should have these columns:

| Name | Title | Company | Testimonial | Rating | Date | Approved |
|------|-------|---------|-------------|--------|------|----------|
| Text | Text  | Text    | Text        | Number | Date | Number   |

### Column Details:
- **Name**: Customer's full name
- **Title**: Job title or role
- **Company**: Company name
- **Testimonial**: The testimonial text
- **Rating**: Star rating (1-5)
- **Date**: Submission date
- **Approved**: Set to 1 to display publicly, 0 to hide

## 🛠️ Customization

### Change Form Fields

Edit the form in `index.html`:

```html
<input type="text" name="Name" placeholder="Your name" required>
<input type="text" name="Title" placeholder="Your job title">
<input type="text" name="Company" placeholder="Company name">
<textarea name="Testimonial" placeholder="Share your experience" required></textarea>
<select name="Rating">
  <option value="5">⭐⭐⭐⭐⭐ (5 stars)</option>
  <option value="4">⭐⭐⭐⭐ (4 stars)</option>
  <option value="3">⭐⭐⭐ (3 stars)</option>
</select>
```

### Customize Display Cards

Modify the testimonial card template:

```html
<div class="testimonial-card">
  <div class="stars">{{ Rating }}</div>
  <blockquote>{{ Testimonial }}</blockquote>
  <cite>{{ Name }}, {{ Title }} at {{ Company }}</cite>
</div>
```

### Approval Workflow

Set `Approved` to:
- `1` - Show testimonial publicly
- `0` - Hide testimonial (pending approval)

## 📡 API Configuration

1. Visit [SheetBest](https://sheetbest.com)
2. Connect your Google Sheet
3. Get your API endpoint
4. Update both the display and form endpoints

## 🎨 Styling

The template uses Tailwind CSS via CDN. Key classes:

- `bg-gray-50` - Background colors
- `rounded-lg` - Rounded corners
- `shadow-md` - Drop shadows
- `grid` - Grid layouts
- `space-y-4` - Spacing

## 📁 File Structure

```
testimonials-template/
├── index.html          # Main template file
├── README.md          # This file
└── .gitignore         # Git ignore file
```

## 🌟 Live Demo

Open `index.html` in your browser to see the template in action.

## 💡 Use Cases

- **Product Reviews** - Collect customer feedback
- **Service Testimonials** - Showcase client experiences
- **Employee Reviews** - Internal feedback collection
- **Event Feedback** - Conference or workshop reviews

## 📚 Documentation

- [SheetBest API Documentation](https://docs.sheetbest.com)
- [Google Sheets API](https://developers.google.com/sheets/api)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## 🤝 Contributing

Feel free to submit issues and pull requests!

## 📄 License

MIT License - feel free to use in your projects!