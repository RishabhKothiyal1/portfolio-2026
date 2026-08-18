import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { blogs } from '../../data'
import { useBreakpoint } from '../../hooks'

gsap.registerPlugin(ScrollTrigger)

const categories = ['All', 'Tech', 'Design', 'Events', 'Learnings']

const blogCategories: Record<string, string> = {
  'GDG DevFest 2025': 'Events',
  'AI Manthan 2025': 'Tech',
  '1Pixel Design Conference 2026': 'Design',
  'Microsoft Build //localhost: Noida': 'Tech',
}

const categoryIcons: Record<string, React.ReactNode> = {
  Tech: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  Design: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 19l7-7 3 3-7 7-3-3z" /><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" /><path d="M2 2l7.586 7.586" /><circle cx="11" cy="11" r="2" />
    </svg>
  ),
  Events: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>
  ),
  Learnings: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" />
    </svg>
  ),
}

export default function Blogs() {
  const sectionRef = useRef<HTMLElement>(null)
  const { isSmall, isMobile, isTablet, isDesktop } = useBreakpoint()
  const [activeFilter, setActiveFilter] = useState('All')

  const isMobileView = isSmall || isMobile

  const filteredBlogs = activeFilter === 'All'
    ? blogs
    : blogs.filter((blog) => blogCategories[blog.title] === activeFilter)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current?.querySelectorAll('.blog-animate') || [],
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
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

  return (
    <section
      id="blogs"
      ref={sectionRef}
      style={{
        minHeight: isMobileView ? 'auto' : '100vh',
        background: '#fff',
        padding: isMobileView ? '32px 16px 40px' : isTablet ? '80px 24px' : '100px 24px',
        display: 'flex',
        alignItems: isMobileView ? 'flex-start' : 'center',
        justifyContent: 'center',
      }}
    >
      {isMobileView ? (
        <div style={{ width: '100%' }}>
          {/* Mobile Header */}
          <div className="blog-animate" style={{ marginBottom: '24px', position: 'relative' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div>
                <span
                  style={{
                    fontSize: '13px',
                    color: '#1a1a1a',
                    letterSpacing: '1px',
                    borderBottom: '2px solid #FFD400',
                    paddingBottom: '2px',
                  }}
                >
                  2026 | BLOGS
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
                  My{' '}
                  <span
                    style={{
                      color: '#FFD400',
                      position: 'relative',
                      display: 'inline-block',
                    }}
                  >
                    Blogs
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
                </h2>
              </div>
              {/* Illustration */}
              <div style={{ width: '80px', height: '80px', opacity: 0.6, flexShrink: 0 }}>
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="20" y="15" width="50" height="65" rx="4" stroke="#FFD400" strokeWidth="2" fill="none" />
                  <line x1="30" y1="30" x2="60" y2="30" stroke="#FFD400" strokeWidth="1.5" />
                  <line x1="30" y1="40" x2="55" y2="40" stroke="#FFD400" strokeWidth="1.5" />
                  <line x1="30" y1="50" x2="50" y2="50" stroke="#FFD400" strokeWidth="1.5" />
                  <path d="M70 30 L80 20 L85 25 L75 35" stroke="#FFD400" strokeWidth="2" fill="none" />
                  <circle cx="82" cy="22" r="8" stroke="#FFD400" strokeWidth="1.5" fill="none" />
                  <path d="M79 22 L82 19 L85 22 M82 19 V25" stroke="#FFD400" strokeWidth="1.5" />
                </svg>
              </div>
            </div>
            <p
              style={{
                fontSize: '14px',
                color: '#1a1a1a',
                opacity: 0.7,
                margin: '12px 0 0',
                lineHeight: 1.5,
                fontStyle: 'italic',
              }}
            >
              Thoughts, learnings and experiences from events, conferences and beyond.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="blog-animate" style={{ display: 'flex', gap: '8px', marginBottom: '28px', flexWrap: 'wrap' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                style={{
                  padding: '8px 18px',
                  borderRadius: '20px',
                  border: '1.5px solid #1a1a1a',
                  background: activeFilter === cat ? '#1a1a1a' : 'transparent',
                  color: activeFilter === cat ? '#fff' : '#1a1a1a',
                  fontSize: '13px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Timeline */}
          <div style={{ position: 'relative', paddingLeft: '24px' }}>
            {/* Timeline line */}
            <div
              style={{
                position: 'absolute',
                left: '8px',
                top: '12px',
                bottom: '12px',
                width: '2px',
                background: 'linear-gradient(to bottom, #FFD400, #FFD400 80%, transparent)',
              }}
            />

            {/* Blog Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {filteredBlogs.map((blog) => (
                <MobileBlogCard key={blog.title} blog={blog} />
              ))}
            </div>
          </div>
        </div>
      ) : (
        /* Desktop / Tablet */
        <div
          style={{
            maxWidth: '1400px',
            width: '100%',
            background: '#fff',
            border: '2px solid #1a1a1a',
            borderRadius: '16px',
            boxShadow: '12px 12px 0px rgba(26, 26, 26, 1)',
            padding: isTablet ? '32px 24px' : '48px 56px',
          }}
        >
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
              gridTemplateColumns: isTablet
                ? '1fr'
                : 'repeat(auto-fill, minmax(min(280px, 100%), 1fr))',
              gap: '24px',
            }}
          >
            {blogs.map((blog) => (
              <DesktopBlogCard key={blog.title} blog={blog} />
            ))}
          </div>
        </div>
      )}
    </section>
  )
}

function MobileBlogCard({ blog }: { blog: typeof blogs[0] }) {
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <div className="blog-animate" style={{ position: 'relative' }}>
      {/* Yellow dot */}
      <div
        style={{
          position: 'absolute',
          left: '-24px',
          top: '24px',
          width: '18px',
          height: '18px',
          borderRadius: '50%',
          background: '#FFD400',
          border: '3px solid #fff',
          boxShadow: '0 0 0 2px #FFD400',
          zIndex: 1,
        }}
      />

      <Link
        to={blog.url}
        style={{
          textDecoration: 'none',
          color: 'inherit',
          display: 'block',
        }}
      >
        <div
          style={{
            background: '#fff',
            border: '1.5px solid #e8e8e8',
            borderRadius: '12px',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'row',
            boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
            transition: 'all 0.3s ease',
          }}
        >
          {/* Image */}
          <div
            style={{
              width: '140px',
              minHeight: '140px',
              flexShrink: 0,
              background: imageLoaded ? '#f5f5f5' : 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
              backgroundSize: '200% 100%',
              overflow: 'hidden',
              position: 'relative',
            }}
          >
            {blog.cover ? (
              <img
                src={blog.cover}
                alt={blog.title}
                loading="lazy"
                onLoad={() => setImageLoaded(true)}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  opacity: imageLoaded ? 1 : 0,
                  transition: 'opacity 0.3s ease',
                }}
              />
            ) : (
              <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ccc" strokeWidth="1.5"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" /></svg>
              </div>
            )}
          </div>

          {/* Content */}
          <div style={{ padding: '14px 16px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#FFD400" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                <span style={{ fontSize: '11px', fontWeight: 600, color: '#FFD400', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  {blog.date}
                </span>
              </div>
              {/* Category icon */}
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  background: '#FFD400',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                {categoryIcons[blogCategories[blog.title] || 'Tech']}
              </div>
            </div>

            <h3
              style={{
                fontSize: '16px',
                fontWeight: 700,
                color: '#1a1a1a',
                margin: '0 0 4px',
                lineHeight: 1.3,
              }}
            >
              {blog.title}
            </h3>

            <p
              style={{
                fontSize: '12px',
                color: '#1a1a1a',
                opacity: 0.6,
                lineHeight: 1.4,
                margin: '0 0 10px',
                fontStyle: 'italic',
              }}
            >
              {blog.description}
            </p>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <span style={{ fontSize: '13px', fontWeight: 600, color: '#1a1a1a' }}>
                Read More
              </span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

function DesktopBlogCard({ blog }: { blog: typeof blogs[0] }) {
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <Link
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
          background: imageLoaded ? '#f5f5f5' : 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
          backgroundSize: '200% 100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderBottom: '1.5px solid #1a1a1a',
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        {blog.cover ? (
          <img
            src={blog.cover}
            alt={blog.title}
            loading="lazy"
            width={280}
            height={180}
            onLoad={() => setImageLoaded(true)}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              opacity: imageLoaded ? 1 : 0,
              transition: 'opacity 0.3s ease',
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
  )
}
