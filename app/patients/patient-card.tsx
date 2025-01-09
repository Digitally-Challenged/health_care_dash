'use client'

import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { User, Calendar, Activity } from 'lucide-react'

type RiskVariant = 'destructive' | 'secondary' | 'default'

interface PatientCardProps {
  patient: {
    id: string
    name: string
    age: number
    gender: string
    condition: string
    riskLevel: string
    lastVisit: string
    status: string
  }
}

export function PatientCard({ patient }: PatientCardProps) {
  const riskVariants: Record<string, RiskVariant> = {
    High: 'destructive',
    Medium: 'secondary',
    Low: 'default'
  }

  const getRiskBadge = (risk: string): RiskVariant => {
    return riskVariants[risk] || 'secondary'
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <User className="h-4 w-4 text-muted-foreground" />
            <CardTitle className="text-lg">{patient.name}</CardTitle>
          </div>
          <Badge variant={getRiskBadge(patient.riskLevel)}>
            {patient.riskLevel} Risk
          </Badge>
        </div>
        <CardDescription>
          {patient.age} years • {patient.gender}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Activity className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">{patient.condition}</span>
            </div>
            <Badge variant="outline">{patient.status}</Badge>
          </div>
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <span>Last visit: {new Date(patient.lastVisit).toLocaleDateString()}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
} 