'use client'

import { useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import { fetchBlogs } from '@/lib/api/blogs'
import { BlogCard } from './BlogCard'
import { BlogListSkeleton } from './BlogSkeleton'
import { EmptyState } from './EmptyState'

interface BlogListProps {
  activeBlogId: number | null
  onSelectBlog: (id: number) => void
}

export function BlogList({ activeBlogId, onSelectBlog }: BlogListProps) {
  const { data: blogs, isLoading, isError } = useQuery({
    queryKey: ['blogs'],
    queryFn: fetchBlogs,
  })

  // Auto-select first blog on initial load
  useEffect(() => {
    if (blogs && blogs.length > 0 && activeBlogId === null) {
      onSelectBlog(blogs[0].id)
    }
  }, [blogs, activeBlogId, onSelectBlog])

  if (isLoading) {
    return <BlogListSkeleton count={5} />
  }

  if (isError) {
    return (
      <EmptyState 
        title="Error loading blogs" 
        description="Something went wrong. Please check if the server is running at localhost:3001."
      />
    )
  }

  if (!blogs || blogs.length === 0) {
    return <EmptyState />
  }

  return (
    <div className="space-y-3">
      {blogs.map((blog) => (
        <BlogCard
          key={blog.id}
          blog={blog}
          isSelected={blog.id === activeBlogId}
          onClick={() => onSelectBlog(blog.id)}
        />
      ))}
    </div>
  )
}
