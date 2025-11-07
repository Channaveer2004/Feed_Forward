# Feed-Forward

Live Link: [https://feed-forward-blush.vercel.app/](https://feed-forward-blush.vercel.app/)

## Project Overview
This project consists of a frontend (React + Vite) and a backend (Node.js + Express) with MongoDB as the database. It includes authentication, admin dashboard, feedback management, and more.

---

## Steps to Run the Project

### 1. Clone the Repository
```bash
git clone <repo-url>
cd Feed-Forward
```

### 2. Setup and Run the Backend
1. Navigate to the server directory:
   ```bash
   cd server
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `server` directory (see example below).
4. Start the backend server:
   ```bash
   npm start
   ```
   The backend will run on the port specified in your `.env` (default: 5000).

### 3. Setup and Run the Frontend
1. Open a new terminal and navigate to the client directory:
   ```bash
   cd client
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the frontend development server:
   ```bash
   npm run dev
   ```
   The frontend will run on [http://localhost:5173](http://localhost:5173) by default.

---

## MongoDB Setup Instructions
1. [Sign up for MongoDB Atlas](https://www.mongodb.com/cloud/atlas) (or install MongoDB locally).
2. Create a new cluster and database.
3. Whitelist your IP address and create a database user with password.
4. Get your MongoDB connection string. It will look like:
   ```
   mongodb+srv://<username>:<password>@cluster0.mongodb.net/<dbname>?retryWrites=true&w=majority
   ```
5. Add this connection string to your `.env` file in the server directory as `MONGO_URI`.

---

## Example `.env` file for Backend (`server/.env`)
```
PORT=4000
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/<dbname>?retryWrites=true&w=majority
JWT_ACCESS_SECRET=replace_with_strong_random_string
JWT_REFRESH_SECRET=replace_with_another_strong_random_string
ACCESS_TOKEN_EXPIRES_IN=1d
REFRESH_TOKEN_EXPIRES_IN=7d
BCRYPT_SALT_ROUNDS=12
COOKIE_SECURE=false
COOKIE_DOMAIN=localhost
COOKIE_NAME=refresh_token
CLIENT_URL=http://localhost:5173/
```
- **API Base URL (for client):**
  - Production: `https://posspole-assignment.onrender.com/api`
  - Local: `http://localhost:4000/api`
- **Client URL:**
  - Production: `https://feed-forward-blush.vercel.app/`
  - Local: `http://localhost:5173/`
---

## Sample Test Login
- **Admin Login:**
  - Email: `admin@example.com`
  - Password: `Admin@1234`

If the above credentials do not work, you can sign up as a new user from the frontend. To access admin features, ensure your user is marked as admin in the database.

---


