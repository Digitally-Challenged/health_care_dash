import { DashboardShell } from '@/app/dashboard-shell'
import { AppointmentList } from '@/app/appointments/appointment-list'
import { AppointmentCalendar } from '@/app/appointments/appointment-calendar'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export default function AppointmentsPage() {
  return (
    <DashboardShell>
      <div className="flex-1 space-y-4">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight">Appointments</h1>
        </div>

        <Tabs defaultValue="list" className="space-y-4">
          <TabsList>
            <TabsTrigger value="list">List View</TabsTrigger>
            <TabsTrigger value="calendar">Calendar View</TabsTrigger>
          </TabsList>
          <TabsContent value="list">
            <AppointmentList />
          </TabsContent>
          <TabsContent value="calendar">
            <AppointmentCalendar />
          </TabsContent>
        </Tabs>
      </div>
    </DashboardShell>
  )
} 