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
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
      duration: 1.5,
      ease: [0.22, 1, 0.36, 1]
  }}
  
    >
      {children}
    </motion.div>
    </div>
  )
}
    


