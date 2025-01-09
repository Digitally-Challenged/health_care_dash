// Common base types used across the application

// Base entity interface with common fields
export interface BaseEntity {
  id: string
  createdAt: string
  updatedAt: string
  createdBy: string
}

// Common patient reference used in multiple features
export interface PatientReference {
  patientId: string
  patientName: string
}

// Common provider reference used in multiple features
export interface ProviderReference {
  providerId: string
  providerName: string
}

// Common state interface for all feature stores
export interface BaseState {
  isLoading: boolean
  error: string | null
}

// Common priority levels used across features
export type PriorityLevel = 'low' | 'medium' | 'high' | 'urgent'

// Common notification types used in settings and appointments
export type NotificationType = 'email' | 'sms' | 'push'

// Common note types that appear in multiple features
export interface BaseNote {
  id: string
  content: string
  createdAt: string
  createdBy: string
}

// Common reminder interface used in appointments
export interface BaseReminder {
  id: string
  type: NotificationType
  scheduledFor: string
  sent: boolean
  sentAt?: string
}

// Common search function signature used across stores
export type SearchFunction<T> = (query: string) => T[]

// Common CRUD operations interface for stores
export interface CrudOperations<T> {
  fetch: () => Promise<void>
  create: (data: Omit<T, 'id'>) => Promise<T>
  update: (id: string, updates: Partial<T>) => Promise<T>
  delete: (id: string) => Promise<void>
  reset: () => void
} 