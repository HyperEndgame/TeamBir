'use client'
import { useEffect, useRef } from 'react'

export function ConstellationBg({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const mouse = { x: -9999, y: -9999 }
    const MOUSE_RADIUS = 160

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
    }
    const onMouseLeave = () => { mouse.x = -9999; mouse.y = -9999 }
    canvas.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseleave', onMouseLeave)

    // Grid-based placement: cell size ~120px so density scales with canvas size
    const CELL = 120
    const COLS = Math.max(3, Math.round(canvas.width / CELL))
    const ROWS = Math.max(2, Math.round(canvas.height / CELL))
    const stars = Array.from({ length: COLS * ROWS }, (_, i) => {
      const col = i % COLS
      const row = Math.floor(i / COLS)
      return {
        x: (col + 0.15 + Math.random() * 0.7) / COLS,
        y: (row + 0.15 + Math.random() * 0.7) / ROWS,
        vx: (Math.random() - 0.5) * 0.00015,
        vy: (Math.random() - 0.5) * 0.00015,
        r: Math.random() * 1.6 + 0.5,
      }
    })

    let frame: number
    const draw = () => {
      const w = canvas.width
      const h = canvas.height
      ctx.clearRect(0, 0, w, h)

      stars.forEach(s => {
        s.x = (s.x + s.vx + 1) % 1
        s.y = (s.y + s.vy + 1) % 1
      })

      // Star-to-star connections
      for (let i = 0; i < stars.length; i++) {
        const a = stars[i]
        for (let j = i + 1; j < stars.length; j++) {
          const b = stars[j]
          const dx = (a.x - b.x) * w
          const dy = (a.y - b.y) * h
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 160) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(232,176,32,${0.18 * (1 - dist / 160)})`
            ctx.lineWidth = 0.6
            ctx.moveTo(a.x * w, a.y * h)
            ctx.lineTo(b.x * w, b.y * h)
            ctx.stroke()
          }
        }
      }

      // Mouse connections
      stars.forEach(s => {
        const sx = s.x * w
        const sy = s.y * h
        const dx = sx - mouse.x
        const dy = sy - mouse.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < MOUSE_RADIUS) {
          const alpha = 0.45 * (1 - dist / MOUSE_RADIUS)
          ctx.beginPath()
          ctx.strokeStyle = `rgba(232,176,32,${alpha})`
          ctx.lineWidth = 0.8
          ctx.moveTo(mouse.x, mouse.y)
          ctx.lineTo(sx, sy)
          ctx.stroke()
        }
      })

      // Draw stars
      stars.forEach(s => {
        const sx = s.x * w
        const sy = s.y * h
        const dx = sx - mouse.x
        const dy = sy - mouse.y
        const nearMouse = Math.sqrt(dx * dx + dy * dy) < MOUSE_RADIUS
        ctx.beginPath()
        ctx.fillStyle = nearMouse ? 'rgba(232,176,32,0.95)' : 'rgba(232,176,32,0.6)'
        ctx.arc(sx, sy, nearMouse ? s.r * 1.6 : s.r, 0, Math.PI * 2)
        ctx.fill()
      })

      frame = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseleave', onMouseLeave)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none ${className ?? ''}`}
    />
  )
}
