'use client'

import { motion } from 'framer-motion'
import ResponsiveImage from '@/components/ui/ResponsiveImage'
import { useState } from 'react'

export default function Hero() {
  const [isHovering, setIsHovering] = useState(false)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section className="relative w-full h-screen overflow-hidden bg-obsidian flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <ResponsiveImage
          landscapeSrc="/images/hero-landscape.webp"
          portraitSrc="/images/hero-portrait.webp"
          alt="SOLENA Hero - Dust halo"
          priority={true}
          className="w-full h-full"
          fill={true}
          objectFit="cover"
        />
      </div>

      <motion.div
        className="relative z-10 text-center max-w-4xl mx-auto px-6 sm:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-7xl lg:text-8xl font-serif font-bold text-ivory mb-8 tracking-tight"
        >
          SOLENA
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl lg:text-2xl text-stone mb-6 font-light leading-relaxed"
        >
          We build gravity for culture, capital, and legacy.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="space-y-4 mb-12"
        >
          <p className="text-sm sm:text-base text-ivory/80 max-w-2xl mx-auto leading-relaxed">
            Luxury is not created.<br />
            <span className="text-stone">It is engineered.</span>
          </p>
        </motion.div>

        <motion.div
          variants={itemVariants}
        >
          <motion.button
            className="px-8 py-3 sm:px-12 sm:py-4 border border-bronze text-bronze hover:text-ivory hover:border-ivory transition-colors duration-300 text-sm sm:text-base font-light tracking-widest uppercase"
            whileHover={{ scale: 1.02 }}
            onHoverStart={() => setIsHovering(true)}
            onHoverEnd={() => setIsHovering(false)}
          >
            <motion.span
              animate={{ opacity: isHovering ? 0 : 1 }}
              className="inline-block"
            >
              Enter the Ecosystem
            </motion.span>
            <motion.span
              animate={{ opacity: isHovering ? 1 : 0 }}
              className="absolute left-8 sm:left-12"
            >
              Cross the threshold
            </motion.span>
          </motion.button>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="micro mt-8 sm:mt-12 text-center"
        >
          Access is selective.
        </motion.p>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center space-y-2">
          <p className="micro">Scroll to explore</p>
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5 text-bronze"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </motion.div>
    </section>
  )
}