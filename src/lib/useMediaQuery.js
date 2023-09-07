// CustomCounter.js

import { useState, useEffect } from 'react'

export function useMediaQuery() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    console.log('change size screen')
    setIsMobile(window.innerWidth <= 960)

    // Update isMobile state when the window is resized
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 960)
    }

    window.addEventListener('resize', handleResize)

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return { isMobile }
}
