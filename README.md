# React + TypeScript Demo

A small React application built with **React, TypeScript, Vite, and Bootstrap**, created for learning and demonstrating fundamental React concepts.

## 📚 Concepts Covered

* Functional components
* JSX and TypeScript
* Props and destructuring
* Optional props
* Passing functions as props
* `useState`
* Conditional rendering
* Rendering lists with `.map()`
* Event handling
* React `StrictMode`
* Bootstrap styling

## 📁 Project Structure

```text
react/
├── README.md
├── .gitignore
└── react-app/
    ├── package.json
    ├── package-lock.json
    ├── vite.config.ts
    ├── tsconfig.json
    ├── index.html
    └── src/
        ├── App.tsx
        ├── Message.tsx
        ├── main.tsx
        └── components/
            └── ListGroup.tsx
```

## ⚙️ Setup

### 1. Clone the repository

```bash
git clone <repository-url>
cd react/react-app
```

### 2. Install dependencies

```bash
npm install
```

This installs the dependencies listed in `package.json`, including React and Bootstrap.

### 3. Install Bootstrap manually

If Bootstrap is not already listed in `package.json`:

```bash
npm install bootstrap
```

Then import Bootstrap in `src/main.tsx`:

```tsx
import 'bootstrap/dist/css/bootstrap.css';
```

> If Bootstrap is already present in `package.json` and `package-lock.json`, running `npm install` is sufficient. You do not need to install it again.

### 4. Start the development server

```bash
npm run dev
```

Open the URL shown by Vite, usually:

```text
http://localhost:5173
```

## 🏗️ Production Build

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## 📜 Available Commands

| Command           | Purpose                  |
| ----------------- | ------------------------ |
| `npm install`     | Install dependencies     |
| `npm run dev`     | Start development server |
| `npm run build`   | Create production build  |
| `npm run preview` | Preview production build |

## 📦 Git Notes

Commit:

```text
package.json
package-lock.json
src/
public/
```

Do **not** commit:

```text
node_modules/
dist/
.env
```

These are already excluded through `.gitignore`.

## 🎯 Purpose

This repository will contain small React applications demonstrating different React concepts. Each application can be maintained and run independently.
