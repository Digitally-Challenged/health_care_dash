'use client'

import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { CarePlan } from '@/app/care-plans/types'

interface CarePlanCardProps {
  carePlan: CarePlan
}

export function CarePlanCard({ carePlan }: CarePlanCardProps) {
  const getStatusColor = (status: CarePlan['status']) => {
    switch (status) {
      case 'active':
        return 'bg-green-500/10 text-green-500 hover:bg-green-500/20'
      case 'completed':
        return 'bg-blue-500/10 text-blue-500 hover:bg-blue-500/20'
      case 'cancelled':
        return 'bg-red-500/10 text-red-500 hover:bg-red-500/20'
      case 'draft':
        return 'bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/20'
      default:
        return 'bg-gray-500/10 text-gray-500 hover:bg-gray-500/20'
    }
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div className="space-y-1">
          <h3 className="text-sm font-medium">{carePlan.patientName}</h3>
          <p className="text-sm text-muted-foreground">{carePlan.condition}</p>
        </div>
        <Badge className={getStatusColor(carePlan.status)} variant="secondary">
          {carePlan.status.charAt(0).toUpperCase() + carePlan.status.slice(1)}
        </Badge>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span>Progress</span>
              <span className="text-muted-foreground">{carePlan.progress}%</span>
            </div>
            <Progress value={carePlan.progress} className="h-2" />
          </div>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-muted-foreground">Start Date</p>
              <p>{new Date(carePlan.startDate).toLocaleDateString()}</p>
            </div>
            <div>
              <p className="text-muted-foreground">End Date</p>
              <p>{new Date(carePlan.endDate).toLocaleDateString()}</p>
            </div>
          </div>
          <div className="text-sm">
            <p className="text-muted-foreground">Tasks</p>
            <p>{carePlan.tasks.filter(t => t.status === 'completed').length} of {carePlan.tasks.length} completed</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
} 