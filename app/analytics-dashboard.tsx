'use client'

import { Suspense, lazy } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  ArrowDown, 
  ArrowUp, 
  Users, 
  Calendar, 
  Activity, 
  Clock, 
  Brain, 
  Heart,
  AlertCircle,
  CalendarX,
  Stethoscope,
  Timer,
  UserCheck
} from 'lucide-react'

// Lazy load chart components
const AppointmentChart = lazy(() => import('./charts/appointment-chart'))
const ConditionChart = lazy(() => import('./charts/condition-chart'))
const EngagementChart = lazy(() => import('./charts/engagement-chart'))
const RiskChart = lazy(() => import('./charts/risk-chart'))

interface StatCardProps {
  title: string
  value: string | number
  change?: number
  icon: React.ReactNode
  description?: string
}

function StatCard({ title, value, change, icon, description }: StatCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {change !== undefined && (
          <p className={`text-xs ${change >= 0 ? 'text-green-500' : 'text-red-500'} flex items-center`}>
            {change >= 0 ? <ArrowUp className="h-4 w-4" /> : <ArrowDown className="h-4 w-4" />}
            {Math.abs(change)}% from last month
          </p>
        )}
        {description && <p className="text-xs text-muted-foreground mt-1">{description}</p>}
      </CardContent>
    </Card>
  )
}

function LoadingCard() {
  return (
    <Card>
      <CardHeader>
        <div className="h-7 w-1/3 bg-muted animate-pulse rounded" />
      </CardHeader>
      <CardContent>
        <div className="h-[200px] bg-muted animate-pulse rounded" />
      </CardContent>
    </Card>
  )
}

export function AnalyticsDashboard() {
  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Patients"
          value="1,234"
          change={12}
          icon={<Users className="h-4 w-4 text-muted-foreground" />}
        />
        <StatCard
          title="Active Care Plans"
          value="856"
          change={8}
          icon={<Activity className="h-4 w-4 text-muted-foreground" />}
        />
        <StatCard
          title="Avg. Response Time"
          value="2.4h"
          change={-15}
          icon={<Clock className="h-4 w-4 text-muted-foreground" />}
          description="Time to first response"
        />
        <StatCard
          title="Risk Assessments"
          value="45"
          change={5}
          icon={<Brain className="h-4 w-4 text-muted-foreground" />}
          description="Pending assessments"
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Appointment Completion"
          value="92%"
          change={3}
          icon={<UserCheck className="h-4 w-4 text-muted-foreground" />}
          description="Last 30 days"
        />
        <StatCard
          title="Missed Appointments"
          value="13"
          change={-8}
          icon={<CalendarX className="h-4 w-4 text-muted-foreground" />}
          description="This week"
        />
        <StatCard
          title="Avg. Wait Time"
          value="18min"
          change={-12}
          icon={<Timer className="h-4 w-4 text-muted-foreground" />}
          description="In-clinic waiting"
        />
        <StatCard
          title="Urgent Referrals"
          value="8"
          change={15}
          icon={<AlertCircle className="h-4 w-4 text-muted-foreground" />}
          description="Pending review"
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="col-span-2">
          <Suspense fallback={<LoadingCard />}>
            <AppointmentChart />
          </Suspense>
        </div>

        <Suspense fallback={<LoadingCard />}>
          <ConditionChart />
        </Suspense>

        <Suspense fallback={<LoadingCard />}>
          <EngagementChart />
        </Suspense>

        <Suspense fallback={<LoadingCard />}>
          <RiskChart />
        </Suspense>

        <Card>
          <CardHeader>
            <CardTitle>Clinical Outcomes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">Treatment Adherence</p>
                  <p className="text-2xl font-bold">78%</p>
                </div>
                <Heart className="h-4 w-4 text-muted-foreground" />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">Readmission Rate</p>
                  <p className="text-2xl font-bold">12%</p>
                </div>
                <Calendar className="h-4 w-4 text-muted-foreground" />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">Patient Satisfaction</p>
                  <p className="text-2xl font-bold">4.2/5</p>
                </div>
                <Users className="h-4 w-4 text-muted-foreground" />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">Care Quality Score</p>
                  <p className="text-2xl font-bold">92/100</p>
                </div>
                <Stethoscope className="h-4 w-4 text-muted-foreground" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 