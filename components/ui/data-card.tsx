'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { cn } from '@/lib/utils'

interface DataCardProps {
  title: string
  subtitle?: string
  description?: string
  status?: {
    label: string
    variant?: 'default' | 'secondary' | 'destructive' | 'outline'
  }
  metadata?: Array<{
    label: string
    value: string
  }>
  actions?: Array<{
    label: string
    onClick: () => void
    variant?: 'default' | 'secondary' | 'destructive' | 'outline' | 'ghost' | 'link'
  }>
  className?: string
  children?: React.ReactNode
}

export function DataCard({
  title,
  subtitle,
  description,
  status,
  metadata,
  actions,
  className,
  children
}: DataCardProps) {
  return (
    <Card className={cn('w-full', className)}>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-xl">{title}</CardTitle>
            {subtitle && (
              <CardDescription className="mt-1.5">
                {subtitle}
              </CardDescription>
            )}
          </div>
          {status && (
            <Badge variant={status.variant}>{status.label}</Badge>
          )}
        </div>
        {description && (
          <CardDescription className="mt-2">
            {description}
          </CardDescription>
        )}
      </CardHeader>
      
      {(children || metadata) && (
        <CardContent>
          {children}
          {metadata && (
            <dl className="grid gap-2 text-sm">
              {metadata.map(({ label, value }, index) => (
                <div key={index} className="flex justify-between">
                  <dt className="text-muted-foreground">{label}</dt>
                  <dd className="font-medium">{value}</dd>
                </div>
              ))}
            </dl>
          )}
        </CardContent>
      )}

      {actions && actions.length > 0 && (
        <CardFooter className="flex justify-end gap-2">
          {actions.map(({ label, onClick, variant = 'default' }, index) => (
            <Button
              key={index}
              variant={variant}
              onClick={onClick}
            >
              {label}
            </Button>
          ))}
        </CardFooter>
      )}
    </Card>
  )
} 