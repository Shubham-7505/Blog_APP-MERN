BlogApp - MERN Stack Blog Application

   A full stack blog app using **MongoDB, Express.js, React, Node.js**, styled with **Tailwind CSS**. Users can create, view, update, and delete blogs with a clean UI and smooth navigation.

Features

   Create & edit blogs  
   View all blogs  
   Delete blogs  
   Responsive UI with Tailwind  
   React Router for navigation

Tech Stack

**Frontend:** React, React Router, Axios, Tailwind CSS  
**Backend:** Node.js, Express.js, MongoDB, Mongoose

## 📁Project Structure

Blog_APP-MERN/

├── backend/
│   ├── models/
│   │   └── Blog.js
│   ├── routes/
│   │   └── blogs.js
│   ├── server.js
│   └── package.json
└── frontend/
    ├── src/
    │   ├── components/
    │   │   ├── BlogList.js
    │   │   ├── CreateBlog.js
    │   │   └── Navbar.js
    │   ├── App.js
    │   ├── index.js
    │   └── index.css (or other style files)
    ├── tailwind.config.js
    ├── postcss.config.js
    └── package.json

## 🔧 Setup Instructions
1. Clone the Repository
git clone https://github.com/yourusername/Blog_APP-MERN.git
cd Blog_APP-MERN

2. Backend Setup

cd backend
npm install

3. Create a .env file and configure MongoDB URI

4. Start the server  
   node server.js

5. Frontend Setup

cd frontend
npm install
npx tailwindcss init -p

Configure tailwind.config.js:
content: ["./src/**/*.{js,jsx,ts,tsx}"],

Add Tailwind directives to src/index.css:

@tailwind base;
@tailwind components;
@tailwind utilities;


6. Start the React app:

npm start

Now The app is running on:

Frontend: http://localhost:3000
Backend API: http://localhost:5000


# 📝 BlogApp - MERN Stack Blog Application

A full-stack blog app built with **MongoDB, Express.js, React, and Node.js**, styled using **Tailwind CSS**. Users can create, read, update, and delete blogs with a responsive UI and smooth navigation.

---

## ✨ Features

- 🆕 Create & edit blogs  
- 📖 View all blogs  
- ❌ Delete blogs  
- 🎨 Responsive UI with Tailwind CSS  
- 🔀 Navigation with React Router

---

## 🛠 Tech Stack

**Frontend:** React, React Router, Axios, Tailwind CSS  
**Backend:** Node.js, Express.js, MongoDB, Mongoose

---

## 📁 Project Structure

Blog_APP-MERN/
├── backend/
│ ├── models/
│ │ └── Blog.js
│ ├── routes/
│ │ └── blogs.js
│ ├── server.js
│ └── package.json
└── frontend/
├── src/
│ ├── components/
│ │ ├── BlogList.js
│ │ ├── CreateBlog.js
│ │ └── Navbar.js
│ ├── App.js
│ ├── index.js
│ └── index.css
├── tailwind.config.js
├── postcss.config.js
└── package.json

---

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/Blog_APP-MERN.git
cd Blog_APP-MERN

2. Backend Setup

cd backend
npm install

Create a .env file in backend/ and add your MongoDB URI:

env

MONGO_URI=your_mongodb_connection_string
Start the backend server:

bash
node server.js
Backend will run on: http://localhost:5000

3. Frontend Setup
bash
cd ../frontend
npm install
npx tailwindcss init -p
Update tailwind.config.js:

content: ["./src/**/*.{js,jsx,ts,tsx}"]
Add Tailwind directives to src/index.css:

@tailwind base;
@tailwind components;
@tailwind utilities;
Start the React app:

npm start
Frontend will run on: http://localhost:3000

✅ Done!
You can now:

Access the frontend at: http://localhost:3000

Access the backend API at: http://localhost:5000/api/blogs