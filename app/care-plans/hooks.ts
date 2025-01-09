'use client'

import { useEffect } from 'react'
import { useCarePlansStore } from './store'

export function useCarePlans() {
  const store = useCarePlansStore()

  useEffect(() => {
    store.fetchCarePlans()
    return () => {
      store.reset()
    }
  }, [])

  return {
    carePlans: store.carePlans,
    isLoading: store.isLoading,
    error: store.error,
    createCarePlan: store.createCarePlan,
    updateCarePlan: store.updateCarePlan,
    deleteCarePlan: store.deleteCarePlan,
    searchCarePlans: store.searchCarePlans
  }
}

export function useCarePlan(id: string) {
  const store = useCarePlansStore()
  const carePlan = store.carePlans?.find(plan => plan.id === id)

  useEffect(() => {
    if (!store.carePlans) {
      store.fetchCarePlans()
    }
  }, [id])

  return {
    carePlan,
    isLoading: store.isLoading,
    error: store.error,
    updateCarePlan: store.updateCarePlan
  }
} 