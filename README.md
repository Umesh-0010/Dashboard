# Dashboard Documentation

## Table of Contents
1. [Home](#home)
2. [Product](#product)
3. [Add Product](#add-product)
4. [Update Product](#update-product)

---

## Home
The **Home** page provides a quick summary of key metrics and performance data. It includes:
- **Number of Products**: Displays the total number of products available in the system.
- **Inward Products**: Shows the total number of products added to the system.
- **Sale Products**: Displays the total number of products sold.
- **Sales Per Week**: A graph or chart that tracks sales trends by week.

**Features:**
- Quick overview of products and sales performance.
- Visual representation of sales data over the last few weeks.
- Easy access to other sections like Product, Add Product, and Update Product.

**Example Layout:**

| Metric            | Value |
|-------------------|-------|
| Total Products    | 150   |
| Inward Products   | 50    |
| Sold Products     | 100   |

**Sales Per Week Graph:**
- Displays sales trends over the past 7 days (or as configured).

---

## Product
The **Product** page displays detailed information about all products in the system. It allows users to:
- View a list of all products with key details.
- Sort and filter the list based on different parameters (e.g., category, price).
- Perform actions like viewing product details or navigating to the update page.

**Features:**
- **Product Listing**: Displays product name, category, price, stock, and other relevant details.
- **Actions**: Options to view product details or update products.
- **Search & Filter**: Ability to search products by name, category, price, and stock.

**Example Table Structure:**

| Product Name   | Category    | Price | Stock | Actions |
|----------------|-------------|-------|-------|---------|
| Product A      | Category 1  | $10   | 50    | View / Update |
| Product B      | Category 2  | $20   | 30    | View / Update |
| Product C      | Category 3  | $15   | 100   | View / Update |

---

## Add Product
The **Add Product** page allows administrators to add new products to the system. The following form is required:

**Form Fields:**
- **Product Name**: Name of the product.
- **Category**: Category to which the product belongs.
- **Price**: Price of the product.
- **Stock**: Quantity of the product available.
- **Description**: Detailed description of the product.
- **Product Image**: Option to upload an image of the product.
  
**Submit Button:**
- Adds the new product to the system once all required fields are completed.

**Example:**
- Fill in the required product information and click "Add Product" to submit.

---

## Update Product
The **Update Product** page allows administrators to modify product details or delete products from the system.

**Editable Fields:**
- **Product Name**: Modify the name of the product.
- **Category**: Change the product's category.
- **Price**: Update the price of the product.
- **Stock**: Change the quantity of the product in stock.
- **Description**: Modify the product's description.
- **Product Image**: Replace or remove the product image.

**Actions:**
- **Save Changes**: Updates the product details in the system.
- **Delete Product**: Deletes the product from the system permanently.

**Example:**
- To update a product, simply click on the "Update" button from the Product listing and modify the details.
- To delete a product, click on the "Delete" button.

---

## Conclusion
This dashboard enables administrators to manage the entire product lifecycle, from adding new products to updating and deleting existing ones. The Home page provides quick insights into overall performance, while the Product page allows for comprehensive product management.

