import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const overlayRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      gsap.to(overlayRef.current, {
        opacity: 0,
        duration: 0.4,
        onComplete,
      })
    }, 100)
    return () => clearTimeout(timer)
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
    />
  )
}
