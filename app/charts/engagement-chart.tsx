'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

const engagementData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'App Usage (hours)',
      data: [120, 150, 180, 190, 210, 250],
      borderColor: 'rgb(255, 159, 64)',
      backgroundColor: 'rgba(255, 159, 64, 0.5)',
      tension: 0.3,
      fill: true
    },
  ],
}

export default function EngagementChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Patient Engagement Trends</CardTitle>
      </CardHeader>
      <CardContent>
        <Line 
          data={engagementData} 
          options={{ 
            responsive: true,
            scales: {
              y: {
                beginAtZero: true,
                title: {
                  display: true,
                  text: 'Hours'
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