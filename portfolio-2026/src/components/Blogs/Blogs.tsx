import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { blogs } from '../../data'
import { useBreakpoint } from '../../hooks'

gsap.registerPlugin(ScrollTrigger)

export default function Blogs() {
  const sectionRef = useRef<HTMLElement>(null)
  const { isSmall, isMobile, isTablet } = useBreakpoint()

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current?.querySelectorAll('.blog-card') || [],
        { opacity: 0, y: 40, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          stagger: 0.12,
          duration: 0.7,
          ease: 'back.out(1.7)',
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

  return (
    <section
      id="blogs"
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
      }}>
        <div style={{ marginBottom: '48px', textAlign: 'center' }}>
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
            2026 | Blogs
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
              Blogs
            </span>
          </h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile
              ? '1fr'
              : 'repeat(auto-fill, minmax(min(280px, 100%), 1fr))',
            gap: '24px',
          }}
        >
          {blogs.map((blog) => (
            <Link
              key={blog.title}
              to={blog.url}
              className="blog-card"
              style={{
                textDecoration: 'none',
                color: 'inherit',
                border: '1.5px solid #1a1a1a',
                borderRadius: '12px',
                overflow: 'hidden',
                background: '#fff',
                transition: 'all 0.3s ease',
                display: 'flex',
                flexDirection: 'column',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.boxShadow = '8px 8px 0px #FFD400'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              <div
                style={{
                  height: '180px',
                  background: '#f5f5f5',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderBottom: '1.5px solid #1a1a1a',
                  overflow: 'hidden',
                }}
              >
                {blog.cover && blog.cover.endsWith('.jpg') || blog.cover.endsWith('.png') || blog.cover.endsWith('.jpeg') ? (
                  <img
                    src={blog.cover}
                    alt={blog.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                ) : (
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.3 }}><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" /></svg>
                )}
              </div>
              <div style={{ padding: '20px' }}>
                <div
                  style={{
                    fontSize: '11px',
                    fontWeight: 600,
                    color: '#FFD400',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    marginBottom: '8px',
                  }}
                >
                  {blog.date}
                </div>
                <h3
                  style={{
                    fontSize: '18px',
                    fontWeight: 700,
                    color: '#1a1a1a',
                    margin: '0 0 8px',
                    lineHeight: 1.3,
                  }}
                >
                  {blog.title}
                </h3>
                <p
                  style={{
                    fontSize: '13px',
                    color: '#1a1a1a',
                    opacity: 0.7,
                    lineHeight: 1.5,
                    margin: 0,
                  }}
                >
                  {blog.description}
                </p>
                <div
                  style={{
                    marginTop: '16px',
                    fontSize: '13px',
                    fontWeight: 600,
                    color: '#1a1a1a',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                  }}
                >
                  Read More
                  <span style={{ fontSize: '14px', transition: 'transform 0.2s ease' }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}