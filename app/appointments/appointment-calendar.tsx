'use client'

import { useState } from 'react'
import { Calendar } from '@/components/ui/calendar'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Clock, User } from 'lucide-react'

interface Appointment {
  id: string
  patientName: string
  type: string
  date: Date
  time: string
  provider: string
  status: string
  duration: string
}

// Mock data - replace with real data fetching
const appointments: Appointment[] = [
  {
    id: '1',
    patientName: 'John Doe',
    type: 'Follow-up',
    date: new Date(2024, 0, 20),
    time: '09:00 AM',
    provider: 'Dr. Smith',
    status: 'Scheduled',
    duration: '30 mins'
  },
  {
    id: '2',
    patientName: 'Jane Smith',
    type: 'Initial Consultation',
    date: new Date(2024, 0, 21),
    time: '10:30 AM',
    provider: 'Dr. Wilson',
    status: 'Pending',
    duration: '45 mins'
  }
]

export function AppointmentCalendar() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())

  const getAppointmentsForDate = (date: Date | undefined) => {
    if (!date) return []
    return appointments.filter(
      appointment =>
        appointment.date.toDateString() === date.toDateString()
    )
  }

  const selectedAppointments = getAppointmentsForDate(selectedDate)

  return (
    <div className="grid gap-4 md:grid-cols-[400px_1fr]">
      <Card>
        <CardHeader>
          <CardTitle>Calendar</CardTitle>
          <CardDescription>Select a date to view appointments</CardDescription>
        </CardHeader>
        <CardContent>
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
            className="rounded-md border"
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>
            Appointments for {selectedDate?.toLocaleDateString()}
          </CardTitle>
          <CardDescription>
            {selectedAppointments.length} appointments scheduled
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {selectedAppointments.map((appointment) => (
              <div
                key={appointment.id}
                className="flex items-center justify-between p-4 border rounded-lg"
              >
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <User className="h-4 w-4 text-muted-foreground" />
                    <span className="font-medium">{appointment.patientName}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>{appointment.time} ({appointment.duration})</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge variant="outline">{appointment.type}</Badge>
                  <Badge>{appointment.status}</Badge>
                </div>
              </div>
            ))}
            {selectedAppointments.length === 0 && (
              <div className="text-center text-muted-foreground py-8">
                No appointments scheduled for this date
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 