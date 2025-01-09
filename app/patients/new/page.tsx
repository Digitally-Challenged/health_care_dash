import { DashboardShell } from '@/app/dashboard-shell'
import { PatientForm } from '../_components/patient-form'

export default function NewPatientPage() {
  return (
    <DashboardShell>
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight">New Patient</h1>
        </div>
        <PatientForm />
      </div>
    </DashboardShell>
  )
} 