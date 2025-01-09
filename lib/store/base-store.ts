'use client'

import { create } from 'zustand'

export interface BaseState<T> {
  data: T[] | null
  isLoading: boolean
  error: string | null
  reset: () => void
}

export interface BaseMethods<T> {
  fetch: () => Promise<void>
  create: (item: Omit<T, 'id'>) => Promise<T>
  update: (id: string, updates: Partial<T>) => Promise<T>
  delete: (id: string) => Promise<void>
  search?: (query: string) => T[]
}

export function createBaseStore<T extends { id: string }>(
  name: string,
  api: {
    fetch: () => Promise<T[]>
    create: (item: Omit<T, 'id'>) => Promise<T>
    update: (id: string, updates: Partial<T>) => Promise<T>
    delete: (id: string) => Promise<void>
  }
) {
  const initialState = {
    data: null,
    isLoading: false,
    error: null
  }

  return create<BaseState<T> & BaseMethods<T>>((set, get) => ({
    ...initialState,

    fetch: async () => {
      set({ isLoading: true })
      try {
        const data = await api.fetch()
        set({ data, isLoading: false, error: null })
      } catch (error) {
        set({ 
          isLoading: false,
          error: error instanceof Error ? error.message : `Failed to fetch ${name}`
        })
      }
    },

    create: async (item: Omit<T, 'id'>) => {
      set({ isLoading: true })
      try {
        const newItem = await api.create(item)
        set(state => ({ 
          data: state.data ? [...state.data, newItem] : [newItem],
          isLoading: false,
          error: null
        }))
        return newItem
      } catch (error) {
        set({ 
          isLoading: false,
          error: error instanceof Error ? error.message : `Failed to create ${name}`
        })
        throw error
      }
    },

    update: async (id: string, updates: Partial<T>) => {
      set({ isLoading: true })
      try {
        const updatedItem = await api.update(id, updates)
        set(state => ({
          data: state.data?.map(item => 
            item.id === id ? updatedItem : item
          ) || null,
          isLoading: false,
          error: null
        }))
        return updatedItem
      } catch (error) {
        set({ 
          isLoading: false,
          error: error instanceof Error ? error.message : `Failed to update ${name}`
        })
        throw error
      }
    },

    delete: async (id: string) => {
      set({ isLoading: true })
      try {
        await api.delete(id)
        set(state => ({
          data: state.data?.filter(item => item.id !== id) || null,
          isLoading: false,
          error: null
        }))
      } catch (error) {
        set({ 
          isLoading: false,
          error: error instanceof Error ? error.message : `Failed to delete ${name}`
        })
        throw error
      }
    },

    search: (query: string) => {
      const { data } = get()
      if (!data) return []
      
      const searchTerm = query.toLowerCase()
      return data.filter(item => 
        Object.values(item).some(value => 
          String(value).toLowerCase().includes(searchTerm)
        )
      )
    },

    reset: () => {
      set(initialState)
    }
  }))
} 