import { useEffect } from 'react'
import { BaseState, CrudOperations } from './types'

// Type for store with basic CRUD operations
export interface CrudStore<T> extends CrudOperations<T>, BaseState {
  data: T[] | null
  reset: () => void
}

// Create a hook for list views (e.g., appointments list, care plans list)
export function createListHook<T>(useStore: () => CrudStore<T>) {
  return function useList() {
    const store = useStore()

    useEffect(() => {
      store.fetch()
      return () => {
        store.reset()
      }
    }, [])

    return {
      data: store.data,
      isLoading: store.isLoading,
      error: store.error,
      create: store.create,
      update: store.update,
      delete: store.delete
    }
  }
}

// Create a hook for single item views (e.g., single appointment, single care plan)
export function createItemHook<T extends { id: string }>(useStore: () => CrudStore<T>) {
  return function useItem(id: string) {
    const store = useStore()
    const item = store.data?.find(i => i.id === id)

    useEffect(() => {
      if (!store.data) {
        store.fetch()
      }
    }, [id])

    return {
      item,
      isLoading: store.isLoading,
      error: store.error,
      update: (updates: Partial<T>) => store.update(id, updates)
    }
  }
} 