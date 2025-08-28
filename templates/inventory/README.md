# Inventory Management Template

A complete inventory management system with CRUD operations, detailed item views, sortable tables, and real-time stock tracking powered by Google Sheets.

## ✨ Features

- **📋 List & Detail Views** - Table view with detailed item pages
- **🔍 Search & Filter** - Find items by name or category  
- **📊 Sortable Table** - Click headers to sort by any column
- **➕ CRUD Operations** - Create, Read, Update, Delete items
- **📦 Stock Management** - Track quantities with low-stock alerts
- **💰 Price Tracking** - Monitor item pricing
- **🏢 Supplier Management** - Track item suppliers
- **📱 Responsive Design** - Works on all devices

## 🚀 Quick Start

1. **Clone this template**:
   ```bash
   git clone https://github.com/sheetbest/inventory-template.git
   cd inventory-template
   ```

2. **Open in browser**:
   ```bash
   open index.html
   ```

3. **Set up your Google Sheet**:
   - Create a new Google Sheet named "Inventory"
   - Add the required columns (see Sheet Format below)
   - Connect via [SheetBest](https://sheetbest.com)

4. **Update the API endpoint**:
   ```html
   <!-- Replace with your SheetBest API URL -->
   <div data-sheet-best="YOUR_SHEETBEST_API_URL">
   <form data-sheet-best="YOUR_SHEETBEST_API_URL/tabs/Inventory">
   ```

## 📋 Sheet Format

Your Google Sheet should have these columns:

| Id | Name | Category | Quantity | Price | Supplier | Description | LastUpdated |
|----|------|----------|----------|-------|----------|-------------|-------------|
| Text | Text | Text | Number | Number | Text | Text | DateTime |

### Column Details:
- **Id**: Unique item identifier (auto-generated)
- **Name**: Item name/title
- **Category**: Item category for filtering
- **Quantity**: Current stock quantity
- **Price**: Item price
- **Supplier**: Supplier/vendor name
- **Description**: Item description
- **LastUpdated**: When item was last modified

## 🛠️ Operations

### Adding Items
1. Click "Add New Item" button
2. Fill out the form with item details
3. Submit to add to inventory

### Viewing Items
- **List View**: See all items in sortable table
- **Detail View**: Click any item for full details
- **Search**: Type in search box to filter items
- **Category Filter**: Use dropdown to filter by category

### Editing Items
1. Click on an item to view details
2. Click "Edit Item" button
3. Modify fields in the form
4. Submit to update inventory

### Sorting
Click any table header to sort by that column:
- **Name**: Alphabetical sorting
- **Category**: Group by category
- **Stock**: Find low/high stock items
- **Price**: Sort by cost
- **Supplier**: Group by supplier

## 🎯 Categories

Default categories (customizable):
- Electronics
- Office Supplies
- Tools  
- Furniture

### Adding New Categories
Update both the filter dropdown and form select:

```html
<!-- Filter dropdown -->
<select id="categoryFilter">
  <option value="Books">Books</option>
  <option value="Clothing">Clothing</option>
</select>

<!-- Form select -->
<select name="Category" id="formCategory">
  <option value="Books">Books</option>  
  <option value="Clothing">Clothing</option>
</select>
```

## 🚨 Low Stock Alerts

Items with quantity < 10 are highlighted in red in the table view for easy identification of items that need restocking.

## 📡 API Configuration

1. Visit [SheetBest](https://sheetbest.com)
2. Connect your Google Sheet
3. Get your API endpoint
4. Update both the data display and form submission URLs

### Read Data (Display)
```
https://api.sheetbest.com/sheets/YOUR_SHEET_ID/Inventory
```

### Write Data (Forms)
```
https://api.sheetbest.com/sheets/YOUR_SHEET_ID/tabs/Inventory
```

## 🎨 Customization

### Add More Fields
Extend the form and table with additional fields:

```html
<!-- In the form -->
<input type="text" name="SKU" placeholder="SKU Code">
<input type="text" name="Location" placeholder="Storage Location">

<!-- In the table -->
<th>SKU</th>
<th>Location</th>
<td>{{ SKU }}</td>
<td>{{ Location }}</td>
```

### Modify Categories
Update the category options to match your business:

```html
<option value="Medical">Medical Supplies</option>
<option value="Automotive">Automotive Parts</option>
<option value="Food">Food Items</option>
```

### Change Stock Alert Threshold
Modify the low stock warning threshold in the JavaScript:

```javascript
// Change from 10 to your preferred number
<span class="font-medium {{ Quantity < 5 ? 'text-red-600' : 'text-gray-900' }}">
```

## 📁 File Structure

```
inventory-template/
├── index.html          # Main template file
├── README.md          # This file  
└── .gitignore         # Git ignore file
```

## 🌟 Live Demo

Open `index.html` in your browser to see the inventory system in action.

## 💡 Use Cases

- **Small Business Inventory** - Track products and supplies
- **Warehouse Management** - Monitor stock levels
- **Equipment Tracking** - Manage tools and equipment  
- **Asset Management** - Track company assets
- **Library Systems** - Manage book inventory
- **Lab Equipment** - Scientific equipment tracking

## 📚 Documentation

- [SheetBest API Documentation](https://docs.sheetbest.com)
- [Google Sheets API](https://developers.google.com/sheets/api)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## 🤝 Contributing

Feel free to submit issues and pull requests!

## 📄 License

MIT License - feel free to use in your projects!