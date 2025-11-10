# ⭐ URL Shortener – MERN Stack Application

A full-stack **URL Shortening Application** with **User Authentication**, **Custom Short URLs**, and a clean modern UI.  
Built using **React, Redux Toolkit, Tailwind CSS, Node.js, Express & MongoDB**.

---

## 🌐 Live Demo  
🚀 *Coming Soon…*

---

## 📌 Features

### 🔗 URL Shortening
- Shorten long URLs instantly  
- Auto-generated short IDs  
- One-click copy  
- Custom slugs (coming soon)

### 👤 User Features
- JWT-based Register & Login  
- Logged-in users can manage their links  
- Guest users can shorten URLs  
- Dashboard for managing links  

### 📊 URL Analytics (Coming Soon)
- Click tracking  
- Browser/device analytics  
- Country-based stats  

---

## 🧰 Tech Stack

### **Frontend**
- React (Vite)
- Redux Toolkit
- React Router
- Tailwind CSS
- Axios

### **Backend**
- Node.js
- Express.js
- MongoDB + Mongoose
- JWT Authentication
- Bcrypt Password Hashing

---

## 📁 Folder Structure

```
url_shortner/
│
├── FRONTEND/
│   ├── src/
│   │   ├── api/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── routing/
│   │   ├── utils/
│   │   ├── store/
│   │   └── features/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
└── BACKEND/
    ├── controllers/
    ├── models/
    ├── routes/
    ├── middleware/
    ├── config/
    ├── utils/
    ├── server.js
    └── package.json
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/anurag-verma/url_shortner.git
cd url_shortner
```

---

## 🚀 Frontend Setup
```bash
cd FRONTEND
npm install
npm run dev
```

Frontend runs on →  
👉 http://localhost:5173

---

## 🛠 Backend Setup
```bash
cd BACKEND
npm install
npm run dev
```

Backend runs on →  
👉 http://localhost:3000

### Create `.env` inside BACKEND:
```
PORT=3000
MONGO_URI=your_mongo_connection
JWT_SECRET=your_secret_key
APP_URL=http://localhost:5173/
```

---

## 🔥 API Endpoints

### Auth Routes
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/signup` | Register user |
| POST | `/api/auth/login` | Login user |

### URL Routes
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/url/shorten` | Create short URL |
| GET | `/:shortId` | Redirect to original |

---

## 🖼️ Screenshots (Add Your Images)

Example:
```
![Home Page](./screenshots/home.png)
![Dashboard](./screenshots/dashboard.png)
```

---

## 🧩 Upcoming Features
- QR code generation  
- Full analytics dashboard  
- Admin panel  
- Custom domains  

---

## 🤝 Contributing

Contributions are welcome!  
Feel free to open an **Issue** or **Pull Request**.

---

## 📄 License

Licensed under the **Unlicense** — free to use & modify.

---

## ⭐ Support

If you found this helpful, consider giving this repository a ⭐ on GitHub!
