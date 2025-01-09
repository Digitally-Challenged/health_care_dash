'use client'

import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Calendar, Clock, User, Stethoscope } from 'lucide-react'

interface AppointmentCardProps {
  appointment: {
    id: string
    patientName: string
    type: string
    date: string
    time: string
    provider: string
    status: string
    duration: string
  }
}

export function AppointmentCard({ appointment }: AppointmentCardProps) {
  const getStatusColor = (status: string) => {
    const colors = {
      'Scheduled': 'success',
      'Pending': 'warning',
      'Completed': 'secondary',
      'Cancelled': 'destructive'
    }
    return colors[status as keyof typeof colors] || 'secondary'
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <User className="h-4 w-4 text-muted-foreground" />
              <CardTitle className="text-lg">{appointment.patientName}</CardTitle>
            </div>
            <CardDescription className="flex items-center space-x-2">
              <Stethoscope className="h-4 w-4" />
              <span>{appointment.type}</span>
            </CardDescription>
          </div>
          <Badge variant={getStatusColor(appointment.status)}>
            {appointment.status}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="flex items-center space-x-2 text-sm">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <span>{new Date(appointment.date).toLocaleDateString()}</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4 text-muted-foreground" />
              <span>{appointment.time}</span>
            </div>
            <span className="text-muted-foreground">{appointment.duration}</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <User className="h-4 w-4" />
            <span>Dr. {appointment.provider}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
} 