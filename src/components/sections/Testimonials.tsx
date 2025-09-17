import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Marina Manager",
      location: "Navy Pier Marina",
      rating: 5,
      text: "SkyWeb transformed our marina operations. Guests love the reliable WiFi, and the splash page advertising generates significant monthly revenue for us.",
    },
    {
      name: "Park Owner",
      location: "Mountain View RV Resort",
      rating: 5,
      text: "The camera system gives us peace of mind, and guests appreciate the fast WiFi. We're seeing $6K in additional monthly revenue from the branded portal.",
    },
    {
      name: "Operations Director",
      location: "Lakeside Campground",
      rating: 5,
      text: "Professional installation, excellent support, and the monitoring dashboard helps us stay on top of everything. Our guest satisfaction scores have improved dramatically.",
    },
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
            <Card
              key={index}
              className="border-border hover:shadow-soft transition-shadow"
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary" />
                  ))}
                </div>
                <Quote className="h-8 w-8 text-muted-foreground mb-4" />
                <p className="text-muted-foreground mb-4 italic">
                  "{testimonial.text}"
                </p>
                <div>
                  <p className="font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.location}
                  </p>
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
