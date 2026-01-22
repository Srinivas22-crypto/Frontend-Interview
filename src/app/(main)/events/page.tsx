import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { PageHeader } from '@/components/shared/PageHeader'
import { Calendar, MapPin, Video } from 'lucide-react'

const upcomingEvents = [
  {
    title: 'Web Development Workshop',
    date: 'Feb 15, 2026',
    mode: 'Online',
    description: 'Learn modern web development practices with React and Next.js.',
  },
  {
    title: 'Career Fair 2026',
    date: 'Mar 1, 2026',
    mode: 'Offline',
    description: 'Connect with top employers and explore job opportunities.',
  },
  {
    title: 'AI/ML Bootcamp',
    date: 'Mar 10, 2026',
    mode: 'Online',
    description: 'Hands-on workshop on machine learning fundamentals.',
  },
]

const pastEvents = [
  {
    title: 'Resume Building Session',
    date: 'Jan 5, 2026',
    mode: 'Online',
    description: 'Expert tips on crafting the perfect resume.',
  },
  {
    title: 'Mock Interview Day',
    date: 'Dec 20, 2025',
    mode: 'Offline',
    description: 'Practice interviews with industry professionals.',
  },
]

function EventCard({ event, isPast = false }: { event: typeof upcomingEvents[0]; isPast?: boolean }) {
  return (
    <Card className={`group transition-all duration-200 ease-in-out ${isPast ? 'opacity-70' : 'hover:shadow-md hover:bg-muted/40'}`}>
      <CardHeader>
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="text-lg">{event.title}</CardTitle>
          <Badge variant={event.mode === 'Online' ? 'default' : 'secondary'}>
            {event.mode === 'Online' ? (
              <Video className="h-3 w-3 mr-1" />
            ) : (
              <MapPin className="h-3 w-3 mr-1" />
            )}
            {event.mode}
          </Badge>
        </div>
        <CardDescription className="flex items-center gap-1">
          <Calendar className="h-4 w-4" />
          {event.date}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-4">{event.description}</p>
        <Button 
          disabled={isPast} 
          variant={isPast ? 'outline' : 'default'} 
          className={`w-full transition-all duration-200 ease-in-out ${!isPast ? 'hover:scale-[1.02]' : ''}`}
        >
          {isPast ? 'Event Ended' : 'Register'}
        </Button>
      </CardContent>
    </Card>
  )
}

export default function EventsPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-5xl mx-auto">
        <PageHeader
          title="Events"
          description="Workshops, webinars, and upcoming learning events."
        />

        <div className="space-y-10">
          {/* Upcoming Events */}
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">Upcoming Events</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {upcomingEvents.map((event) => (
                <EventCard key={event.title} event={event} />
              ))}
            </div>
          </section>

          {/* Past Events */}
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">Past Events</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {pastEvents.map((event) => (
                <EventCard key={event.title} event={event} isPast />
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
