# Backend Packages

A modular backend toolkit built with Node.js and Express, focused on reusable utilities, secure authentication systems, and production-ready middleware.

This project evolved through implementing multiple backend concepts including validation, security layers, JWT authentication, and session-based authentication with MongoDB persistence.

---

## 🚀 Features Implemented

### 🔐 Authentication Systems

- JWT-based authentication (stateless)
- Session-based authentication using express-session
- MongoStore integration for persistent sessions
- Login, Register, Logout, and Current User (`/me`) endpoints
- Secure cookie handling

---

### 🔑 Security Enhancements

- Password hashing using bcrypt
- Zod-based request validation
- express-mongo-sanitize (NoSQL injection protection)
- hpp (HTTP parameter pollution protection)
- helmet (secure HTTP headers)
- rate limiting (prevent API abuse)

---

### 🧠 Backend Utilities

- Custom ApiError class for structured error handling
- Custom ApiResponse class for consistent responses
- asyncHandler to eliminate repetitive try-catch blocks

---

### 📬 Mail Service

- Nodemailer integration
- Zod validation for mail payload
- Rate-limited mail endpoint

---

### 🌐 API & Middleware

- Centralized validation middleware using Zod
- CORS configuration with credentials support
- Compression middleware for optimized responses

---

## 🧪 Authentication Flow

### Session-Based Flow (Current)

1. User logs in with credentials
2. Session created and stored in MongoDB (`sessions` collection)
3. Session ID stored in cookie (`connect.sid`)
4. Protected routes use `verifySession` middleware
5. Logout destroys session from database

---

### JWT Flow (Previously Implemented)

- Access token generated on login
- Stored in httpOnly cookies
- Verified using middleware
- Later replaced with session-based flow for comparison and learning

---

## 📁 Project Structure

server/
│
├── src/
│ ├── routes/
│ │ ├── auth.routes.js
│ │ └── mail.routes.js
│ │
│ ├── middlewares/
│ │ ├── verifySession.middleware.js
│ │ ├── validate.middleware.js
│ │ └── mailRateLimiter.js
│ │
│ ├── controllers/
│ │ ├── auth.controllers.js
│ │ └── mail.controllers.js
│ │
│ ├── validators/
│ │ ├── user.validators.js
│ │ └── mail.validators.js
│ │
│ ├── models/
│ │ └── users.model.js
│ │
│ ├── db/
│ │ └── connection.js
│ │
│ ├── utils/
│ │ ├── mailer.js
│ │ ├── ApiResponse.js
│ │ ├── ApiError.js
│ │ └── asyncHandler.js
│ │
│ ├── app.js
│ └── index.js

---

## ⚙️ Tech Stack

- Node.js
- Express.js
- MongoDB (Mongoose)
- Zod
- bcrypt
- jsonwebtoken
- express-session
- connect-mongo
- Nodemailer

---

## 🧠 Key Learnings

- Difference between stateless (JWT) and stateful (sessions) authentication
- Session persistence and MongoDB storage
- Secure cookie handling across environments
- Middleware-driven architecture for scalability
- Real-world debugging (CORS, cookies, session storage, DB configs)

---

## 📈 Future Improvements

- Add refresh token flow for JWT
- Integrate Redis for session store
- Convert into reusable npm package
- Add automated testing (Jest)
- Add TypeScript support

---

## 👨‍💻 Author

Saurav Kaushik  
MERN Stack Developer

---

## ⭐ Support

If you find this useful, consider starring the repo ⭐
