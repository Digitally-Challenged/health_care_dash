'use client'

import { useRiskAssessments } from './hooks'
import { RiskAssessmentList } from './risk-assessment-list'

export function RiskAssessmentListWrapper() {
  useRiskAssessments()
  return <RiskAssessmentList />
} 