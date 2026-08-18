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
        color: '#1a1a1a',
        display: 'block',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
        colorScheme: 'light only',
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

  const isMobileView = isSmall || isMobile

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
      {isMobileView ? (
        <div
          style={{
            maxWidth: '600px',
            width: '100%',
            margin: '0 auto',
          }}
        >
          {/* Mobile: Photo + Name side by side */}
          <div
            ref={leftRef}
            style={{
              display: 'flex',
              gap: '16px',
              alignItems: 'flex-start',
              marginBottom: '28px',
            }}
          >
            {/* Photo with yellow corner accent */}
            <div className="about-animate" style={{ position: 'relative', flexShrink: 0 }}>
              {/* Yellow corner accent */}
              <div
                style={{
                  position: 'absolute',
                  top: '-8px',
                  left: '-8px',
                  width: '40px',
                  height: '40px',
                  background: '#FFD400',
                  borderRadius: '0 0 12px 0',
                  zIndex: 0,
                }}
              />
              {/* Decorative dots */}
              <div
                style={{
                  position: 'absolute',
                  top: '-20px',
                  left: '-24px',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 6px)',
                  gap: '5px',
                  zIndex: 0,
                }}
              >
                {[...Array(9)].map((_, i) => (
                  <div
                    key={i}
                    style={{
                      width: '4px',
                      height: '4px',
                      borderRadius: '50%',
                      background: '#d4c9a8',
                    }}
                  />
                ))}
              </div>
              <div
                style={{
                  width: '140px',
                  border: '2px solid #1a1a1a',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  position: 'relative',
                  zIndex: 1,
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

            {/* Name + Role */}
            <div className="about-animate" style={{ paddingTop: '8px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '4px' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FFD400" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                </svg>
                <span style={{ fontSize: '14px', color: '#1a1a1a', fontStyle: 'italic' }}>
                  Hello, I'm
                </span>
              </div>
              <h2
                style={{
                  fontFamily: "'Instrument Sans', sans-serif",
                  fontSize: 'clamp(36px, 10vw, 48px)',
                  fontWeight: 700,
                  color: '#FFD400',
                  lineHeight: 1.05,
                  margin: 0,
                }}
              >
                Rishabh
                <br />
                <span style={{ position: 'relative', display: 'inline-block' }}>
                  Kothiyal.
                  <svg
                    style={{ position: 'absolute', bottom: '-2px', left: '0', width: '100%' }}
                    height="8"
                    viewBox="0 0 200 8"
                    fill="none"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M2 6C40 2 80 4 100 5C120 6 160 2 198 4"
                      stroke="#FFD400"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h2>
              <div
                style={{
                  marginTop: '16px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  border: '1.5px solid #1a1a1a',
                  borderRadius: '50px',
                  padding: '8px 16px',
                  fontSize: '12px',
                  fontWeight: 500,
                  color: '#1a1a1a',
                }}
              >
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#FFD400' }} />
                Full Stack Developer & UI/UX Designer
              </div>
            </div>
          </div>

          {/* Mobile: Bio text */}
          <div className="about-animate" style={{ marginBottom: '24px', overflowWrap: 'break-word', wordBreak: 'break-word' }}>
            <p style={{ fontSize: '14px', lineHeight: 1.8, color: '#1a1a1a', margin: '0 0 16px', fontStyle: 'italic' }}>
              Hello, I'm Rishabh Kothiyal, a{' '}
              <span style={{ background: 'rgba(255, 212, 0, 0.3)', padding: '1px 4px', borderRadius: '3px' }}>
                Bachelor of Computer Applications (BCA)
              </span>{' '}
              graduate from Graphic Era Hill University, Dehradun (2022–2025).
            </p>
            <p style={{ fontSize: '14px', lineHeight: 1.8, color: '#1a1a1a', margin: '0 0 16px', fontStyle: 'italic' }}>
              I specialize in Full Stack Development, UI/UX Design, scalable backend systems, and developer-focused products. I enjoy creating elegant digital experiences through{' '}
              <span style={{ borderBottom: '2px solid #FFD400', paddingBottom: '1px' }}>
                clean code, thoughtful design, and robust architecture
              </span>
              . My interests include{' '}
              <span style={{ background: 'rgba(255, 212, 0, 0.3)', padding: '1px 4px', borderRadius: '3px' }}>
                open-source software, AI-powered applications
              </span>
              , and building tools that simplify development while delivering{' '}
              <span style={{ background: 'rgba(255, 212, 0, 0.3)', padding: '1px 4px', borderRadius: '3px' }}>
                exceptional user experiences
              </span>
              .
            </p>
            <div style={{ position: 'relative' }}>
              <p style={{ fontSize: '14px', lineHeight: 1.8, color: '#1a1a1a', margin: 0, fontStyle: 'italic' }}>
                I'm looking for new challenges and opportunities to broaden my horizons and tell meaningful stories with products.
              </p>
              {/* Decorative quote marks */}
              <svg
                style={{ position: 'absolute', bottom: '-8px', right: '0', opacity: 0.25 }}
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="#1a1a1a"
              >
                <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
              </svg>
            </div>
          </div>

          {/* Mobile: Contact */}
          <div className="about-animate" style={{ marginBottom: '24px' }}>
            <span
              style={{
                fontSize: '18px',
                fontWeight: 800,
                fontStyle: 'italic',
                color: '#1a1a1a',
                background: '#FFD400',
                padding: '4px 12px',
                display: 'inline-block',
                borderRadius: '4px',
              }}
            >
              Contact me at!
            </span>
            <div style={{ marginTop: '16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <a href={`tel:${aboutData.contact.phone}`} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '14px', color: '#1a1a1a', textDecoration: 'none' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '50%', border: '1.5px solid #1a1a1a', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                </div>
                <span>{aboutData.contact.phone}</span>
              </a>
              <a href={`mailto:${aboutData.contact.email}`} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '14px', color: '#1a1a1a', textDecoration: 'none' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '50%', border: '1.5px solid #1a1a1a', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                </div>
                <span>{aboutData.contact.email}</span>
              </a>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '14px', color: '#1a1a1a' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '50%', border: '1.5px solid #1a1a1a', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                </div>
                <span>{aboutData.contact.location}</span>
              </div>
            </div>
          </div>

          {/* Mobile: QR codes */}
          <div
            className="about-animate qr-scroll"
            style={{
              display: 'flex',
              gap: '12px',
              overflowX: 'auto',
              WebkitOverflowScrolling: 'touch',
              padding: '0 0 4px',
            }}
          >
            <QRCodeTicket label="LinkedIn" url={aboutData.social[0].url} />
            <QRCodeTicket label="Instagram" url={aboutData.social[1].url} />
            <QRCodeTicket label="Resume" url={aboutData.resumeUrl} />
          </div>
        </div>
      ) : (
        /* Desktop / Tablet: Original card layout */
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
              padding: isDesktop ? '48px 56px' : '32px 20px',
              minWidth: 0,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              textAlign: 'inherit',
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
                <p style={{ fontSize: '15px', lineHeight: 1.8, color: '#1a1a1a', margin: '0 0 16px' }}>
                  Hello, I'm Rishabh Kothiyal, a{' '}
                  <span style={{ background: 'rgba(255, 212, 0, 0.3)', padding: '1px 4px', borderRadius: '3px' }}>
                    Bachelor of Computer Applications (BCA)
                  </span>{' '}
                  graduate from Graphic Era Hill University, Dehradun (2022–2025).
                </p>
                <p style={{ fontSize: '15px', lineHeight: 1.8, color: '#1a1a1a', margin: '0 0 16px' }}>
                  I specialize in{' '}
                  <span style={{ borderBottom: '2px solid #FFD400', paddingBottom: '1px' }}>
                    Full Stack Development, UI/UX Design
                  </span>
                  , scalable backend systems, and developer-focused products. I enjoy creating elegant digital experiences through{' '}
                  <span style={{ background: 'rgba(255, 212, 0, 0.3)', padding: '1px 4px', borderRadius: '3px' }}>
                    clean code, thoughtful design, and robust architecture
                  </span>
                  . My interests include{' '}
                  <span style={{ borderBottom: '2px solid #FFD400', paddingBottom: '1px' }}>
                    open-source software, AI-powered applications
                  </span>
                  , and building tools that simplify development while delivering{' '}
                  <span style={{ background: 'rgba(255, 212, 0, 0.3)', padding: '1px 4px', borderRadius: '3px' }}>
                    exceptional user experiences
                  </span>
                  .
                </p>
                <p style={{ fontSize: '15px', lineHeight: 1.8, color: '#1a1a1a', margin: 0 }}>
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
      )}

      <style>{`
        .about-image-wrapper:hover img {
          transform: scale(1.08);
        }
        .about-image-wrapper:hover > div {
          box-shadow: 16px 16px 0px #FFD400;
        }
        .qr-scroll::-webkit-scrollbar {
          display: none;
        }
        .qr-scroll {
          -ms-overflow-style: none;
          scrollbar-width: none;
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