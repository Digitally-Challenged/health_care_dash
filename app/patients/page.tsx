import { DashboardShell } from '@/app/dashboard-shell'
import { PatientListView } from './patient-list-view'

export default function PatientsPage() {
  return (
    <DashboardShell>
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Patients</h1>
        <PatientListView />
      </div>
    </DashboardShell>
  )
} 