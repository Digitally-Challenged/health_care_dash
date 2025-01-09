import { Appointment } from './types'

const mockAppointments: Appointment[] = [
  {
    id: '1',
    patientId: 'p1',
    patientName: 'Alice Johnson',
    providerId: 'dr1',
    providerName: 'Dr. Sarah Johnson',
    type: 'check-up',
    status: 'scheduled',
    date: '2024-02-15T10:30:00Z',
    duration: 30,
    location: 'Main Clinic',
    room: '101',
    notes: [
      {
        id: 'n1',
        content: 'Regular check-up for diabetes management',
        createdAt: '2024-01-15T10:30:00Z',
        createdBy: 'Dr. Sarah Johnson',
        type: 'general'
      }
    ],
    reminders: [
      {
        id: 'r1',
        type: 'email',
        scheduledFor: '2024-02-14T10:30:00Z',
        sent: false
      },
      {
        id: 'r2',
        type: 'sms',
        scheduledFor: '2024-02-15T08:30:00Z',
        sent: false
      }
    ],
    priority: 'medium',
    reason: 'Regular diabetes check-up',
    createdBy: 'Dr. Sarah Johnson',
    createdAt: '2024-01-15T10:30:00Z',
    updatedAt: '2024-01-15T10:30:00Z'
  },
  {
    id: '2',
    patientId: 'p2',
    patientName: 'Bob Smith',
    providerId: 'dr1',
    providerName: 'Dr. Sarah Johnson',
    type: 'follow-up',
    status: 'confirmed',
    date: '2024-02-20T14:00:00Z',
    duration: 45,
    location: 'Main Clinic',
    room: '102',
    notes: [
      {
        id: 'n2',
        content: 'Follow-up on blood pressure medication',
        createdAt: '2024-01-20T14:00:00Z',
        createdBy: 'Dr. Sarah Johnson',
        type: 'medical'
      }
    ],
    reminders: [
      {
        id: 'r3',
        type: 'email',
        scheduledFor: '2024-02-19T14:00:00Z',
        sent: false
      }
    ],
    priority: 'high',
    reason: 'Blood pressure medication review',
    createdBy: 'Dr. Sarah Johnson',
    createdAt: '2024-01-20T14:00:00Z',
    updatedAt: '2024-01-20T14:00:00Z'
  }
]

// Simulated API calls with artificial delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

export async function fetchAppointments() {
  await delay(1000)
  return mockAppointments
}

export async function createAppointmentData(appointment: Omit<Appointment, 'id'>) {
  await delay(1000)
  const newAppointment: Appointment = {
    ...appointment,
    id: Math.random().toString(36).substr(2, 9),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  }
  return newAppointment
}

export async function updateAppointmentData(id: string, updates: Partial<Appointment>) {
  await delay(1000)
  const appointment = mockAppointments.find(appt => appt.id === id)
  if (!appointment) throw new Error('Appointment not found')
  
  const updatedAppointment: Appointment = {
    ...appointment,
    ...updates,
    updatedAt: new Date().toISOString()
  }
  return updatedAppointment
}

export async function deleteAppointmentData(id: string) {
  await delay(1000)
  const appointment = mockAppointments.find(appt => appt.id === id)
  if (!appointment) throw new Error('Appointment not found')
} 