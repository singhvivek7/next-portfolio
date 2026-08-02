'use client'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Card, CardHeader } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import { ChevronRightIcon, TrendingUp } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

type Promotion = {
  title: string
  start: string
  end: string
  description?: string
}

interface ResumeCardProps {
  logoUrl: string
  altText: string
  title: string
  subtitle?: string
  href?: string
  badges?: readonly string[]
  period: string
  description?: string
  promotions?: Promotion[]
}

export const ResumeCard = ({
  logoUrl,
  altText,
  title,
  subtitle,
  href,
  badges,
  period,
  description,
  promotions,
}: ResumeCardProps) => {
  const [isExpanded, setIsExpanded] = React.useState(false)

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (description) {
      e.preventDefault()
      setIsExpanded(!isExpanded)
    }
  }

  return (
    <Link
      href={href || '#'}
      target="_blank"
      className="block cursor-pointer"
      onClick={handleClick}
    >
      <Card className="flex">
        <div className="flex-none">
          <Avatar className="border size-12 m-auto bg-muted-background dark:bg-foreground">
            <AvatarImage
              src={logoUrl}
              alt={altText}
              className="object-contain p-1.5"
            />
            <AvatarFallback>{altText[0]}</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex-grow ml-4 items-center flex-col group">
          <CardHeader>
            {/* Company row */}
            <div className="flex items-center justify-between gap-x-2 text-base">
              <h3 className="inline-flex items-center justify-center font-semibold leading-none text-xs sm:text-sm">
                {title}
                {badges && (
                  <span className="inline-flex gap-x-1">
                    {badges.map((badge, index) => (
                      <Badge
                        variant="secondary"
                        className="align-middle text-xs"
                        key={index}
                      >
                        {badge}
                      </Badge>
                    ))}
                  </span>
                )}
                <ChevronRightIcon
                  className={cn(
                    'size-4 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100',
                    isExpanded ? 'rotate-90' : 'rotate-0',
                  )}
                />
              </h3>
              <div className="text-xs sm:text-sm tabular-nums text-muted-foreground text-right">
                {period}
              </div>
            </div>

            {/* Promotion timeline — always visible */}
            {promotions && promotions.length > 0 ? (
              <div className="mt-2">
                {/* Career progression label */}
                <div className="flex items-center gap-1 mb-2">
                  <TrendingUp className="size-3 text-emerald-500" />
                  <span className="text-[10px] font-semibold text-emerald-500 uppercase tracking-wider">
                    Career Progression
                  </span>
                </div>

                <ol className="relative border-l border-border ml-1.5 space-y-2.5">
                  {promotions.map((promo, idx) => (
                    <li key={idx} className="ml-4">
                      {/* Timeline dot */}
                      <span
                        className={cn(
                          'absolute -left-[7px] flex size-3 items-center justify-center rounded-full ring-2 ring-background',
                          idx === 0
                            ? 'bg-emerald-500'
                            : 'bg-muted-foreground/40',
                        )}
                      >
                        {idx === 0 && (
                          <span className="absolute inline-flex size-3 animate-ping rounded-full bg-emerald-400 opacity-60" />
                        )}
                      </span>

                      <div className="flex flex-wrap items-baseline justify-between gap-x-2">
                        <span className="text-xs font-medium leading-tight">
                          {promo.title}
                        </span>
                        <span className="text-[11px] tabular-nums text-muted-foreground whitespace-nowrap">
                          {promo.start} – {promo.end}
                        </span>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            ) : (
              /* Fallback: plain subtitle when no promotions */
              subtitle && <div className="font-sans text-xs">{subtitle}</div>
            )}
          </CardHeader>

          {/* Expandable description */}
          {description && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: isExpanded ? 1 : 0,
                height: isExpanded ? 'auto' : 0,
              }}
              transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="overflow-hidden"
            >
              <p className="mt-2 pb-4 pr-2 text-xs sm:text-sm text-muted-foreground">
                {description}
              </p>
            </motion.div>
          )}
        </div>
      </Card>
    </Link>
  )
}
