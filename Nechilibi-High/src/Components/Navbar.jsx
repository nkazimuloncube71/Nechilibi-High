import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Logo } from './shared'
import { navigation } from './data'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="header-inner">
        <Logo />
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
        </button>
        <nav className={menuOpen ? 'main-nav nav-open' : 'main-nav'} aria-label="Main navigation">
          {navigation.map(([label, path, id]) => (
            <NavLink
              key={id}
              to={path}
              end={path === '/'}
              className={({ isActive }) => [id === 'portal' ? 'nav-portal' : '', isActive ? 'nav-active' : ''].filter(Boolean).join(' ')}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Navbar
