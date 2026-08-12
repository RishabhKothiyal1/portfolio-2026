import { useEffect, useState } from 'react'

export type Breakpoint = 'small' | 'mobile' | 'tablet' | 'desktop'

function getBreakpoint(): Breakpoint {
  if (typeof window === 'undefined') return 'desktop'
  const w = window.innerWidth
  if (w <= 400) return 'small'
  if (w <= 820) return 'mobile'
  if (w <= 1100) return 'tablet'
  return 'desktop'
}

export function useBreakpoint() {
  const [breakpoint, setBreakpoint] = useState<Breakpoint>(getBreakpoint)

  useEffect(() => {
    const handleResize = () => setBreakpoint(getBreakpoint())
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return {
    breakpoint,
    isSmall: breakpoint === 'small',
    isMobile: breakpoint === 'small' || breakpoint === 'mobile',
    isTablet: breakpoint === 'tablet',
    isDesktop: breakpoint === 'desktop',
  }
}