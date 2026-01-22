'use client'

import React from "react"

import { useState } from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { createBlog } from '../../lib/api/blogs'
import { useAuth } from '../../contexts/auth-context'
import { X } from 'lucide-react'
import type { Blog } from '../../types/blog'

interface CreateBlogFormProps {
    onClose: () => void
    onBlogCreated: (blogId: number) => void
}

export function CreateBlogForm({ onClose, onBlogCreated }: CreateBlogFormProps) {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [content, setContent] = useState('')
    const { user } = useAuth()

    const queryClient = useQueryClient()

    const mutation = useMutation({
        mutationFn: createBlog,
        onSuccess: (newBlog: Blog) => {
            queryClient.invalidateQueries({ queryKey: ['blogs'] })
            onBlogCreated(newBlog.id)
            resetForm()
            onClose()
        },
    })

    const resetForm = () => {
        setTitle('')
        setDescription('')
        setContent('')
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (!title.trim() || !description.trim() || !content.trim() || !user) return

        mutation.mutate({
            title: title.trim(),
            description: description.trim(),
            content: content.trim(),
            authorId: user.id,
            authorName: user.name,
        })
    }

    const isValid = title.trim() && description.trim() && content.trim() && user

    return (
        <Card className="mb-4">
            <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">Create New Blog</CardTitle>
                    <Button variant="ghost" size="icon-sm" onClick={onClose}>
                        <X className="h-4 w-4" />
                        <span className="sr-only">Close form</span>
                    </Button>
                </div>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit} className="space-y-3">
                    <div>
                        <label htmlFor="title" className="text-sm font-medium text-foreground">
                            Title <span className="text-destructive">*</span>
                        </label>
                        <Input
                            id="title"
                            placeholder="Enter blog title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="mt-1"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="description" className="text-sm font-medium text-foreground">
                            Description <span className="text-destructive">*</span>
                        </label>
                        <Input
                            id="description"
                            placeholder="Enter a short description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="mt-1"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="content" className="text-sm font-medium text-foreground">
                            Content <span className="text-destructive">*</span>
                        </label>
                        <textarea
                            id="content"
                            placeholder="Write your blog content here..."
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            rows={4}
                            className="mt-1 w-full min-w-0 rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-xs transition-[color,box-shadow] outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] placeholder:text-muted-foreground resize-none"
                            required
                        />
                    </div>
                    <div className="flex gap-2 pt-2">
                        <Button
                            type="submit"
                            disabled={!isValid || mutation.isPending}
                            className="flex-1"
                        >
                            {mutation.isPending ? 'Creating...' : 'Create Blog'}
                        </Button>
                        <Button type="button" variant="outline" onClick={onClose}>
                            Cancel
                        </Button>
                    </div>
                    {mutation.isError && (
                        <p className="text-sm text-destructive">
                            {mutation.error instanceof Error
                                ? mutation.error.message
                                : 'Failed to create blog. Please try again.'}
                        </p>
                    )}
                </form>
            </CardContent>
        </Card>
    )
}
