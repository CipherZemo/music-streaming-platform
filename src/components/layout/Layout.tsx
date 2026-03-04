import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'

const Layout = () => {
  return (
    <div className="flex h-screen bg-background overflow-hidden">
      {/* Left Sidebar */}
      <Sidebar />

      {/* Main content area — scrollable */}
      <main className="flex-1 overflow-y-auto bg-gradient-to-b from-surface to-background">
        <div className="p-6">
          <Outlet />
        </div>
      </main>
    </div>
  )
}

export default Layout
