import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="flex h-screen bg-background text-text-primary">
        <Routes>
          <Route
            path="/"
            element={
              <div className="flex items-center justify-center w-full text-accent text-2xl font-bold">
                🎵 MusicStream Dashboard — Setup Complete!
              </div>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
