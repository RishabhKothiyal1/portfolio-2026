import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { certificateCategories } from '../../data'
import { useBreakpoint } from '../../hooks'

gsap.registerPlugin(ScrollTrigger)

export default function Certificates() {
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
      id="certificates"
      ref={sectionRef}
      style={{
        minHeight: '100vh',
        background: '#fff',
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
        <div className="animate-item" style={{ marginBottom: '40px' }}>
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
            2026 | Certifications
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
              Certificates
            </span>
          </h2>
        </div>

        {!isMobile && (
          <img
            src="/jojo.jpg"
            alt="Certificates"
            style={{
              position: 'absolute',
              right: '12px',
              top: '-20px',
              width: '300px',
              height: 'auto',
              zIndex: 2,
              pointerEvents: 'none',
            }}
          />
        )}

        <div
          className="animate-item"
          style={{
            border: '1.5px solid #1a1a1a',
            borderRadius: '12px',
            background: '#fff',
            overflow: 'hidden',
            position: 'relative',
            zIndex: 3,
          }}
        >
          <div
            onClick={() => setOpenFolder(!openFolder)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '16px 20px',
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
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
            </span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" /></svg>
            <span style={{ fontSize: '16px', fontWeight: 600, color: '#1a1a1a' }}>
              Certificates
            </span>
            <span
              style={{
                marginLeft: '8px',
                fontSize: '12px',
                fontWeight: 600,
                color: '#1a1a1a',
                opacity: 0.5,
              }}
            >
              {certificateCategories.reduce((sum, c) => sum + c.count, 0)}
            </span>
          </div>

          <div
            style={{
              maxHeight: openFolder ? '60vh' : '0',
              overflowY: openFolder ? 'auto' : 'hidden',
              transition: 'max-height 0.5s cubic-bezier(.22,1,.36,1)',
            }}
          >
            <div style={{ padding: '16px 20px' }}>
              {certificateCategories.map((category) => (
                <div
                  key={category.title}
                  style={{
                    border: '1.5px solid #e0e0e0',
                    borderRadius: '8px',
                    marginBottom: '8px',
                    overflow: 'hidden',
                  }}
                >
                  <div
                    onClick={() => toggleSubFolder(category.title)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '10px 14px',
                      background: '#fafafa',
                      cursor: 'pointer',
                      userSelect: 'none',
                    }}
                  >
                    <span
                      style={{
                        fontSize: '16px',
                        transition: 'transform 0.3s ease',
                        transform: openSubFolders[category.title]
                          ? 'rotate(90deg)'
                          : 'rotate(0deg)',
                      }}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                    </span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" /><path d="M14 2v4a2 2 0 0 0 2 2h4" /></svg>
                    <span style={{ fontSize: '13px', fontWeight: 600, color: '#1a1a1a' }}>
                      {category.title}
                    </span>
                  </div>

                  <div
                    style={{
                      maxHeight: openSubFolders[category.title] ? '60vh' : '0',
                      overflowY: openSubFolders[category.title] ? 'auto' : 'hidden',
                      transition: 'max-height 0.4s cubic-bezier(.22,1,.36,1)',
                    }}
                  >
                    <div
                      style={{
                        padding: '12px 14px',
                        borderTop: '1px solid #e0e0e0',
                      }}
                    >
                      {category.items.map((cert) => (
                        <a
                          key={cert.name}
                          href={cert.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '10px 14px',
                      border: '1.5px solid #e0e0e0',
                      borderRadius: '8px',
                      textDecoration: 'none',
                      color: 'inherit',
                      marginBottom: '8px',
                      flexWrap: 'wrap',
                      wordBreak: 'break-word',
                      transition: 'all 0.3s ease',
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-2px)'
                            e.currentTarget.style.boxShadow = '4px 4px 0px #FFD400'
                            e.currentTarget.style.borderColor = '#FFD400'
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)'
                            e.currentTarget.style.boxShadow = 'none'
                            e.currentTarget.style.borderColor = '#e0e0e0'
                          }}
                        >
                          <span style={{ fontSize: '14px' }}>{cert.name}</span>
                        </a>
                      ))}
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
