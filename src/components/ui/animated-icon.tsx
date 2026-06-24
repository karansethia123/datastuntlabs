"use client"

import { useRef, type CSSProperties } from "react"
import { motion, useInView, useReducedMotion } from "motion/react"

interface AnimatedIconProps {
  /** SVG element to animate. Paths should use pathLength="1" for the draw effect. */
  children: React.ReactNode
  className?: string
  /** Stagger offset in milliseconds */
  delay?: number
}

/**
 * AnimatedIcon — Stroke-draw animation on viewport entry.
 *
 * Wraps an SVG element and animates it when 50% enters the viewport:
 * - strokeDashoffset: pathLength → 0 over 300ms ease-out
 * - opacity: 0 → 1 over first 150ms
 *
 * Before trigger: invisible (opacity: 0, strokeDashoffset: pathLength)
 * After trigger: stays drawn permanently (once: true)
 *
 * SVG children should use pathLength="1" on stroke elements for the
 * draw animation to work correctly with the normalized 0–1 range.
 *
 * When prefers-reduced-motion is active, renders fully drawn immediately.
 */
export function AnimatedIcon({ children, className, delay = 0 }: AnimatedIconProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  const prefersReducedMotion = useReducedMotion()

  // Reduced motion: render fully visible immediately with no animation
  if (prefersReducedMotion) {
    return (
      <div className={className}>
        {children}
      </div>
    )
  }

  const delaySeconds = delay / 1000
  const drawn = isInView

  // CSS custom properties to control SVG stroke animation from the wrapper
  const wrapperStyle: CSSProperties = {
    ["--animated-icon-offset" as string]: drawn ? "0" : "1",
    ["--animated-icon-delay" as string]: `${delaySeconds}s`,
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      style={wrapperStyle}
      initial={{ opacity: 0 }}
      animate={drawn ? { opacity: 1 } : { opacity: 0 }}
      transition={{
        opacity: {
          duration: 0.15,
          ease: "easeOut",
          delay: delaySeconds,
        },
      }}
    >
      {children}
    </motion.div>
  )
}
