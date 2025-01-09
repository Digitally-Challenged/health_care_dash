import { DashboardShell } from '@/app/dashboard-shell'
import { SettingsLayout } from './settings-layout'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <DashboardShell>
      <div className="flex flex-col gap-6">
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <SettingsLayout>{children}</SettingsLayout>
      </div>
    </DashboardShell>
  )
} 