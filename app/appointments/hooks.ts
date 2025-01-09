import { useEffect } from 'react'
import { useAppointmentsStore } from './store'

export function useAppointments() {
  const store = useAppointmentsStore()

  useEffect(() => {
    store.fetchAppointments()
    return () => {
      store.reset()
    }
  }, [])

  return {
    appointments: store.appointments,
    isLoading: store.isLoading,
    error: store.error,
    createAppointment: store.createAppointment,
    updateAppointment: store.updateAppointment,
    deleteAppointment: store.deleteAppointment,
    searchAppointments: store.searchAppointments
  }
}

export function useAppointment(id: string) {
  const store = useAppointmentsStore()
  const appointment = store.appointments?.find(appt => appt.id === id)

  useEffect(() => {
    if (!store.appointments) {
      store.fetchAppointments()
    }
  }, [id])

  return {
    appointment,
    isLoading: store.isLoading,
    error: store.error,
    updateAppointment: store.updateAppointment
  }
} 