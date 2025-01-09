import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { RiskAssessmentCard } from './risk-assessment-card'
import { useRiskAssessmentsStore } from '@/app/risk-assessments/store'

export function RiskAssessmentList() {
  const [searchQuery, setSearchQuery] = useState('')
  const { riskAssessments, isLoading, error, searchRiskAssessments } = useRiskAssessmentsStore()

  const filteredRiskAssessments = searchQuery ? searchRiskAssessments(searchQuery) : riskAssessments

  if (isLoading) {
    return <div>Loading risk assessments...</div>
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  if (!riskAssessments) {
    return <div>No risk assessments found.</div>
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <Input
          placeholder="Search risk assessments..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="max-w-sm"
        />
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredRiskAssessments.map((riskAssessment) => (
          <RiskAssessmentCard key={riskAssessment.id} riskAssessment={riskAssessment} />
        ))}
      </div>
    </div>
  )
} 