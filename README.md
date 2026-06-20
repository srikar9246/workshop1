# Robotix Lab: AI & Robotics Summer Workshop

This repository contains the complete implementation for the **AI & Robotics Summer Workshop** application, submitted as an internship assignment. The project is organized into a clean, decoupled architecture with a dedicated React/Vite frontend and an Express.js backend.

---

## 📁 Project Structure

To prevent configuration overlap and simplify evaluation, the workspace is split into separate subprojects:

* **`/frontend`**: Scoped React client (Vite, Tailwind CSS v4, and GSAP).
* **`/backend`**: Scoped Express.js API server (Node, ESM import/export).

---

## 📋 Implemented Requirements Checklist

### 💻 Frontend (React + Tailwind CSS)
* **[x] Hero Section**: 
  - Main workshop title with a modern italic quote highlight.
  - Immersive robotic video background overlay.
  - White white-spaced typography and neon cyan glows on hover.
  * **[x] "Enroll Now" Button**:
    - Sticky CTA in header and responsive drawers triggering the enrollment modal.
* **[x] Workshop Details Section**:
  - Responsive grid cards showing key metrics:
    - **Age Group**: 8–14 Years
    - **Duration**: 4 Weeks
    - **Mode**: Online (highlighted with Neon Green glow outline)
    - **Fee**: ₹2,999
    - **Start Date**: 15 July 2026
* **[x] Learning Outcomes (5 Curriculum Points)**:
  - Interactive fullscreen slideshow showcasing:
    1. **AI Basics** (Fundamentals of Machine Learning)
    2. **Robotics** (Building Smart Machines)
    3. **Problem Solving** (Algorithmic logic structures)
    4. **Mini Projects** (Hands-On Application engineering)
    5. **Creative Thinking** (Inventing Future Solutions)
* **[x] FAQ Section (4 items Accordion - Min 3)**:
  - Translucent glassmorphic accordions with rotating chevron glows.
* **[x] Registration Form**:
  - Interactive Rube Goldberg SVG machine that animates dynamically based on input validity:
    - **Name**: (>3 characters) Spins the mechanical gear train.
    - **Email**: (Regex validated) Winds the spiral weight connector.
    - **Phone Number**: (Regex validated) Pulls the cord, lowering the **Submit** button into alignment.

### ⚙️ Backend (Express.js API)
* **[x] POST `/api/enquiry` Endpoint**:
  - Accepts JSON payload from registration form.
  * **[x] Request Validation**:
    - Validates presence and size of `name` (>3 characters).
    - Validates format of `email`.
    - Validates format of `phone` (`/^\+?[0-9]{10,15}$/`).
    - Returns descriptive `400 Bad Request` messages upon failure.
  * **[x] Success Response**:
    - Returns `201 Created` with confirmation metadata upon validation success.

---

## 🚀 Setup & Launch Instructions

### 1. Prerequisites
Ensure you have [Node.js](https://nodejs.org/) installed (version 18+ recommended).

### 2. Backend Server Setup
From the root of the project, navigate to `/backend`, install packages, and start the node server:
```bash
cd backend
npm install
npm start
```
The Express server will launch on **`http://localhost:5000`**.

### 3. Frontend Client Setup
In a new terminal window from the root of the project, navigate to `/frontend`, install packages, and launch Vite:
```bash
cd frontend
npm install
npm run dev
```
The client app will launch and open on **`http://localhost:5173/`**.

---

## 🎨 Design Systems & Highlights

* **Visual Polish:** Fully tailored HSL dark/light palettes, avoiding default system colors. Smooth transitions, responsive flex layouts, and glassmorphic blurs (`backdrop-filter: blur(32px)`) provide a premium feel.
* **Defensive Coding:**
  - Standardized ref callbacks return `void` to fully comply with **React 19** signatures.
  - Coerced SVG coordinates into valid numeric fallbacks to prevent `NaN` browser parsing errors.
  - Implemented typescript workspace references (`tsconfig.json`) to keep IDE language engines fully aligned.
