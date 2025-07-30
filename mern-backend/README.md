// Sample content for README.md
# MERN Machine Test Project

This is a full-stack MERN (MongoDB, Express.js, React.js, Node.js) application developed as part of a Machine Test. The app includes admin login, agent management, CSV upload, and automatic data distribution among agents.

---

## 🧠 Features

### ✅ Admin Login
- Admin can log in using email and password.
- JWT-based authentication.
- On successful login, redirect to dashboard.

### ✅ Agent Creation & Management
- Admin can create agents with:
  - Name
  - Email
  - Mobile number with country code
  - Password
- Agent details stored in MongoDB with encrypted passwords.

### ✅ CSV Upload & Distribution
- Admin can upload `.csv`, `.xlsx`, or `.xls` files.
- The file contains:
  - `FirstName` (Text)
  - `Phone` (Number)
  - `Notes` (Text)
- Items are **equally distributed among 5 agents**.
- Remainder items are sequentially assigned.
- Distributed data is saved in MongoDB.
- Frontend displays each agent’s list.

---

## 🔧 Tech Stack

| Layer       | Technology         |
|-------------|--------------------|
| Frontend    | React.js           |
| Backend     | Node.js, Express.js|
| Database    | MongoDB            |
| Auth        | JWT (JSON Web Token) |
| Styling     | CSS / Bootstrap    |
| File Upload | Multer             |

---

## 📁 Folder Structure

