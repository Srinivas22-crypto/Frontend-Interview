import type { Blog, CreateBlogInput } from '@/types/blog'

// Use relative URL for Next.js API routes
const API_BASE_URL = '/api'

export async function fetchBlogs(): Promise<Blog[]> {
  const response = await fetch(`${API_BASE_URL}/blogs`)
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}))
    throw new Error(errorData.error || `Failed to fetch blogs (${response.status})`)
  }
  return response.json()
}

export async function fetchBlogById(id: number): Promise<Blog> {
  const response = await fetch(`${API_BASE_URL}/blogs/${id}`)
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}))
    throw new Error(errorData.error || `Failed to fetch blog (${response.status})`)
  }
  return response.json()
}

export async function createBlog(blog: CreateBlogInput): Promise<Blog> {
  const newBlog = {
    ...blog,
    date: new Date().toISOString(),
    category: blog.category || ['GENERAL'],
    coverImage: blog.coverImage || 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&auto=format&fit=crop&q=60',
    tags: blog.tags || [],
  }

  const response = await fetch(`${API_BASE_URL}/blogs`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newBlog),
  })

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}))
    if (response.status >= 500) {
      throw new Error(errorData.error || 'Server error. Please try again later.')
    }
    throw new Error(errorData.error || `Failed to create blog (${response.status})`)
  }

  return response.json()
}

export async function deleteBlog(id: number, userId: string): Promise<void> {
  const response = await fetch(`${API_BASE_URL}/blogs/${id}`, {
    method: 'DELETE',
    headers: {
      'x-user-id': userId,
    },
  })

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}))
    throw new Error(errorData.error || `Failed to delete blog (${response.status})`)
  }
}

export async function toggleLike(id: number, userId: string): Promise<Blog> {
  const response = await fetch(`${API_BASE_URL}/blogs/${id}/like`, {
    method: 'POST',
    headers: {
      'x-user-id': userId,
    },
  })

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}))
    throw new Error(errorData.error || `Failed to toggle like (${response.status})`)
  }

  return response.json()
}
