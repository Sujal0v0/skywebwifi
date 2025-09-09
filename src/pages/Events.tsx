import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  Music, 
  Users, 
  Flame, 
  Camera,
  Star,
  Gift,
  Heart,
  MapPin,
  Clock
} from 'lucide-react';

const Events = () => {
  const upcomingEvents = [
    {
      title: 'Summer Music Festival',
      date: 'July 15-16, 2024',
      time: '6:00 PM - 11:00 PM',
      description: 'Live acoustic performances by local artists around the campfire amphitheater',
      category: 'Entertainment',
      icon: Music,
      color: 'bg-primary/10',
      participants: 'All Ages Welcome',
      location: 'Main Amphitheater'
    },
    {
      title: 'Family Fun Day',
      date: 'July 22, 2024',
      time: '10:00 AM - 4:00 PM',
      description: 'Games, activities, face painting, and prizes for the whole family',
      category: 'Family',
      icon: Users,
      color: 'bg-orange/10',
      participants: 'Families with Kids',
      location: 'Recreation Center'
    },
    {
      title: 'Campfire Stories & S\'mores',
      date: 'Every Saturday',
      time: '7:30 PM - 9:00 PM',
      description: 'Gather around the campfire for stories, songs, and delicious s\'mores',
      category: 'Weekly',
      icon: Flame,
      color: 'bg-accent/10',
      participants: 'All Ages',
      location: 'Central Fire Pit'
    },
    {
      title: 'Photography Workshop',
      date: 'August 5, 2024',
      time: '8:00 AM - 12:00 PM',
      description: 'Learn landscape photography techniques with our natural surroundings',
      category: 'Educational',
      icon: Camera,
      color: 'bg-green-500/10',
      participants: 'Adults & Teens',
      location: 'Nature Trails'
    }
  ];

  const seasonalEvents = [
    {
      season: 'Spring',
      events: ['Easter Egg Hunt', 'Spring Clean-up Day', 'Wildflower Walks', 'Earth Day Celebration'],
      icon: Flame,
      color: 'text-green-600'
    },
    {
      season: 'Summer',
      events: ['Independence Day BBQ', 'Swimming Competitions', 'Outdoor Movie Nights', 'Nature Scavenger Hunts'],
      icon: Star,
      color: 'text-orange-600'
    },
    {
      season: 'Fall',
      events: ['Harvest Festival', 'Halloween Costume Contest', 'Fall Foliage Tours', 'Thanksgiving Potluck'],
      icon: Gift,
      color: 'text-amber-600'
    },
    {
      season: 'Winter',
      events: ['Holiday Light Display', 'New Year\'s Celebration', 'Winter Craft Workshops', 'Hot Cocoa Social'],
      icon: Heart,
      color: 'text-blue-600'
    }
  ];

  const eventCategories = [
    {
      name: 'Family Activities',
      description: 'Fun events designed for guests of all ages',
      icon: Users,
      examples: ['Game nights', 'Craft workshops', 'Family Olympics', 'Story time']
    },
    {
      name: 'Entertainment',
      description: 'Live music, shows, and performances',
      icon: Music,
      examples: ['Live bands', 'Acoustic sessions', 'Talent shows', 'Dance nights']
    },
    {
      name: 'Educational',
      description: 'Learn about nature, history, and outdoor skills',
      icon: Camera,
      examples: ['Nature walks', 'Astronomy nights', 'Survival skills', 'Local history']
    },
    {
      name: 'Seasonal Celebrations',
      description: 'Holiday and seasonal themed events',
      icon: Star,
      examples: ['Holiday parties', 'Seasonal festivals', 'Theme weekends', 'Special dinners']
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-hero-gradient text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Events & Activities</h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8">
              Year-round fun and entertainment for the whole family
            </p>
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm">
              <Calendar className="h-4 w-4" />
              <span>Weekly Events • Seasonal Celebrations • Special Activities</span>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Upcoming Events
            </h2>
            <p className="text-xl text-muted-foreground">
              Join us for these exciting upcoming activities and entertainment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="border-border hover:shadow-soft transition-shadow">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${event.color} flex-shrink-0`}>
                      <event.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <CardTitle className="text-xl">{event.title}</CardTitle>
                        <span className="bg-orange text-orange-foreground px-2 py-1 rounded text-xs font-medium">
                          {event.category}
                        </span>
                      </div>
                      <CardDescription>{event.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 gap-3">
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span className="font-medium">{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="h-4 w-4 text-primary" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Users className="h-4 w-4 text-primary" />
                      <span>{event.participants}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Event Categories */}
      <section className="py-20 bg-subtle-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Types of Events
            </h2>
            <p className="text-xl text-muted-foreground">
              We offer a variety of activities to suit every interest and age group
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {eventCategories.map((category, index) => (
              <Card key={index} className="border-border">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <category.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{category.name}</CardTitle>
                      <CardDescription>{category.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.examples.map((example, idx) => (
                      <span key={idx} className="bg-muted px-3 py-1 rounded-full text-sm text-muted-foreground">
                        {example}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Seasonal Events */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Seasonal Events Calendar
            </h2>
            <p className="text-xl text-muted-foreground">
              Special celebrations and activities throughout the year
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {seasonalEvents.map((season, index) => (
              <Card key={index} className="border-border text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-muted/50 rounded-full flex items-center justify-center mx-auto mb-2">
                    <season.icon className={`h-8 w-8 ${season.color}`} />
                  </div>
                  <CardTitle className="text-xl">{season.season}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {season.events.map((event, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground">
                        {event}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Event Information */}
      <section className="py-20 bg-subtle-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Event Information & Guidelines</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-3">Event Participation</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span>Most events are free for registered guests</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span>Some special events may require advance registration</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span>All ages welcome unless otherwise specified</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span>Check weather conditions for outdoor events</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3">Event Updates</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span>Check the activity board at reception for daily updates</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span>Event schedules may change due to weather</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span>Special holiday events announced in advance</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span>Follow our social media for event photos and updates</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-warm-gradient text-orange-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join the Fun!
          </h2>
          <p className="text-xl mb-8 text-orange-foreground/90 max-w-2xl mx-auto">
            Reserve your spot and become part of our vibrant community of outdoor enthusiasts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/reservations">Book Your Stay</Link>
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20" asChild>
              <Link to="/amenities">View All Amenities</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;