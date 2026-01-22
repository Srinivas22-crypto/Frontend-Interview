import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowLeft, Map } from 'lucide-react'
import Link from 'next/link'

export default function RoadmapGeneratorPage() {
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
                    <h1 className="text-3xl font-bold tracking-tight">Roadmap Generator</h1>
                    <p className="text-muted-foreground mt-2 text-lg">
                        Create personalized learning roadmaps based on your career goals and current skills.
                    </p>
                </div>

                <div className="grid gap-6">
                    {/* Info Section */}
                    <div className="grid sm:grid-cols-3 gap-4">
                        <Card>
                            <CardContent className="pt-6">
                                <h3 className="font-semibold mb-2">1. Define Goal</h3>
                                <p className="text-sm text-muted-foreground">Select your target role (e.g., Frontend Dev, DevOps).</p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="pt-6">
                                <h3 className="font-semibold mb-2">2. Assess Skills</h3>
                                <p className="text-sm text-muted-foreground">Input your current knowledge level.</p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="pt-6">
                                <h3 className="font-semibold mb-2">3. Generate Plan</h3>
                                <p className="text-sm text-muted-foreground">Get a week-by-week study plan.</p>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Interactive Placeholder */}
                    <div className="border border-dashed rounded-xl p-12 flex flex-col items-center justify-center text-center bg-muted/20 min-h-[300px]">
                        <Map className="w-12 h-12 text-primary/40 mb-4" />
                        <h3 className="text-xl font-medium">Ready to chart your path?</h3>
                        <p className="text-muted-foreground mt-2 mb-8">
                            Start by telling us what you want to achieve.
                        </p>
                        <Button size="lg">Create New Roadmap</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
