# MyProjects 🚀

A modern, production-ready project portfolio dashboard built with React, Vite, and Tailwind CSS v4.

## Features
- **Modern UI/UX**: Premium design inspired by Vercel and Linear.
- **Dark/Light Mode**: Full theme support with system detection.
- **PWA Ready**: Installable on mobile and desktop with offline support.
- **i18n**: Multilingual support (English & Vietnamese).
- **Analytics**: Beautiful data visualization using Recharts.
- **Search & Filter**: Real-time project search, tech filtering, and sorting.
- **Google Sheets Sync**: Data is fetched live from a Google Sheets CSV.

## Tech Stack
- **Framework**: React 18 + TypeScript
- **Bundler**: Vite
- **Styling**: Tailwind CSS v4
- **State/Hooks**: Custom hooks for Theme and Projects
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Charts**: Recharts
- **PWA**: vite-plugin-pwa

## Setup Instructions

1. **Clone the repository**
2. **Install dependencies**
   ```bash
   npm install
   ```
3. **Run development server**
   ```bash
   npm run dev
   ```
4. **Build for production**
   ```bash
   npm run build
   ```

## Build & Deployment
The project can be deployed easily to platforms like Vercel or Netlify.
Simply connect your repository and use the following build settings:
- **Build Command**: `npm run build`
- **Output Directory**: `dist`

## PWA Usage
Once deployed on HTTPS, users will see an "Install App" prompt. The application supports offline viewing of the project list once cached.
