import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Camera, 
  ArrowLeft, 
  Users, 
  Waves, 
  TreePine,
  Flame,
  Music,
  Gamepad2,
  Mountain,
  Heart,
  Calendar,
  Eye
} from 'lucide-react';

const GalleryActivities = () => {
  const activityCategories = [
    {
      title: 'Water Activities',
      description: 'Swimming, fishing, and lakeside fun',
      count: '18 Photos',
      icon: Waves,
      color: 'bg-blue-500/10',
      activities: ['Swimming Pool', 'Lake Fishing', 'Hot Tub', 'Water Games']
    },
    {
      title: 'Outdoor Adventures',
      description: 'Hiking, nature walks, and exploration',
      count: '22 Photos',
      icon: Mountain,
      color: 'bg-green-500/10',
      activities: ['Nature Trails', 'Hiking', 'Wildlife Viewing', 'Photography']
    },
    {
      title: 'Family Activities',
      description: 'Games, playground, and family time',
      count: '16 Photos',
      icon: Users,
      color: 'bg-orange/10',
      activities: ['Playground', 'Game Room', 'Family Events', 'Sports Courts']
    },
    {
      title: 'Evening Entertainment',
      description: 'Campfires, music, and social gatherings',
      count: '14 Photos',
      icon: Flame,
      color: 'bg-primary/10',
      activities: ['Campfires', 'Live Music', 'Story Time', 'Group Activities']
    }
  ];

  const featuredActivities = [
    {
      title: 'Family Pool Time',
      description: 'Families enjoying our heated swimming pool with mountain backdrop',
      category: 'Water Activities',
      season: 'Summer',
      ageGroup: 'All Ages',
      time: 'Day',
      location: 'Swimming Pool Complex'
    },
    {
      title: 'Campfire Stories & S\'mores',
      description: 'Evening gathering around the central fire pit with s\'mores and stories',
      category: 'Evening Entertainment',
      season: 'All Year',
      ageGroup: 'All Ages',
      time: 'Evening',
      location: 'Central Fire Pit'
    },
    {
      title: 'Nature Trail Adventure',
      description: 'Guests exploring the scenic Pine Ridge Nature Trail with guided tour',
      category: 'Outdoor Adventures',
      season: 'Spring/Fall',
      ageGroup: 'Adults & Teens',
      time: 'Morning',
      location: 'Pine Ridge Trail'
    },
    {
      title: 'Playground Fun',
      description: 'Children enjoying our modern playground equipment in safe environment',
      category: 'Family Activities',
      season: 'All Year',
      ageGroup: 'Kids',
      time: 'Day',
      location: 'Central Playground'
    },
    {
      title: 'Lake Fishing Success',
      description: 'Anglers showing off their catch from our well-stocked fishing lake',
      category: 'Water Activities',
      season: 'Spring/Summer',
      ageGroup: 'All Ages',
      time: 'Early Morning',
      location: 'Pine Lake'
    },
    {
      title: 'Game Room Competition',
      description: 'Families competing in ping pong and arcade games in the recreation center',
      category: 'Family Activities',
      season: 'All Year',
      ageGroup: 'All Ages',
      time: 'Any Time',
      location: 'Recreation Center'
    },
    {
      title: 'Sunset Hot Tub Relaxation',
      description: 'Guests unwinding in the hot tub as the sun sets over the mountains',
      category: 'Water Activities',
      season: 'All Year',
      ageGroup: 'Adults',
      time: 'Evening',
      location: 'Pool Complex'
    },
    {
      title: 'Live Music Night',
      description: 'Local musicians performing at our outdoor amphitheater under the stars',
      category: 'Evening Entertainment',
      season: 'Summer',
      ageGroup: 'All Ages',
      time: 'Evening',
      location: 'Amphitheater'
    },
    {
      title: 'Basketball Tournament',
      description: 'Friendly competition on our well-maintained basketball court',
      category: 'Family Activities',
      season: 'All Year',
      ageGroup: 'Teens & Adults',
      time: 'Afternoon',
      location: 'Sports Courts'
    }
  ];

  const activityTips = [
    {
      title: 'Best Times for Photography',
      tip: 'Golden hour (sunrise/sunset) offers the most beautiful lighting for activity photos',
      icon: Camera
    },
    {
      title: 'Seasonal Activities',
      tip: 'Summer focuses on water activities, while fall offers the best hiking conditions',
      icon: Calendar
    },
    {
      title: 'Family Participation',
      tip: 'Most activities are designed for all family members to enjoy together',
      icon: Heart
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-hero-gradient text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <nav className="mb-6">
              <Button variant="outline" size="sm" className="bg-white/10 border-white/30 text-white hover:bg-white/20" asChild>
                <Link to="/gallery" className="flex items-center gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  Back to Gallery
                </Link>
              </Button>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Activities Gallery</h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8">
              See guests enjoying our recreational activities and entertainment
            </p>
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm">
              <Users className="h-4 w-4" />
              <span>70+ Activity Photos • 4 Categories • Year-Round Fun</span>
            </div>
          </div>
        </div>
      </section>

      {/* Activity Categories */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Browse Activities by Type
            </h2>
            <p className="text-xl text-muted-foreground">
              Discover the variety of recreational opportunities available
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {activityCategories.map((category, index) => (
              <Card key={index} className="border-border hover:shadow-soft transition-shadow">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${category.color} flex-shrink-0`}>
                      <category.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl">{category.title}</CardTitle>
                      <CardDescription>{category.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Camera className="h-4 w-4" />
                    <span className="font-medium">{category.count}</span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2">
                    {category.activities.map((activity, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                        {activity}
                      </div>
                    ))}
                  </div>
                  
                  <Button variant="outline" size="sm" className="w-full">
                    <Eye className="h-4 w-4 mr-2" />
                    View {category.title} Photos
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Activity Photos */}
      <section className="py-20 bg-subtle-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Featured Activity Photos
            </h2>
            <p className="text-xl text-muted-foreground">
              Capture the excitement and joy of Pine Ridge activities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {featuredActivities.map((photo, index) => (
              <Card key={index} className="border-border hover:shadow-soft transition-shadow overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-primary/20 to-orange/20 flex items-center justify-center">
                  <Camera className="h-12 w-12 text-primary/60" />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{photo.title}</CardTitle>
                    <span className="bg-orange text-orange-foreground px-2 py-1 rounded text-xs font-medium">
                      {photo.category}
                    </span>
                  </div>
                  <CardDescription>{photo.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-medium text-muted-foreground">Season</p>
                      <p className="text-foreground">{photo.season}</p>
                    </div>
                    <div>
                      <p className="font-medium text-muted-foreground">Age Group</p>
                      <p className="text-foreground">{photo.ageGroup}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-medium text-muted-foreground">Best Time</p>
                      <p className="text-foreground">{photo.time}</p>
                    </div>
                    <div>
                      <p className="font-medium text-muted-foreground">Location</p>
                      <p className="text-foreground">{photo.location}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Activity Photography Tips */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Activity Photography Tips
            </h2>
            <p className="text-xl text-muted-foreground">
              Capture your own memorable moments during activities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {activityTips.map((tip, index) => (
              <Card key={index} className="border-border text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <tip.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-3">{tip.title}</h3>
                  <p className="text-sm text-muted-foreground">{tip.tip}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Weekly Activity Schedule */}
      <section className="py-20 bg-subtle-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Popular Activity Times
              </h2>
              <p className="text-xl text-muted-foreground">
                Best times to capture these activities in action
              </p>
            </div>

            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  Activity Schedule Highlights
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-3">Daily Activities</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span><strong>6:00 AM - 10:00 PM:</strong> Swimming Pool & Hot Tub</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span><strong>Sunrise/Sunset:</strong> Best fishing times</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span><strong>8:00 AM - 6:00 PM:</strong> Playground active hours</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span><strong>Dawn to Dusk:</strong> Nature trails open</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3">Special Events</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span><strong>Saturday 7:30 PM:</strong> Campfire stories & s'mores</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span><strong>Summer Evenings:</strong> Live music performances</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span><strong>Weekends:</strong> Organized family activities</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span><strong>Monthly:</strong> Special themed events</span>
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
            Ready to Join the Fun?
          </h2>
          <p className="text-xl mb-8 text-orange-foreground/90 max-w-2xl mx-auto">
            Book your stay and create your own amazing activity memories at Pine Ridge.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/reservations">Book Your Adventure</Link>
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20" asChild>
              <Link to="/events">View Events Calendar</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GalleryActivities;