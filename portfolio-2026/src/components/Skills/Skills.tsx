import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { skillCategories, education, experience } from '../../data'
import type { Education, Experience } from '../../data'
import { useBreakpoint } from '../../hooks'

gsap.registerPlugin(ScrollTrigger)

const categoryIcons: Record<string, JSX.Element> = {
  Languages: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  Frontend: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8" /><path d="M12 17v4" />
    </svg>
  ),
  Backend: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="8" rx="2" /><rect x="2" y="14" width="20" height="8" rx="2" /><circle cx="6" cy="6" r="1" /><circle cx="6" cy="18" r="1" />
    </svg>
  ),
  Databases: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" /><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    </svg>
  ),
  Tools: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  ),
  Other: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" /><path d="m17 21-5-5-5 5" />
    </svg>
  ),
}

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null)
  const { isSmall, isMobile, isTablet, isDesktop } = useBreakpoint()

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current?.querySelectorAll('.skill-animate') || [],
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.08,
          duration: 0.6,
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

  const isMobileView = isSmall || isMobile

  return (
    <section
      id="skills"
      ref={sectionRef}
      style={{
        minHeight: isMobileView ? 'auto' : '100vh',
        background: isMobileView ? '#f2f1ee' : '#fff',
        padding: isMobileView ? '32px 26px 40px' : isTablet ? '80px 16px 40px' : '80px 24px 40px',
        display: 'flex',
        alignItems: isMobileView ? 'flex-start' : 'center',
        justifyContent: 'center',
      }}
    >
      {isMobileView ? (
        <div style={{ width: '100%' }}>
          {/* Mobile Header */}
          <div className="skill-animate" style={{ marginBottom: '32px', position: 'relative' }}>
            <span
              style={{
                fontSize: '13px',
                color: '#1a1a1a',
                letterSpacing: '1px',
                borderBottom: '2px solid #FFD400',
                paddingBottom: '2px',
              }}
            >
              2026 | Skills & Background
            </span>
            <h2
              style={{
                fontSize: 'clamp(32px, 8vw, 42px)',
                fontWeight: 800,
                color: '#1a1a1a',
                margin: '12px 0 0',
                lineHeight: 1.1,
              }}
            >
              What I{' '}
              <span
                style={{
                  color: '#FFD400',
                  position: 'relative',
                  display: 'inline-block',
                }}
              >
                Know
                <svg
                  style={{ position: 'absolute', bottom: '-2px', left: '0', width: '100%' }}
                  height="6"
                  viewBox="0 0 100 6"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path d="M1 4C20 1 40 3 50 4C60 5 80 1 99 3" stroke="#FFD400" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              </span>
              <svg
                style={{ position: 'absolute', top: '-10px', right: '0' }}
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#FFD400"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
              </svg>
            </h2>
            {/* Light bulb illustration */}
            <div
              style={{
                position: 'absolute',
                top: '-20px',
                right: '0',
                width: '100px',
                height: '100px',
                pointerEvents: 'none',
              }}
            >
              <img
                src="/skills-illustration.png"
                alt=""
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              />
            </div>
          </div>

          {/* Mobile Skills */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '28px', marginBottom: '40px' }}>
            {skillCategories.map((category) => (
              <div key={category.title} className="skill-animate">
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '50%',
                      background: '#FFD400',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    {categoryIcons[category.title] || null}
                  </div>
                  <h3
                    style={{
                      fontSize: '18px',
                      fontWeight: 700,
                      color: '#1a1a1a',
                      margin: 0,
                    }}
                  >
                    {category.title}
                  </h3>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', paddingLeft: '0' }}>
                  {category.skills.map((skill) => (
                    <span
                      key={skill.name}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        padding: '6px 14px',
                        border: '1.5px solid #1a1a1a',
                        borderRadius: '20px',
                        fontSize: '13px',
                        fontWeight: 500,
                        color: '#1a1a1a',
                        background: '#fff',
                      }}
                    >
                      {skill.type === 'image' ? (
                        <img src={skill.icon} alt="" style={{ width: '16px', height: '16px', objectFit: 'contain' }} />
                      ) : skill.type === 'icon' && skill.icon.startsWith('http') ? (
                        <img src={skill.icon} alt="" style={{ width: '14px', height: '14px', objectFit: 'contain' }} />
                      ) : skill.type === 'text' ? (
                        <span style={{ fontWeight: 700, fontSize: '13px' }}>{skill.icon}</span>
                      ) : null}
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div style={{ borderTop: '1.5px dashed #1a1a1a', margin: '0 0 36px' }} />

          {/* Mobile Education */}
          <div className="skill-animate" style={{ marginBottom: '36px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  background: '#FFD400',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c0 1.1 2.7 3 6 3s6-1.9 6-3v-5" /></svg>
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#1a1a1a', margin: 0 }}>Education</h3>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {education.map((item: Education) => (
                <div
                  key={item.school}
                  style={{
                    display: 'flex',
                    gap: '14px',
                    alignItems: 'flex-start',
                    position: 'relative',
                    paddingLeft: '16px',
                  }}
                >
                  <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '3px', background: '#FFD400', borderRadius: '2px' }} />
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '50%',
                      border: '1.5px solid #e0e0e0',
                      overflow: 'hidden',
                      flexShrink: 0,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: '#fafafa',
                    }}
                  >
                    <img
                      src={`/${item.logo}`}
                      alt=""
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      onError={(e) => {
                        e.currentTarget.style.display = 'none'
                        e.currentTarget.parentElement!.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="4" y="2" width="16" height="20" rx="2" /><path d="M9 22v-4h6v4" /></svg>'
                      }}
                    />
                  </div>
                  <div>
                    <p style={{ fontSize: '12px', color: '#1a1a1a', opacity: 0.5, margin: '0 0 2px' }}>{item.years}</p>
                    <p style={{ fontSize: '15px', fontWeight: 700, color: '#1a1a1a', margin: '0 0 2px' }}>{item.school}</p>
                    <p style={{ fontSize: '13px', color: '#1a1a1a', opacity: 0.6, margin: 0 }}>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Experience */}
          <div className="skill-animate">
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  background: '#FFD400',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg>
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#1a1a1a', margin: 0 }}>Experience</h3>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {experience.map((item: Experience) => (
                <div
                  key={item.title}
                  style={{
                    position: 'relative',
                    paddingLeft: '16px',
                  }}
                >
                  <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '3px', background: '#FFD400', borderRadius: '2px' }} />
                  <p style={{ fontSize: '12px', color: '#1a1a1a', opacity: 0.5, margin: '0 0 2px' }}>{item.date}</p>
                  <p style={{ fontSize: '15px', fontWeight: 700, color: '#1a1a1a', margin: '0 0 2px' }}>{item.title}</p>
                  <p style={{ fontSize: '13px', color: '#1a1a1a', opacity: 0.6, margin: 0 }}>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        /* Desktop / Tablet: Original card layout */
        <div
          style={{
            maxWidth: '1400px',
            width: '100%',
            background: '#fff',
            border: '2px solid #1a1a1a',
            borderRadius: '16px',
            boxShadow: '12px 12px 0px rgba(26, 26, 26, 1)',
            overflow: 'visible',
            padding: isTablet ? '40px 32px' : '56px 64px',
            position: 'relative',
          }}
        >
          {/* Header */}
          <div className="skill-animate" style={{ marginBottom: '40px', position: 'relative', padding: isDesktop ? '0 260px 0 0' : '0' }}>
            <span
              style={{
                fontSize: '13px',
                color: '#1a1a1a',
                letterSpacing: '1px',
                borderBottom: '2px solid #FFD400',
                paddingBottom: '2px',
              }}
            >
              2026 | Skills & Background
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
              What I{' '}
              <span
                style={{
                  color: '#FFD400',
                  textShadow: '-1px -1px 0 #1a1a1a, 1px -1px 0 #1a1a1a, -1px 1px 0 #1a1a1a, 1px 1px 0 #1a1a1a',
                }}
              >
                Know
              </span>
            </h2>

            {isDesktop && (
              <div
                style={{
                  position: 'absolute',
                  top: '-55px',
                  right: '-60px',
                  width: '240px',
                  height: '240px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  pointerEvents: 'none',
                }}
              >
                <img src="/skills-illustration.png" alt="" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              </div>
            )}
          </div>

          {/* Skills Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '32px 48px',
              marginBottom: '48px',
            }}
          >
            {skillCategories.map((category) => (
              <div key={category.title} className="skill-animate">
                <h3
                  style={{
                    fontSize: '18px',
                    fontWeight: 700,
                    color: '#1a1a1a',
                    margin: '0 0 12px',
                    paddingBottom: '8px',
                    borderBottom: '2px solid #FFD400',
                    display: 'inline-block',
                  }}
                >
                  {category.title}
                </h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {category.skills.map((skill) => (
                    <span
                      key={skill.name}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        padding: '6px 14px',
                        border: '1.5px solid #1a1a1a',
                        borderRadius: '20px',
                        fontSize: '13px',
                        fontWeight: 500,
                        color: '#1a1a1a',
                        background: '#fff',
                        transition: 'all 0.2s ease',
                        cursor: 'default',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = '#FFD400'
                        e.currentTarget.style.borderColor = '#FFD400'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = '#fff'
                        e.currentTarget.style.borderColor = '#1a1a1a'
                      }}
                    >
                      {skill.type === 'image' ? (
                        <img src={skill.icon} alt="" style={{ width: '16px', height: '16px', objectFit: 'contain' }} />
                      ) : skill.type === 'icon' && skill.icon.startsWith('http') ? (
                        <img src={skill.icon} alt="" style={{ width: '14px', height: '14px', objectFit: 'contain' }} />
                      ) : skill.type === 'text' ? (
                        <span style={{ fontWeight: 700, fontSize: '13px' }}>{skill.icon}</span>
                      ) : null}
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div style={{ borderTop: '1.5px solid #1a1a1a', margin: '0 0 40px' }} />

          {/* Education & Experience */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '40px 48px',
            }}
          >
            {/* Education */}
            <div className="skill-animate">
              <h3
                style={{
                  fontSize: '18px',
                  fontWeight: 700,
                  color: '#1a1a1a',
                  margin: '0 0 24px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c0 1.1 2.7 3 6 3s6-1.9 6-3v-5" /></svg>
                Education
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {education.map((item: Education) => (
                  <div
                    key={item.school}
                    style={{
                      display: 'flex',
                      gap: '16px',
                      alignItems: 'flex-start',
                      position: 'relative',
                      paddingLeft: '16px',
                    }}
                  >
                    <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '3px', background: '#FFD400', borderRadius: '2px' }} />
                    <div
                      style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '50%',
                        border: '1.5px solid #e0e0e0',
                        overflow: 'hidden',
                        flexShrink: 0,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: '#fafafa',
                      }}
                    >
                      <img
                        src={`/${item.logo}`}
                        alt=""
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        onError={(e) => {
                          e.currentTarget.style.display = 'none'
                          e.currentTarget.parentElement!.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="4" y="2" width="16" height="20" rx="2" /><path d="M9 22v-4h6v4" /></svg>'
                        }}
                      />
                    </div>
                    <div>
                      <p style={{ fontSize: '12px', color: '#1a1a1a', opacity: 0.5, margin: '0 0 2px' }}>{item.years}</p>
                      <p style={{ fontSize: '15px', fontWeight: 700, color: '#1a1a1a', margin: '0 0 2px' }}>{item.school}</p>
                      <p style={{ fontSize: '13px', color: '#1a1a1a', opacity: 0.6, margin: 0 }}>{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div className="skill-animate">
              <h3
                style={{
                  fontSize: '18px',
                  fontWeight: 700,
                  color: '#1a1a1a',
                  margin: '0 0 24px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg>
                Experience
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {experience.map((item: Experience) => (
                  <div
                    key={item.title}
                    style={{
                      position: 'relative',
                      paddingLeft: '16px',
                    }}
                  >
                    <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '3px', background: '#FFD400', borderRadius: '2px' }} />
                    <p style={{ fontSize: '12px', color: '#1a1a1a', opacity: 0.5, margin: '0 0 2px' }}>{item.date}</p>
                    <p style={{ fontSize: '15px', fontWeight: 700, color: '#1a1a1a', margin: '0 0 2px' }}>{item.title}</p>
                    <p style={{ fontSize: '13px', color: '#1a1a1a', opacity: 0.6, margin: 0 }}>{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}