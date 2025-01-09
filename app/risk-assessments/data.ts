import { RiskAssessment } from './types'

const mockRiskAssessments: RiskAssessment[] = [
  {
    id: '1',
    patientId: 'p1',
    patientName: 'Alice Johnson',
    assessmentDate: '2024-01-15T10:30:00Z',
    nextAssessmentDate: '2024-02-15T10:30:00Z',
    overallScore: 75,
    riskLevel: 'high',
    riskFactors: [
      {
        id: 'rf1',
        name: 'Blood Pressure',
        score: 8,
        maxScore: 10,
        category: 'clinical',
        notes: 'Consistently elevated readings'
      },
      {
        id: 'rf2',
        name: 'Medication Adherence',
        score: 6,
        maxScore: 10,
        category: 'behavioral',
        notes: 'Occasional missed doses'
      },
      {
        id: 'rf3',
        name: 'Social Support',
        score: 4,
        maxScore: 10,
        category: 'social',
        notes: 'Limited family support'
      }
    ],
    history: [
      {
        date: '2023-12-15T10:30:00Z',
        score: 70,
        riskLevel: 'high',
        assessedBy: 'Dr. Sarah Johnson',
        notes: 'Initial assessment'
      }
    ],
    recommendations: [
      'Daily blood pressure monitoring',
      'Weekly medication review',
      'Connect with support groups'
    ],
    assessedBy: 'Dr. Sarah Johnson',
    status: 'completed',
    createdAt: '2024-01-15T10:30:00Z',
    updatedAt: '2024-01-15T10:30:00Z'
  },
  {
    id: '2',
    patientId: 'p2',
    patientName: 'Bob Smith',
    assessmentDate: '2024-01-20T14:00:00Z',
    nextAssessmentDate: '2024-02-20T14:00:00Z',
    overallScore: 45,
    riskLevel: 'moderate',
    riskFactors: [
      {
        id: 'rf4',
        name: 'Blood Sugar',
        score: 5,
        maxScore: 10,
        category: 'clinical',
        notes: 'Moderately controlled'
      },
      {
        id: 'rf5',
        name: 'Diet Adherence',
        score: 4,
        maxScore: 10,
        category: 'behavioral',
        notes: 'Inconsistent diet management'
      }
    ],
    history: [
      {
        date: '2023-12-20T14:00:00Z',
        score: 50,
        riskLevel: 'moderate',
        assessedBy: 'Dr. Sarah Johnson',
        notes: 'Initial assessment'
      }
    ],
    recommendations: [
      'Regular blood sugar monitoring',
      'Dietary consultation',
      'Exercise program'
    ],
    assessedBy: 'Dr. Sarah Johnson',
    status: 'completed',
    createdAt: '2024-01-20T14:00:00Z',
    updatedAt: '2024-01-20T14:00:00Z'
  }
]

// Simulated API calls with artificial delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

export async function fetchRiskAssessments() {
  await delay(1000)
  return mockRiskAssessments
}

export async function createRiskAssessmentData(riskAssessment: Omit<RiskAssessment, 'id'>) {
  await delay(1000)
  const newRiskAssessment: RiskAssessment = {
    ...riskAssessment,
    id: Math.random().toString(36).substr(2, 9),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  }
  return newRiskAssessment
}

export async function updateRiskAssessmentData(id: string, updates: Partial<RiskAssessment>) {
  await delay(1000)
  const riskAssessment = mockRiskAssessments.find(assessment => assessment.id === id)
  if (!riskAssessment) throw new Error('Risk assessment not found')
  
  const updatedRiskAssessment: RiskAssessment = {
    ...riskAssessment,
    ...updates,
    updatedAt: new Date().toISOString()
  }
  return updatedRiskAssessment
}

export async function deleteRiskAssessmentData(id: string) {
  await delay(1000)
  const riskAssessment = mockRiskAssessments.find(assessment => assessment.id === id)
  if (!riskAssessment) throw new Error('Risk assessment not found')
} 