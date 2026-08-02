'use client'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { GraduationCap, MapPin } from 'lucide-react'
import Link from 'next/link'
import { LinkPreview } from '@/components/link-preview'

type EducationItem = {
  school: string
  href: string
  degree: string
  logoUrl: string
  start: string
  end: string
  location?: string
}

interface EducationTimelineProps {
  education: EducationItem[]
}

function EducationEntry({
  edu,
  isLast,
}: {
  edu: EducationItem
  isLast: boolean
}) {
  return (
    <div className="relative flex gap-4">
      {/* Left rail */}
      <div className="flex flex-col items-center flex-none w-12">
        {/* School logo circle */}
        <LinkPreview href={edu.href} className="z-10 flex-none block">
          <Avatar className="size-12 border-2 border-border bg-muted-background dark:bg-foreground shadow-sm hover:ring-2 hover:ring-primary/30 transition-all">
            <AvatarImage
              src={edu.logoUrl}
              alt={edu.school}
              className="object-contain p-1.5"
            />
            <AvatarFallback className="text-xs font-bold">
              {edu.school[0]}
            </AvatarFallback>
          </Avatar>
        </LinkPreview>

        {/* Straight thread to next entry */}
        {!isLast && (
          <div className="w-px flex-1 mt-1 bg-gradient-to-b from-border to-border/30 min-h-[24px]" />
        )}
      </div>

      {/* Right: content */}
      <div className="flex-1 pb-6 min-w-0">
        <div className="flex items-start justify-between gap-2 mb-1">
          <LinkPreview
            href={edu.href}
            className="font-semibold text-sm text-foreground/80 hover:underline truncate block"
          >
            {edu.school}
          </LinkPreview>
          <span className="text-[11px] tabular-nums text-muted-foreground whitespace-nowrap mt-0.5">
            {edu.start} – {edu.end}
          </span>
        </div>

        {edu.location && (
          <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
            <MapPin className="size-3 shrink-0" />
            <span>{edu.location}</span>
          </div>
        )}
        <div className="flex items-center gap-1.5 mt-0.5 text-xs text-foreground/85 font-medium">
          <GraduationCap className="size-3 shrink-0 text-muted-foreground" />
          <span>{edu.degree}</span>
        </div>
      </div>
    </div>
  )
}

export function EducationTimeline({ education }: EducationTimelineProps) {
  return (
    <div className="mt-1">
      {education.map((item, idx) => (
        <EducationEntry
          key={item.school}
          edu={item}
          isLast={idx === education.length - 1}
        />
      ))}
    </div>
  )
}
