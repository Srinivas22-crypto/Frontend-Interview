'use client'

import { QueryProvider } from '@/providers/query-provider'
import { AuthProvider } from '@/contexts/auth-context'
import { Home } from '@/components/blog/Home'

export default function Page() {
  return (
    <QueryProvider>
      <AuthProvider>
        <Home />
      </AuthProvider>
    </QueryProvider>
  )
}
