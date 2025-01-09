import { create } from 'zustand'
import { fetchRiskAssessments, createRiskAssessmentData, updateRiskAssessmentData, deleteRiskAssessmentData } from './data'
import { RiskAssessment, RiskAssessmentState } from './types'

const initialState = {
  riskAssessments: null,
  isLoading: false,
  error: null
}

export const useRiskAssessmentsStore = create<RiskAssessmentState>((set, get) => ({
  ...initialState,

  fetchRiskAssessments: async () => {
    set({ isLoading: true })
    try {
      const riskAssessments = await fetchRiskAssessments()
      set({ riskAssessments, isLoading: false, error: null })
    } catch (error) {
      set({ 
        isLoading: false,
        error: error instanceof Error ? error.message : 'Failed to fetch risk assessments'
      })
    }
  },

  createRiskAssessment: async (riskAssessment: Omit<RiskAssessment, 'id'>) => {
    set({ isLoading: true })
    try {
      const newRiskAssessment = await createRiskAssessmentData(riskAssessment)
      set(state => ({ 
        riskAssessments: state.riskAssessments ? [...state.riskAssessments, newRiskAssessment] : [newRiskAssessment],
        isLoading: false,
        error: null
      }))
      return newRiskAssessment
    } catch (error) {
      set({ 
        isLoading: false,
        error: error instanceof Error ? error.message : 'Failed to create risk assessment'
      })
      throw error
    }
  },

  updateRiskAssessment: async (id: string, updates: Partial<RiskAssessment>) => {
    set({ isLoading: true })
    try {
      const updatedRiskAssessment = await updateRiskAssessmentData(id, updates)
      set(state => ({
        riskAssessments: state.riskAssessments?.map(assessment => 
          assessment.id === id ? updatedRiskAssessment : assessment
        ) || null,
        isLoading: false,
        error: null
      }))
      return updatedRiskAssessment
    } catch (error) {
      set({ 
        isLoading: false,
        error: error instanceof Error ? error.message : 'Failed to update risk assessment'
      })
      throw error
    }
  },

  deleteRiskAssessment: async (id: string) => {
    set({ isLoading: true })
    try {
      await deleteRiskAssessmentData(id)
      set(state => ({
        riskAssessments: state.riskAssessments?.filter(assessment => assessment.id !== id) || null,
        isLoading: false,
        error: null
      }))
    } catch (error) {
      set({ 
        isLoading: false,
        error: error instanceof Error ? error.message : 'Failed to delete risk assessment'
      })
      throw error
    }
  },

  searchRiskAssessments: (query: string) => {
    const { riskAssessments } = get()
    if (!riskAssessments) return []
    
    const searchTerm = query.toLowerCase()
    return riskAssessments.filter(assessment => 
      assessment.patientName.toLowerCase().includes(searchTerm) ||
      assessment.riskLevel.toLowerCase().includes(searchTerm)
    )
  },

  reset: () => {
    set(initialState)
  }
})) 