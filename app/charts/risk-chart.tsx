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

const riskData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'High Risk',
      data: [12, 15, 10, 8, 12, 9],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      tension: 0.3
    },
    {
      label: 'Medium Risk',
      data: [25, 28, 32, 30, 35, 28],
      borderColor: 'rgb(255, 159, 64)',
      backgroundColor: 'rgba(255, 159, 64, 0.5)',
      tension: 0.3
    },
    {
      label: 'Low Risk',
      data: [45, 42, 38, 43, 39, 44],
      borderColor: 'rgb(75, 192, 192)',
      backgroundColor: 'rgba(75, 192, 192, 0.5)',
      tension: 0.3
    }
  ],
}

export default function RiskChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Risk Assessment Trends</CardTitle>
      </CardHeader>
      <CardContent>
        <Line 
          data={riskData} 
          options={{ 
            responsive: true,
            scales: {
              y: {
                beginAtZero: true,
                stacked: true,
                title: {
                  display: true,
                  text: 'Number of Patients'
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