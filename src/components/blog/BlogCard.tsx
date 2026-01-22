'use client';

import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import type { Blog } from '@/types/blog'

interface BlogCardProps {
  blog: Blog
  isSelected: boolean
  onClick: () => void
}

export function BlogCard({ blog, isSelected, onClick }: BlogCardProps) {
  const formattedDate = new Date(blog.date).toLocaleDateString('en-US', {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
  })

  const readTime = Math.ceil(blog.content.split(' ').length / 200)

  return (
    <Card
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onClick()
        }
      }}
      tabIndex={0}
      role="button"
      aria-pressed={isSelected}
      className={cn(
        'py-4 cursor-pointer transition-all duration-200 hover:shadow-md hover:border-primary/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
        isSelected && 'border-l-4 border-l-primary bg-primary/5 shadow-md'
      )}
    >
      <CardHeader className="pb-2">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <span className="font-medium uppercase tracking-wider">
            {blog.category.join(' / ')}
          </span>
          <span>|</span>
          <span>{readTime} min read</span>
          <span>|</span>
          <span className="shrink-0">{formattedDate}</span>
        </div>
        <h3 className="text-base font-semibold text-foreground line-clamp-2 mt-1">
          {blog.title}
        </h3>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground line-clamp-2">
          {blog.description}
        </p>
      </CardContent>
    </Card>
  )
}
