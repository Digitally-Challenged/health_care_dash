'use client'

import { useState } from 'react'
import { PatientSearch } from './patient-search'
import { PatientTable } from './patient-table'

// Mock data - replace with real data fetching
const initialPatients = [
  {
    id: '1',
    name: 'John Doe',
    age: 45,
    gender: 'Male',
    condition: 'Hypertension',
    riskLevel: 'High',
    lastVisit: '2024-01-15',
    status: 'Active'
  },
  {
    id: '2',
    name: 'Jane Smith',
    age: 38,
    gender: 'Female',
    condition: 'Diabetes',
    riskLevel: 'Medium',
    lastVisit: '2024-01-10',
    status: 'Active'
  }
]

export function PatientListView() {
  const [searchQuery, setSearchQuery] = useState('')
  const [patients, setPatients] = useState(initialPatients)

  const handleSearch = (query: string) => {
    setSearchQuery(query)
    const filtered = initialPatients.filter(patient =>
      patient.name.toLowerCase().includes(query.toLowerCase()) ||
      patient.condition.toLowerCase().includes(query.toLowerCase())
    )
    setPatients(filtered)
  }

  return (
    <div className="space-y-4">
      <PatientSearch onSearch={handleSearch} searchQuery={searchQuery} />
      <PatientTable patients={patients} />
    </div>
  )
} 