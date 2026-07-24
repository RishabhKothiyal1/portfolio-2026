import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { scrollToSection } from '../../utils'

export default function Hero({ showLoader }: { showLoader: boolean }) {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const bgRef = useRef<HTMLDivElement>(null)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' }, delay: showLoader ? 2.2 : 0 })

    tl.fromTo(
      bgRef.current,
      { scale: 1.2, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.2 }
    )

    if (titleRef.current) {
      const chars = titleRef.current.textContent?.split('') || []
      titleRef.current.textContent = ''
      chars.forEach((char) => {
        const span = document.createElement('span')
        span.textContent = char === ' ' ? '\u00A0' : char
        span.style.display = 'inline-block'
        span.style.opacity = '0'
        titleRef.current!.appendChild(span)
      })

      tl.to(
        titleRef.current.children,
        {
          opacity: 1,
          y: 0,
          stagger: 0.03,
          duration: 0.6,
        },
        '-=0.8'
      )
    }

    tl.fromTo(
      subtitleRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8 },
      '-=0.3'
    )

    tl.fromTo(
      ctaRef.current?.children || [],
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, stagger: 0.15, duration: 0.6 },
      '-=0.4'
    )

    return () => {
      tl.kill()
    }
  }, [showLoader])

  return (
    <section
      id="home"
      ref={sectionRef}
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        background: '#f2f1ee',
        padding: '80px 24px 40px',
      }}
    >
      <div
        ref={bgRef}
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse at 50% 50%, rgba(255, 212, 0, 0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          position: 'relative',
          zIndex: 1,
          textAlign: 'center',
          maxWidth: '1400px',
          width: '100%',
          background: '#fff',
          border: '2px solid #1a1a1a',
          borderRadius: '16px',
          boxShadow: '12px 12px 0px rgba(26, 26, 26, 1)',
          padding: isMobile ? '40px 24px' : '80px 64px',
        }}
      >

      <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: '1200px', width: '100%', display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 420px', alignItems: 'center', gap: '40px' }}>
        <div>
        <p
          style={{
            fontSize: '14px',
            color: '#1a1a1a',
            opacity: 0.6,
            letterSpacing: '3px',
            textTransform: 'uppercase',
            marginBottom: '16px',
          }}
        >
          Portfolio 2026
        </p>

        <h1
          ref={titleRef}
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: isMobile ? '32px' : 'clamp(36px, 6vw, 64px)',
            fontWeight: 700,
            color: '#FFD400',
            textShadow:
              '-2px -2px 0 #1a1a1a, 2px -2px 0 #1a1a1a, -2px 2px 0 #1a1a1a, 2px 2px 0 #1a1a1a',
            letterSpacing: isMobile ? '2px' : '4px',
            lineHeight: 1.1,
            margin: '0 0 24px',
            whiteSpace: 'nowrap',
          }}
        >
          Rishabh Kothiyal
        </h1>

        <p
          ref={subtitleRef}
          style={{
            fontSize: 'clamp(16px, 2.5vw, 22px)',
            color: '#1a1a1a',
            opacity: 0.8,
            fontWeight: 400,
            maxWidth: '600px',
            margin: '0 auto 40px',
            lineHeight: 1.6,
          }}
        >
          Full Stack Developer & UI/UX Designer —
          Building elegant digital experiences with clean code
        </p>

        <div
          ref={ctaRef}
          style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}
        >
          <button
            onClick={() => scrollToSection('about')}
            style={{
              padding: '12px 32px',
              background: '#1a1a1a',
              color: '#f2f1ee',
              border: '2px solid #1a1a1a',
              borderRadius: '30px',
              fontSize: '15px',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#FFD400'
              e.currentTarget.style.color = '#1a1a1a'
              e.currentTarget.style.borderColor = '#FFD400'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#1a1a1a'
              e.currentTarget.style.color = '#f2f1ee'
              e.currentTarget.style.borderColor = '#1a1a1a'
            }}
          >
            About Me
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            style={{
              padding: '12px 32px',
              background: 'transparent',
              color: '#1a1a1a',
              border: '2px solid #1a1a1a',
              borderRadius: '30px',
              fontSize: '15px',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#1a1a1a'
              e.currentTarget.style.color = '#f2f1ee'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.color = '#1a1a1a'
            }}
          >
            View Projects
          </button>
        </div>
        </div>

        {!isMobile && (
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img
              src="/hero-illustration.png"
              alt="Rishabh Kothiyal"
              style={{
                width: '100%',
                maxWidth: '780px',
                height: 'auto',
                objectFit: 'contain',
              }}
            />
          </div>
        )}
      </div>
      </div>
    </section>
  )
}