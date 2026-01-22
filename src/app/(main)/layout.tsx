'use client'

import React from "react"

import { QueryProvider } from '@/providers/query-provider'
import { AuthProvider } from '@/contexts/auth-context'
import { Navbar } from '@/components/blog/Navbar'

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <QueryProvider>
      <AuthProvider>
        <div className="min-h-screen flex flex-col bg-background">
          <Navbar />
          {children}
        </div>
      </AuthProvider>
    </QueryProvider>
  )
}
