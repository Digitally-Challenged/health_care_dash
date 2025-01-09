export interface Profile {
  id: string
  name: string
  email: string
  avatar?: string
  role: string
  department: string
  title: string
  phone?: string
}

export interface NotificationPreferences {
  emailNotifications: boolean
  pushNotifications: boolean
  smsNotifications: boolean
  appointmentReminders: boolean
  carePlanUpdates: boolean
  riskAssessmentAlerts: boolean
  systemUpdates: boolean
}

export interface SecuritySettings {
  lastPasswordChange: string
  twoFactorEnabled: boolean
  loginHistory: Array<{
    date: string
    device: string
    location: string
    ip: string
  }>
  securityQuestions: Array<{
    question: string
    lastUpdated: string
  }>
}

export interface SettingsState {
  profile: Profile | null
  notifications: NotificationPreferences | null
  security: SecuritySettings | null
  isLoading: boolean
  error: string | null
  fetchSettings: () => Promise<void>
  updateProfile: (profile: Partial<Profile>) => Promise<void>
  updateNotification: (notifications: Partial<NotificationPreferences>) => Promise<void>
  updateSecurity: (security: Partial<SecuritySettings>) => Promise<void>
  reset: () => void
} 