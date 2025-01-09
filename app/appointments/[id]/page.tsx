import { DashboardShell } from '@/app/dashboard-shell'
import { notFound } from 'next/navigation'

interface AppointmentPageProps {
  params: {
    id: string
  }
}

// This would be replaced with a real data fetch
async function getAppointment(id: string) {
  // Mock data - replace with actual data fetching
  const appointment = {
    id: '1',
    patientName: 'John Doe',
    patientId: '123',
    date: '2024-01-15T10:00:00',
    duration: 30,
    type: 'Check-up',
    doctor: 'Dr. Jane Smith',
    location: 'Room 101',
    status: 'Scheduled',
    notes: 'Regular follow-up appointment',
    reasonForVisit: 'Blood pressure monitoring',
    previousVisit: '2023-12-15',
    insurance: {
      provider: 'HealthCare Plus',
      policyNumber: 'HC123456'
    }
  }

  if (id !== '1') {
    return null
  }

  return appointment
}

export default async function AppointmentPage({ params }: AppointmentPageProps) {
  const appointment = await getAppointment(params.id)

  if (!appointment) {
    notFound()
  }

  return (
    <DashboardShell>
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight">
            Appointment with {appointment.patientName}
          </h1>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Appointment Details</h2>
            <dl className="space-y-2">
              <div className="flex justify-between">
                <dt className="font-medium text-muted-foreground">Date & Time</dt>
                <dd>{new Date(appointment.date).toLocaleString()}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="font-medium text-muted-foreground">Duration</dt>
                <dd>{appointment.duration} minutes</dd>
              </div>
              <div className="flex justify-between">
                <dt className="font-medium text-muted-foreground">Type</dt>
                <dd>{appointment.type}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="font-medium text-muted-foreground">Doctor</dt>
                <dd>{appointment.doctor}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="font-medium text-muted-foreground">Location</dt>
                <dd>{appointment.location}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="font-medium text-muted-foreground">Status</dt>
                <dd>{appointment.status}</dd>
              </div>
            </dl>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Patient Information</h2>
            <dl className="space-y-2">
              <div className="flex justify-between">
                <dt className="font-medium text-muted-foreground">Patient ID</dt>
                <dd>{appointment.patientId}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="font-medium text-muted-foreground">Previous Visit</dt>
                <dd>{appointment.previousVisit}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="font-medium text-muted-foreground">Insurance Provider</dt>
                <dd>{appointment.insurance.provider}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="font-medium text-muted-foreground">Policy Number</dt>
                <dd>{appointment.insurance.policyNumber}</dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Additional Information</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium text-muted-foreground mb-2">Reason for Visit</h3>
              <p>{appointment.reasonForVisit}</p>
            </div>
            <div>
              <h3 className="font-medium text-muted-foreground mb-2">Notes</h3>
              <p>{appointment.notes}</p>
            </div>
          </div>
        </div>
      </div>
    </DashboardShell>
  )
} 