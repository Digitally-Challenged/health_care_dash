import { DashboardShell } from '@/app/dashboard-shell'
import { RiskAssessmentListWrapper } from './risk-assessment-list-wrapper'
import { RiskAssessmentsOverview } from './overview'

export default function RiskAssessmentsPage() {
  return (
    <DashboardShell>
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Risk Assessments</h1>
          <p className="text-muted-foreground">
            Monitor and manage patient risk assessments
          </p>
        </div>
        <RiskAssessmentsOverview />
        <RiskAssessmentListWrapper />
      </div>
    </DashboardShell>
  )
} 