
# 🛍️ Express.js RESTful API – Week 2 Assignment

## 🚀 Objective
This project demonstrates how to build a **RESTful API** using **Express.js**, implementing standard CRUD operations, middleware, error handling, and advanced query features such as filtering and pagination.

---

## 📂 Project Structure



express-api/
│
├── server.js # Main entry point
├── routes/
│ └── products.js # Handles all product routes
├── middleware/
│ ├── logger.js # Logs requests
│ ├── auth.js # Handles API key authentication
│ └── validateProduct.js # Validates product data
├── utils/
│ └── errors.js # Custom error classes
├── .env
├── .env.example # Example environment variables
├── package.json
└── README.md


---

## ⚙️ Setup Instructions

### 1️⃣ Prerequisites
Ensure you have the following installed:
- **Node.js v18+**
- **npm** (comes with Node.js)
- **Postman** or **curl** (for testing API endpoints)

---

### 2️⃣ Installation

Clone your repository:
```bash
git clone https://github.com/PLP-MERN-Stack-Development/express-js-server-side-framework-Brian-Toroitich.git
cd express-js-server-side-framework-Brian-Toroitich


Install dependencies:

npm install

3️⃣ Configuration

Create a .env file in the root directory based on .env.example:

PORT=3000
API_KEY=12345

4️⃣ Running the Server

Start the server:

node server.js


You should see:

Server is running on http://localhost:3000

🧠 API Documentation
Base URL
http://localhost:3000/api/products

🟢 GET /api/products

Description: Retrieve all products
Optional query params:

category – filter by category

page & limit – pagination

search – search by name

Example:

GET /api/products?category=Electronics&page=1&limit=5

🟢 GET /api/products/:id

Description: Retrieve a single product by ID
Example:

GET /api/products/1

🟢 POST /api/products

Description: Create a new product
Headers:
x-api-key: <API_KEY>

Body:

{
  "name": "Laptop",
  "description": "15-inch display, 8GB RAM",
  "price": 950,
  "category": "Electronics",
  "inStock": true
}

🟡 PUT /api/products/:id

Description: Update an existing product
Headers:
x-api-key: <API_KEY>

Body (example):

{
  "price": 1000,
  "inStock": false
}

🔴 DELETE /api/products/:id

Description: Delete a product by ID
Headers:
x-api-key: <API_KEY>

Example:

DELETE /api/products/1

🧩 Middleware Implemented
Middleware	Description
logger.js	Logs method, URL, and timestamp
auth.js	Checks for a valid API key in headers
validateProduct.js	Ensures product data is valid before creation/update
body-parser	Parses incoming JSON requests
⚠️ Error Handling

NotFoundError → Returns 404 if product not found

ValidationError → Returns 400 for invalid data

Global error handler returns standardized JSON error responses

🧮 Advanced Features

✅ Filtering by category
✅ Pagination (?page=1&limit=5)
✅ Search by name (?search=phone)
✅ Product statistics (count by category)

🧪 Example Response

GET /api/products

[
  {
    "id": "1",
    "name": "Laptop",
    "description": "15-inch display",
    "price": 950,
    "category": "Electronics",
    "inStock": true
  }
]

🧰 Dependencies
Package	Description
express	Web framework
body-parser	JSON parsing middleware
uuid	Unique ID generation
dotenv	Loads environment variables

Install all with:

npm install express body-parser uuid dotenv
