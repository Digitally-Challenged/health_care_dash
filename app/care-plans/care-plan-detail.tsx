'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  ClipboardList,
  Calendar,
  User,
  CheckCircle2,
  Clock,
  AlertCircle,
} from 'lucide-react'

// Mock data - replace with real data fetching
const carePlanData = {
  id: '1',
  patientName: 'John Doe',
  condition: 'Hypertension Management',
  startDate: '2024-01-01',
  endDate: '2024-06-30',
  progress: 65,
  status: 'Active',
  provider: 'Dr. Sarah Wilson',
  goals: [
    {
      id: '1',
      description: 'Reduce blood pressure to normal range',
      status: 'In Progress',
      target: '120/80 mmHg',
      currentValue: '135/88 mmHg'
    },
    {
      id: '2',
      description: 'Maintain regular exercise routine',
      status: 'Achieved',
      target: '30 mins/day',
      currentValue: '35 mins/day'
    }
  ],
  tasks: [
    {
      id: '1',
      title: 'Daily blood pressure reading',
      status: 'Completed',
      dueDate: '2024-01-20',
      frequency: 'Daily'
    },
    {
      id: '2',
      title: 'Take medication',
      status: 'Pending',
      dueDate: '2024-01-20',
      frequency: 'Twice daily'
    },
    {
      id: '3',
      title: 'Exercise session',
      status: 'In Progress',
      dueDate: '2024-01-20',
      frequency: 'Daily'
    }
  ],
  notes: [
    {
      id: '1',
      date: '2024-01-15',
      author: 'Dr. Wilson',
      content: 'Patient showing good progress with exercise routine'
    },
    {
      id: '2',
      date: '2024-01-10',
      author: 'Nurse Johnson',
      content: 'Blood pressure readings trending downward'
    }
  ]
}

interface CarePlanDetailProps {
  id: string
}

export function CarePlanDetail({ id }: CarePlanDetailProps) {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Completed':
        return <CheckCircle2 className="h-4 w-4 text-success" />
      case 'Pending':
        return <Clock className="h-4 w-4 text-warning" />
      case 'In Progress':
        return <AlertCircle className="h-4 w-4 text-primary" />
      default:
        return null
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">{carePlanData.patientName}</h1>
          <p className="text-muted-foreground">
            Care Plan ID: {carePlanData.id} • Provider: {carePlanData.provider}
          </p>
        </div>
        <Button>Edit Care Plan</Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Status</CardTitle>
            <Badge>{carePlanData.status}</Badge>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{carePlanData.progress}%</div>
            <Progress value={carePlanData.progress} className="h-2 mt-2" />
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="tasks">Tasks</TabsTrigger>
          <TabsTrigger value="goals">Goals</TabsTrigger>
          <TabsTrigger value="notes">Notes</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Care Plan Overview</CardTitle>
              <CardDescription>
                {carePlanData.condition} • {new Date(carePlanData.startDate).toLocaleDateString()} - {new Date(carePlanData.endDate).toLocaleDateString()}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <h3 className="font-medium">Active Tasks</h3>
                  {carePlanData.tasks.map((task) => (
                    <div key={task.id} className="flex items-center space-x-2">
                      {getStatusIcon(task.status)}
                      <span className="text-sm">{task.title}</span>
                    </div>
                  ))}
                </div>
                <div className="space-y-2">
                  <h3 className="font-medium">Recent Progress</h3>
                  {carePlanData.goals.map((goal) => (
                    <div key={goal.id} className="space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">{goal.description}</span>
                        <Badge variant={goal.status === 'Achieved' ? 'default' : 'secondary'}>
                          {goal.status}
                        </Badge>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Current: {goal.currentValue} / Target: {goal.target}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="tasks" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Tasks</CardTitle>
              <CardDescription>
                Manage and track care plan tasks
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {carePlanData.tasks.map((task) => (
                  <div
                    key={task.id}
                    className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0"
                  >
                    <div className="flex items-center space-x-3">
                      {getStatusIcon(task.status)}
                      <div>
                        <p className="font-medium">{task.title}</p>
                        <p className="text-sm text-muted-foreground">
                          Due: {new Date(task.dueDate).toLocaleDateString()} • {task.frequency}
                        </p>
                      </div>
                    </div>
                    <Badge variant="outline">{task.status}</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="goals" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Treatment Goals</CardTitle>
              <CardDescription>
                Track progress towards care plan goals
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {carePlanData.goals.map((goal) => (
                  <div key={goal.id} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium">{goal.description}</h3>
                      <Badge variant={goal.status === 'Achieved' ? 'default' : 'secondary'}>
                        {goal.status}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>Current: {goal.currentValue}</span>
                      <span>Target: {goal.target}</span>
                    </div>
                    <Progress
                      value={goal.status === 'Achieved' ? 100 : 75}
                      className="h-2"
                    />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notes" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Progress Notes</CardTitle>
              <CardDescription>
                Care team observations and updates
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {carePlanData.notes.map((note) => (
                  <div key={note.id} className="space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{note.author}</span>
                      <span className="text-sm text-muted-foreground">
                        {new Date(note.date).toLocaleDateString()}
                      </span>
                    </div>
                    <p className="text-sm">{note.content}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
} 