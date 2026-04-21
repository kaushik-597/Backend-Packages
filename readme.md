# Backend Packages

A collection of reusable backend utilities, middleware, and configurations for Node.js and Express applications. This repo is meant to speed up development by avoiding repetitive setup and providing clean, modular building blocks.

---

## 📦 What's Inside

This repository includes commonly used backend components such as:

- Middleware (error handling, async wrapper, auth, etc.)
- Utility functions (API response, error classes, helpers)
- Config setups (dotenv, database connections, services)
- Third-party integrations (e.g., Nodemailer, Cloudinary, Multer)

---

## 🧠 Purpose

Instead of rewriting the same backend logic for every project, this repo acts as a personal toolkit to:

- Reuse proven code
- Maintain consistency across projects
- Speed up backend setup
- Keep things modular and scalable

---

## 📁 Folder Structure

```
backend-packages/
│
├── config/            # App configurations (DB, services, env setup)
├── controllers/       # Sample controllers (optional usage reference)
├── middleware/        # Custom middlewares (auth, error handler, etc.)
├── routes/            # Example route structures
├── utils/             # Helper classes & functions (ApiError, ApiResponse, asyncHandler)
├── services/          # External services (mail, cloud storage, etc.)
└── index.js           # Entry point (optional export hub)
```

---

## ⚙️ Tech Stack

- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication
- Multer (file uploads)
- Cloudinary (media storage)
- Nodemailer (email services)

---

## 🔑 Key Utilities

### ✅ ApiError

Custom error class for consistent error handling.

### ✅ ApiResponse

Standard response structure for all APIs.

### ✅ asyncHandler

Wrapper to handle async errors without try-catch everywhere.

---

## 📬 Mail Setup (Nodemailer)

Basic mail service setup using environment variables:

```
MAIL_USER=your_email@gmail.com
MAIL_PASS=your_app_password
```

---

## 🛠️ How to Use

You can either:

### Option 1: Copy Modules

Copy required folders/files into your project and use them directly.

### Option 2: Import as Local Package

Clone this repo and import required modules into your backend.

---

## 📌 Notes

- Environment variables should always be stored in `.env`
- Update configs as per project requirements
- Designed for personal and learning use, can be extended for production

---

## 📈 Future Improvements

- Convert into an installable npm package
- Add TypeScript support
- Improve documentation for each module
- Add testing support (Jest)

---

## 👨‍💻 Author

Saurav Kaushik
Full Stack Developer (MERN)

---

## ⭐ Support

If you find this useful, consider starring the repo ⭐
