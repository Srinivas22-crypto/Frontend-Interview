'use client'

import { useState } from 'react'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { fetchBlogById, toggleLike, deleteBlog } from '@/lib/api/blogs'
import { BlogDetailSkeleton } from './BlogSkeleton'
import { EmptyState } from './EmptyState'
import { useAuth } from '@/contexts/auth-context'
import { Heart, Share2, Trash2, Check } from 'lucide-react'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'

interface BlogDetailProps {
  blogId: number | null
  onBlogDeleted?: () => void
}

export function BlogDetail({ blogId, onBlogDeleted }: BlogDetailProps) {
  const { user } = useAuth()
  const queryClient = useQueryClient()
  const [copied, setCopied] = useState(false)

  const { data: blog, isLoading, isError } = useQuery({
    queryKey: ['blog', blogId],
    queryFn: () => fetchBlogById(blogId!),
    enabled: blogId !== null,
  })

  const likeMutation = useMutation({
    mutationFn: () => toggleLike(blogId!, user!.id),
    onMutate: async () => {
      // Cancel any outgoing refetches
      await queryClient.cancelQueries({ queryKey: ['blog', blogId] })
      await queryClient.cancelQueries({ queryKey: ['blogs'] })

      // Snapshot the previous value
      const previousBlog = queryClient.getQueryData(['blog', blogId])

      // Optimistically update
      if (blog && user) {
        const isLiked = blog.likedBy.includes(user.id)
        queryClient.setQueryData(['blog', blogId], {
          ...blog,
          likes: isLiked ? blog.likes - 1 : blog.likes + 1,
          likedBy: isLiked 
            ? blog.likedBy.filter((id: string) => id !== user.id)
            : [...blog.likedBy, user.id],
        })
      }

      return { previousBlog }
    },
    onError: (_err, _variables, context) => {
      // Rollback on error
      if (context?.previousBlog) {
        queryClient.setQueryData(['blog', blogId], context.previousBlog)
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['blog', blogId] })
      queryClient.invalidateQueries({ queryKey: ['blogs'] })
    },
  })

  const deleteMutation = useMutation({
    mutationFn: () => deleteBlog(blogId!, user!.id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['blogs'] })
      onBlogDeleted?.()
    },
  })

  const handleShare = async () => {
    const url = `${window.location.origin}?blog=${blogId}`
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Fallback for browsers that don't support clipboard API
      const textArea = document.createElement('textarea')
      textArea.value = url
      document.body.appendChild(textArea)
      textArea.select()
      document.execCommand('copy')
      document.body.removeChild(textArea)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  if (blogId === null) {
    return (
      <div className="flex items-center justify-center h-full">
        <EmptyState 
          title="Select a blog" 
          description="Choose a blog from the list to view its details."
        />
      </div>
    )
  }

  if (isLoading) {
    return <BlogDetailSkeleton />
  }

  if (isError || !blog) {
    return (
      <div className="flex items-center justify-center h-full">
        <EmptyState 
          title="Error loading blog" 
          description="Something went wrong while loading the blog. Please try again."
        />
      </div>
    )
  }

  const formattedDate = new Date(blog.date).toLocaleDateString('en-US', {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
  })

  const readTime = Math.ceil(blog.content.split(' ').length / 200)
  const tags = blog.tags?.length ? blog.tags : [...blog.category, 'Blog', 'Article']
  const isLiked = user ? blog.likedBy.includes(user.id) : false
  const isAuthor = user && blog.authorId === user.id

  return (
    <article className="space-y-6">
      {/* Cover Image */}
      <div className="relative w-full aspect-video overflow-hidden rounded-lg bg-muted">
        <img
          src={blog.coverImage || "/placeholder.svg"}
          alt={`Cover image for ${blog.title}`}
          className="w-full h-full object-cover"
          crossOrigin="anonymous"
        />
      </div>

      {/* Blog Title */}
      <h1 className="text-2xl md:text-3xl font-bold text-foreground leading-tight text-balance">
        {blog.title}
      </h1>

      {/* Author & Metadata Row */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span className="font-medium text-foreground">{blog.authorName}</span>
          <span>|</span>
          <span className="uppercase tracking-wider">
            {blog.category.join(' / ')}
          </span>
          <span>|</span>
          <span>{readTime} min read</span>
          <span>|</span>
          <span>{formattedDate}</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-2 pb-2 border-b">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => user && likeMutation.mutate()}
          disabled={!user || likeMutation.isPending}
          className={isLiked ? 'text-red-500 hover:text-red-600' : ''}
          aria-label={isLiked ? 'Unlike this blog' : 'Like this blog'}
        >
          <Heart className={`h-4 w-4 mr-1 ${isLiked ? 'fill-current' : ''}`} />
          <span>{blog.likes}</span>
        </Button>

        <Button
          variant="ghost"
          size="sm"
          onClick={handleShare}
          aria-label="Copy link to clipboard"
        >
          {copied ? (
            <>
              <Check className="h-4 w-4 mr-1 text-green-500" />
              <span className="text-green-500">Copied!</span>
            </>
          ) : (
            <>
              <Share2 className="h-4 w-4 mr-1" />
              <span>Share</span>
            </>
          )}
        </Button>

        {isAuthor && (
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="text-destructive hover:text-destructive hover:bg-destructive/10"
                aria-label="Delete this blog"
              >
                <Trash2 className="h-4 w-4 mr-1" />
                <span>Delete</span>
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Delete Blog</AlertDialogTitle>
                <AlertDialogDescription>
                  Are you sure you want to delete &quot;{blog.title}&quot;? This action cannot be undone.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction
                  onClick={() => deleteMutation.mutate()}
                  className="bg-destructive text-white hover:bg-destructive/90"
                  disabled={deleteMutation.isPending}
                >
                  {deleteMutation.isPending ? 'Deleting...' : 'Delete'}
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        )}
      </div>

      {/* Blog Description */}
      <p className="text-base md:text-lg text-foreground/80 font-medium leading-relaxed">
        {blog.description}
      </p>

      {/* Blog Content */}
      <div className="prose prose-neutral max-w-none">
        <p className="text-foreground/70 leading-relaxed whitespace-pre-wrap">
          {blog.content}
        </p>
      </div>

      {/* Tags Section */}
      <div className="pt-4 border-t">
        <h4 className="text-sm font-medium text-muted-foreground mb-3">Tags</h4>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <Badge key={index} variant="secondary" className="rounded-full">
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </article>
  )
}
