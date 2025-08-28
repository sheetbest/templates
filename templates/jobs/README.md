# Jobs Board Template

A complete jobs board that displays job listings from Google Sheets and allows applicants to submit applications directly. Features search, filtering, and a streamlined application process.

## ✨ Features

- **Job Listings Display** - Beautiful job cards with all details
- **Search & Filter** - Find jobs by title, company, or type
- **Application System** - Direct application submission
- **Google Sheets Backend** - No database required
- **Responsive Design** - Works on all devices
- **Real-time Updates** - New jobs appear automatically

## 🚀 Quick Start

1. **Clone this template**:
   ```bash
   git clone https://github.com/sheetbest/jobs-template.git
   cd jobs-template
   ```

2. **Open in browser**:
   ```bash
   open index.html
   ```

3. **Set up your Google Sheets**:
   - Create two sheets: "Jobs" and "Applications"
   - Connect via [SheetBest](https://sheetbest.com)

4. **Update the API endpoints**:
   ```html
   <!-- Jobs data -->
   <div data-sheet-best="YOUR_JOBS_API_URL/search?Published=1">
   
   <!-- Applications form -->
   <form data-sheet-best="YOUR_APPLICATIONS_API_URL">
   ```

## 📋 Sheet Formats

### Jobs Sheet
| Title | Company | Location | Type | Salary | Description | PostedDate | Published |
|-------|---------|----------|------|---------|-------------|------------|-----------|
| Text  | Text    | Text     | Text | Text    | Text        | Date       | Number    |

### Applications Sheet  
| Name | Email | Phone | Position | Resume | Portfolio | CoverLetter | ApplicationDate | Type |
|------|-------|--------|----------|---------|-----------|-------------|-----------------|------|
| Text | Email | Text   | Text     | URL     | URL       | Text        | Date            | Text |

## 🛠️ Job Management

### Adding Jobs
Add rows to your Jobs sheet with:
- **Title**: Job position name
- **Company**: Company name  
- **Location**: Job location
- **Type**: Full-time, Part-time, Contract, Remote
- **Salary**: Salary range or amount
- **Description**: Job description
- **PostedDate**: Date job was posted
- **Published**: Set to 1 to show, 0 to hide

### Job Types
Supported job types (filterable):
- Full-time
- Part-time  
- Contract
- Remote

## 🎯 Application Process

1. **User clicks "Apply Now"** on any job
2. **Application form opens** with job details pre-filled
3. **User fills out application**:
   - Personal info (Name, Email, Phone)
   - Resume URL
   - Portfolio URL (optional)
   - Cover letter
4. **Application submitted** to Google Sheets
5. **Success confirmation** shown

## 🔍 Search & Filter Features

- **Text Search**: Search by job title or company name
- **Type Filter**: Filter by job type dropdown
- **Real-time Filtering**: Results update as you type
- **Clear Filters**: Easy reset functionality

## 📡 API Configuration

1. Visit [SheetBest](https://sheetbest.com)
2. Connect your Google Sheets
3. Get API endpoints for both sheets
4. Update the `data-sheet-best` attributes

### Jobs API (Read)
```
https://api.sheetbest.com/sheets/YOUR_SHEET_ID/Jobs/search?Published=1
```

### Applications API (Write)  
```
https://api.sheetbest.com/sheets/YOUR_SHEET_ID/tabs/Applications
```

## 🎨 Customization

### Change Job Card Layout
Edit the job card template in `index.html`:

```html
<div class="job-card">
  <h3>{{ Title }}</h3>
  <div>{{ Company }}</div>
  <div>📍 {{ Location }}</div>
  <span class="job-type">{{ Type }}</span>
  <div class="salary">{{ Salary }}</div>
  <p>{{ Description }}</p>
  <button onclick="showApplicationForm('{{ Title }}', '{{ Company }}')">
    Apply Now
  </button>
</div>
```

### Add More Job Types
Update the filter dropdown:

```html
<select id="typeFilter">
  <option value="">All Job Types</option>
  <option value="Full-time">Full-time</option>
  <option value="Internship">Internship</option>
  <option value="Freelance">Freelance</option>
</select>
```

### Modify Application Form
Add or remove fields in the application form:

```html
<input type="text" name="Name" required>
<input type="email" name="Email" required>
<input type="tel" name="Phone">
<input type="url" name="Resume">
<textarea name="CoverLetter"></textarea>
```

## 📁 File Structure

```
jobs-template/
├── index.html          # Main template file
├── README.md          # This file
└── .gitignore         # Git ignore file
```

## 🌟 Live Demo

Open `index.html` in your browser to see the jobs board in action.

## 💡 Use Cases

- **Company Careers Page** - Internal job listings
- **Recruitment Agency** - Client job boards  
- **Freelance Platform** - Project listings
- **Community Jobs** - Local job postings

## 📚 Documentation

- [SheetBest API Documentation](https://docs.sheetbest.com)
- [Google Sheets API](https://developers.google.com/sheets/api)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## 🤝 Contributing

Feel free to submit issues and pull requests!

## 📄 License

MIT License - feel free to use in your projects!