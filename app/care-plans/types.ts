export interface CarePlanGoal {
  id: string
  description: string
  targetDate: string
  status: 'not-started' | 'in-progress' | 'completed' | 'cancelled'
  progress: number
}

export interface CarePlanTask {
  id: string
  description: string
  dueDate: string
  status: 'pending' | 'completed' | 'overdue'
  assignedTo: string
  priority: 'low' | 'medium' | 'high'
}

export interface CarePlanNote {
  id: string
  content: string
  createdAt: string
  createdBy: string
  type: 'general' | 'progress' | 'medication' | 'observation'
}

export interface CarePlan {
  id: string
  patientId: string
  patientName: string
  condition: string
  startDate: string
  endDate: string
  status: 'active' | 'completed' | 'cancelled' | 'draft'
  progress: number
  goals: CarePlanGoal[]
  tasks: CarePlanTask[]
  notes: CarePlanNote[]
  createdBy: string
  createdAt: string
  updatedAt: string
}

export interface CarePlanState {
  carePlans: CarePlan[] | null
  isLoading: boolean
  error: string | null
  fetchCarePlans: () => Promise<void>
  createCarePlan: (carePlan: Omit<CarePlan, 'id'>) => Promise<CarePlan>
  updateCarePlan: (id: string, updates: Partial<CarePlan>) => Promise<CarePlan>
  deleteCarePlan: (id: string) => Promise<void>
  searchCarePlans: (query: string) => CarePlan[]
  reset: () => void
} 