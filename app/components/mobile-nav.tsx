'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu } from 'lucide-react'
import { navItems } from '@/app/config/navigation'

export function MobileNav() {
  const pathname = usePathname()

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="md:hidden"
          size="icon"
        >
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[240px] p-0">
        <div className="flex h-[60px] items-center border-b px-4 py-2">
          <Link href="/" className="text-lg font-bold tracking-tight">
            HealthcareDash
          </Link>
        </div>
        <nav className="grid gap-1 p-2">
          {navItems.map((item, index) => {
            const isActive = pathname === item.href
            return (
              <Link key={index} href={item.href}>
                <Button
                  variant={isActive ? "secondary" : "ghost"}
                  className="w-full justify-start"
                >
                  <item.icon className="mr-2 h-4 w-4" />
                  <span className="flex-1 text-left">{item.title}</span>
                  {item.label && (
                    <span className="ml-auto text-xs text-muted-foreground">
                      {item.label}
                    </span>
                  )}
                </Button>
              </Link>
            )
          })}
        </nav>
      </SheetContent>
    </Sheet>
  )
} 