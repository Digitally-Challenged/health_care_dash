import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { RiskAssessment } from '@/app/risk-assessments/types'

interface RiskAssessmentCardProps {
  riskAssessment: RiskAssessment
}

export function RiskAssessmentCard({ riskAssessment }: RiskAssessmentCardProps) {
  const getRiskLevelColor = (level: RiskAssessment['riskLevel']) => {
    switch (level) {
      case 'low':
        return 'bg-green-500/10 text-green-500 hover:bg-green-500/20'
      case 'moderate':
        return 'bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/20'
      case 'high':
        return 'bg-orange-500/10 text-orange-500 hover:bg-orange-500/20'
      case 'critical':
        return 'bg-red-500/10 text-red-500 hover:bg-red-500/20'
      default:
        return 'bg-gray-500/10 text-gray-500 hover:bg-gray-500/20'
    }
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div className="space-y-1">
          <h3 className="text-sm font-medium">{riskAssessment.patientName}</h3>
          <p className="text-sm text-muted-foreground">
            Score: {riskAssessment.overallScore}/100
          </p>
        </div>
        <Badge className={getRiskLevelColor(riskAssessment.riskLevel)} variant="secondary">
          {riskAssessment.riskLevel.charAt(0).toUpperCase() + riskAssessment.riskLevel.slice(1)}
        </Badge>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span>Risk Level</span>
              <span className="text-muted-foreground">{riskAssessment.overallScore}%</span>
            </div>
            <Progress value={riskAssessment.overallScore} className="h-2" />
          </div>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-muted-foreground">Assessment Date</p>
              <p>{new Date(riskAssessment.assessmentDate).toLocaleDateString()}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Next Assessment</p>
              <p>{new Date(riskAssessment.nextAssessmentDate).toLocaleDateString()}</p>
            </div>
          </div>
          <div className="text-sm">
            <p className="text-muted-foreground">Risk Factors</p>
            <p>{riskAssessment.riskFactors.length} identified</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
} 