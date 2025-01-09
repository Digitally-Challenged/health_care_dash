'use client'

import { useEffect, useMemo } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Bar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { useAppointmentsStore } from '@/app/appointments/store'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)

export default function AppointmentChart() {
  const { appointments, fetchAppointments } = useAppointmentsStore()

  useEffect(() => {
    fetchAppointments()
  }, [fetchAppointments])

  const chartData = useMemo(() => {
    if (!appointments) return null

    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
    const completed = new Array(6).fill(0)
    const missed = new Array(6).fill(0)
    const late = new Array(6).fill(0)

    appointments.forEach(appointment => {
      const date = new Date(appointment.date)
      const monthIndex = date.getMonth()
      if (monthIndex > 5) return // Only show last 6 months

      switch (appointment.status) {
        case 'completed':
          completed[monthIndex]++
          break
        case 'no-show':
          missed[monthIndex]++
          break
        case 'cancelled':
          late[monthIndex]++
          break
      }
    })

    return {
      labels: months,
      datasets: [
        {
          label: 'Completed',
          data: completed,
          backgroundColor: 'rgba(75, 192, 192, 0.5)',
        },
        {
          label: 'Missed',
          data: missed,
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
          label: 'Cancelled',
          data: late,
          backgroundColor: 'rgba(255, 206, 86, 0.5)',
        },
      ],
    }
  }, [appointments])

  if (!chartData) {
    return (
      <Card className="col-span-2">
        <CardHeader>
          <CardTitle>Appointment Analytics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[300px] flex items-center justify-center">
            Loading appointment data...
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="col-span-2">
      <CardHeader>
        <CardTitle>Appointment Analytics</CardTitle>
      </CardHeader>
      <CardContent>
        <Bar 
          data={chartData} 
          options={{ 
            responsive: true,
            scales: {
              y: {
                beginAtZero: true,
                title: {
                  display: true,
                  text: 'Number of Appointments'
                }
              }
            },
            plugins: {
              legend: {
                position: 'top'
              }
            }
          }} 
        />
      </CardContent>
    </Card>
  )
} 