'use client'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'

interface NotificationSetting {
  id: string
  title: string
  description: string
}

const notificationSettings: NotificationSetting[] = [
  {
    id: 'appointments',
    title: 'Appointment Reminders',
    description: 'Receive notifications about upcoming appointments',
  },
  {
    id: 'updates',
    title: 'Patient Updates',
    description: 'Get notified when patient information is updated',
  },
  {
    id: 'alerts',
    title: 'Risk Alerts',
    description: 'Receive alerts for high-risk patient conditions',
  },
  {
    id: 'reports',
    title: 'Report Notifications',
    description: 'Get notified when new reports are available',
  },
]

export function NotificationSettings() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Notification Settings</CardTitle>
        <CardDescription>
          Manage your notification preferences
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {notificationSettings.map((setting) => (
          <div
            key={setting.id}
            className="flex items-center justify-between space-x-2"
          >
            <div className="space-y-0.5">
              <Label htmlFor={setting.id}>{setting.title}</Label>
              <p className="text-sm text-muted-foreground">
                {setting.description}
              </p>
            </div>
            <Switch id={setting.id} />
          </div>
        ))}
        <Button className="w-full">Save Preferences</Button>
      </CardContent>
    </Card>
  )
} 