'use client'

import { DashboardShell } from '@/app/dashboard-shell'
import { SettingsLayout } from '@/app/settings/settings-layout'
import { useSettings } from './hooks'

export default function SettingsPage() {
  // Initialize settings data
  useSettings()

  return (
    <DashboardShell>
      <SettingsLayout />
    </DashboardShell>
  )
} 