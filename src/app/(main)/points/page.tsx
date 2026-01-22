import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { PageHeader } from '@/components/shared/PageHeader'
import { Coins, TrendingUp, Gift, Clock } from 'lucide-react'

const pointsSummary = {
  total: 2450,
  earned: 3200,
  redeemed: 750,
}

const recentActivity = [
  {
    action: 'Completed "Two Sum" challenge',
    points: '+50',
    date: 'Jan 20, 2026',
    type: 'earned',
  },
  {
    action: 'Attended Web Development Workshop',
    points: '+100',
    date: 'Jan 18, 2026',
    type: 'earned',
  },
  {
    action: 'Redeemed Resume Review',
    points: '-200',
    date: 'Jan 15, 2026',
    type: 'redeemed',
  },
  {
    action: 'Published blog post',
    points: '+75',
    date: 'Jan 12, 2026',
    type: 'earned',
  },
  {
    action: 'Completed daily quiz streak (7 days)',
    points: '+150',
    date: 'Jan 10, 2026',
    type: 'earned',
  },
]

export default function PointsPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-5xl mx-auto">
        <PageHeader
          title="Points"
          description="View and manage your reward points."
        />

        {/* Summary Cards */}
        <div className="grid gap-4 sm:grid-cols-3 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Total Points
              </CardTitle>
              <Coins className="h-5 w-5 text-primary" />
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-foreground">{pointsSummary.total.toLocaleString()}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Points Earned
              </CardTitle>
              <TrendingUp className="h-5 w-5 text-green-600" />
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-green-600">{pointsSummary.earned.toLocaleString()}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Points Redeemed
              </CardTitle>
              <Gift className="h-5 w-5 text-orange-600" />
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-orange-600">{pointsSummary.redeemed.toLocaleString()}</p>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              Recent Activity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between py-3 border-b last:border-b-0"
                >
                  <div>
                    <p className="font-medium text-foreground">{activity.action}</p>
                    <p className="text-sm text-muted-foreground">{activity.date}</p>
                  </div>
                  <span
                    className={`font-semibold ${
                      activity.type === 'earned' ? 'text-green-600' : 'text-orange-600'
                    }`}
                  >
                    {activity.points}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
