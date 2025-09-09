import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { 
  Award, 
  Users, 
  TreePine, 
  Heart, 
  Shield, 
  Leaf,
  Clock,
  MapPin
} from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: TreePine,
      title: 'Pristine Natural Setting',
      description: 'Nestled among towering pines with breathtaking mountain views and crystal-clear lake access.'
    },
    {
      icon: Shield,
      title: 'Safe & Secure',
      description: '24/7 security, well-lit pathways, and emergency services available on-site for your peace of mind.'
    },
    {
      icon: Users,
      title: 'Family-Friendly',
      description: 'Designed with families in mind, featuring playgrounds, recreational activities, and quiet zones.'
    },
    {
      icon: Leaf,
      title: 'Eco-Conscious',
      description: 'Committed to sustainable practices and preserving the natural beauty of our environment.'
    }
  ];

  const awards = [
    'RV Travel Magazine - Best Mountain Resort 2023',
    'California Tourism Board - Excellence Award 2022',
    'Family RV Network - Top Family Destination 2023',
    'Green Camping Initiative - Eco-Friendly Certification'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-hero-gradient text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Pine Ridge RV Resort</h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8">
              Creating unforgettable outdoor experiences since 1985
            </p>
            <div className="flex flex-wrap gap-4 justify-center text-sm">
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <Clock className="h-4 w-4" />
                <span>38+ Years of Excellence</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <MapPin className="h-4 w-4" />
                <span>200+ Premium Sites</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <Award className="h-4 w-4" />
                <span>Award-Winning Resort</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Our Story</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                <p>
                  Pine Ridge RV Resort began as a dream of the Morrison family in 1985 - to create a place where 
                  families could reconnect with nature without sacrificing comfort. What started as a small 
                  campground with 50 sites has grown into Northern California's premier RV destination.
                </p>
                <p>
                  Over the decades, we've carefully expanded our facilities while preserving the natural beauty 
                  that makes our location so special. Every decision we make is guided by our commitment to 
                  providing exceptional hospitality and environmental stewardship.
                </p>
                <p>
                  Today, Pine Ridge RV Resort spans 300 acres of pristine wilderness, featuring over 200 
                  premium RV sites, modern amenities, and endless opportunities for outdoor adventure. 
                  We're proud to be a family-owned business serving families for over three generations.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <Card className="border-l-4 border-l-primary">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">Our Mission</h3>
                  <p className="text-muted-foreground">
                    To provide exceptional RV camping experiences that reconnect people with nature, 
                    each other, and themselves in a safe, comfortable, and inspiring environment.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-orange">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">Our Vision</h3>
                  <p className="text-muted-foreground">
                    To be the premier RV resort destination where lasting memories are made, 
                    natural beauty is preserved, and every guest feels like part of our family.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-subtle-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Pine Ridge RV Resort?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover what sets us apart from other RV parks and resorts
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-border hover:shadow-soft transition-shadow text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Certifications */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Awards & Recognition
            </h2>
            <p className="text-xl text-muted-foreground">
              Honored to be recognized for our commitment to excellence
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {awards.map((award, index) => (
                <Card key={index} className="border-border">
                  <CardContent className="p-6 flex items-center gap-4">
                    <div className="w-12 h-12 bg-orange/10 rounded-full flex items-center justify-center">
                      <Award className="h-6 w-6 text-orange" />
                    </div>
                    <p className="font-medium text-foreground">{award}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Rates & Pricing Section */}
      <section className="py-20 bg-warm-gradient text-orange-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Rates & Pricing</h2>
            <p className="text-xl text-orange-foreground/90 mb-8">
              Competitive rates for premium RV camping experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            <Card className="bg-white/10 border-white/20">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-white">Daily Rate</CardTitle>
                <CardDescription className="text-orange-foreground/80">Perfect for weekend getaways</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center space-y-2">
                  <div className="space-y-1">
                    <p className="text-sm text-orange-foreground/80">Standard Sites</p>
                    <p className="text-3xl font-bold text-white">$45</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-orange-foreground/80">Premium Sites</p>
                    <p className="text-2xl font-semibold text-white">$55</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-white">Weekly Rate</CardTitle>
                <CardDescription className="text-orange-foreground/80">Great value for extended stays</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center space-y-2">
                  <div className="space-y-1">
                    <p className="text-sm text-orange-foreground/80">Standard Sites</p>
                    <p className="text-3xl font-bold text-white">$280</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-orange-foreground/80">Premium Sites</p>
                    <p className="text-2xl font-semibold text-white">$350</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-white">Monthly Rate</CardTitle>
                <CardDescription className="text-orange-foreground/80">Best value for long-term guests</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center space-y-2">
                  <div className="space-y-1">
                    <p className="text-sm text-orange-foreground/80">Standard Sites</p>
                    <p className="text-3xl font-bold text-white">$1,000</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-orange-foreground/80">Premium Sites</p>
                    <p className="text-2xl font-semibold text-white">$1,300</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <p className="text-orange-foreground/90 mb-6">
              Seasonal discounts available • Military & Senior discounts • Extended stay savings
            </p>
          </div>
        </div>
      </section>

      {/* Cancellation Policy Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Cancellation Policy
            </h2>
            <p className="text-xl text-muted-foreground">
              Fair and transparent cancellation terms for your peace of mind
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
            <Card className="border-2 bg-green-50 border-green-200">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">48+ Hours Before</h3>
                <div className="text-2xl font-bold text-green-600 mb-3">Full Refund</div>
                <p className="text-sm text-muted-foreground">Cancel up to 48 hours before arrival</p>
              </CardContent>
            </Card>

            <Card className="border-2 bg-orange-50 border-orange-200">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">24-48 Hours Before</h3>
                <div className="text-2xl font-bold text-orange-600 mb-3">50% Refund</div>
                <p className="text-sm text-muted-foreground">Partial refund with advance notice</p>
              </CardContent>
            </Card>

            <Card className="border-2 bg-red-50 border-red-200">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">Less than 24 Hours</h3>
                <div className="text-2xl font-bold text-red-600 mb-3">No Refund</div>
                <p className="text-sm text-muted-foreground">No refund for last-minute cancellations</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center bg-muted/50 p-6 rounded-lg max-w-4xl mx-auto">
            <h3 className="text-lg font-semibold mb-2">Special Circumstances</h3>
            <p className="text-muted-foreground mb-4">
              Exceptions may apply for severe weather, medical emergencies, or military deployments. Documentation required.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-nature-gradient text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Experience Pine Ridge?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Join thousands of satisfied guests who have made Pine Ridge their home away from home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="lg" asChild>
              <Link to="/reservations">Book Your Stay</Link>
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20" asChild>
              <Link to="/about/rules">View Park Rules</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;