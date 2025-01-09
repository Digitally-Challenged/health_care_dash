export interface AppointmentNote {
  id: string
  content: string
  createdAt: string
  createdBy: string
  type: 'general' | 'medical' | 'follow-up'
}

export interface AppointmentReminder {
  id: string
  type: 'email' | 'sms' | 'push'
  scheduledFor: string
  sent: boolean
  sentAt?: string
}

export interface Appointment {
  id: string
  patientId: string
  patientName: string
  providerId: string
  providerName: string
  type: 'check-up' | 'follow-up' | 'consultation' | 'procedure' | 'test'
  status: 'scheduled' | 'confirmed' | 'completed' | 'cancelled' | 'no-show'
  date: string
  duration: number // in minutes
  location: string
  room?: string
  notes: AppointmentNote[]
  reminders: AppointmentReminder[]
  priority: 'low' | 'medium' | 'high' | 'urgent'
  reason: string
  createdBy: string
  createdAt: string
  updatedAt: string
}

export interface AppointmentState {
  appointments: Appointment[] | null
  isLoading: boolean
  error: string | null
  fetchAppointments: () => Promise<void>
  createAppointment: (appointment: Omit<Appointment, 'id'>) => Promise<Appointment>
  updateAppointment: (id: string, updates: Partial<Appointment>) => Promise<Appointment>
  deleteAppointment: (id: string) => Promise<void>
  searchAppointments: (query: string) => Appointment[]
  reset: () => void
} 