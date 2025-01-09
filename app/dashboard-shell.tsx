"use client"

import Link from 'next/link'
import { MobileNav } from '@/app/components/mobile-nav'
import { DesktopNav } from '@/app/components/desktop-nav'
import { UserMenu } from '@/app/components/user-menu'
import { ModeToggle } from './mode-toggle'

interface DashboardShellProps {
  children: React.ReactNode
}

export function DashboardShell({ children }: DashboardShellProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 max-w-screen-2xl items-center">
          <div className="flex items-center gap-4 md:gap-8">
            <MobileNav />
            <Link href="/" className="hidden md:inline-block text-lg font-bold tracking-tight">
              HealthcareDash
            </Link>
          </div>

          <DesktopNav />

          <div className="ml-auto flex items-center gap-2">
            <ModeToggle />
            <UserMenu />
          </div>
        </div>
      </header>

      <main className="flex-1">
        <div className="container max-w-screen-2xl py-6">
          {children}
        </div>
      </main>
    </div>
  )
}