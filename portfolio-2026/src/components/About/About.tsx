import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { QRCodeSVG } from 'qrcode.react'
import { aboutData } from '../../data'
import { useBreakpoint } from '../../hooks'
import DecryptedText from '../DecryptedText/DecryptedText'

gsap.registerPlugin(ScrollTrigger)

function QRCodeTicket({ label, url }: { label: string; url: string }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: 'relative',
        width: '140px',
        minWidth: '140px',
        border: '1.5px solid #1a1a1a',
        borderRadius: '10px',
        background: '#fff',
        overflow: 'hidden',
        flexShrink: 0,
        textDecoration: 'none',
        color: 'inherit',
        display: 'block',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = '4px 4px 0px #FFD400'
        e.currentTarget.style.transform = 'translateY(-2px)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = 'none'
        e.currentTarget.style.transform = 'translateY(0)'
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '-8px',
          width: '16px',
          height: '16px',
          borderRadius: '50%',
          background: '#f2f1ee',
          border: '1.5px solid #1a1a1a',
          transform: 'translateY(-50%)',
          zIndex: 2,
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '50%',
          right: '-8px',
          width: '16px',
          height: '16px',
          borderRadius: '50%',
          background: '#f2f1ee',
          border: '1.5px solid #1a1a1a',
          transform: 'translateY(-50%)',
          zIndex: 2,
        }}
      />
      <div style={{ padding: '12px 12px 8px', textAlign: 'center' }}>
        <span style={{ fontSize: '12px', fontWeight: 600, color: '#1a1a1a' }}>
          {label}
        </span>
      </div>
      <div
        style={{
          borderTop: '1.5px dashed #1a1a1a',
          display: 'flex',
          justifyContent: 'center',
          padding: '10px 12px 12px',
        }}
      >
        <QRCodeSVG
          value={url}
          size={80}
          bgColor="#ffffff"
          fgColor="#1a1a1a"
          level="M"
        />
      </div>
    </a>
  )
}

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const leftRef = useRef<HTMLDivElement>(null)
  const rightRef = useRef<HTMLDivElement>(null)
  const { isSmall, isMobile, isTablet, isDesktop } = useBreakpoint()

  useEffect(() => {
    const ctx = gsap.context(() => {
      const leftChildren = leftRef.current?.querySelectorAll('.about-animate') || []
      gsap.fromTo(
        leftChildren,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.12,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      )

      gsap.fromTo(
        rightRef.current,
        { opacity: 0, scale: 0.95, x: 40 },
        {
          opacity: 1,
          scale: 1,
          x: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="about"
      ref={sectionRef}
      style={{
        minHeight: '100vh',
        background: '#f2f1ee',
        padding: isSmall ? '64px 12px 32px' : isMobile ? '80px 16px 40px' : '80px 24px 40px',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div
        style={{
          maxWidth: '1400px',
          width: '100%',
          margin: 'auto',
          background: '#fff',
          border: '2px solid #1a1a1a',
          borderRadius: '16px',
          boxShadow: '12px 12px 0px rgba(26, 26, 26, 1)',
          overflow: 'hidden',
          display: 'grid',
          gridTemplateColumns: isDesktop ? '1fr 42%' : '1fr',
          minHeight: isDesktop ? '600px' : 'auto',
        }}
      >
        <div
          ref={leftRef}
          style={{
            padding: isSmall
              ? '20px 12px'
              : isDesktop
                ? '48px 56px'
                : '32px 20px',
            minWidth: 0,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            textAlign: isMobile || isTablet ? 'left' : 'inherit',
          }}
        >
          <div>
            <div className="about-animate" style={{ marginBottom: '8px' }}>
              <span
                style={{
                  fontSize: '13px',
                  color: '#1a1a1a',
                  letterSpacing: '1px',
                  borderBottom: '2px solid #FFD400',
                  paddingBottom: '2px',
                }}
              >
                2026 | About me
              </span>
            </div>

            <div className="about-animate mobile-image" style={{ marginBottom: '16px' }}>
              <div
                style={{
                  width: '160px',
                  border: '2px solid #1a1a1a',
                  borderRadius: '12px',
                  boxShadow: '6px 6px 0px rgba(26, 26, 26, 1)',
                  overflow: 'hidden',
                }}
              >
                <img
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663844393079/EpxTpOHaLTilWIBE.png"
                  alt="Rishabh Kothiyal"
                  style={{
                    width: '100%',
                    height: 'auto',
                    aspectRatio: '3/4',
                    objectFit: 'cover',
                    objectPosition: 'top center',
                    display: 'block',
                  }}
                />
              </div>
            </div>

            <h2
              className="about-animate"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(48px, 6vw, 80px)',
                fontWeight: 900,
                fontStyle: 'italic',
                color: '#FFD400',
                textShadow:
                  '-2px -2px 0 #1a1a1a, 2px -2px 0 #1a1a1a, -2px 2px 0 #1a1a1a, 2px 2px 0 #1a1a1a',
                lineHeight: 0.95,
                margin: '16px 0 0',
              }}
            >
              Hello,
            </h2>

            <h3
              className="about-animate"
              style={{
                fontSize: 'clamp(24px, 3vw, 42px)',
                fontWeight: 800,
                color: '#1a1a1a',
                margin: '4px 0 32px',
                lineHeight: 1.05,
              }}
            >
              I'm{' '}
              <DecryptedText
                text="Rishabh Kothiyal."
                animateOn="hover"
                sequential
                revealDirection="start"
                speed={40}
                className="revealed"
                encryptedClassName="encrypted"
              />
            </h3>

            <div className="about-animate" style={{ maxWidth: '600px', overflowWrap: 'break-word', wordBreak: 'break-word' }}>
              <p
                style={{
                  fontSize: isSmall ? '12.5px' : isMobile ? '13px' : '15px',
                  lineHeight: 1.8,
                  color: '#1a1a1a',
                  margin: '0 0 16px',
                }}
              >
                Hello, I'm Rishabh Kothiyal, a{' '}
                <span
                  style={{
                    background: 'rgba(255, 212, 0, 0.3)',
                    padding: '1px 4px',
                    borderRadius: '3px',
                  }}
                >
                  Bachelor of Computer Applications (BCA)
                </span>{' '}
                graduate from Graphic Era Hill University, Dehradun (2022–2025).
              </p>

              <p
                style={{
                  fontSize: isSmall ? '12.5px' : isMobile ? '13px' : '15px',
                  lineHeight: 1.8,
                  color: '#1a1a1a',
                  margin: '0 0 16px',
                }}
              >
                I specialize in{' '}
                <span
                  style={{
                    borderBottom: '2px solid #FFD400',
                    paddingBottom: '1px',
                  }}
                >
                  Full Stack Development, UI/UX Design
                </span>
                , scalable backend systems, and developer-focused products. I enjoy creating elegant digital experiences through{' '}
                <span
                  style={{
                    background: 'rgba(255, 212, 0, 0.3)',
                    padding: '1px 4px',
                    borderRadius: '3px',
                  }}
                >
                  clean code, thoughtful design, and robust architecture
                </span>
                . My interests include{' '}
                <span
                  style={{
                    borderBottom: '2px solid #FFD400',
                    paddingBottom: '1px',
                  }}
                >
                  open-source software, AI-powered applications
                </span>
                , and building tools that simplify development while delivering{' '}
                <span
                  style={{
                    background: 'rgba(255, 212, 0, 0.3)',
                    padding: '1px 4px',
                    borderRadius: '3px',
                  }}
                >
                  exceptional user experiences
                </span>
                .
              </p>

              <p
                style={{
                  fontSize: isSmall ? '12.5px' : isMobile ? '13px' : '15px',
                  lineHeight: 1.8,
                  color: '#1a1a1a',
                  margin: 0,
                }}
              >
                I'm looking for new challenges and opportunities to broaden my horizons
                and tell meaningful stories with products.
              </p>
            </div>
          </div>

          <div>
            <div className="about-animate" style={{ marginTop: '40px' }}>
              <span
                style={{
                  fontSize: '20px',
                  fontWeight: 800,
                  fontStyle: 'italic',
                  color: '#1a1a1a',
                  background: '#FFD400',
                  padding: '4px 10px',
                  display: 'inline-block',
                }}
              >
                Contact me at:
              </span>
            </div>

            <div
              className="about-animate"
              style={{
                marginTop: '20px',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
              }}
            >
              <a href={`tel:${aboutData.contact.phone}`} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '15px', color: '#1a1a1a', textDecoration: 'none', cursor: 'pointer' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.6, flexShrink: 0 }}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                <span>{aboutData.contact.phone}</span>
              </a>
              <a href={`mailto:${aboutData.contact.email}`} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '15px', color: '#1a1a1a', textDecoration: 'none', cursor: 'pointer' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.6, flexShrink: 0 }}><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                <span>{aboutData.contact.email}</span>
              </a>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '15px', color: '#1a1a1a' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.6 }}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                <span>{aboutData.contact.location}</span>
              </div>
            </div>

            <div
              className="about-animate qr-scroll"
              style={{
                marginTop: '28px',
                display: 'flex',
                gap: '12px',
                flexWrap: 'nowrap',
                overflowX: 'auto',
                WebkitOverflowScrolling: 'touch',
                margin: '28px -16px 0',
                padding: '0 16px 4px',
              }}
            >
              <QRCodeTicket label="LinkedIn" url={aboutData.social[0].url} />
              <QRCodeTicket label="Instagram" url={aboutData.social[1].url} />
              <QRCodeTicket label="Resume" url={aboutData.resumeUrl} />
            </div>
          </div>
        </div>

        <div
          ref={rightRef}
          className="about-image-wrapper"
          style={{
            padding: '24px 24px 24px 0',
            display: 'flex',
            alignItems: 'stretch',
            position: 'relative',
          }}
        >
          <div
            style={{
              width: '100%',
              height: '100%',
              border: '2px solid #1a1a1a',
              borderRadius: '16px',
              boxShadow: '12px 12px 0px rgba(26, 26, 26, 1)',
              overflow: 'hidden',
              transition: 'box-shadow 0.4s ease',
            }}
          >
            <img
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663844393079/EpxTpOHaLTilWIBE.png"
              alt="Rishabh Kothiyal"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'top center',
                display: 'block',
                transition: 'transform 0.5s ease',
              }}
            />
          </div>
        </div>
      </div>

      <style>{`
        .about-image-wrapper:hover img {
          transform: scale(1.08);
        }
        .about-image-wrapper:hover > div {
          box-shadow: 16px 16px 0px #FFD400;
        }
        .mobile-image {
          display: none;
        }
        .qr-scroll::-webkit-scrollbar {
          display: none;
        }
        .qr-scroll {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        @media (max-width: 1100px) {
          .mobile-image {
            display: block !important;
          }
          #about > div {
            grid-template-columns: 1fr !important;
          }
          #about > div > div:last-child {
            display: none !important;
          }
        }
        @media (max-width: 480px) {
          .qr-scroll a {
            width: 110px !important;
            min-width: 110px !important;
          }
          .qr-scroll a svg {
            width: 60px !important;
            height: 60px !important;
          }
          .qr-scroll a span {
            font-size: 11px !important;
          }
        }
        @media (max-width: 360px) {
          .qr-scroll a {
            width: 100px !important;
            min-width: 100px !important;
          }
          .qr-scroll a svg {
            width: 52px !important;
            height: 52px !important;
          }
        }
      `}</style>
    </section>
  )
}