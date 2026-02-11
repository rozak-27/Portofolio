"use client"

import { motion } from "framer-motion"

export default function PageWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex items-center justify-center">
    <motion.div
      initial={{ opacity: 0, bottom: "32%" }}
      animate={{ opacity: 1, bottom: "37%" }}
      transition={{
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
  }}
  style={{ position: "absolute", left: "5%" }}
    >
      {children}
    </motion.div>
    </div>
  )
}
    


