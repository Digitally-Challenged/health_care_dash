'use client'

import { useState } from 'react'
import { AppointmentCard } from './appointment-card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Search, Filter, Plus } from 'lucide-react'

// Mock data - replace with real data fetching
const initialAppointments = [
  {
    id: '1',
    patientName: 'John Doe',
    type: 'Follow-up',
    date: '2024-01-20',
    time: '09:00 AM',
    provider: 'Dr. Smith',
    status: 'Scheduled',
    duration: '30 mins'
  },
  {
    id: '2',
    patientName: 'Jane Smith',
    type: 'Initial Consultation',
    date: '2024-01-21',
    time: '10:30 AM',
    provider: 'Dr. Wilson',
    status: 'Pending',
    duration: '45 mins'
  }
]

export function AppointmentList() {
  const [searchQuery, setSearchQuery] = useState('')
  const [appointments, setAppointments] = useState(initialAppointments)

  const handleSearch = (query: string) => {
    setSearchQuery(query)
    const filtered = initialAppointments.filter(appointment =>
      appointment.patientName.toLowerCase().includes(query.toLowerCase()) ||
      appointment.type.toLowerCase().includes(query.toLowerCase()) ||
      appointment.provider.toLowerCase().includes(query.toLowerCase())
    )
    setAppointments(filtered)
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2 flex-1 max-w-sm">
          <Search className="w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search appointments..."
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            className="h-9"
          />
        </div>
        <div className="flex items-center space-x-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="h-9">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[200px]">
              <DropdownMenuLabel>Filter by</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Status</DropdownMenuItem>
              <DropdownMenuItem>Provider</DropdownMenuItem>
              <DropdownMenuItem>Date Range</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button size="sm" className="h-9">
            <Plus className="w-4 h-4 mr-2" />
            New Appointment
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {appointments.map((appointment) => (
          <AppointmentCard key={appointment.id} appointment={appointment} />
        ))}
      </div>
    </div>
  )
} 