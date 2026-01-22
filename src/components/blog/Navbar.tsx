'use client'

import React from "react"

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useAuth } from '@/contexts/auth-context'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { BookOpen, LogOut, Menu, X, User } from 'lucide-react'

const navLinks = [
  { label: 'Tools', href: '/tools' },
  { label: 'Practice', href: '/practice' },
  { label: 'Events', href: '/events' },
  { label: 'Job Board', href: '/job-board' },
  { label: 'Points', href: '/points' },
]

export function Navbar() {
  const { user, isAuthenticated, login, logout } = useAuth()
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [signInOpen, setSignInOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoggingIn, setIsLoggingIn] = useState(false)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim()) return

    setIsLoggingIn(true)
    try {
      await login(email, password)
      setEmail('')
      setPassword('')
      setSignInOpen(false)
    } finally {
      setIsLoggingIn(false)
    }
  }

  return (
    <header className="shrink-0 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Left: Logo */}
          <div className="flex items-center gap-2 shrink-0">
            <BookOpen className="h-6 w-6 text-primary" aria-hidden="true" />
            <span className="text-xl font-bold text-foreground">CA Monk Blog</span>
          </div>

          {/* Center: Navigation Links - Desktop */}
          <nav className="hidden md:flex items-center justify-center gap-1 flex-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={cn(
                    'px-3 py-2 text-sm font-medium transition-colors rounded-md',
                    isActive
                      ? 'text-foreground font-semibold bg-accent'
                      : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                  )}
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>

          {/* Right: Profile Button - Desktop */}
          <div className="hidden md:flex items-center gap-4 shrink-0">
            {isAuthenticated && user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className="rounded-full px-4">
                    <User className="h-4 w-4 mr-2" aria-hidden="true" />
                    Profile
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-64">
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex items-center gap-3 py-2">
                      <img
                        src={user.avatar || "/placeholder.svg"}
                        alt={`${user.name}'s avatar`}
                        className="w-10 h-10 rounded-full bg-muted"
                        crossOrigin="anonymous"
                      />
                      <div className="flex flex-col min-w-0">
                        <p className="text-sm font-medium text-foreground truncate">
                          {user.name}
                        </p>
                        <p className="text-xs text-muted-foreground truncate">
                          {user.email}
                        </p>
                      </div>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={logout} className="cursor-pointer">
                    <LogOut className="h-4 w-4 mr-2" aria-hidden="true" />
                    Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Dialog open={signInOpen} onOpenChange={setSignInOpen}>
                <DialogTrigger asChild>
                  <Button className="rounded-full px-4">
                    Sign In
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle>Sign In</DialogTitle>
                  </DialogHeader>
                  <form onSubmit={handleLogin} className="space-y-4 mt-4">
                    <div>
                      <label htmlFor="signin-email" className="text-sm font-medium text-foreground">
                        Email
                      </label>
                      <Input
                        id="signin-email"
                        type="email"
                        placeholder="you@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="mt-1"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="signin-password" className="text-sm font-medium text-foreground">
                        Password
                      </label>
                      <Input
                        id="signin-password"
                        type="password"
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="mt-1"
                      />
                    </div>
                    <Button type="submit" className="w-full" disabled={isLoggingIn || !email.trim()}>
                      {isLoggingIn ? 'Signing in...' : 'Sign In'}
                    </Button>
                    <p className="text-xs text-muted-foreground text-center">
                      Demo: Enter any email to sign in
                    </p>
                  </form>
                </DialogContent>
              </Dialog>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            {isAuthenticated && user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="rounded-full">
                    <img
                      src={user.avatar || "/placeholder.svg"}
                      alt={`${user.name}'s avatar`}
                      className="w-6 h-6 rounded-full"
                      crossOrigin="anonymous"
                    />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-64">
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex items-center gap-3 py-2">
                      <img
                        src={user.avatar || "/placeholder.svg"}
                        alt={`${user.name}'s avatar`}
                        className="w-10 h-10 rounded-full bg-muted"
                        crossOrigin="anonymous"
                      />
                      <div className="flex flex-col min-w-0">
                        <p className="text-sm font-medium text-foreground truncate">
                          {user.name}
                        </p>
                        <p className="text-xs text-muted-foreground truncate">
                          {user.email}
                        </p>
                      </div>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={logout} className="cursor-pointer">
                    <LogOut className="h-4 w-4 mr-2" aria-hidden="true" />
                    Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Dialog open={signInOpen} onOpenChange={setSignInOpen}>
                <DialogTrigger asChild>
                  <Button size="sm" className="rounded-full">
                    Sign In
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle>Sign In</DialogTitle>
                  </DialogHeader>
                  <form onSubmit={handleLogin} className="space-y-4 mt-4">
                    <div>
                      <label htmlFor="mobile-signin-email" className="text-sm font-medium text-foreground">
                        Email
                      </label>
                      <Input
                        id="mobile-signin-email"
                        type="email"
                        placeholder="you@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="mt-1"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="mobile-signin-password" className="text-sm font-medium text-foreground">
                        Password
                      </label>
                      <Input
                        id="mobile-signin-password"
                        type="password"
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="mt-1"
                      />
                    </div>
                    <Button type="submit" className="w-full" disabled={isLoggingIn || !email.trim()}>
                      {isLoggingIn ? 'Signing in...' : 'Sign In'}
                    </Button>
                    <p className="text-xs text-muted-foreground text-center">
                      Demo: Enter any email to sign in
                    </p>
                  </form>
                </DialogContent>
              </Dialog>
            )}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden border-t py-4">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={cn(
                      'px-3 py-2 text-sm font-medium transition-colors rounded-md',
                      isActive
                        ? 'text-foreground font-semibold bg-accent'
                        : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                    )}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                )
              })}
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
