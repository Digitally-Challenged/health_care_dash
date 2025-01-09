'use client'

import { useCarePlans } from './hooks'
import { CarePlanList } from './care-plan-list'

export function CarePlanListWrapper() {
  useCarePlans()
  return <CarePlanList />
} 