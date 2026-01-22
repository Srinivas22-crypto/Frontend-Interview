'use client'

import { useState, useCallback } from 'react'
import { Button } from '@/components/ui/button'
import { BlogList } from './BlogList'
import { BlogDetail } from './BlogDetail'
import { CreateBlogForm } from './CreateBlogForm'
import { Navbar } from './Navbar'
import { useAuth } from '@/contexts/auth-context'
import { Plus } from 'lucide-react'

export function Home() {
  const [activeBlogId, setActiveBlogId] = useState<number | null>(null)
  const [showCreateForm, setShowCreateForm] = useState(false)
  const { isAuthenticated } = useAuth()

  const handleSelectBlog = useCallback((id: number) => {
    setActiveBlogId(id)
  }, [])

  const handleBlogCreated = useCallback((newBlogId: number) => {
    setActiveBlogId(newBlogId)
  }, [])

  const handleBlogDeleted = useCallback(() => {
    setActiveBlogId(null)
  }, [])

  return (
    <div className="min-h-screen lg:h-screen flex flex-col lg:overflow-hidden bg-background">
      {/* Navbar */}
      <Navbar />

      {/* Main Content - Fills remaining height */}
      <main className="flex-1 lg:overflow-hidden">
        <div className="container mx-auto px-4 py-6 lg:h-full">
          <div className="flex flex-col lg:flex-row gap-6 lg:h-full">
            {/* Left Panel - Blog List (30% on desktop) */}
            <aside className="w-full lg:w-[30%] lg:min-w-[320px] lg:max-w-[400px] flex flex-col lg:h-full lg:overflow-hidden">
              {/* Create Button */}
              {isAuthenticated && (
                <div className="mb-4 shrink-0">
                  <Button
                    onClick={() => setShowCreateForm(!showCreateForm)}
                    className="w-full"
                    aria-expanded={showCreateForm}
                  >
                    <Plus className="h-4 w-4 mr-2" aria-hidden="true" />
                    Create New Blog
                  </Button>
                </div>
              )}

              {/* Create Form */}
              {showCreateForm && isAuthenticated && (
                <div className="shrink-0">
                  <CreateBlogForm
                    onClose={() => setShowCreateForm(false)}
                    onBlogCreated={handleBlogCreated}
                  />
                </div>
              )}

              {/* Blog List with independent scroll on desktop */}
              <div className="lg:flex-1 lg:overflow-y-auto pr-2">
                <BlogList
                  activeBlogId={activeBlogId}
                  onSelectBlog={handleSelectBlog}
                />
              </div>
            </aside>

            {/* Right Panel - Blog Detail (70% on desktop) */}
            <section className="flex-1 lg:overflow-y-auto pl-0 lg:pl-2" aria-label="Blog content">
              <div className="bg-card rounded-lg border p-6">
                <BlogDetail
                  blogId={activeBlogId}
                  onBlogDeleted={handleBlogDeleted}
                />
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}
