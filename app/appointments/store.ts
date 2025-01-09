import { create } from 'zustand'
import { fetchAppointments, createAppointmentData, updateAppointmentData, deleteAppointmentData } from './data'
import { Appointment, AppointmentState } from './types'

const initialState = {
  appointments: null,
  isLoading: false,
  error: null
}

export const useAppointmentsStore = create<AppointmentState>((set, get) => ({
  ...initialState,

  fetchAppointments: async () => {
    set({ isLoading: true })
    try {
      const appointments = await fetchAppointments()
      set({ appointments, isLoading: false, error: null })
    } catch (error) {
      set({ 
        isLoading: false,
        error: error instanceof Error ? error.message : 'Failed to fetch appointments'
      })
    }
  },

  createAppointment: async (appointment: Omit<Appointment, 'id'>) => {
    set({ isLoading: true })
    try {
      const newAppointment = await createAppointmentData(appointment)
      set(state => ({ 
        appointments: state.appointments ? [...state.appointments, newAppointment] : [newAppointment],
        isLoading: false,
        error: null
      }))
      return newAppointment
    } catch (error) {
      set({ 
        isLoading: false,
        error: error instanceof Error ? error.message : 'Failed to create appointment'
      })
      throw error
    }
  },

  updateAppointment: async (id: string, updates: Partial<Appointment>) => {
    set({ isLoading: true })
    try {
      const updatedAppointment = await updateAppointmentData(id, updates)
      set(state => ({
        appointments: state.appointments?.map(appointment => 
          appointment.id === id ? updatedAppointment : appointment
        ) || null,
        isLoading: false,
        error: null
      }))
      return updatedAppointment
    } catch (error) {
      set({ 
        isLoading: false,
        error: error instanceof Error ? error.message : 'Failed to update appointment'
      })
      throw error
    }
  },

  deleteAppointment: async (id: string) => {
    set({ isLoading: true })
    try {
      await deleteAppointmentData(id)
      set(state => ({
        appointments: state.appointments?.filter(appointment => appointment.id !== id) || null,
        isLoading: false,
        error: null
      }))
    } catch (error) {
      set({ 
        isLoading: false,
        error: error instanceof Error ? error.message : 'Failed to delete appointment'
      })
      throw error
    }
  },

  searchAppointments: (query: string) => {
    const { appointments } = get()
    if (!appointments) return []
    
    const searchTerm = query.toLowerCase()
    return appointments.filter(appointment => 
      appointment.patientName.toLowerCase().includes(searchTerm) ||
      appointment.type.toLowerCase().includes(searchTerm)
    )
  },

  reset: () => {
    set(initialState)
  }
})) 