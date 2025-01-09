'use client'

import { useEffect } from 'react'
import { useSettingsStore } from './store'

export function useSettings() {
  const store = useSettingsStore()

  useEffect(() => {
    store.fetchSettings()
    return () => {
      store.reset()
    }
  }, [])

  return {
    profile: store.profile,
    notifications: store.notifications,
    security: store.security,
    isLoading: store.isLoading,
    error: store.error,
    updateProfile: store.updateProfile,
    updateNotification: store.updateNotification,
    updateSecurity: store.updateSecurity
  }
}

export function useProfile() {
  const { profile, isLoading, error, updateProfile } = useSettingsStore()
  return { profile, isLoading, error, updateProfile }
}

export function useNotifications() {
  const { notifications, isLoading, error, updateNotification } = useSettingsStore()
  return { notifications, isLoading, error, updateNotification }
}

export function useSecurity() {
  const { security, isLoading, error, updateSecurity } = useSettingsStore()
  return { security, isLoading, error, updateSecurity }
} 