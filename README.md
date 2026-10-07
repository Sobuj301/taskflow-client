# TaskFlow

A full-stack task management app where users sign in and manage their own tasks.

🔗 **Live Demo:** https://taskflow-ee3a1.web.app
⚙️ **Backend Repo:** https://github.com/Sobuj301/taskflow-server

## Features
- Secure login with Firebase Authentication
- Create, edit and delete tasks
- Task title, description, priority and status
- Each user can only see their own tasks (token verified on the server)
- Responsive design

## Tech Stack
- **Frontend:** React, Vite, Tailwind CSS, DaisyUI
- **Backend:** Node.js, Express
- **Database:** MongoDB Atlas
- **Auth:** Firebase Authentication (Admin SDK on the server)
- **Hosting:** Firebase Hosting (frontend), Vercel (backend)

## Run Locally
```bash
git clone [your client repo link]
cd taskflow-client
npm install
npm run dev
```
Create a `.env` file with your own Firebase config and API URL.

## Author
[Your Name] - [your LinkedIn link]