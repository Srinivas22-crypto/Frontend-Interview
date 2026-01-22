import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowLeft, MessageSquare } from 'lucide-react'
import Link from 'next/link'

export default function InterviewPrepPage() {
    return (
        <div className="container mx-auto px-4 py-8 max-w-5xl">
            <Link
                href="/tools"
                className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors"
            >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Tools
            </Link>

            <div className="space-y-6">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Interview Prep Tool</h1>
                    <p className="text-muted-foreground mt-2 text-lg">
                        Practice common interview questions with AI-generated feedback and scoring.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                    {/* Interactive Placeholder */}
                    <div className="border rounded-xl p-8 flex flex-col items-center justify-center text-center bg-muted/10 min-h-[400px]">
                        <MessageSquare className="w-10 h-10 text-primary mb-4" />
                        <h3 className="text-lg font-medium">Start a Session</h3>
                        <p className="text-sm text-muted-foreground mt-2 mb-6">
                            Choose a topic (e.g., React, System Design) and start answering questions.
                        </p>
                        <Button className="w-full max-w-xs">Start Practice Mode</Button>
                    </div>

                    {/* Stats / Info */}
                    <div className="space-y-4">
                        <Card className="transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-primary/50 cursor-pointer">
                            <CardContent className="pt-6">
                                <h3 className="font-semibold mb-2">Mock Interviews</h3>
                                <p className="text-sm text-muted-foreground">Simulate real interview environments with timed questions.</p>
                            </CardContent>
                        </Card>
                        <Card className="transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-primary/50 cursor-pointer">
                            <CardContent className="pt-6">
                                <h3 className="font-semibold mb-2">Behavioral Questions</h3>
                                <p className="text-sm text-muted-foreground">Master the STAR method with guided practice.</p>
                            </CardContent>
                        </Card>
                        <Card className="transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-primary/50 cursor-pointer">
                            <CardContent className="pt-6">
                                <h3 className="font-semibold mb-2">Code Challenges</h3>
                                <p className="text-sm text-muted-foreground">Solve algorithmic problems with real-time feedback.</p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}
