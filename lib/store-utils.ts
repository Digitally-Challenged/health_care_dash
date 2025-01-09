import { BaseState } from './types'
import { handleApiError } from './api-utils'

// Initial state used across all stores
export const createInitialState = <T>(): BaseState & { data: T | null } => ({
  data: null,
  isLoading: false,
  error: null
})

// Generic error handler for store actions
export const handleStoreError = (error: unknown, set: (state: Partial<BaseState>) => void) => {
  set({ 
    isLoading: false,
    error: handleApiError(error)
  })
}

// Generic success handler for store actions
export const handleStoreSuccess = <T>(
  data: T, 
  set: (state: Partial<BaseState & { data: T }>) => void
) => {
  set({ 
    data,
    isLoading: false,
    error: null
  })
}

// Helper to create basic CRUD actions for a store
export const createBasicCrudActions = <T extends { id: string }>(
  apiCalls: {
    fetch: () => Promise<T[]>
    create: (data: Omit<T, 'id'>) => Promise<T>
    update: (id: string, updates: Partial<T>) => Promise<T>
    delete: (id: string) => Promise<void>
  },
  set: (state: any) => void,
  get: () => { data: T[] | null }
) => ({
  fetch: async () => {
    set({ isLoading: true })
    try {
      const data = await apiCalls.fetch()
      handleStoreSuccess(data, set)
    } catch (error) {
      handleStoreError(error, set)
    }
  },

  create: async (item: Omit<T, 'id'>) => {
    set({ isLoading: true })
    try {
      const newItem = await apiCalls.create(item)
      const { data } = get()
      set({
        data: data ? [...data, newItem] : [newItem],
        isLoading: false,
        error: null
      })
      return newItem
    } catch (error) {
      handleStoreError(error, set)
      throw error
    }
  },

  update: async (id: string, updates: Partial<T>) => {
    set({ isLoading: true })
    try {
      const updatedItem = await apiCalls.update(id, updates)
      const { data } = get()
      set({
        data: data?.map(item => item.id === id ? updatedItem : item) || null,
        isLoading: false,
        error: null
      })
      return updatedItem
    } catch (error) {
      handleStoreError(error, set)
      throw error
    }
  },

  delete: async (id: string) => {
    set({ isLoading: true })
    try {
      await apiCalls.delete(id)
      const { data } = get()
      set({
        data: data?.filter(item => item.id !== id) || null,
        isLoading: false,
        error: null
      })
    } catch (error) {
      handleStoreError(error, set)
      throw error
    }
  }
}) 