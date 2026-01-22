import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function ResumeAnalyzerPage() {
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
                    <h1 className="text-3xl font-bold tracking-tight">Resume Analyzer</h1>
                    <p className="text-muted-foreground mt-2 text-lg">
                        Get AI-powered feedback on your resume to improve your chances of landing interviews.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                    {/* Information Section */}
                    <Card>
                        <CardContent className="pt-6">
                            <h2 className="text-xl font-semibold mb-4">How it works</h2>
                            <ul className="space-y-3 text-sm text-muted-foreground">
                                <li className="flex gap-2">
                                    <span className="font-medium text-foreground">1. Upload Resume:</span>
                                    Upload your resume in PDF or DOCX format.
                                </li>
                                <li className="flex gap-2">
                                    <span className="font-medium text-foreground">2. Analysis:</span>
                                    Our AI scans for keywords, formatting, and impact.
                                </li>
                                <li className="flex gap-2">
                                    <span className="font-medium text-foreground">3. Get Feedback:</span>
                                    Receive actionable insights to improve your score.
                                </li>
                            </ul>
                        </CardContent>
                    </Card>

                    {/* Interactive Placeholder */}
                    <div className="border-2 border-dashed rounded-xl p-8 flex flex-col items-center justify-center text-center bg-muted/30 min-h-[300px]">
                        <div className="bg-background p-4 rounded-full mb-4 shadow-sm">
                            <svg
                                className="w-8 h-8 text-muted-foreground"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                            </svg>
                        </div>
                        <h3 className="text-lg font-medium">Upload your resume</h3>
                        <p className="text-sm text-muted-foreground mt-2 mb-6 max-w-xs">
                            Drag and drop your resume file here, or click to browse.
                        </p>
                        <Button variant="outline">Select File</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
