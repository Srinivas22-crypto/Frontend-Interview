import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowLeft, PenLine } from 'lucide-react'
import Link from 'next/link'

export default function BlogEditorPage() {
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
                    <h1 className="text-3xl font-bold tracking-tight">Blog Editor</h1>
                    <p className="text-muted-foreground mt-2 text-lg">
                        Write and publish blog posts with a rich text editor and formatting tools.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                    {/* Sidebar / Info */}
                    <Card className="md:col-span-1">
                        <CardContent className="pt-6">
                            <h2 className="text-xl font-semibold mb-4">Features</h2>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li>• Rich Text Formatting</li>
                                <li>• Image Uploads</li>
                                <li>• SEO Optimization Tips</li>
                                <li>• Draft Saving</li>
                                <li>• Markdown Support</li>
                            </ul>
                        </CardContent>
                    </Card>

                    {/* Interactive Placeholder */}
                    <div className="md:col-span-2 border rounded-xl p-8 flex flex-col items-center justify-center text-center bg-background min-h-[400px] shadow-sm">
                        <PenLine className="w-12 h-12 text-muted-foreground/50 mb-4" />
                        <h3 className="text-lg font-medium">Editor Workspace</h3>
                        <p className="text-sm text-muted-foreground mt-2 mb-6 max-w-md">
                            The editor interface will load here. You'll be able to create, edit, and preview your blog posts in real-time.
                        </p>
                        <Button>Start Writing</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
