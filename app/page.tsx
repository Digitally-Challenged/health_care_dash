import { DashboardShell } from "@/app/dashboard-shell"
import { AnalyticsDashboard } from "@/app/analytics-dashboard"

export default function Home() {
  return (
    <DashboardShell>
      <AnalyticsDashboard />
    </DashboardShell>
  )
}