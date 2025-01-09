'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useRiskAssessments } from './hooks'

export function RiskAssessmentsOverview() {
  const { riskAssessments, isLoading } = useRiskAssessments()

  if (isLoading) {
    return <div>Loading...</div>
  }

  const totalAssessments = riskAssessments?.length || 0
  const highRiskCount = riskAssessments?.filter(assessment => assessment.riskLevel === 'high').length || 0
  const mediumRiskCount = riskAssessments?.filter(assessment => assessment.riskLevel === 'moderate').length || 0
  const lowRiskCount = riskAssessments?.filter(assessment => assessment.riskLevel === 'low').length || 0

  const metrics = [
    {
      title: 'Total Assessments',
      value: totalAssessments,
      description: 'Total number of risk assessments'
    },
    {
      title: 'High Risk',
      value: highRiskCount,
      description: 'Patients requiring immediate attention',
      className: 'text-destructive'
    },
    {
      title: 'Medium Risk',
      value: mediumRiskCount,
      description: 'Patients requiring monitoring',
      className: 'text-orange-500 dark:text-orange-400'
    },
    {
      title: 'Low Risk',
      value: lowRiskCount,
      description: 'Patients in stable condition',
      className: 'text-green-500 dark:text-green-400'
    }
  ]

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {metrics.map((metric, index) => (
        <Card key={index}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {metric.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className={metric.className}>
              <div className="text-2xl font-bold">{metric.value}</div>
            </div>
            <p className="text-xs text-muted-foreground">
              {metric.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
} 