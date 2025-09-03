import Hero from '@/components/sections/Hero';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { 
  Wifi, 
  Car, 
  Waves, 
  Trees, 
  Coffee, 
  ShoppingCart, 
  Star,
  Quote,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import amenitiesImage from '@/assets/amenities.jpg';
import recreationImage from '@/assets/recreation.jpg';
import { useState } from 'react';

const Home = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const amenities = [
    { icon: Wifi, title: 'Free WiFi', description: 'High-speed internet throughout the park' },
    { icon: Car, title: 'Full Hookups', description: '30/50 amp electrical, water & sewer' },
    { icon: Waves, title: 'Lake Access', description: 'Private fishing and swimming lake' },
    { icon: Trees, title: 'Nature Trails', description: 'Miles of hiking and walking paths' },
    { icon: Coffee, title: 'Camp Store', description: 'Convenience store with essentials' },
    { icon: ShoppingCart, title: 'Laundry', description: 'Clean, modern laundry facilities' }
  ];

  const testimonials = [
    {
      name: 'Sarah & Mike Johnson',
      location: 'Sacramento, CA',
      rating: 5,
      text: 'Absolutely perfect! The sites are spacious, the facilities are immaculate, and the mountain views are breathtaking. We\'ve been coming here for 3 years running!'
    },
    {
      name: 'Robert Chen',
      location: 'San Jose, CA',
      rating: 5,
      text: 'Best RV park we\'ve stayed at. The staff is incredibly helpful, the amenities are top-notch, and our kids love the playground and lake.'
    },
    {
      name: 'Linda & Dave Martinez',
      location: 'Los Angeles, CA',
      rating: 5,
      text: 'A hidden gem! Peaceful, clean, and beautifully maintained. The hiking trails are amazing and the sunsets over the lake are unforgettable.'
    }
  ];

  const faqs = [
    {
      question: 'Do you accept pets?',
      answer: 'Yes! We welcome well-behaved pets. We have a $5 per night pet fee and require pets to be leashed at all times. We also have a dedicated dog park area.'
    },
    {
      question: 'What hookups are available?',
      answer: 'All sites include full hookups: 30/50 amp electrical service, fresh water, and sewer connections. We also provide free WiFi throughout the park.'
    },
    {
      question: 'Is there a minimum stay requirement?',
      answer: 'During peak season (May-September), we have a 3-night minimum on weekends. Off-season has no minimum stay requirements.'
    },
    {
      question: 'What are your check-in and check-out times?',
      answer: 'Check-in is from 2:00 PM to 8:00 PM. Check-out is by 11:00 AM. Early check-in and late check-out may be available upon request.'
    },
    {
      question: 'Do you have monthly rates?',
      answer: 'Yes! We offer competitive monthly rates for extended stays. Please contact us directly for monthly pricing and availability.'
    }
  ];

  return (
    <div>
      <Hero />

      {/* Amenities Highlights */}
      <section className="py-20 bg-subtle-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Premium Amenities & Facilities
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need for a comfortable and memorable stay in the great outdoors
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img
                src={amenitiesImage}
                alt="Modern campground facilities"
                className="w-full h-96 object-cover rounded-lg shadow-medium"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {amenities.map((amenity, index) => (
                <Card key={index} className="border-border hover:shadow-soft transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <amenity.icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-semibold text-foreground">{amenity.title}</h3>
                    </div>
                    <p className="text-muted-foreground text-sm">{amenity.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="text-center">
            <Button variant="nature" size="lg" asChild>
              <Link to="/amenities">View All Amenities</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Our Guests Say
            </h2>
            <p className="text-xl text-muted-foreground">
              Real experiences from our happy campers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-border hover:shadow-soft transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-orange text-orange" />
                    ))}
                  </div>
                  <Quote className="h-8 w-8 text-muted-foreground mb-4" />
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-subtle-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground">
              Quick answers to common questions
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <Card key={index} className="mb-4">
                <CardHeader 
                  className="cursor-pointer hover:bg-muted/50 transition-colors py-4"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-lg">{faq.question}</CardTitle>
                    {openFaq === index ? (
                      <ChevronUp className="h-5 w-5 text-muted-foreground" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-muted-foreground" />
                    )}
                  </div>
                </CardHeader>
                {openFaq === index && (
                  <CardContent>
                    <p className="text-muted-foreground pt-4">{faq.answer}</p>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-hero-gradient text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready for Your Mountain Adventure?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Book your stay today and experience the perfect blend of nature and comfort at Pine Ridge RV Resort.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="lg" asChild>
              <Link to="/reservations">Book Now</Link>
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
              <Link to="/rates">View Rates</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;