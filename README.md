# 🌗 Dual Online / Offline Portfolio

[![React](https://img.shields.io/badge/React-19.2-61DAFB?logo=react&logoColor=black&style=for-the-badge)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0-3178C6?logo=typescript&logoColor=white&style=for-the-badge)](https://www.typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-8.0-646CFF?logo=vite&logoColor=white&style=for-the-badge)](https://vite.dev)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-v4.0-06B6D4?logo=tailwindcss&logoColor=white&style=for-the-badge)](https://tailwindcss.com)
[![Vitest](https://img.shields.io/badge/Vitest-Test_Suite-7E9F28?logo=vitest&logoColor=white&style=for-the-badge)](https://vitest.dev)
[![ESLint](https://img.shields.io/badge/ESLint-Linter-4B32C3?logo=eslint&logoColor=white&style=for-the-badge)](https://eslint.org)

A portfolio built around a simple idea: **development and design are not separate disciplines.**

Instead of splitting my work across different websites, I wanted to create a single experience that reflects how I approach building products—from visual design and user experience to the code that brings them to life.

The result is a dual-mode portfolio where visitors can switch between my developer projects (**Online**) and my design work (**Offline**), each with its own visual language while sharing the same foundation.

---

## 📚 Table of Contents

- [Project Overview](#-project-overview)
- [Why I Built It](#-why-i-built-it)
- [The Dual-Mode Concept](#-the-dual-mode-concept)
- [Key Features](#-key-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Deployment](#-deployment)

---

## 📋 Project Overview

This repository contains the portfolio I designed and developed to represent both sides of my career.

Rather than treating software engineering and visual design as separate identities, I wanted them to coexist within the same experience. Visitors can move between two distinct worlds: an interactive developer-focused interface and a slower, editorial-inspired design portfolio. Different aesthetics, same person.

---

## 💡 Why I Built It

Most portfolios ask you to choose between being *the developer* or *the designer*.

I didn't want to.

This project became an opportunity to build the kind of interface I enjoy creating: one where interaction supports the story rather than competing with it.

It also allowed me to experiment with theme architecture, reusable React components, responsive layouts, subtle motion, and a shared design system while keeping accessibility and performance in mind.

---

## 🔄 The Dual-Mode Concept

```
                      ┌──────────────────────┐
                      │  Split Landing Page  │
                      │  Hover split portal  │
                      └──────────┬───────────┘
                                 │
                 ┌───────────────┴───────────────┐
                 ▼                               ▼
       ┌──────────────────┐             ┌──────────────────┐
       │     ONLINE       │             │     OFFLINE      │
       │   Developer      │             │    Designer      │
       └──────────────────┘             └──────────────────┘
```

### 💻 Online

The **Online** experience reflects how I think as a developer: structured, interactive, and focused on solving problems.

Projects highlight frontend engineering, APIs, backend architecture, testing, and modern web development using React, TypeScript, Laravel and PHP.

Current featured projects include:

- **A Paws in Time (MVC)**
- **A Paws in Time (API & React)**
- **Reactivity**
- **Task-O-Mania**
- **Match Up!**

---

### 🎨 Offline

The **Offline** experience reflects my background in visual communication and editorial design.

Inspired by magazines and printed publications, it showcases branding, visual identity, editorial layouts and photography through a calmer interface built around typography and composition.

Featured projects include:

- **KOMO**
- **Spotlight**
- **Temari No Ouchi**
- **Tribuna Maresme**
- **Smaller Editorial Projects**

---

## ⚙️ Key Features

- 🎭 Dual-mode experience with independent visual identities
- 🌓 Shared design system with theme-aware components
- ⚛️ Built entirely with reusable React components
- 📱 Fully responsive layouts
- 🧭 Hash-based navigation between sections
- 🖼️ Interactive project galleries with keyboard and touch support
- ✨ Smooth page transitions and scroll animations
- 🎨 Custom typography and colour systems for each mode

---

## 🛠️ Tech Stack

| | |
|---|---|
| **Framework** | React 19 + TypeScript |
| **Build Tool** | Vite |
| **Styling** | Tailwind CSS v4 + CSS Variables |
| **Icons** | Lucide React |
| **Testing** | Vitest |

---

## 🧬 Project Structure

```text
Portfolio/
├── public/
├── reference/
├── src/
│   ├── assets/
│   ├── components/
│   ├── data/
│   ├── pages/
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── package.json
└── vite.config.ts
```

---

## 🚀 Deployment

The portfolio is live on **Render**.

🔗 https://clara-cdp-portfolio.onrender.com

Built with production-optimised assets using React, Vite and Tailwind CSS.

## 🚧 Future Improvements

This portfolio is an ongoing project. Planned additions include:

- CMS-backed project content
- Interactive case studies
- Light/Dark mode persistence
- Performance and accessibility audits
- Motion refinements and micro-interactions
