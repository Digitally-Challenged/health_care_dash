import { CarePlan } from './types'

const mockCarePlans: CarePlan[] = [
  {
    id: '1',
    patientId: 'p1',
    patientName: 'Alice Johnson',
    condition: 'Type 2 Diabetes',
    startDate: '2024-01-01T00:00:00Z',
    endDate: '2024-06-30T23:59:59Z',
    status: 'active',
    progress: 45,
    goals: [
      {
        id: 'g1',
        description: 'Reduce HbA1c to 6.5%',
        targetDate: '2024-03-31T23:59:59Z',
        status: 'in-progress',
        progress: 60
      },
      {
        id: 'g2',
        description: 'Maintain daily blood glucose monitoring',
        targetDate: '2024-06-30T23:59:59Z',
        status: 'in-progress',
        progress: 80
      }
    ],
    tasks: [
      {
        id: 't1',
        description: 'Morning blood glucose check',
        dueDate: '2024-02-02T09:00:00Z',
        status: 'pending',
        assignedTo: 'Patient',
        priority: 'high'
      },
      {
        id: 't2',
        description: 'Weekly foot examination',
        dueDate: '2024-02-07T15:00:00Z',
        status: 'pending',
        assignedTo: 'Dr. Sarah Johnson',
        priority: 'medium'
      }
    ],
    notes: [
      {
        id: 'n1',
        content: 'Patient showing good adherence to medication schedule',
        createdAt: '2024-01-15T10:30:00Z',
        createdBy: 'Dr. Sarah Johnson',
        type: 'progress'
      }
    ],
    createdBy: 'Dr. Sarah Johnson',
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-15T10:30:00Z'
  },
  {
    id: '2',
    patientId: 'p2',
    patientName: 'Bob Smith',
    condition: 'Hypertension',
    startDate: '2024-01-15T00:00:00Z',
    endDate: '2024-07-14T23:59:59Z',
    status: 'active',
    progress: 30,
    goals: [
      {
        id: 'g3',
        description: 'Maintain blood pressure below 130/80',
        targetDate: '2024-04-14T23:59:59Z',
        status: 'in-progress',
        progress: 40
      }
    ],
    tasks: [
      {
        id: 't3',
        description: 'Daily blood pressure monitoring',
        dueDate: '2024-02-02T20:00:00Z',
        status: 'pending',
        assignedTo: 'Patient',
        priority: 'high'
      }
    ],
    notes: [
      {
        id: 'n2',
        content: 'Started new medication regimen',
        createdAt: '2024-01-15T14:20:00Z',
        createdBy: 'Dr. Sarah Johnson',
        type: 'medication'
      }
    ],
    createdBy: 'Dr. Sarah Johnson',
    createdAt: '2024-01-15T00:00:00Z',
    updatedAt: '2024-01-15T14:20:00Z'
  }
]

// Simulated API calls with artificial delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

export async function fetchCarePlans() {
  await delay(1000)
  return mockCarePlans
}

export async function createCarePlanData(carePlan: Omit<CarePlan, 'id'>) {
  await delay(1000)
  const newCarePlan: CarePlan = {
    ...carePlan,
    id: Math.random().toString(36).substr(2, 9),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  }
  return newCarePlan
}

export async function updateCarePlanData(id: string, updates: Partial<CarePlan>) {
  await delay(1000)
  const carePlan = mockCarePlans.find(plan => plan.id === id)
  if (!carePlan) throw new Error('Care plan not found')
  
  const updatedCarePlan: CarePlan = {
    ...carePlan,
    ...updates,
    updatedAt: new Date().toISOString()
  }
  return updatedCarePlan
}

export async function deleteCarePlanData(id: string) {
  await delay(1000)
  const carePlan = mockCarePlans.find(plan => plan.id === id)
  if (!carePlan) throw new Error('Care plan not found')
} 