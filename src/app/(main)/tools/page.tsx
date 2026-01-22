import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { PageHeader } from '@/components/shared/PageHeader'
import { FileText, PenLine, Map, MessageSquare } from 'lucide-react'

const tools = [
  {
    name: 'Resume Analyzer',
    description: 'Get AI-powered feedback on your resume to improve your chances of landing interviews.',
    icon: FileText,
  },
  {
    name: 'Blog Editor',
    description: 'Write and publish blog posts with a rich text editor and formatting tools.',
    icon: PenLine,
  },
  {
    name: 'Roadmap Generator',
    description: 'Create personalized learning roadmaps based on your career goals.',
    icon: Map,
  },
  {
    name: 'Interview Prep Tool',
    description: 'Practice common interview questions with AI-generated feedback.',
    icon: MessageSquare,
  },
]

export default function ToolsPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-5xl mx-auto">
        <PageHeader
          title="Tools"
          description="Utilities and tools to support learning, productivity, and development."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {tools.map((tool) => {
            const Icon = tool.icon
            return (
              <Card key={tool.name} className="flex flex-col">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{tool.name}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex flex-col flex-1">
                  <CardDescription className="flex-1 mb-4">
                    {tool.description}
                  </CardDescription>
                  <Button disabled className="w-full">
                    Open Tool
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </main>
  )
}
