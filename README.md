# User Management Dashboard

A responsive User Management Dashboard built using **React**, **Vite**, and **Tailwind CSS**. The application allows users to manage employee information with CRUD operations, search, sorting, filtering, pagination, and responsive design using the JSONPlaceholder API.

---

## 🚀 Live Demo

https://user-management-dashboard-two-tawny.vercel.app/

---

## 📂 GitHub Repository


https://github.com/kotyadajayanth/user-management-dashboard

---

## 📌 Features

- View all users
- Add a new user
- Edit existing user details
- Delete users with confirmation dialog
- Search users by name, email, or department
- Filter users by:
  - First Name
  - Last Name
  - Email
  - Department
- Sort users by different columns
- Pagination (10, 25, 50, 100 rows)
- Dashboard summary cards
- Responsive design
- Form validation
- Toast notifications
- Loading and error handling

---

## 🛠️ Tech Stack

- React
- Vite
- Tailwind CSS
- Axios
- React Icons
- React Toastify
- JSONPlaceholder REST API

---

## 📁 Project Structure

```
src
│
├── api
│   └── userApi.js
│
├── components
│   ├── ConfirmDialog.jsx
│   ├── DashboardCards.jsx
│   ├── EmptyState.jsx
│   ├── FilterModal.jsx
│   ├── Header.jsx
│   ├── Loader.jsx
│   ├── PageTitle.jsx
│   ├── Pagination.jsx
│   ├── SearchBar.jsx
│   ├── Toolbar.jsx
│   ├── UserForm.jsx
│   ├── UserRow.jsx
│   └── UserTable.jsx
│
├── hooks
│   └── useUsers.js
│
├── utils
│   ├── constants.js
│   ├── helpers.js
│   └── validators.js
│
├── App.jsx
└── main.jsx
```

---

## ⚙️ Installation

Clone the repository

```bash
git clone https://github.com/kotyadajayanth/user-management-dashboard.git
```

Move into the project folder

```bash
cd user-management-dashboard
```

Install dependencies

```bash
npm install
```

Start the development server

```bash
npm run dev
```

---

## 📦 Build

To create a production build

```bash
npm run build
```

---

## 📸 Application Features

- Dashboard overview
- User listing
- Search functionality
- Advanced filtering
- Column sorting
- Pagination
- Add User
- Edit User
- Delete User
- Responsive interface
- Toast notifications

---

## 📌 API Used

JSONPlaceholder

https://jsonplaceholder.typicode.com/users

---

## ✅ Assumptions

- JSONPlaceholder simulates Create, Update, and Delete operations.
- Newly created users are stored in the local application state after a successful API response.
- The application is intended for demonstration purposes.

---

## 🔮 Future Improvements

- Authentication and Authorization
- Role-based Access Control
- Server-side Pagination
- Export Users to CSV/Excel
- Dark Mode
- Profile Images
- Bulk User Operations
- Advanced Filtering

---

## 👨‍💻 Author

**Jayanth Kotyada**

B.Tech Information Technology

GitHub: https://github.com/kotyadajayanth

---

## 📄 License

This project was developed as part of a frontend assignment for learning and evaluation purposes.