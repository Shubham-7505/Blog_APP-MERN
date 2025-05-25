BlogApp – MERN Stack Blog Application

   A full-stack blog platform built with MongoDB, Express.js, React, and Node.js (MERN stack), styled using Tailwind CSS. This application allows users to create, view, update, and delete blog posts through a clean and intuitive UI.

Features

   Create & Edit Blogs – Logged-in users can compose and modify blog posts.

   View All Blogs – Explore all blogs in a beautifully laid-out feed.

   Delete Blogs – Secure deletion available only to the blog's author.

   Authentication & Authorization – JWT-based auth ensures secure access control.

   Responsive Design – Fully responsive with modern Tailwind styling.
   
   Client-Side Routing – Smooth navigation using React Router.

Tech Stack

**Frontend:** React, React Router, Axios, Tailwind CSS  
**Backend:** Node.js, Express.js, MongoDB, Mongoose

## 📁Project Structure
```bash
Blog_APP-MERN/

├── backend/
│   ├── middleware/
│   │   └── auth.js
├── ├── models/
│   │   ├── Blog.js
│   │   └── User.js
│   ├── routes/
│   │   ├── blogRoutes.js
│   │   └── auth.js
│   ├── app.js
│   └── package.json
└── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── BlogDetail.js
│   │   │   ├── BlogList.js
│   │   │   ├── CreateBlog.js
│   │   │   ├── EditBlog.js
│   │   │   ├── Login.js
│   │   │   ├── MyBlogs.js
│   │   │   ├── Navbar.js
│   │   │   └── Signup.js
│   │   ├── App.js
│   │   ├── index.js
│   │   └── index.css (or other style files)
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   └── package.json
└── README.md
```
## 🔧 Setup Instructions
1. Clone the Repository
git clone https://github.com/yourusername/Blog_APP-MERN.git
```bash
   cd Blog_APP-MERN
```

2. Backend Setup
```bash
   cd backend
   npm install
```

3. Create a .env file and configure MongoDB URI

4. Start the server 
 ```bash 
   node server.js
```

5. Frontend Setup
```bash
   cd frontend
   npm install
   npx tailwindcss init -p
```
Configure tailwind.config.js:
```bash
content: ["./src/**/*.{js,jsx,ts,tsx}"],
```

Add Tailwind directives to src/index.css:
```bash
@tailwind base;
@tailwind components;
@tailwind utilities;
```

6. Start the React app:
```bash
   npm start
```
Now The app is running on:
```bash
Frontend: http://localhost:3000
Backend API: http://localhost:5000
```

### What Next ?

   Will add a full authentication.
   Open and read each blog separately.