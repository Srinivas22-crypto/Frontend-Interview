import { NextResponse } from 'next/server'
import { blogStore } from '../route'

export async function GET(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 300))

    const { id } = await params
    const blogId = parseInt(id)

    const blog = blogStore.getById(blogId)

    if (!blog) {
        return NextResponse.json(
            { error: 'Blog not found' },
            { status: 404 }
        )
    }

    return NextResponse.json(blog)
}

export async function DELETE(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 300))

    const { id } = await params
    const blogId = parseInt(id)

    if (!blogStore.getById(blogId)) {
        return NextResponse.json(
            { error: 'Blog not found' },
            { status: 404 }
        )
    }

    blogStore.delete(blogId)

    return NextResponse.json({ success: true })
}
