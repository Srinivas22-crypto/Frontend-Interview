import { NextResponse } from 'next/server'
import { blogStore } from '../../route'

export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  const blogId = parseInt(id, 10)

  if (isNaN(blogId)) {
    return NextResponse.json({ error: 'Invalid blog ID' }, { status: 400 })
  }

  const userId = request.headers.get('x-user-id')

  if (!userId) {
    return NextResponse.json({ error: 'User ID is required' }, { status: 401 })
  }

  const blog = blogStore.getById(blogId)

  if (!blog) {
    return NextResponse.json({ error: 'Blog not found' }, { status: 404 })
  }

  const isLiked = blog.likedBy.includes(userId)

  if (isLiked) {
    // Unlike
    const updatedBlog = blogStore.update(blogId, {
      likes: blog.likes - 1,
      likedBy: blog.likedBy.filter((id) => id !== userId),
    })
    return NextResponse.json(updatedBlog)
  } else {
    // Like
    const updatedBlog = blogStore.update(blogId, {
      likes: blog.likes + 1,
      likedBy: [...blog.likedBy, userId],
    })
    return NextResponse.json(updatedBlog)
  }
}
