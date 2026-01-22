import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { PageHeader } from '@/components/shared/PageHeader'
import { FileText, PenLine, Map, MessageSquare } from 'lucide-react'
import Link from 'next/link'

const tools = [
  {
    name: 'Resume Analyzer',
    description:
      'Get AI-powered feedback on your resume to improve your chances of landing interviews.',
    icon: FileText,
    href: '/tools/resume-analyzer',
  },
  {
    name: 'Blog Editor',
    description:
      'Write and publish blog posts with a rich text editor and formatting tools.',
    icon: PenLine,
    href: '/tools/blog-editor',
  },
  {
    name: 'Roadmap Generator',
    description:
      'Create personalized learning roadmaps based on your career goals.',
    icon: Map,
    href: '/tools/roadmap-generator',
  },
  {
    name: 'Interview Prep Tool',
    description:
      'Practice common interview questions with AI-generated feedback.',
    icon: MessageSquare,
    href: '/tools/interview-prep',
  },
]

export default function ToolsPage() {
  return (
    <main className="w-full overflow-x-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <PageHeader
          title="Tools"
          description="Utilities and tools to support learning, productivity, and development."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => {
            const Icon = tool.icon

            return (
              <Card
                key={tool.name}
                className="flex h-full flex-col transition-shadow duration-200 hover:shadow-md"
              >
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-base sm:text-lg">
                      {tool.name}
                    </CardTitle>
                  </div>
                </CardHeader>

                <CardContent className="flex flex-1 flex-col">
                  <CardDescription className="mb-4 break-words">
                    {tool.description}
                  </CardDescription>

                  <Button asChild className="mt-auto w-full">
                    <Link href={tool.href}>Open Tool</Link>
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
