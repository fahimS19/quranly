# 📖 Quranly

A modern, fast and minimal Quran web application built with **Next.js**, designed for smooth reading, powerful search, and a clean user experience.

---

## ✨ Features

- 📚 **Complete Surah List**
  - All 114 Surahs with Arabic & English names
  - Meccan / Medinan distinction
  - Total ayah count

- 📖 **Surah Reading Page**
  - Arabic text + English translation
  - Clean, distraction-free layout
  - Smooth scrolling

- 🔍 **Search Functionality**
  - Search across the entire Quran (translation-based)
  - Instant navigation to the exact ayah

- ⚙️ **Settings Panel**
  - Arabic font selection (Amiri / Reem Kufi)
  - Adjustable Arabic font size
  - Adjustable translation font size
  - Persistent settings (localStorage)

- 🎯 **Jump to Ayah**
  - Quickly navigate to any ayah within a surah

- 🌗 **Dark Mode Support**
  - Fully responsive and theme-aware UI

---

## 🚀 Tech Stack

- **Frontend & Backend**: Next.js (App Router)
- **Rendering**: Static Site Generation (SSG)
- **Styling**: Tailwind CSS
- **Fonts**: Google Fonts (Amiri, Reem Kufi)
- **Data Source**: Local Quran JSON dataset

---

## ⚡ Getting Started

### 1. Clone the repository

git clone https://github.com/fahimS19/quranly.git

cd quranly


### 2. Install dependencies

npm install


### 3. Run the development server

npm run dev


### 4. Open in browser

http://localhost:3000

---

## 🧠 Key Design Decisions

- **SSG for performance** → Surahs are pre-rendered for instant loading  
- **Client-side search** → Fast and simple without external APIs  
- **Local JSON dataset** → No dependency on external services  
- **Minimal UI** → Focus on readability and usability  

---

## 📌 Notes

- Search is based on **English translation text**
- Arabic fonts are dynamically switchable
- All user preferences are saved in **localStorage**

---

## 📜 License

This project is for educational and demonstration purposes.
