import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

const greetings = [
  'HELLO',
  'नमस्ते',
  'CIAO',
  'こんにちは',
]

const GREETING_DURATION = 0.8
const TRANSITION_DURATION = 0.3
const FINAL_HOLD = 0.5
const OVERLAY_FADE = 0.6

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const overlayRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLSpanElement>(null)
  const tlRef = useRef<gsap.core.Timeline | null>(null)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReduced) {
      const timer = setTimeout(() => {
        gsap.to(overlayRef.current, {
          opacity: 0,
          duration: 0.4,
          onComplete,
        })
      }, 600)
      return () => clearTimeout(timer)
    }

    const tl = gsap.timeline({
      onComplete: () => {
        tlRef.current = null
      },
    })
    tlRef.current = tl

    greetings.forEach((_, i) => {
      const hold = i === greetings.length - 1 ? FINAL_HOLD : GREETING_DURATION

      tl.fromTo(
        textRef.current,
        {
          opacity: 0,
          y: 24,
          scale: 0.96,
          filter: 'blur(8px)',
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: 'blur(0px)',
          duration: TRANSITION_DURATION,
          ease: 'power2.out',
          onStart: () => setCurrentIndex(i),
        },
        i === 0 ? 0 : `>-${TRANSITION_DURATION}`
      )

      tl.to(textRef.current, {
        opacity: 0,
        y: -24,
        scale: 1.02,
        filter: 'blur(8px)',
        duration: TRANSITION_DURATION,
        ease: 'power2.in',
        delay: hold,
      })
    })

    tl.to(overlayRef.current, {
      opacity: 0,
      duration: OVERLAY_FADE,
      ease: 'power2.inOut',
      onComplete,
    })

    return () => {
      tl.kill()
    }
  }, [onComplete])

  return (
    <div
      ref={overlayRef}
      role="presentation"
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#f2f1ee',
        pointerEvents: 'none',
      }}
    >
      <span
        ref={textRef}
        style={{
          fontFamily: "'Inter', 'Noto Sans Devanagari', 'Noto Sans JP', sans-serif",
          fontSize: 'clamp(3rem, 8vw, 8rem)',
          fontWeight: 600,
          color: '#1a1a1a',
          letterSpacing: '0.06em',
          lineHeight: 1,
          textAlign: 'center',
          whiteSpace: 'nowrap',
          userSelect: 'none',
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
          willChange: 'transform, opacity, filter',
        }}
      >
        {greetings[currentIndex]}
      </span>
    </div>
  )
}
