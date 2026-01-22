import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { PageHeader } from '@/components/shared/PageHeader'
import { Building2, MapPin } from 'lucide-react'

const jobs = [
  {
    role: 'Frontend Developer Intern',
    company: 'TechCorp',
    location: 'Remote',
    type: 'Internship',
  },
  {
    role: 'Full Stack Developer',
    company: 'InnovateLabs',
    location: 'Bangalore, India',
    type: 'Full-time',
  },
  {
    role: 'Backend Engineer',
    company: 'DataSystems Inc.',
    location: 'Remote',
    type: 'Full-time',
  },
  {
    role: 'UI/UX Design Intern',
    company: 'DesignStudio',
    location: 'Mumbai, India',
    type: 'Internship',
  },
  {
    role: 'DevOps Engineer',
    company: 'CloudNative Co.',
    location: 'Hyderabad, India',
    type: 'Full-time',
  },
  {
    role: 'Data Science Intern',
    company: 'AI Solutions',
    location: 'Remote',
    type: 'Internship',
  },
]

export default function JobBoardPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-5xl mx-auto">
        <PageHeader
          title="Job Board"
          description="Explore internships and job opportunities."
        />

        {/* Filter Row */}
        <div className="flex flex-wrap gap-3 mb-6">
          <Button variant="outline" size="sm">
            All Roles
          </Button>
          <Button variant="outline" size="sm">
            Internship
          </Button>
          <Button variant="outline" size="sm">
            Full-time
          </Button>
          <Button variant="outline" size="sm">
            Remote
          </Button>
        </div>

        {/* Job Listings */}
        <div className="grid gap-4">
          {jobs.map((job, index) => (
            <Card 
              key={index} 
              className="group py-4 cursor-pointer transition-all duration-200 ease-in-out hover:border-primary hover:shadow-md"
            >
              <CardHeader className="pb-2">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div>
                    <CardTitle className="text-lg">{job.role}</CardTitle>
                    <CardDescription className="flex items-center gap-1 mt-1">
                      <Building2 className="h-4 w-4" />
                      {job.company}
                    </CardDescription>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant={job.type === 'Internship' ? 'default' : 'secondary'}>
                      {job.type}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    {job.location}
                  </div>
                  <Button size="sm" disabled className="transition-all duration-200 ease-in-out group-hover:bg-primary/90">
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  )
}
