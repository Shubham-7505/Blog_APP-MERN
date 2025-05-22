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
```bash
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