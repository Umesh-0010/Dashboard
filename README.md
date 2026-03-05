# Dashboard Application

A modern web-based dashboard designed for administrators to manage products effectively. The system includes features for viewing metrics, adding and updating products, and tracking sales data.

## 🚀 Features

- **Interactive Home View**: Displays key metrics like total products, inward/outward shipments, and sales trends.
- **Product Management**: Full CRUD (Create, Read, Update, Delete) operations for product catalog.
- **Responsive Design**: Built with React and Vite for a fast, responsive UI.
- **RESTful API**: Backend server handles data operations using Node.js and Express.

## 📁 Repository Structure

```
DashBoard/
├── Dash_Board/            # Frontend application (React + Vite)
│   ├── src/               # React components and pages
│   ├── config/            # Axios configuration
│   └── ...                # Vite configuration, package.json, etc.
└── Server/                # Backend server (Node.js + Express)
    ├── config/            # Database connection and settings
    ├── Controller/        # Route handlers and business logic
    └── Routes/            # Express routers
```

## 🛠️ Tech Stack

- **Frontend:** React, Vite, Axios, CSS modules
- **Backend:** Node.js, Express, MongoDB (mongoose)
- **Tools:** ESLint, Prettier, npm

## 🧩 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/Umesh-0010/DashBoard.git
   cd DashBoard
   ```

2. **Install frontend dependencies**
   ```bash
   cd Dash_Board
   npm install
   npm run dev          # starts Vite dev server
   ```

3. **Install backend dependencies**
   ```bash
   cd ../Server
   npm install
   npm start            # starts Express server on configured port
   ```

4. **Configure environment variables**
   - Create a `.env` file in `Server/` with `PostgresSQL`, `PORT`, etc.
   - Adjust frontend API base URL in `Dash_Board/config/Axcious.js` if needed.

## 📌 Usage

- Navigate to `http://localhost:5173` (or the port shown by Vite) to access the dashboard.
- Use the navigation bar to switch between Home, Products, Add Product, and Update Product pages.
- The backend exposes endpoints under `/admin` (see `Server/Routes/AdminRoutes.js`).

## 💡 Development Tips

- Frontend hot-reloads on file changes via Vite.
- Backend will restart automatically if you use `nodemon` (install globally or as dev dependency).
- Run ESLint with `npm run lint` from either folder to catch style issues.

## 🧪 Testing

Currently, no automated test suite is included. Unit and integration tests are welcome contributions.

## 🤝 Contributing

1. Fork the repository
2. Create a new branch (`feature/your-feature`)
3. Commit your changes with clear messages
4. Open a pull request and describe your updates

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Thank you for using the Dashboard application! Feel free to reach out with questions or issues.

