'use client'

import { useEffect } from 'react'
import { useRiskAssessmentsStore } from './store'

export function useRiskAssessments() {
  const store = useRiskAssessmentsStore()

  useEffect(() => {
    store.fetchRiskAssessments()
    return () => {
      store.reset()
    }
  }, [])

  return {
    riskAssessments: store.riskAssessments,
    isLoading: store.isLoading,
    error: store.error,
    createRiskAssessment: store.createRiskAssessment,
    updateRiskAssessment: store.updateRiskAssessment,
    deleteRiskAssessment: store.deleteRiskAssessment,
    searchRiskAssessments: store.searchRiskAssessments
  }
}

export function useRiskAssessment(id: string) {
  const store = useRiskAssessmentsStore()
  const riskAssessment = store.riskAssessments?.find(assessment => assessment.id === id)

  useEffect(() => {
    if (!store.riskAssessments) {
      store.fetchRiskAssessments()
    }
  }, [id])

  return {
    riskAssessment,
    isLoading: store.isLoading,
    error: store.error,
    updateRiskAssessment: store.updateRiskAssessment
  }
} 