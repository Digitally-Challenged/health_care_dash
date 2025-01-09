// Simulated API delay for consistent behavior across features
export const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

// Common error handler for API responses
export function handleApiError(error: unknown): string {
  return error instanceof Error ? error.message : 'An unexpected error occurred'
}

// Generate a random ID (used across multiple features)
export function generateId(): string {
  return Math.random().toString(36).substr(2, 9)
}

// Common timestamp generator for consistency
export function getCurrentTimestamp(): string {
  return new Date().toISOString()
}

// Common metadata generator for new records
export function generateMetadata(createdBy: string) {
  const timestamp = getCurrentTimestamp()
  return {
    createdAt: timestamp,
    updatedAt: timestamp,
    createdBy
  }
} 