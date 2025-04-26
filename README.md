# 🚀 NestoraHR Backend

This repository contains the **backend APIs** for **NestoraHR**, a full-stack leave management system built with **Node.js**, **Express**, and **MongoDB**.

It provides secure JWT authentication, role-based access, and leave management APIs for employees and admins.

---

## 🌐 Backend Live URL

🔗 [NestoraHR Backend - Railway Deployment](https://nestora-hr-backend-production.up.railway.app)

---

## 🛠 Tech Stack

- **Backend Framework:** Node.js + Express
- **Database:** MongoDB Atlas
- **Authentication:** JWT (JSON Web Token)
- **Password Hashing:** bcryptjs
- **Deployment:** Railway.app

---

## ⚙️ Local Setup Instructions

1. **Clone the repository:**

```bash
git clone https://github.com/Mohit-9440/nestora-hr-backend.git
```

2. **Navigate to the project directory:**

```bash
cd nestora-hr-backend
```

3. **Install dependencies:**

```bash
npm install
```

4.	**Create a .env file at the root with the following variables:**

```plaintext
MONGO_URI=your-mongodb-connection-string
JWT_SECRET=your-secret-key
```

5.	**Start the server locally:**

```bash
npm run dev
```

---

## 📦 Folder Structure

```plaintext
backend/
  ├── config/            # Database connection and JWT helpers
  ├── controllers/       # Auth and Leave controllers
  ├── middlewares/       # Authentication middlewares
  ├── models/            # User and Leave MongoDB models
  ├── routes/            # Authentication and Leave API routes
  ├── app.js             # Express app setup
  └── server.js          # Server entry point


---

## ✨ Features

- User Signup and Login with JWT token generation
- Secure authentication middleware
- Role-based dashboards (Employee/Admin)
- Create, View, Approve, Reject Leave Requests
- MongoDB Atlas cloud database
- Protected API routes
- Deployed with environment variables (MONGO_URI, JWT_SECRET)

---

## 🎯 Upcoming Enhancements (NestoraHR 2.0)

- Forgot Password and Reset functionality
- User Profile Management APIs
- Leave History APIs with Filters
- Admin bulk approval/rejection endpoints
- Notification APIs for leave approvals

---

## 👨‍💻 Author

**Mohit Sharma**

- 🌐 [Portfolio Website (Coming Soon)](#)
- 💼 [LinkedIn](https://www.linkedin.com/in/mohit-frontend-developer/)
- 📝 [Medium Blog](https://medium.com/@mohitsharma8864/building-nestorahr-a-full-stack-leave-management-system-from-scratch-159fef6739eb)

---

## 🛡️ License

This project is open-source and available under the [MIT License](LICENSE).

---