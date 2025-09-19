import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import Image from "next/image";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Leanne Thompson",
      image: "/testimonials/leanne-thompson.jpg",
      location: "Spencer RV Park",
      rating: 5,
      text: "Tenants are finally happy!!! I’ve got several comments already today!! Thank you John! ",
    },
    {
      name: "Jimmy Berkatis",
      image: "/testimonials/jimmy-berkatis.jpg",
      location: "Homestead RV park",
      rating: 5,
      text: "John did an awesome job top to bottom. Politeness with conversations, return calls promptly very meticulous in fieldwork and setting of a component and explains things thoroughly. You’ve got a good man here. Dittos with Dan, they make a great team",
    },
    {
      name: "James Brook",
      image: "/testimonials/james-brook.jpg",
      location: "",
      rating: 5,
      text: "I called SkyWeb and spoke with Ryan. He was friendly, explained everything so I could understand without any pressure to purchase. He offered all assistance for connection of devices since I was planning on purchasing for multiple devices. Ryan is very professional, kind, attentive to my questions and concerns, and he is a great asset to your company. Thank you.",
    },
  ];

  return (
    <section className="py-20 bg-gray-100">
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
                  <Image
                    src={testimonial.image}
                    width={100}
                    height={100}
                    alt={testimonial.name}
                    className="h-10 w-10 rounded-full mb-2"
                  />
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
