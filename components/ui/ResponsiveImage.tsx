'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'

interface ResponsiveImageProps {
  landscapeSrc: string
  portraitSrc: string
  alt: string
  priority?: boolean
  className?: string
  fill?: boolean
  objectFit?: 'cover' | 'contain' | 'fill'
}

export default function ResponsiveImage({
  landscapeSrc,
  portraitSrc,
  alt,
  priority = false,
  className = '',
  fill = true,
  objectFit = 'cover'
}: ResponsiveImageProps) {
  const [isPortrait, setIsPortrait] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleResize = () => {
      setIsPortrait(window.innerWidth <= 768)
    }
    
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  if (!mounted) {
    return <div className={className} />
  }

  const src = isPortrait ? portraitSrc : landscapeSrc

  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        className={className}
        style={{
          objectFit: objectFit,
          objectPosition: 'center'
        }}
      />
    )
  }

  return (
    <Image
      src={src}
      alt={alt}
      priority={priority}
      className={className}
    />
  )
}