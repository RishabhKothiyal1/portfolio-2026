import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { projects } from '../../data'
import { useBreakpoint } from '../../hooks'

gsap.registerPlugin(ScrollTrigger)

const projectIcons: Record<string, React.ReactElement> = {
  'Do Doodle': (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 3a2.85 2.85 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
      <path d="m15 5 4 4" />
    </svg>
  ),
  'Reshare Karo': (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="18" cy="5" r="3" />
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="19" r="3" />
      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
      <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
    </svg>
  ),
  'TribeChat': (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
    </svg>
  ),
  'Streamie': (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polygon points="10 8 16 12 10 16 10 8" />
    </svg>
  ),
  'Render Virtual Mouse': (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4l7.07 17 2.51-7.39L21 11.07z" />
    </svg>
  ),
  'URL Shortener': (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 17H7A5 5 0 0 1 7 7h2" />
      <path d="M15 7h2a5 5 0 1 1 0 10h-2" />
      <line x1="8" y1="12" x2="16" y2="12" />
    </svg>
  ),
}

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null)
  const [openFolder, setOpenFolder] = useState(false)
  const [openSubFolders, setOpenSubFolders] = useState<Record<string, boolean>>({})
  const { isSmall, isMobile, isTablet } = useBreakpoint()

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current?.querySelectorAll('.animate-item') || [],
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.7,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const toggleSubFolder = (title: string) => {
    setOpenSubFolders((prev) => ({ ...prev, [title]: !prev[title] }))
  }

  return (
    <section
      id="projects"
      ref={sectionRef}
      style={{
        minHeight: '100vh',
        background: '#f2f1ee',
        padding: isSmall ? '64px 10px' : isMobile ? '80px 16px' : isTablet ? '80px 24px' : '100px 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div style={{
        maxWidth: '1400px',
        width: '100%',
        background: '#fff',
        border: '2px solid #1a1a1a',
        borderRadius: '16px',
        boxShadow: '12px 12px 0px rgba(26, 26, 26, 1)',
        padding: isSmall ? '20px 10px' : isMobile ? '24px 16px' : isTablet ? '32px 24px' : '48px 56px',
        overflow: 'hidden',
        position: 'relative',
      }}>
        {!isMobile && (
          <img
            src="/projects.png"
            alt="Projects"
            style={{
              position: 'absolute',
              right: '12px',
              top: '-20px',
              width: '300px',
              height: 'auto',
              zIndex: 0,
              pointerEvents: 'none',
            }}
          />
        )}
        <div className="animate-item" style={{ marginBottom: '40px', maxWidth: '70%' }}>
          <span
            style={{
              fontSize: '13px',
              color: '#1a1a1a',
              opacity: 0.6,
              letterSpacing: '2px',
              textTransform: 'uppercase',
              borderBottom: '2px solid #FFD400',
              paddingBottom: '4px',
            }}
          >
            2026 | Projects
          </span>
          <h2
            style={{
              fontSize: 'clamp(32px, 5vw, 48px)',
              fontWeight: 800,
              color: '#1a1a1a',
              margin: '12px 0 0',
              lineHeight: 1.1,
            }}
          >
            My{' '}
            <span
              style={{
                color: '#FFD400',
                textShadow:
                  '-1px -1px 0 #1a1a1a, 1px -1px 0 #1a1a1a, -1px 1px 0 #1a1a1a, 1px 1px 0 #1a1a1a',
              }}
            >
              Projects
            </span>
          </h2>
        </div>

        <div
          className="animate-item"
          style={{
            border: '1.5px solid #1a1a1a',
            borderRadius: '12px',
            background: '#fff',
            overflow: 'hidden',
            position: 'relative',
            zIndex: 1,
          }}
        >
          <div
            onClick={() => setOpenFolder(!openFolder)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: isSmall ? '12px 12px' : '16px 20px',
              background: '#fafafa',
              borderBottom: '1.5px solid #1a1a1a',
              cursor: 'pointer',
              userSelect: 'none',
            }}
          >
            <span
              style={{
                fontSize: '20px',
                transition: 'transform 0.3s ease',
                transform: openFolder ? 'rotate(90deg)' : 'rotate(0deg)',
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
            </span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
            </svg>
            <span style={{ fontSize: '16px', fontWeight: 600, color: '#1a1a1a' }}>
              Projects
            </span>
          </div>

          <div
            style={{
              maxHeight: openFolder ? '60vh' : '0',
              overflowY: openFolder ? 'auto' : 'hidden',
              transition: 'max-height 0.5s cubic-bezier(.22,1,.36,1)',
            }}
          >
            <div style={{ padding: isSmall ? '12px 10px' : '16px 20px' }}>
              {projects.map((project) => (
                <div
                  key={project.title}
                  style={{
                    border: '1.5px solid #e0e0e0',
                    borderRadius: '8px',
                    marginBottom: '8px',
                    overflow: 'hidden',
                  }}
                >
                  <div
                    onClick={() => toggleSubFolder(project.title)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: isSmall ? '8px 10px' : '10px 14px',
                      background: '#fafafa',
                      cursor: 'pointer',
                      userSelect: 'none',
                    }}
                  >
                    <span
                      style={{
                        fontSize: '16px',
                        transition: 'transform 0.3s ease',
                        transform: openSubFolders[project.title]
                          ? 'rotate(90deg)'
                          : 'rotate(0deg)',
                      }}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center' }}>
                      {projectIcons[project.title] || <span style={{ fontSize: '16px' }}>{project.icon}</span>}
                    </span>
                    <span
                      style={{ fontSize: '13px', fontWeight: 600, color: '#1a1a1a' }}
                    >
                      {project.title}
                    </span>
                  </div>

                  <div
                    style={{
                      maxHeight: openSubFolders[project.title] ? '400px' : '0',
                      overflow: 'hidden',
                      transition: 'max-height 0.4s cubic-bezier(.22,1,.36,1)',
                    }}
                  >
                    <div
                      style={{
                        padding: '12px 14px',
                        borderTop: '1px solid #e0e0e0',
                      }}
                    >
                      <div
                        style={{
                          border: '1.5px solid #e0e0e0',
                          borderRadius: '8px',
                          padding: '14px',
                          transition: 'all 0.3s ease',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'translateY(-3px)'
                          e.currentTarget.style.boxShadow = '6px 6px 0px #FFD400'
                          e.currentTarget.style.borderColor = '#FFD400'
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'translateY(0)'
                          e.currentTarget.style.boxShadow = 'none'
                          e.currentTarget.style.borderColor = '#e0e0e0'
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                          <span style={{ display: 'flex', alignItems: 'center' }}>
                            {projectIcons[project.title] || <span style={{ fontSize: '20px' }}>{project.icon}</span>}
                          </span>
                          <h4
                            style={{
                              fontSize: '15px',
                              fontWeight: 700,
                              color: '#1a1a1a',
                              margin: 0,
                            }}
                          >
                            {project.title}
                          </h4>
                        </div>
                        <p
                          style={{
                            fontSize: '12px',
                            color: '#1a1a1a',
                            opacity: 0.7,
                            lineHeight: 1.5,
                            margin: '0 0 8px',
                          }}
                        >
                          {project.description}
                        </p>

                        <div style={{ marginBottom: '8px' }}>
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              style={{
                                display: 'inline-block',
                                fontSize: '10px',
                                fontWeight: 500,
                                padding: '2px 8px',
                                border: '1px solid #1a1a1a',
                                borderRadius: '10px',
                                color: '#1a1a1a',
                                background: '#f5f5f5',
                                marginRight: '3px',
                                marginBottom: '3px',
                              }}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <div
                          style={{
                            display: 'flex',
                            gap: '12px',
                            flexWrap: 'wrap',
                            alignItems: 'center',
                          }}
                        >
                          {project.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '4px',
                                fontSize: '11px',
                                fontWeight: 500,
                                padding: '4px 10px',
                                border: '1px solid #1a1a1a',
                                borderRadius: '6px',
                                color: '#1a1a1a',
                                textDecoration: 'none',
                                background: '#fff',
                                transition: 'all 0.2s ease',
                                lineHeight: 1,
                                height: '28px',
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.background = '#1a1a1a'
                                e.currentTarget.style.color = '#f2f1ee'
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.background = '#fff'
                                e.currentTarget.style.color = '#1a1a1a'
                              }}
                            >
                              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                                <path d="M9 18c-4.51 2-5-2-7-2" />
                              </svg>
                              GitHub
                            </a>
                          )}
                          {project.live && (
                            <a
                              href={project.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '4px',
                                fontSize: '11px',
                                fontWeight: 500,
                                padding: '4px 10px',
                                border: '1px solid #1a1a1a',
                                borderRadius: '6px',
                                color: '#1a1a1a',
                                textDecoration: 'none',
                                background: '#fff',
                                transition: 'all 0.2s ease',
                                lineHeight: 1,
                                height: '28px',
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.background = '#1a1a1a'
                                e.currentTarget.style.color = '#f2f1ee'
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.background = '#fff'
                                e.currentTarget.style.color = '#1a1a1a'
                              }}
                            >
                              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                <polyline points="15 3 21 3 21 9" />
                                <line x1="10" y1="14" x2="21" y2="3" />
                              </svg>
                              Live Demo
                            </a>
                          )}
                          {project.docs && (
                            <Link
                              to={project.docs}
                              style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '4px',
                                fontSize: '11px',
                                fontWeight: 500,
                                padding: '4px 10px',
                                border: '1px solid #1a1a1a',
                                borderRadius: '6px',
                                color: '#1a1a1a',
                                textDecoration: 'none',
                                background: '#fff',
                                transition: 'all 0.2s ease',
                                lineHeight: 1,
                                height: '28px',
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.background = '#1a1a1a'
                                e.currentTarget.style.color = '#f2f1ee'
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.background = '#fff'
                                e.currentTarget.style.color = '#1a1a1a'
                              }}
                            >
                              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
                              </svg>
                              Docs
                            </Link>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
