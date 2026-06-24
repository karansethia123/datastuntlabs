"use client"

import { motion, useReducedMotion } from "motion/react"
import { cn } from "@/lib/utils"

interface AmbientShapeProps {
  shape: "circle" | "dots" | "grid"
  className?: string
  duration?: number
  drift?: { x: number; y: number; rotate?: number }
}

function CircleShape() {
  return (
    <svg
      width="120"
      height="120"
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle
        cx="60"
        cy="60"
        r="50"
        stroke="currentColor"
        strokeWidth="1"
        strokeOpacity="0.08"
        fillOpacity="0.02"
        fill="currentColor"
      />
    </svg>
  )
}

function DotsShape() {
  const dots: { cx: number; cy: number }[] = []
  for (let row = 0; row < 5; row++) {
    for (let col = 0; col < 5; col++) {
      dots.push({ cx: 12 + col * 24, cy: 12 + row * 24 })
    }
  }

  return (
    <svg
      width="120"
      height="120"
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {dots.map((dot, i) => (
        <circle
          key={i}
          cx={dot.cx}
          cy={dot.cy}
          r="2"
          stroke="currentColor"
          strokeWidth="0.5"
          strokeOpacity="0.08"
          fillOpacity="0.03"
          fill="currentColor"
        />
      ))}
    </svg>
  )
}

function GridShape() {
  return (
    <svg
      width="120"
      height="120"
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Horizontal lines */}
      {[20, 40, 60, 80, 100].map((y) => (
        <line
          key={`h-${y}`}
          x1="10"
          y1={y}
          x2="110"
          y2={y}
          stroke="currentColor"
          strokeWidth="0.5"
          strokeOpacity="0.07"
        />
      ))}
      {/* Vertical lines */}
      {[20, 40, 60, 80, 100].map((x) => (
        <line
          key={`v-${x}`}
          x1={x}
          y1="10"
          x2={x}
          y2="110"
          stroke="currentColor"
          strokeWidth="0.5"
          strokeOpacity="0.07"
        />
      ))}
    </svg>
  )
}

const shapeComponents = {
  circle: CircleShape,
  dots: DotsShape,
  grid: GridShape,
} as const

export function AmbientShape({
  shape,
  className,
  duration = 6000,
  drift = { x: 10, y: 10 },
}: AmbientShapeProps) {
  const prefersReducedMotion = useReducedMotion()

  // Clamp drift values to max constraints
  const clampedX = Math.min(Math.abs(drift.x), 20) * Math.sign(drift.x || 1)
  const clampedY = Math.min(Math.abs(drift.y), 20) * Math.sign(drift.y || 1)
  const clampedRotate = drift.rotate
    ? Math.min(Math.abs(drift.rotate), 15) * Math.sign(drift.rotate)
    : 0

  // Clamp duration to 4000–10000ms
  const clampedDuration = Math.max(4000, Math.min(10000, duration)) / 1000

  const ShapeComponent = shapeComponents[shape]

  // Render static for reduced motion
  if (prefersReducedMotion) {
    return (
      <div
        className={cn("absolute pointer-events-none z-0", className)}
        aria-hidden="true"
      >
        <ShapeComponent />
      </div>
    )
  }

  return (
    <motion.div
      className={cn("absolute pointer-events-none z-0", className)}
      aria-hidden="true"
      animate={{
        x: [0, clampedX],
        y: [0, clampedY],
        rotate: [0, clampedRotate],
        opacity: [0.08, 0.13],
      }}
      transition={{
        duration: clampedDuration,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
      }}
    >
      <ShapeComponent />
    </motion.div>
  )
}
