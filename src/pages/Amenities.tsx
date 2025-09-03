import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Wifi, 
  Car, 
  Waves, 
  Trees, 
  Coffee, 
  ShoppingCart,
  Bath,
  Zap,
  Droplets,
  Trash2,
  PlaySquare,
  Utensils,
  Dumbbell,
  Fish,
  Mountain,
  Camera,
  Clock
} from 'lucide-react';
import amenitiesImage from '@/assets/amenities.jpg';
import recreationImage from '@/assets/recreation.jpg';

const Amenities = () => {
  const essentialAmenities = [
    {
      icon: Bath,
      title: 'Modern Restrooms & Showers',
      description: 'Clean, heated facilities with private shower stalls, available 24/7',
      details: ['Hot water guaranteed', 'Handicap accessible', 'Family restrooms available', 'Climate controlled']
    },
    {
      icon: ShoppingCart,
      title: 'Laundry Facilities', 
      description: 'Coin-operated washers and dryers with soap dispensers',
      details: ['8 washers & 8 dryers', 'Open 6 AM - 10 PM', 'Change machine available', 'Folding tables provided']
    },
    {
      icon: Wifi,
      title: 'Free High-Speed WiFi',
      description: 'Complimentary internet access throughout the entire park',
      details: ['Fiber optic connection', 'No data limits', 'Password protected', 'Tech support available']
    },
    {
      icon: Zap,
      title: 'Full Electrical Hookups',
      description: '30/50 amp service with circuit breaker protection',
      details: ['All sites have power', 'Surge protection available', 'Multiple outlet options', 'LED lighting throughout']
    },
    {
      icon: Droplets,
      title: 'Fresh Water & Sewer',
      description: 'Direct connections at every site with excellent water pressure',
      details: ['City water supply', 'Full sewer hookups', 'Water pressure tested daily', 'Hose bibs at each site']
    },
    {
      icon: Trash2,
      title: 'Dump Stations',
      description: 'Multiple RV waste disposal stations for your convenience',
      details: ['4 dump stations', 'Fresh water rinse', 'Accessible design', 'Regular maintenance']
    }
  ];

  const recreationalFacilities = [
    {
      icon: PlaySquare,
      title: 'Children\'s Playground',
      description: 'Safe, modern playground equipment for kids of all ages',
      details: ['Ages 2-12 equipment', 'Rubber safety surface', 'Shaded seating', 'Security fencing']
    },
    {
      icon: Utensils,
      title: 'Picnic Areas',
      description: 'Spacious areas with tables, grills, and beautiful views',
      details: ['20+ picnic tables', 'Built-in BBQ grills', 'Covered pavilions', 'Group reservation options']
    },
    {
      icon: Waves,
      title: 'Swimming Pool',
      description: 'Heated outdoor pool with lap lanes and shallow end for kids',
      details: ['Heated to 82°F', 'Lifeguard on duty', 'Pool hours: 8 AM - 9 PM', 'Pool furniture provided']
    },
    {
      icon: Fish,
      title: 'Fishing Pond',
      description: 'Stocked fishing pond with bass, trout, and catfish',
      details: ['California fishing license required', 'Catch & release encouraged', 'Fishing pier available', 'Bait shop on-site']
    },
    {
      icon: Trees,
      title: 'Hiking Trails',
      description: 'Miles of well-maintained trails through pristine wilderness',
      details: ['5 different trail options', 'Difficulty levels marked', 'Trail maps available', 'Wildlife viewing opportunities']
    },
    {
      icon: Mountain,
      title: 'Nature Center',
      description: 'Educational exhibits about local flora, fauna, and geology',
      details: ['Interactive displays', 'Guided tours available', 'Educational programs', 'Gift shop']
    }
  ];

  const onsiteServices = [
    {
      icon: Coffee,
      title: 'Camp Store & Café',
      description: 'Convenience store with camping supplies, snacks, and fresh coffee',
      details: ['Open 7 AM - 8 PM', 'Fresh pastries daily', 'Camping essentials', 'Ice & firewood sales'],
      hours: '7:00 AM - 8:00 PM'
    },
    {
      icon: Dumbbell,
      title: 'Fitness Center',
      description: 'Small but well-equipped gym with cardio and strength equipment',
      details: ['24/7 access with key card', 'Cardio machines', 'Free weights', 'Yoga mats available'],
      hours: '24/7 (Key Card Access)'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-hero-gradient text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Amenities & Facilities</h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8">
              Everything you need for the perfect RV camping experience
            </p>
          </div>
        </div>
      </section>

      {/* Essential Amenities */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Essential Amenities
            </h2>
            <p className="text-xl text-muted-foreground">
              Modern conveniences and necessities for comfortable camping
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img
                src={amenitiesImage}
                alt="Modern campground amenities and facilities"
                className="w-full h-96 object-cover rounded-lg shadow-medium"
              />
            </div>
            <div className="grid grid-cols-1 gap-6">
              {essentialAmenities.slice(0, 3).map((amenity, index) => (
                <Card key={index} className="border-border hover:shadow-soft transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <amenity.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">{amenity.title}</h3>
                        <p className="text-muted-foreground text-sm mb-3">{amenity.description}</p>
                        <ul className="text-xs text-muted-foreground space-y-1">
                          {amenity.details.map((detail, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                              <div className="w-1 h-1 bg-primary rounded-full" />
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {essentialAmenities.slice(3).map((amenity, index) => (
              <Card key={index} className="border-border hover:shadow-soft transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <amenity.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2 text-center">{amenity.title}</h3>
                  <p className="text-muted-foreground text-sm mb-3 text-center">{amenity.description}</p>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    {amenity.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <div className="w-1 h-1 bg-primary rounded-full" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recreational Facilities */}
      <section className="py-20 bg-subtle-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Recreational Facilities
            </h2>
            <p className="text-xl text-muted-foreground">
              Fun activities and adventures for the whole family
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 lg:order-1 grid grid-cols-1 gap-6">
              {recreationalFacilities.slice(0, 3).map((facility, index) => (
                <Card key={index} className="border-border hover:shadow-soft transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-orange/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <facility.icon className="h-6 w-6 text-orange" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">{facility.title}</h3>
                        <p className="text-muted-foreground text-sm mb-3">{facility.description}</p>
                        <ul className="text-xs text-muted-foreground space-y-1">
                          {facility.details.map((detail, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                              <div className="w-1 h-1 bg-orange rounded-full" />
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="order-1 lg:order-2">
              <img
                src={recreationImage}
                alt="Recreational facilities and activities"
                className="w-full h-96 object-cover rounded-lg shadow-medium"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recreationalFacilities.slice(3).map((facility, index) => (
              <Card key={index} className="border-border hover:shadow-soft transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-orange/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <facility.icon className="h-6 w-6 text-orange" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2 text-center">{facility.title}</h3>
                  <p className="text-muted-foreground text-sm mb-3 text-center">{facility.description}</p>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    {facility.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <div className="w-1 h-1 bg-orange rounded-full" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* On-site Services */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              On-site Services
            </h2>
            <p className="text-xl text-muted-foreground">
              Additional conveniences to enhance your stay
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {onsiteServices.map((service, index) => (
              <Card key={index} className="border-border hover:shadow-soft transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <service.icon className="h-6 w-6 text-accent" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-2">{service.title}</h3>
                      <p className="text-muted-foreground text-sm mb-2">{service.description}</p>
                      <div className="inline-flex items-center gap-2 bg-accent/10 px-3 py-1 rounded-full text-xs font-medium text-accent">
                        <Clock className="h-3 w-3" />
                        {service.hours}
                      </div>
                    </div>
                  </div>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <div className="w-1 h-1 bg-accent rounded-full" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-nature-gradient text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Experience All Our Amenities
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Book your stay today and enjoy access to all our premium facilities and services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="lg" asChild>
              <Link to="/reservations">Book Now</Link>
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20" asChild>
              <Link to="/rates">View Rates</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Amenities;