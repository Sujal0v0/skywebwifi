import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
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

  return (
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
  );
};

export default Testimonials;