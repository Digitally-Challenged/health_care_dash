import { DashboardShell } from '@/app/dashboard-shell'
import { notFound } from 'next/navigation'

interface RiskAssessmentPageProps {
  params: {
    id: string
  }
}

// This would be replaced with a real data fetch
async function getRiskAssessment(id: string) {
  // Mock data - replace with actual data fetching
  const assessment = {
    id: '1',
    patientName: 'John Doe',
    patientId: '123',
    date: '2024-01-15',
    score: 75,
    level: 'High',
    factors: [
      { name: 'Age', score: 3 },
      { name: 'Medical History', score: 4 },
      { name: 'Current Conditions', score: 5 }
    ],
    recommendations: [
      'Regular blood pressure monitoring',
      'Weekly check-ins',
      'Dietary restrictions'
    ],
    assessor: 'Dr. Jane Smith',
    nextAssessmentDate: '2024-02-15'
  }

  if (id !== '1') {
    return null
  }

  return assessment
}

export default async function RiskAssessmentPage({ params }: RiskAssessmentPageProps) {
  const assessment = await getRiskAssessment(params.id)

  if (!assessment) {
    notFound()
  }

  return (
    <DashboardShell>
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight">
            Risk Assessment for {assessment.patientName}
          </h1>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Assessment Details</h2>
            <dl className="space-y-2">
              <div className="flex justify-between">
                <dt className="font-medium text-muted-foreground">Date</dt>
                <dd>{assessment.date}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="font-medium text-muted-foreground">Risk Score</dt>
                <dd>{assessment.score}/100</dd>
              </div>
              <div className="flex justify-between">
                <dt className="font-medium text-muted-foreground">Risk Level</dt>
                <dd>{assessment.level}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="font-medium text-muted-foreground">Assessor</dt>
                <dd>{assessment.assessor}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="font-medium text-muted-foreground">Next Assessment</dt>
                <dd>{assessment.nextAssessmentDate}</dd>
              </div>
            </dl>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Risk Factors</h2>
            <dl className="space-y-2">
              {assessment.factors.map((factor) => (
                <div key={factor.name} className="flex justify-between">
                  <dt className="font-medium text-muted-foreground">{factor.name}</dt>
                  <dd>{factor.score}/5</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Recommendations</h2>
          <ul className="list-disc list-inside space-y-1">
            {assessment.recommendations.map((recommendation) => (
              <li key={recommendation}>{recommendation}</li>
            ))}
          </ul>
        </div>
      </div>
    </DashboardShell>
  )
} 