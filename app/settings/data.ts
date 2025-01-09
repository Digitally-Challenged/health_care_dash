import { Profile, NotificationPreferences, SecuritySettings } from './types'

const mockProfile: Profile = {
  id: '1',
  name: 'Dr. Sarah Johnson',
  email: 'sarah.johnson@healthcare.com',
  avatar: '/avatars/doctor.png',
  role: 'Primary Care Physician',
  department: 'Internal Medicine',
  title: 'MD',
  phone: '+1 (555) 123-4567'
}

const mockNotifications: NotificationPreferences = {
  emailNotifications: true,
  pushNotifications: true,
  smsNotifications: false,
  appointmentReminders: true,
  carePlanUpdates: true,
  riskAssessmentAlerts: true,
  systemUpdates: false
}

const mockSecurity: SecuritySettings = {
  lastPasswordChange: '2024-01-15T10:30:00Z',
  twoFactorEnabled: true,
  loginHistory: [
    {
      date: '2024-02-01T09:00:00Z',
      device: 'Chrome on MacOS',
      location: 'San Francisco, CA',
      ip: '192.168.1.1'
    },
    {
      date: '2024-01-31T14:20:00Z',
      device: 'Safari on iPhone',
      location: 'San Francisco, CA',
      ip: '192.168.1.2'
    }
  ],
  securityQuestions: [
    {
      question: 'What was the name of your first pet?',
      lastUpdated: '2023-12-01T00:00:00Z'
    },
    {
      question: 'In what city were you born?',
      lastUpdated: '2023-12-01T00:00:00Z'
    }
  ]
}

// Simulated API calls with artificial delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

export async function fetchSettings() {
  await delay(1000)
  return {
    profile: mockProfile,
    notifications: mockNotifications,
    security: mockSecurity
  }
}

export async function updateProfileData(profile: Partial<Profile>) {
  await delay(1000)
  return { ...mockProfile, ...profile }
}

export async function updateNotificationData(notifications: Partial<NotificationPreferences>) {
  await delay(1000)
  return { ...mockNotifications, ...notifications }
}

export async function updateSecurityData(security: Partial<SecuritySettings>) {
  await delay(1000)
  return { ...mockSecurity, ...security }
} 