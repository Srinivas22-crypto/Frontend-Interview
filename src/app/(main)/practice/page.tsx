import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { PageHeader } from '@/components/shared/PageHeader'
import { Code, Brain, ClipboardList } from 'lucide-react'

const sections = [
  {
    title: 'Coding Practice',
    description: 'Sharpen your programming skills with hands-on coding challenges.',
    icon: Code,
    problems: [
      { name: 'Two Sum', difficulty: 'Easy' },
      { name: 'Reverse Linked List', difficulty: 'Medium' },
      { name: 'Binary Tree Maximum Path Sum', difficulty: 'Hard' },
    ],
  },
  {
    title: 'Aptitude & Reasoning',
    description: 'Improve your logical thinking and problem-solving abilities.',
    icon: Brain,
    problems: [
      { name: 'Number Series', difficulty: 'Easy' },
      { name: 'Logical Deductions', difficulty: 'Medium' },
      { name: 'Data Interpretation', difficulty: 'Hard' },
    ],
  },
  {
    title: 'MCQs & Quizzes',
    description: 'Test your knowledge with multiple choice questions across topics.',
    icon: ClipboardList,
    problems: [
      { name: 'JavaScript Fundamentals', difficulty: 'Easy' },
      { name: 'System Design Basics', difficulty: 'Medium' },
      { name: 'Advanced Algorithms', difficulty: 'Hard' },
    ],
  },
]

const difficultyColors: Record<string, string> = {
  Easy: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 hover:bg-green-200 dark:hover:bg-green-800 transition-colors duration-200',
  Medium: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300 hover:bg-yellow-200 dark:hover:bg-yellow-800 transition-colors duration-200',
  Hard: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300 hover:bg-red-200 dark:hover:bg-red-800 transition-colors duration-200',
}

export default function PracticePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-5xl mx-auto">
        <PageHeader
          title="Practice"
          description="Practice questions and challenges to improve your skills."
        />

        <div className="space-y-8">
          {sections.map((section) => {
            const Icon = section.icon
            return (
              <div key={section.title}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-foreground">{section.title}</h2>
                    <p className="text-sm text-muted-foreground">{section.description}</p>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {section.problems.map((problem) => (
                    <Card 
                      key={problem.name} 
                      className="py-4 cursor-pointer transition-all duration-200 ease-in-out hover:scale-[1.02] hover:shadow-lg hover:border-primary"
                    >
                      <CardHeader className="pb-2">
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-base">{problem.name}</CardTitle>
                          <Badge className={difficultyColors[problem.difficulty]} variant="secondary">
                            {problem.difficulty}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <Button variant="outline" size="sm" disabled className="w-full bg-transparent">
                          Start Practice
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </main>
  )
}
