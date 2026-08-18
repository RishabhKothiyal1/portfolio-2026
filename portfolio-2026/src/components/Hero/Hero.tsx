import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { scrollToSection } from '../../utils'
import { useBreakpoint } from '../../hooks'
import TextLoop from '../TextLoop/TextLoop'

export default function Hero({ showLoader }: { showLoader: boolean }) {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const bgRef = useRef<HTMLDivElement>(null)
  const { isSmall, isMobile, isTablet, isDesktop } = useBreakpoint()

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' }, delay: showLoader ? 2.2 : 0 })

    tl.fromTo(
      bgRef.current,
      { scale: 1.2, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.2 }
    )

    if (titleRef.current) {
      tl.fromTo(
        titleRef.current,
        { y: 20 },
        { y: 0, duration: 0.8 },
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

  const isMobileView = isSmall || isMobile

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
        overflow: 'visible',
        background: '#f2f1ee',
        padding: isSmall
          ? '72px 12px 32px'
          : isMobile || isTablet
            ? '80px 16px 32px'
            : '80px 24px 40px',
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

      {isMobileView ? (
        <div
          style={{
            position: 'relative',
            zIndex: 1,
            textAlign: 'center',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <div style={{ margin: '0 -12px', width: 'calc(100% + 24px)' }}>
            <TextLoop
              text="Portfolio 2026"
              shape="wave"
              speed={90}
              direction="forward"
              separator="✦"
              curviness={60}
              fontSize={20}
              fontWeight={800}
              letterSpacing={2}
              uppercase
              color="#1a1a1a"
              ribbon
              ribbonColor="#FFD400"
              ribbonWidth={36}
              pauseOnHover
            />
          </div>

          <h1
            ref={titleRef}
            style={{
              fontFamily: "'Instrument Sans', sans-serif",
              fontSize: 'clamp(48px, 14vw, 72px)',
              fontWeight: 700,
              color: '#1a1a1a',
              letterSpacing: '1px',
              lineHeight: 1.05,
              margin: '32px 0 0',
            }}
          >
            Rishabh
            <br />
            <span style={{ color: '#FFD400', position: 'relative', display: 'inline-block' }}>
              Kothiyal
              <svg
                style={{ position: 'absolute', bottom: '-4px', left: '50%', transform: 'translateX(-50%)' }}
                width="120"
                height="12"
                viewBox="0 0 120 12"
                fill="none"
              >
                <path
                  d="M2 8C20 4 40 2 60 6C80 10 100 4 118 6"
                  stroke="#FFD400"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>

          <p
            ref={subtitleRef}
            style={{
              fontSize: '15px',
              color: '#1a1a1a',
              fontWeight: 400,
              fontStyle: 'italic',
              maxWidth: '340px',
              margin: '24px auto 40px',
              lineHeight: 1.7,
            }}
          >
            Full Stack Developer & UI/UX Designer —
            Building elegant digital experiences with clean code
          </p>

          <div
            ref={ctaRef}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '14px',
              width: '100%',
              padding: '0 8px',
            }}
          >
            <button
              onClick={() => scrollToSection('about')}
              style={{
                padding: '16px 24px',
                background: '#1a1a1a',
                color: '#f2f1ee',
                border: '2px solid #1a1a1a',
                borderRadius: '50px',
                fontSize: '16px',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                width: '100%',
              }}
            >
              About Me
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              style={{
                padding: '16px 24px',
                background: 'transparent',
                color: '#1a1a1a',
                border: '2px solid #1a1a1a',
                borderRadius: '50px',
                fontSize: '16px',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                width: '100%',
              }}
            >
              View Projects
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      ) : (
        <div
          className="hero-box"
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
            overflow: 'hidden',
            padding: isTablet ? '0px 32px 48px' : '0px 64px 48px',
          }}
        >
          <div style={{ margin: isTablet ? '0 -32px' : '0 -64px' }}>
            <TextLoop
              text="Portfolio 2026"
              shape="wave"
              speed={90}
              direction="forward"
              separator="✦"
              curviness={60}
              fontSize={isTablet ? 36 : 42}
              fontWeight={800}
              letterSpacing={2}
              uppercase
              color="#1a1a1a"
              ribbon
              ribbonColor="#FFD400"
              ribbonWidth={50}
              pauseOnHover
            />
          </div>

          <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: '1200px', width: '100%', display: 'grid', gridTemplateColumns: '1fr 420px', alignItems: 'center', gap: '40px', marginTop: '-48px' }}>
            <div>
              <h1
                ref={titleRef}
                style={{
                  fontFamily: "'Instrument Sans', sans-serif",
                  fontSize: 'clamp(36px, 6vw, 64px)',
                  fontWeight: 700,
                  color: '#FFD400',
                  textShadow: '-2px -2px 0 #1a1a1a, 2px -2px 0 #1a1a1a, -2px 2px 0 #1a1a1a, 2px 2px 0 #1a1a1a',
                  letterSpacing: '4px',
                  lineHeight: 1.15,
                  margin: '0 0 24px',
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
          </div>
        </div>
      )}
    </section>
  )
}