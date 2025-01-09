'use client'

import { Input } from '@/components/ui/input'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { Search, Filter } from 'lucide-react'

interface PatientSearchProps {
  onSearch: (query: string) => void
  searchQuery: string
}

export function PatientSearch({ onSearch, searchQuery }: PatientSearchProps) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-2 flex-1 max-w-sm">
        <Search className="w-4 h-4 text-muted-foreground" />
        <Input
          placeholder="Search patients..."
          value={searchQuery}
          onChange={(e) => onSearch(e.target.value)}
          className="h-9"
        />
      </div>
      <div className="flex items-center space-x-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm" className="h-9">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-[200px]">
            <DropdownMenuLabel>Filter by</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Risk Level</DropdownMenuItem>
            <DropdownMenuItem>Condition</DropdownMenuItem>
            <DropdownMenuItem>Status</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Button size="sm" className="h-9">
          Add Patient
        </Button>
      </div>
    </div>
  )
} 