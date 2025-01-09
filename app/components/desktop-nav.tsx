'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { navItems } from '@/app/config/navigation'

export function DesktopNav() {
  const pathname = usePathname()

  return (
    <nav className="hidden md:flex items-center gap-1 mx-6">
      {navItems.map((item, index) => {
        const isActive = pathname === item.href
        return (
          <Link key={index} href={item.href}>
            <Button
              variant={isActive ? "secondary" : "ghost"}
              className="h-8 w-full justify-start"
            >
              <item.icon className="mr-2 h-4 w-4" />
              <span>{item.title}</span>
              {item.label && (
                <span className="ml-2 rounded-full bg-muted px-2 py-0.5 text-xs">
                  {item.label}
                </span>
              )}
            </Button>
          </Link>
        )
      })}
    </nav>
  )
} 