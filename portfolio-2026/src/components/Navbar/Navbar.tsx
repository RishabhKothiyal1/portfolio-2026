import { useCallback } from 'react'
import { navLinks } from '../../data'
import { scrollToSection } from '../../utils'
import { useActiveSection } from '../../hooks'

export default function Navbar() {
  const sectionIds = navLinks.map((l) => l.href.replace('#', ''))
  const activeSection = useActiveSection(sectionIds)

  const handleClick = useCallback((e: React.MouseEvent, href: string) => {
    e.preventDefault()
    const id = href.replace('#', '')
    scrollToSection(id)
  }, [])

  return (
    <>
      <nav
        className="main-navbar"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          background: 'rgba(242, 241, 238, 0.9)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          borderBottom: '1.5px solid #1a1a1a',
          padding: '0 16px',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '56px',
            overflowX: 'auto',
            WebkitOverflowScrolling: 'touch',
          }}
        >
          <ul
            style={{
              display: 'flex',
              gap: '4px',
              listStyle: 'none',
              margin: 0,
              padding: 0,
              flexShrink: 0,
            }}
          >
            {navLinks.map((link) => {
              const sectionId = link.href.replace('#', '')
              const isActive = activeSection === sectionId
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleClick(e, link.href)}
                    className="nav-link"
                    style={{
                      padding: '6px 12px',
                      fontSize: '13px',
                      fontWeight: 600,
                      color: isActive ? '#f2f1ee' : '#1a1a1a',
                      background: isActive ? '#1a1a1a' : 'transparent',
                      borderRadius: '20px',
                      textDecoration: 'none',
                      transition: 'all 0.2s ease',
                      display: 'inline-block',
                      whiteSpace: 'nowrap',
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.background = '#e0e0e0'
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.background = 'transparent'
                      }
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </nav>

      <style>{`
        @media (max-width: 600px) {
          .main-navbar .nav-link {
            padding: 5px 10px !important;
            font-size: 11px !important;
          }
        }
      `}</style>
    </>
  )
}