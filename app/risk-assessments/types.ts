export interface RiskFactor {
  id: string
  name: string
  score: number
  maxScore: number
  category: 'clinical' | 'behavioral' | 'environmental' | 'social'
  notes?: string
}

export interface RiskAssessmentHistory {
  date: string
  score: number
  riskLevel: 'low' | 'moderate' | 'high' | 'critical'
  assessedBy: string
  notes?: string
}

export interface RiskAssessment {
  id: string
  patientId: string
  patientName: string
  assessmentDate: string
  nextAssessmentDate: string
  overallScore: number
  riskLevel: 'low' | 'moderate' | 'high' | 'critical'
  riskFactors: RiskFactor[]
  history: RiskAssessmentHistory[]
  recommendations: string[]
  assessedBy: string
  reviewedBy?: string
  reviewDate?: string
  status: 'pending' | 'completed' | 'review-required'
  createdAt: string
  updatedAt: string
}

export interface RiskAssessmentState {
  riskAssessments: RiskAssessment[] | null
  isLoading: boolean
  error: string | null
  fetchRiskAssessments: () => Promise<void>
  createRiskAssessment: (riskAssessment: Omit<RiskAssessment, 'id'>) => Promise<RiskAssessment>
  updateRiskAssessment: (id: string, updates: Partial<RiskAssessment>) => Promise<RiskAssessment>
  deleteRiskAssessment: (id: string) => Promise<void>
  searchRiskAssessments: (query: string) => RiskAssessment[]
  reset: () => void
} 