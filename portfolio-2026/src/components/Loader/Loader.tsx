import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const loaderRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLHeadingElement>(null)
  const barRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(loaderRef.current, {
          opacity: 0,
          duration: 0.5,
          onComplete: onComplete,
        })
      },
    })

    tl.to(barRef.current, {
      width: '100%',
      duration: 1.5,
      ease: 'power2.inOut',
    })

    tl.to(
      textRef.current,
      {
        opacity: 0,
        duration: 0.3,
      },
      '-=0.3'
    )

    return () => {
      tl.kill()
    }
  }, [onComplete])

  return (
    <div
      ref={loaderRef}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#f2f1ee',
      }}
    >
      <h1
        ref={textRef}
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 'clamp(32px, 7vw, 48px)',
          color: '#FFD400',
          textShadow: '-1px -1px 0 #1a1a1a, 1px -1px 0 #1a1a1a, -1px 1px 0 #1a1a1a, 1px 1px 0 #1a1a1a',
          marginBottom: '32px',
          letterSpacing: '4px',
        }}
      >
        portfolio
      </h1>
      <div
        style={{
          width: '200px',
          height: '3px',
          background: '#e0e0e0',
          borderRadius: '2px',
          overflow: 'hidden',
        }}
      >
        <div
          ref={barRef}
          style={{
            width: '0%',
            height: '100%',
            background: '#1a1a1a',
            borderRadius: '2px',
          }}
        />
      </div>
    </div>
  )
}