# 🎵 Music Streaming Dashboard

A Spotify/Apple Music-inspired music streaming dashboard built with React, TypeScript, and Tailwind CSS. Built as a learning project covering advanced React patterns, global state management, and modern UI/UX design.

## 🚀 Tech Stack

| Layer            | Technology                      |
| ---------------- | ------------------------------- |
| Framework        | React 18 + TypeScript           |
| Build Tool       | Vite                            |
| Styling          | Tailwind CSS v3                 |
| UI Components    | shadcn/ui (Radix UI primitives) |
| Routing          | React Router DOM v6             |
| Icons            | Lucide React                    |
| State Management | React Context API               |

## ✨ Features

- 🏠 **Home Page** — Featured playlists, recently played, top artists
- 🔍 **Search** — Real-time search with categorized results and debouncing
- 📚 **Library** — Manage liked songs and saved playlists
- 🎵 **Persistent Music Player** — Play/pause, next/prev, seek, volume control
- 💿 **Album & Artist Pages** — Detailed views with tracklists
- ❤️ **Like Songs** — Global liked songs state
- 📱 **Responsive Design** — Works across screen sizes

## 📁 Project Structure

```
src/
├── components/        # Reusable UI components
│   ├── ui/            # Base UI (Button, IconButton, etc.)
│   ├── layout/        # Layout, Sidebar, PlayerBar
│   └── shared/        # MediaCard, SongItem, Section
├── pages/             # Route-level page components
├── context/           # Global state (player, library)
├── data/              # Mock JSON data files
├── services/          # Data service layer
├── lib/               # Utility functions
└── types/             # TypeScript interfaces
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
# Clone the repo
git clone https://github.com/your-username/music-streaming-dashboard.git

# Navigate to project
cd music-streaming-dashboard

# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## 🎨 Color Palette

| Name             | Hex       |
| ---------------- | --------- |
| Background       | `#121212` |
| Surface          | `#1E1E1E` |
| Surface Elevated | `#282828` |
| Accent (Purple)  | `#A855F7` |
| Text Primary     | `#FFFFFF` |
| Text Secondary   | `#A3A3A3` |

## 📚 Learning Goals

- Advanced React development (hooks, patterns)
- Complex UI/UX design and implementation
- Global state management with Context API
- Component composition and reusability
- Handling HTML audio elements
- Frontend architecture for large applications

## 🚢 Deployment

Deployed on **Netlify**.

## 📝 License

MIT
