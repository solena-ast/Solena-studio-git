'use client'

import { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface GlassCardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  onClick?: () => void
}

export default function GlassCard({ 
  children, 
  className = '', 
  hover = true,
  onClick 
}: GlassCardProps) {
  return (
    <motion.div
      className={`glass rounded-lg p-8 relative overflow-hidden group cursor-pointer ${className}`}
      whileHover={hover ? { 
        y: -4,
        boxShadow: '0 20px 40px rgba(139, 111, 71, 0.1)'
      } : {}}
      transition={{ duration: 0.3 }}
      onClick={onClick}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-bronze/0 via-transparent to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  )
}