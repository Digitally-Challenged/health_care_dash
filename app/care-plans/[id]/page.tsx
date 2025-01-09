import { DashboardShell } from '@/app/dashboard-shell'
import { notFound } from 'next/navigation'
import { CarePlanDetail } from '../care-plan-detail'

interface CarePlanPageProps {
  params: {
    id: string
  }
}

export default function CarePlanPage({ params }: CarePlanPageProps) {
  // In a real app, we would fetch the care plan data here
  // For now, we'll pass the ID to the detail component
  return (
    <DashboardShell>
      <CarePlanDetail id={params.id} />
    </DashboardShell>
  )
} 