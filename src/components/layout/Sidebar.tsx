import { NavLink } from 'react-router-dom'
import { Home, Search, Library, Heart, Music2 } from 'lucide-react'
import { getAllPlaylists } from '@/services/musicDataService'
import { cn } from '@/lib/utils'

const mainNav = [
  { to: '/', label: 'Home', icon: Home, end: true },
  { to: '/search', label: 'Search', icon: Search },
  { to: '/library', label: 'Your Library', icon: Library },
]

const Sidebar = () => {
  const playlists = getAllPlaylists()

  return (
    <aside className="w-60 flex-shrink-0 bg-black flex flex-col h-full overflow-hidden">
      {/* Logo */}
      <div className="flex items-center gap-2 px-6 py-5">
        <Music2 className="text-accent w-7 h-7" />
        <span className="text-white font-bold text-lg tracking-wide">MusicStream</span>
      </div>

      {/* Main navigation */}
      <nav className="px-3 mb-4">
        {mainNav.map(({ to, label, icon: Icon, end }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            className={({ isActive }) =>
              cn(
                'flex items-center gap-4 px-3 py-2.5 rounded-md text-sm font-medium transition-colors',
                isActive
                  ? 'text-white bg-surface-elevated'
                  : 'text-text-secondary hover:text-white hover:bg-surface'
              )
            }
          >
            <Icon className="w-5 h-5 flex-shrink-0" />
            {label}
          </NavLink>
        ))}

        {/* Liked Songs shortcut */}
        <NavLink
          to="/liked"
          className={({ isActive }) =>
            cn(
              'flex items-center gap-4 px-3 py-2.5 rounded-md text-sm font-medium transition-colors mt-1',
              isActive
                ? 'text-white bg-surface-elevated'
                : 'text-text-secondary hover:text-white hover:bg-surface'
            )
          }
        >
          <span className="w-5 h-5 flex-shrink-0 bg-gradient-to-br from-indigo-400 to-accent rounded-sm flex items-center justify-center">
            <Heart className="w-3 h-3 text-white fill-white" />
          </span>
          Liked Songs
        </NavLink>
      </nav>

      {/* Divider */}
      <div className="mx-6 border-t border-surface-elevated mb-3" />

      {/* Playlists list — scrollable */}
      <div className="flex-1 overflow-y-auto px-3 pb-4">
        <p className="text-text-muted text-xs font-semibold uppercase tracking-widest px-3 mb-2">
          Playlists
        </p>
        {playlists.map((playlist) => (
          <NavLink
            key={playlist.id}
            to={`/playlist/${playlist.id}`}
            className={({ isActive }) =>
              cn(
                'block px-3 py-1.5 rounded text-sm truncate transition-colors',
                isActive ? 'text-white' : 'text-text-secondary hover:text-white'
              )
            }
          >
            {playlist.title}
          </NavLink>
        ))}
      </div>
    </aside>
  )
}

export default Sidebar
