'use client'
import { useEffect, useRef } from 'react'

export function ConstellationBg({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const mouse = { x: -9999, y: -9999 }
    const MOUSE_RADIUS = 160
    const CELL = 120

    let stars: { x: number; y: number; vx: number; vy: number; r: number }[] = []
    let frame: number | null = null

    const initStars = (w: number, h: number) => {
      const COLS = Math.max(3, Math.round(w / CELL))
      const ROWS = Math.max(2, Math.round(h / CELL))
      stars = Array.from({ length: COLS * ROWS }, (_, i) => {
        const col = i % COLS
        const row = Math.floor(i / COLS)
        return {
          x: (col + 0.15 + Math.random() * 0.7) / COLS,
          y: (row + 0.15 + Math.random() * 0.7) / ROWS,
          vx: (Math.random() - 0.5) * 0.00008,
          vy: (Math.random() - 0.5) * 0.00008,
          r: Math.random() * 0.8 + 0.3,
        }
      })
    }

    const draw = () => {
      const w = canvas.width
      const h = canvas.height
      ctx.clearRect(0, 0, w, h)

      stars.forEach(s => {
        s.x = (s.x + s.vx + 1) % 1
        s.y = (s.y + s.vy + 1) % 1
      })

      for (let i = 0; i < stars.length; i++) {
        const a = stars[i]
        for (let j = i + 1; j < stars.length; j++) {
          const b = stars[j]
          const dx = (a.x - b.x) * w
          const dy = (a.y - b.y) * h
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 160) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(232,176,32,${0.08 * (1 - dist / 160)})`
            ctx.lineWidth = 0.5
            ctx.moveTo(a.x * w, a.y * h)
            ctx.lineTo(b.x * w, b.y * h)
            ctx.stroke()
          }
        }
      }

      stars.forEach(s => {
        const sx = s.x * w
        const sy = s.y * h
        const dx = sx - mouse.x
        const dy = sy - mouse.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < MOUSE_RADIUS) {
          const alpha = 0.2 * (1 - dist / MOUSE_RADIUS)
          ctx.beginPath()
          ctx.strokeStyle = `rgba(232,176,32,${alpha})`
          ctx.lineWidth = 0.6
          ctx.moveTo(mouse.x, mouse.y)
          ctx.lineTo(sx, sy)
          ctx.stroke()
        }
      })

      stars.forEach(s => {
        const sx = s.x * w
        const sy = s.y * h
        const dx = sx - mouse.x
        const dy = sy - mouse.y
        const nearMouse = Math.sqrt(dx * dx + dy * dy) < MOUSE_RADIUS
        ctx.beginPath()
        ctx.fillStyle = nearMouse ? 'rgba(232,176,32,0.6)' : 'rgba(232,176,32,0.3)'
        ctx.arc(sx, sy, nearMouse ? s.r * 1.6 : s.r, 0, Math.PI * 2)
        ctx.fill()
      })

      frame = requestAnimationFrame(draw)
    }

    // ResizeObserver fires once dimensions are known (fixes mobile 0x0 at mount)
    const ro = new ResizeObserver(entries => {
      const entry = entries[0]
      if (!entry) return
      const w = entry.contentRect.width
      const h = entry.contentRect.height
      if (w === 0 || h === 0) return
      canvas.width = w
      canvas.height = h
      initStars(w, h)
      if (frame === null) draw()
    })
    ro.observe(canvas)

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
    }
    const onMouseLeave = () => { mouse.x = -9999; mouse.y = -9999 }

    const onTouchMove = (e: TouchEvent) => {
      const rect = canvas.getBoundingClientRect()
      const t = e.touches[0]
      mouse.x = t.clientX - rect.left
      mouse.y = t.clientY - rect.top
    }
    const onTouchEnd = () => { mouse.x = -9999; mouse.y = -9999 }

    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseleave', onMouseLeave)
    window.addEventListener('touchmove', onTouchMove, { passive: true })
    window.addEventListener('touchend', onTouchEnd)

    return () => {
      if (frame !== null) cancelAnimationFrame(frame)
      ro.disconnect()
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseleave', onMouseLeave)
      window.removeEventListener('touchmove', onTouchMove)
      window.removeEventListener('touchend', onTouchEnd)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none ${className ?? ''}`}
    />
  )
}
