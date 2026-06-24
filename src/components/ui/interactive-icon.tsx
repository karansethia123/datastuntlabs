"use client"

import { motion, useReducedMotion } from "motion/react"
import { cn } from "@/lib/utils"

interface InteractiveIconProps {
  children: React.ReactNode
  className?: string
  hoverEffect?: "rotate" | "scale"
  amount?: number
}

function InteractiveIcon({
  children,
  className,
  hoverEffect = "rotate",
  amount,
}: InteractiveIconProps) {
  const shouldReduceMotion = useReducedMotion()

  const resolvedAmount =
    amount ?? (hoverEffect === "rotate" ? 8 : 1.08)

  if (shouldReduceMotion) {
    return <div className={cn(className)}>{children}</div>
  }

  const whileHover =
    hoverEffect === "rotate"
      ? { rotate: resolvedAmount }
      : { scale: resolvedAmount }

  return (
    <motion.div
      className={cn(className)}
      whileHover={whileHover}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  )
}

export { InteractiveIcon }
export type { InteractiveIconProps }
