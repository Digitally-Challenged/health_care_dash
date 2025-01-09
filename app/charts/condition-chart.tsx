'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Doughnut } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js'

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
)

const conditionDistribution = {
  labels: ['Cardiovascular', 'Respiratory', 'Diabetes', 'Mental Health', 'Other'],
  datasets: [{
    data: [30, 20, 25, 15, 10],
    backgroundColor: [
      'rgba(255, 99, 132, 0.5)',
      'rgba(54, 162, 235, 0.5)',
      'rgba(255, 206, 86, 0.5)',
      'rgba(75, 192, 192, 0.5)',
      'rgba(153, 102, 255, 0.5)',
    ],
    borderColor: [
      'rgba(255, 99, 132, 1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(153, 102, 255, 1)',
    ],
    borderWidth: 1,
  }],
}

export default function ConditionChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Condition Distribution</CardTitle>
      </CardHeader>
      <CardContent>
        <Doughnut 
          data={conditionDistribution}
          options={{ 
            responsive: true,
            plugins: {
              legend: {
                position: 'bottom',
                labels: {
                  padding: 20
                }
              }
            },
            cutout: '60%'
          }} 
        />
      </CardContent>
    </Card>
  )
} 