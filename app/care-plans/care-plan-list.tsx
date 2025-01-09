'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { CarePlanCard } from './care-plan-card'
import { useCarePlansStore } from '@/app/care-plans/store'

export function CarePlanList() {
  const [searchQuery, setSearchQuery] = useState('')
  const { carePlans, isLoading, error, searchCarePlans } = useCarePlansStore()

  const filteredCarePlans = searchQuery ? searchCarePlans(searchQuery) : carePlans

  if (isLoading) {
    return <div>Loading care plans...</div>
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  if (!carePlans) {
    return <div>No care plans found.</div>
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <Input
          placeholder="Search care plans..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="max-w-sm"
        />
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredCarePlans.map((carePlan) => (
          <CarePlanCard key={carePlan.id} carePlan={carePlan} />
        ))}
      </div>
    </div>
  )
} 