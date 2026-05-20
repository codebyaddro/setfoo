# 🚀 setfoo

A simple and powerful CLI tool to generate project folder structures instantly (like MVC, Express, MERN, etc.).

Instead of manually creating folders every time, just run one command and your project is ready.

---

## ✨ Features

- ⚡ Generate ready-made project structures instantly
- 📁 MVC architecture support (Node.js)
- 🧠 Clean and scalable template system
- 🔧 Easy to extend (add your own templates)
- 🚀 Works with `npx` or global install
- 💻 Beginner-friendly CLI tool

---

## 📦 Installation

### Option 1: Use with npx (Recommended)

```bash
npx setfoo --node-mvc my-app
```

### Option 2: Install globally

```bash
npm install -g setfoo
```

### Then use:
```bash
setfoo --node-mvc my-app
```

## 🚀 Usage

### Create a Node MVC project

### Then use:
```bash
setfoo --node-mvc my-app
```

### This will generate:
```
my-app/
 ├── configs/
 ├── controllers/
 ├── models/
 ├── routes/
 ├── utils/
 ├── views/
 ├── public/
 ├── server.js
 ├── package.json
 ├── .env.example
 ├── .gitignore
 ├── dockerfile
 ├── docker-compose.yml
 └── README.md
```

<hr/>

### 🧠 How It Works
```
CLI Command → Commander Parser → Template Selection → File Copy → Project Created
```

### 📁 Project Structure (Inside setfoo)
```
setfoo/
 ├── bin/
 │   └── index.js
 ├── src/
 │   └── createProject.js
 ├── templates/
 │   └── node-mvc/
 ├── package.json
 └── README.md
```

<hr/>

### 🛠 Available Templates
- Node MVC ( ```--node-mvc``` )

#### Coming Soon 🚧
- Express API
- MERN Stack
- React App
- Next.js Starter

<hr/>

### ⚡ Example
```
setfoo --node-mvc blog-api
cd blog-api
npm install
npm start
```

<hr/>

### 🔥 Roadmap

- Interactive CLI (like Vite)
- Multiple templates support
- Auto npm install
- Auto git init
- Docker integration
- TypeScript templates
- npx create-devstack

<hr>

### 🤝 Contributing

1. Fork the repo
2. Create a new branch
3. Add your feature
4. Submit a pull request

<hr/>

### 📜 License
MIT License © 2026

<hr/>

### 💡 Author
Built with ❤️ by Adnan Hossain Addro 🚀