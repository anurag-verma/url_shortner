# 🚀 URL Shortener — Full Stack MERN Application


A full-featured URL shortener application with user authentication, analytics, and custom short URLs, built using:

Frontend: React + Redux Toolkit + Tailwind

Backend: Node.js + Express + MongoDB

Authentication: JWT-based login/signup

Deployment Ready: Clean folder structure for easy deployment

📌 Features
🔗 URL Shortening

Convert long URLs into short, shareable links

Custom short URL slugs

Automatic slug generator

Copy-to-clipboard support

👤 User Management

User registration & login

JWT authentication

Logged-in users can view all their shortened URLs

Guest users can also shorten URLs (optional)

📊 Analytics (Upcoming)

Click tracking

Location / browser analytics

url_shortner/
 ├── BACKEND/        → Node/Express API
 └── FRONTEND/       → React App
 
🏗️ Folder Structure
Frontend

FRONTEND/
 ├── src/
 │    ├── api/          → API calls (axios)
 │    ├── components/   → Reusable UI components
 │    ├── pages/        → Pages (Home, Login, Signup, Dashboard)
 │    ├── routing/      → Protected Routes
 │    ├── utils/        → Helpers
 │    ├── store/        → Redux Toolkit store
 │    └── features/     → Redux slices
 ├── App.jsx
 ├── main.jsx
 └── index.css

Backend
BACKEND/
 ├── controllers/
 ├── models/
 ├── routes/
 ├── middleware/
 ├── utils/
 ├── config/
 ├── server.js
 └── package.json

🛠️ Tech Stack
Frontend

React (Vite)

Redux Toolkit

React Router

Tailwind CSS

Axios

Backend

Node.js

Express.js

MongoDB with Mongoose

JWT Authentication

Bcrypt Password Hashing

⚙️ Installation & Setup
1️⃣ Clone the Repository

git clone https://github.com/anurag-verma/url_shortner.git
cd url_shortner

🖥️ Frontend Setup
cd FRONTEND
npm install
npm run dev

🛠 Backend Setup
cd BACKEND
npm install
npm run dev

Create .env file in BACKEND with:
PORT=3000
MONGO_URI=your_mongodb_url
JWT_SECRET=your_secret_key
APP_URL=http://localhost:5173/

🚀 Usage
🔹 Shorten a URL

Enter a long URL → click Shorten → get a quick shareable link.

🔹 User Login/Signup

Login to track your own URLs

Redirect to dashboard

🔹 Dashboard (Logged-in Users)

View all shortened URLs

Copy / delete links

Analytics coming soon

📜 API Endpoints (Backend)
🔐 Auth
Method	Endpoint	Description
POST	/api/auth/signup	Create new user
POST	/api/auth/login	Login & get token
🔗 URLs
Method	Endpoint	Description
POST	/api/url/shorten	Create short URL
GET	/:shortId	Redirect to original URL
🧩 Upcoming Features

URL analytics dashboard

QR code generator

Custom domain support

Role-based admin management

🤝 Contributing

Pull requests are welcome!
For major changes, please open an issue first.

📄 License

This project is licensed under the Unlicense — free for personal & commercial use.

If you want, I can also generate:

✔ Badges (GitHub stars, last commit, license, tech stack)
✔ Screenshots section
✔ Setup video GIF
✔ Contribution guidelines


📁 Organized Full Stack Structure
