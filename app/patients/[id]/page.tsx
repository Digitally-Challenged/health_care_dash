import { DashboardShell } from '@/app/dashboard-shell'
import { notFound } from 'next/navigation'

interface PatientPageProps {
  params: {
    id: string
  }
}

// This would be replaced with a real data fetch
async function getPatient(id: string) {
  const patient = {
    id: '1',
    name: 'John Doe',
    age: 45,
    gender: 'Male',
    condition: 'Hypertension',
    riskLevel: 'High',
    lastVisit: '2024-01-15',
    status: 'Active',
    // Add more detailed fields here
    email: 'john.doe@example.com',
    phone: '(555) 123-4567',
    address: '123 Main St, Anytown, USA',
    primaryDoctor: 'Dr. Jane Smith',
    medications: [
      'Lisinopril 10mg',
      'Metoprolol 25mg'
    ]
  }

  if (id !== '1') {
    return null
  }

  return patient
}

export default async function PatientPage({ params }: PatientPageProps) {
  const patient = await getPatient(params.id)

  if (!patient) {
    notFound()
  }

  return (
    <DashboardShell>
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight">{patient.name}</h1>
          <div className="flex items-center gap-2">
            {/* Add action buttons here */}
          </div>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2">
          {/* Patient details sections */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Personal Information</h2>
            <dl className="space-y-2">
              <div className="flex justify-between">
                <dt className="font-medium text-muted-foreground">Age</dt>
                <dd>{patient.age}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="font-medium text-muted-foreground">Gender</dt>
                <dd>{patient.gender}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="font-medium text-muted-foreground">Email</dt>
                <dd>{patient.email}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="font-medium text-muted-foreground">Phone</dt>
                <dd>{patient.phone}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="font-medium text-muted-foreground">Address</dt>
                <dd>{patient.address}</dd>
              </div>
            </dl>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Medical Information</h2>
            <dl className="space-y-2">
              <div className="flex justify-between">
                <dt className="font-medium text-muted-foreground">Condition</dt>
                <dd>{patient.condition}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="font-medium text-muted-foreground">Risk Level</dt>
                <dd>{patient.riskLevel}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="font-medium text-muted-foreground">Last Visit</dt>
                <dd>{patient.lastVisit}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="font-medium text-muted-foreground">Primary Doctor</dt>
                <dd>{patient.primaryDoctor}</dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Current Medications</h2>
          <ul className="list-disc list-inside space-y-1">
            {patient.medications.map((medication) => (
              <li key={medication}>{medication}</li>
            ))}
          </ul>
        </div>
      </div>
    </DashboardShell>
  )
} 