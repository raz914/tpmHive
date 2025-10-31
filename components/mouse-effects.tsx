"use client"

import { useEffect, useRef, useState } from "react"

interface Hexagon {
  id: number
  x: number
  y: number
  opacity: number
  rotation: number
  scale: number
}

export function MouseEffects() {
  const [hexagons, setHexagons] = useState<Hexagon[]>([])
  const hexagonIdRef = useRef(0)
  const lastHexagonTimeRef = useRef(0)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now()
      // Only create hexagon every 100ms to reduce trail density
      if (now - lastHexagonTimeRef.current < 100) return
      lastHexagonTimeRef.current = now

      const newHexagon: Hexagon = {
        id: hexagonIdRef.current++,
        x: e.clientX,
        y: e.clientY,
        opacity: 0.6, // Reduced from 0.8
        rotation: Math.random() * 360,
        scale: 0.5 + Math.random() * 0.5,
      }

      setHexagons((prev) => [...prev, newHexagon])
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setHexagons((prev) =>
        prev
          .map((hex) => ({
            ...hex,
            opacity: hex.opacity - 0.08, // Increased from 0.02 to fade faster
          }))
          .filter((hex) => hex.opacity > 0)
      )
    }, 50)

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      {hexagons.map((hex) => (
        <div
          key={hex.id}
          className="fixed pointer-events-none z-40"
          style={{
            left: hex.x,
            top: hex.y,
            opacity: hex.opacity,
            transform: `translate(-50%, -50%) rotate(${hex.rotation}deg) scale(${hex.scale})`,
            transition: "opacity 0.05s linear",
          }}
        >
          <svg width="20" height="20" viewBox="0 0 100 100" className="text-primary fill-current">
            <polygon points="50 1 95 25 95 75 50 99 5 75 5 25" strokeWidth="3" stroke="currentColor" fill="none" />
          </svg>
        </div>
      ))}
    </>
  )
}
