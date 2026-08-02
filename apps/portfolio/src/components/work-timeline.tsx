'use client'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, MapPin, Briefcase } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { LinkPreview } from '@/components/link-preview'

type Promotion = {
  title: string
  start: string
  end: string
  description?: string
}

type WorkItem = {
  company: string
  href: string
  badges: string[]
  location: string
  title: string
  logoUrl: string
  start: string
  end?: string
  description: string
  promotions?: Promotion[]
}

interface WorkTimelineProps {
  work: WorkItem[]
}

function WorkEntry({
  work,
  isLast,
}: {
  work: WorkItem
  isLast: boolean
}) {
  const [expanded, setExpanded] = React.useState(false)
  const hasRoles = work.promotions && work.promotions.length > 0

  return (
    <div className="relative flex gap-4">
      {/* Left rail: logo + thread */}
      <div className="flex flex-col items-center flex-none w-12">
        {/* Company logo circle */}
        <LinkPreview href={work.href} className="z-10 flex-none block">
          <Avatar className="size-12 border-2 border-border bg-muted-background dark:bg-foreground shadow-sm hover:ring-2 hover:ring-primary/30 transition-all">
            <AvatarImage
              src={work.logoUrl}
              alt={work.company}
              className="object-contain p-1.5"
            />
            <AvatarFallback className="text-xs font-bold">
              {work.company[0]}
            </AvatarFallback>
          </Avatar>
        </LinkPreview>

        {/* Straight thread to next company */}
        {!isLast && (
          <div className="w-px flex-1 mt-1 bg-border min-h-[24px]" />
        )}
      </div>

      {/* Right: content */}
      <div className="flex-1 pb-6 min-w-0">
        {/* Company header */}
        <div className="flex items-start justify-between gap-2 mb-1">
          <div className="min-w-0">
            <LinkPreview
              href={work.href}
              className="font-semibold text-sm text-foreground/80 hover:underline truncate block"
            >
              {work.company}
            </LinkPreview>
            {work.badges && work.badges.length > 0 && (
              <span className="inline-flex gap-1 mt-0.5">
                {work.badges.map((b, i) => (
                  <Badge key={i} variant="secondary" className="text-[10px]">
                    {b}
                  </Badge>
                ))}
              </span>
            )}
          </div>
          <span className="text-[11px] tabular-nums text-muted-foreground whitespace-nowrap mt-0.5">
            {work.start} – {work.end ?? 'Present'}
          </span>
        </div>

        {/* Location */}
        {work.location && (
          <div className="flex items-center gap-1 text-[11px] text-muted-foreground mb-2">
            <MapPin className="size-3" />
            {work.location}
          </div>
        )}

        {/* Roles / promotions sub-list */}
        {hasRoles ? (
          <ol className="mb-1">
            {work.promotions!.map((promo, idx) => (
              <li key={idx} className="flex gap-2">
                {/* Left rail: icon + connecting line */}
                <div className="flex flex-col items-center">
                  <Briefcase className="size-3 shrink-0 text-muted-foreground mt-0.5" />
                  {idx < work.promotions!.length - 1 && (
                    <div className="w-px flex-1 mt-1 bg-border min-h-[16px]" />
                  )}
                </div>
                {/* Right: title + date */}
                <div className="flex items-baseline justify-between gap-2 flex-1 pb-1.5">
                  <span className="text-xs font-medium text-foreground/85">{promo.title}</span>
                  <span className="text-[11px] tabular-nums text-muted-foreground whitespace-nowrap">
                    {promo.start} – {promo.end}
                  </span>
                </div>
              </li>
            ))}
          </ol>
        ) : (
          <div className="flex items-center gap-1.5 mb-2">
            <Briefcase className="size-3 shrink-0 text-muted-foreground" />
            <p className="text-xs font-medium text-foreground/85">{work.title}</p>
          </div>
        )}

        {/* Expandable description */}
        {work.description && (
          <div>
            <button
              onClick={() => setExpanded((v) => !v)}
              className="flex items-center gap-1 text-[11px] text-muted-foreground hover:text-foreground transition-colors"
            >
              <ChevronDown
                className={cn(
                  'size-3.5 transition-transform duration-300',
                  expanded && 'rotate-180',
                )}
              />
              {expanded ? 'Hide details' : 'Show details'}
            </button>
            <AnimatePresence initial={false}>
              {expanded && (
                <motion.p
                  key="desc"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="mt-2 text-xs text-muted-foreground leading-relaxed overflow-hidden"
                >
                  {work.description}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        )}
      </div>
    </div>
  )
}

export function WorkTimeline({ work }: WorkTimelineProps) {
  return (
    <div className="mt-1">
      {work.map((item, idx) => (
        <WorkEntry key={item.company} work={item} isLast={idx === work.length - 1} />
      ))}
    </div>
  )
}
