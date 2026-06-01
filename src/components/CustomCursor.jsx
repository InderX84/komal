import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const dot = useRef(null)
  const ring = useRef(null)

  useEffect(() => {
    // hide on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return

    document.documentElement.style.cursor = 'none'

    let mouseX = 0, mouseY = 0
    let ringX = 0, ringY = 0
    let raf

    const onMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
      if (dot.current) {
        dot.current.style.transform = `translate(${mouseX}px, ${mouseY}px)`
      }
    }

    const animate = () => {
      ringX += (mouseX - ringX) * 0.12
      ringY += (mouseY - ringY) * 0.12
      if (ring.current) {
        ring.current.style.transform = `translate(${ringX}px, ${ringY}px)`
      }
      raf = requestAnimationFrame(animate)
    }

    const onEnter = () => {
      if (dot.current) dot.current.style.opacity = '1'
      if (ring.current) ring.current.style.opacity = '1'
    }
    const onLeave = () => {
      if (dot.current) dot.current.style.opacity = '0'
      if (ring.current) ring.current.style.opacity = '0'
    }

    // scale ring on clickable elements
    const onHoverIn = () => {
      if (ring.current) {
        ring.current.style.width = '48px'
        ring.current.style.height = '48px'
        ring.current.style.borderColor = '#ec4899'
        ring.current.style.opacity = '0.6'
      }
    }
    const onHoverOut = () => {
      if (ring.current) {
        ring.current.style.width = '32px'
        ring.current.style.height = '32px'
        ring.current.style.borderColor = '#d946ef'
        ring.current.style.opacity = '1'
      }
    }

    window.addEventListener('mousemove', onMove)
    document.addEventListener('mouseenter', onEnter)
    document.addEventListener('mouseleave', onLeave)

    const clickables = document.querySelectorAll('a, button, [role="button"]')
    clickables.forEach(el => {
      el.addEventListener('mouseenter', onHoverIn)
      el.addEventListener('mouseleave', onHoverOut)
    })

    raf = requestAnimationFrame(animate)

    return () => {
      document.documentElement.style.cursor = ''
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseenter', onEnter)
      document.removeEventListener('mouseleave', onLeave)
      clickables.forEach(el => {
        el.removeEventListener('mouseenter', onHoverIn)
        el.removeEventListener('mouseleave', onHoverOut)
      })
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      {/* Dot */}
      <div
        ref={dot}
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
        style={{
          width: 8, height: 8,
          marginLeft: -4, marginTop: -4,
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #d946ef, #ec4899)',
          opacity: 0,
          transition: 'opacity 0.3s',
          willChange: 'transform',
        }}
      />
      {/* Ring */}
      <div
        ref={ring}
        className="fixed top-0 left-0 z-[9998] pointer-events-none"
        style={{
          width: 32, height: 32,
          marginLeft: -16, marginTop: -16,
          borderRadius: '50%',
          border: '1.5px solid #d946ef',
          opacity: 0,
          transition: 'opacity 0.3s, width 0.2s, height 0.2s, border-color 0.2s, margin 0.2s',
          willChange: 'transform',
        }}
      />
    </>
  )
}
