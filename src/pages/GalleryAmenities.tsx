import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Camera, 
  ArrowLeft, 
  Star, 
  Waves, 
  Gamepad2,
  ShoppingCart,
  Car,
  Wifi,
  Building,
  Home,
  Clock,
  Eye
} from 'lucide-react';

const GalleryAmenities = () => {
  const amenityCategories = [
    {
      title: 'Pool & Recreation Complex',
      description: 'Swimming facilities and water recreation',
      count: '12 Photos',
      icon: Waves,
      color: 'bg-blue-500/10',
      facilities: ['Heated Pool', 'Hot Tub', 'Pool Deck', 'Changing Rooms']
    },
    {
      title: 'Recreation Center',
      description: 'Indoor activities and community space',
      count: '8 Photos',
      icon: Gamepad2,
      color: 'bg-orange/10',
      facilities: ['Game Room', 'WiFi Lounge', 'Event Space', 'Vending Area']
    },
    {
      title: 'Camp Store & Services',
      description: 'Shopping and essential services',
      count: '6 Photos',
      icon: ShoppingCart,
      color: 'bg-green-500/10',
      facilities: ['Camp Store', 'Ice Machine', 'Firewood', 'Supplies']
    },
    {
      title: 'Facilities & Infrastructure',
      description: 'Laundry, restrooms, and maintenance',
      count: '9 Photos',
      icon: Building,
      color: 'bg-primary/10',
      facilities: ['Laundry Room', 'Restrooms', 'Shower Houses', 'Maintenance']
    }
  ];

  const featuredAmenities = [
    {
      title: 'Heated Swimming Pool',
      description: 'Large heated pool with mountain views and comfortable pool deck seating',
      category: 'Pool Complex',
      hours: '6:00 AM - 10:00 PM',
      season: 'All Year',
      features: ['Heated Year-Round', 'Mountain Views', 'Pool Furniture', 'Lifeguard Station']
    },
    {
      title: 'Modern Recreation Center',
      description: 'Spacious community center with games, WiFi, and event hosting capabilities',
      category: 'Recreation',
      hours: '6:00 AM - 11:00 PM',
      season: 'All Year',
      features: ['High-Speed WiFi', 'Game Tables', 'Event Space', 'Climate Controlled']
    },
    {
      title: 'Relaxing Hot Tub',
      description: 'Therapeutic hot tub with stunning sunset views and privacy landscaping',
      category: 'Pool Complex',
      hours: '6:00 AM - 10:00 PM',
      season: 'All Year',
      features: ['Sunset Views', 'Therapeutic Jets', 'Privacy Screening', 'Safety Features']
    },
    {
      title: 'Well-Stocked Camp Store',
      description: 'Convenient store with camping essentials, snacks, and local souvenirs',
      category: 'Services',
      hours: '8:00 AM - 8:00 PM',
      season: 'All Year',
      features: ['Camping Supplies', 'Groceries', 'Ice & Firewood', 'Local Products']
    },
    {
      title: 'Game Room Entertainment',
      description: 'Family-friendly game room with ping pong, pool table, and arcade games',
      category: 'Recreation',
      hours: '6:00 AM - 11:00 PM',
      season: 'All Year',
      features: ['Pool Table', 'Ping Pong', 'Arcade Games', 'Seating Area']
    },
    {
      title: 'Modern Laundry Facilities',
      description: 'Clean, efficient laundry room with multiple washers, dryers, and folding space',
      category: 'Facilities',
      hours: '24 Hours',
      season: 'All Year',
      features: ['Multiple Machines', 'Folding Tables', 'Soap Dispensers', 'Change Machine']
    },
    {
      title: 'Clean Restroom & Shower Houses',
      description: 'Spotless restroom facilities with private showers and family bathrooms',
      category: 'Facilities',
      hours: '24 Hours',
      season: 'All Year',
      features: ['Private Showers', 'Family Rooms', 'Hot Water', 'Handicap Accessible']
    },
    {
      title: 'Children\'s Playground',
      description: 'Safe, modern playground equipment in a shaded area with safety surfacing',
      category: 'Recreation',
      hours: 'Dawn to Dusk',
      season: 'All Year',
      features: ['Age-Appropriate Equipment', 'Safety Surfacing', 'Shaded Area', 'Nearby Seating']
    }
  ];

  const amenityDetails = [
    {
      category: 'Pool Complex',
      description: 'Our aquatic facilities are designed for relaxation and fun',
      highlights: ['Heated to 82°F year-round', 'Chemical-free hot tub option', 'Pool furniture included', 'Towel rental available']
    },
    {
      category: 'Technology',
      description: 'Stay connected with modern technology amenities',
      highlights: ['High-speed fiber WiFi', 'Device charging stations', 'Cable TV hookups', 'Work-friendly spaces']
    },
    {
      category: 'Convenience',
      description: 'Everything you need for a comfortable stay',
      highlights: ['24/7 laundry access', 'Ice and firewood sales', 'Package delivery service', 'Emergency assistance']
    },
    {
      category: 'Cleanliness',
      description: 'Maintained to the highest standards of cleanliness',
      highlights: ['Daily cleaning schedules', 'Sanitization protocols', 'Quality maintenance', 'Guest feedback system']
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Amenities Gallery</h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8">
              Tour our modern facilities and premium amenities
            </p>
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm">
              <Star className="h-4 w-4" />
              <span>35+ Amenity Photos • Modern Facilities • Premium Services</span>
            </div>
          </div>
        </div>
      </section>

      {/* Amenity Categories */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Browse Amenities by Category
            </h2>
            <p className="text-xl text-muted-foreground">
              Explore our comprehensive facilities and services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {amenityCategories.map((category, index) => (
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
                    {category.facilities.map((facility, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                        {facility}
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

      {/* Featured Amenity Photos */}
      <section className="py-20 bg-subtle-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Featured Amenity Photos
            </h2>
            <p className="text-xl text-muted-foreground">
              Get a detailed look at our premium facilities and services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {featuredAmenities.map((photo, index) => (
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
                      <p className="font-medium text-muted-foreground">Hours</p>
                      <p className="text-foreground">{photo.hours}</p>
                    </div>
                    <div>
                      <p className="font-medium text-muted-foreground">Availability</p>
                      <p className="text-foreground">{photo.season}</p>
                    </div>
                  </div>
                  <div>
                    <p className="font-medium text-muted-foreground text-sm mb-2">Key Features</p>
                    <div className="grid grid-cols-1 gap-1">
                      {photo.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Amenity Highlights */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Makes Our Amenities Special
            </h2>
            <p className="text-xl text-muted-foreground">
              Quality, convenience, and attention to detail in every facility
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {amenityDetails.map((detail, index) => (
              <Card key={index} className="border-border">
                <CardHeader>
                  <CardTitle className="text-lg">{detail.category} Excellence</CardTitle>
                  <CardDescription>{detail.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {detail.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Star className="h-3 w-3 text-primary" />
                        </div>
                        <span className="text-sm text-muted-foreground">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Facility Hours & Information */}
      <section className="py-20 bg-subtle-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Facility Hours & Access
              </h2>
              <p className="text-xl text-muted-foreground">
                Know when and how to access our premium amenities
              </p>
            </div>

            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  Amenity Access Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-3">24/7 Access</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span>Laundry facilities</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span>Restrooms and shower houses</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span>WiFi throughout the resort</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span>Emergency assistance</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3">Scheduled Hours</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span><strong>Pool & Hot Tub:</strong> 6:00 AM - 10:00 PM</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span><strong>Recreation Center:</strong> 6:00 AM - 11:00 PM</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span><strong>Camp Store:</strong> 8:00 AM - 8:00 PM</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span><strong>Office:</strong> 8:00 AM - 10:00 PM</span>
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
            Experience Our Premium Amenities
          </h2>
          <p className="text-xl mb-8 text-orange-foreground/90 max-w-2xl mx-auto">
            Book your stay and enjoy all the comfort and convenience our facilities offer.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/reservations">Reserve Your Spot</Link>
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20" asChild>
              <Link to="/amenities">View Full Amenities List</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GalleryAmenities;