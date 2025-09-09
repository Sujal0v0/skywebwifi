import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Wifi, Car, Waves, Trees, Coffee, ShoppingCart } from "lucide-react";
import amenitiesImage from "@/assets/amenities.jpg";

const AmenitiesHighlight = () => {
  const amenities = [
    {
      icon: Wifi,
      title: "Free WiFi",
      description: "High-speed internet throughout the park",
    },
    {
      icon: Car,
      title: "Full Hookups",
      description: "30/50 amp electrical, water & sewer",
    },
    {
      icon: Waves,
      title: "Lake Access",
      description: "Private fishing and swimming lake",
    },
    {
      icon: Trees,
      title: "Nature Trails",
      description: "Miles of hiking and walking paths",
    },
    {
      icon: Coffee,
      title: "Camp Store",
      description: "Convenience store with essentials",
    },
    {
      icon: ShoppingCart,
      title: "Laundry",
      description: "Clean, modern laundry facilities",
    },
  ];

  return (
    <section className="py-20 bg-subtle-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Premium Amenities & Facilities
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need for a comfortable and memorable stay in the
            great outdoors
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src={amenitiesImage}
              alt="Modern campground facilities"
              className="w-full h-full object-cover rounded-lg shadow-medium"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {amenities.map((amenity, index) => (
              <Card
                key={index}
                className="border-border hover:shadow-soft transition-shadow"
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <amenity.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground">
                      {amenity.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    {amenity.description}
                  </p>
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
  );
};

export default AmenitiesHighlight;
