'use client'

import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { useRef, useState } from 'react'

interface LinkPreviewProps {
  href: string
  children: React.ReactNode
  className?: string
}

export function LinkPreview({ href, children, className }: LinkPreviewProps) {
  const [hovered, setHovered] = useState(false)
  const [above, setAbove] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  const previewSrc = `https://api.microlink.io/?url=${encodeURIComponent(href)}&screenshot=true&meta=false&embed=screenshot.url`

  const handleMouseEnter = () => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect()
      // 180px = approximate preview height + gap
      setAbove(rect.bottom + 180 > window.innerHeight)
    }
    setHovered(true)
  }

  return (
    <span
      ref={ref}
      className="relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Render the link with exactly the className the caller provides */}
      <Link href={href} target="_blank" className={className}>
        {children}
      </Link>

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: above ? -6 : 6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: above ? -6 : 6, scale: 0.97 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className="absolute left-0 z-[9999] w-60 rounded-xl border border-border bg-background shadow-2xl overflow-hidden pointer-events-none"
            style={above ? { bottom: '100%', marginBottom: '8px' } : { top: '100%', marginTop: '8px' }}
          >
            {/* Screenshot */}
            <div className="w-full h-32 bg-muted">
              <img
                src={previewSrc}
                alt={`Preview of ${href}`}
                className="w-full h-full object-cover object-top"
              />
            </div>
            {/* URL bar */}
            <div className="flex items-center gap-1.5 px-3 py-2 border-t border-border bg-muted/40">
              <span className="size-2 rounded-full bg-emerald-500 shrink-0" />
              <p className="text-[10px] text-muted-foreground truncate">
                {href.replace(/^https?:\/\//, '')}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </span>
  )
}
