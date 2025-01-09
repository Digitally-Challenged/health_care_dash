'use client'

import { create } from 'zustand'
import { fetchCarePlans, createCarePlanData, updateCarePlanData, deleteCarePlanData } from './data'
import { CarePlan, CarePlanState } from './types'

const initialState = {
  carePlans: null,
  isLoading: false,
  error: null
}

export const useCarePlansStore = create<CarePlanState>((set, get) => ({
  ...initialState,

  fetchCarePlans: async () => {
    set({ isLoading: true })
    try {
      const carePlans = await fetchCarePlans()
      set({ carePlans, isLoading: false, error: null })
    } catch (error) {
      set({ 
        isLoading: false,
        error: error instanceof Error ? error.message : 'Failed to fetch care plans'
      })
    }
  },

  createCarePlan: async (carePlan: Omit<CarePlan, 'id'>) => {
    set({ isLoading: true })
    try {
      const newCarePlan = await createCarePlanData(carePlan)
      set(state => ({ 
        carePlans: state.carePlans ? [...state.carePlans, newCarePlan] : [newCarePlan],
        isLoading: false,
        error: null
      }))
      return newCarePlan
    } catch (error) {
      set({ 
        isLoading: false,
        error: error instanceof Error ? error.message : 'Failed to create care plan'
      })
      throw error
    }
  },

  updateCarePlan: async (id: string, updates: Partial<CarePlan>) => {
    set({ isLoading: true })
    try {
      const updatedCarePlan = await updateCarePlanData(id, updates)
      set(state => ({
        carePlans: state.carePlans?.map(plan => 
          plan.id === id ? updatedCarePlan : plan
        ) || null,
        isLoading: false,
        error: null
      }))
      return updatedCarePlan
    } catch (error) {
      set({ 
        isLoading: false,
        error: error instanceof Error ? error.message : 'Failed to update care plan'
      })
      throw error
    }
  },

  deleteCarePlan: async (id: string) => {
    set({ isLoading: true })
    try {
      await deleteCarePlanData(id)
      set(state => ({
        carePlans: state.carePlans?.filter(plan => plan.id !== id) || null,
        isLoading: false,
        error: null
      }))
    } catch (error) {
      set({ 
        isLoading: false,
        error: error instanceof Error ? error.message : 'Failed to delete care plan'
      })
      throw error
    }
  },

  searchCarePlans: (query: string) => {
    const { carePlans } = get()
    if (!carePlans) return []
    
    const searchTerm = query.toLowerCase()
    return carePlans.filter(plan => 
      plan.patientName.toLowerCase().includes(searchTerm) ||
      plan.condition.toLowerCase().includes(searchTerm)
    )
  },

  reset: () => {
    set(initialState)
  }
})) 