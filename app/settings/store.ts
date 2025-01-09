import { create } from 'zustand'
import { fetchSettings, updateProfileData, updateNotificationData, updateSecurityData } from './data'
import { SettingsState, Profile, NotificationPreferences, SecuritySettings } from './types'

const initialState = {
  profile: null,
  notifications: null,
  security: null,
  isLoading: false,
  error: null
}

export const useSettingsStore = create<SettingsState>((set, get) => ({
  ...initialState,

  fetchSettings: async () => {
    set({ isLoading: true })
    try {
      const data = await fetchSettings()
      set({ 
        profile: data.profile,
        notifications: data.notifications,
        security: data.security,
        isLoading: false,
        error: null
      })
    } catch (error) {
      set({ 
        isLoading: false,
        error: error instanceof Error ? error.message : 'Failed to fetch settings'
      })
    }
  },

  updateProfile: async (profile: Partial<Profile>) => {
    set({ isLoading: true })
    try {
      const updatedProfile = await updateProfileData(profile)
      set(state => ({ 
        profile: { ...state.profile, ...updatedProfile },
        isLoading: false,
        error: null
      }))
    } catch (error) {
      set({ 
        isLoading: false,
        error: error instanceof Error ? error.message : 'Failed to update profile'
      })
    }
  },

  updateNotification: async (notifications: Partial<NotificationPreferences>) => {
    set({ isLoading: true })
    try {
      const updatedNotifications = await updateNotificationData(notifications)
      set(state => ({ 
        notifications: { ...state.notifications, ...updatedNotifications },
        isLoading: false,
        error: null
      }))
    } catch (error) {
      set({ 
        isLoading: false,
        error: error instanceof Error ? error.message : 'Failed to update notifications'
      })
    }
  },

  updateSecurity: async (security: Partial<SecuritySettings>) => {
    set({ isLoading: true })
    try {
      const updatedSecurity = await updateSecurityData(security)
      set(state => ({ 
        security: { ...state.security, ...updatedSecurity },
        isLoading: false,
        error: null
      }))
    } catch (error) {
      set({ 
        isLoading: false,
        error: error instanceof Error ? error.message : 'Failed to update security settings'
      })
    }
  },

  reset: () => {
    set(initialState)
  }
})) 