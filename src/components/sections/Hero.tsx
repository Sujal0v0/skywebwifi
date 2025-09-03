import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Star, Wifi, Car, Trees, Waves, MapPin } from 'lucide-react';
import heroImage from '@/assets/hero-campground.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Beautiful RV campground with mountain views"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/60 via-primary/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-orange/90 text-orange-foreground px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Star className="h-4 w-4 fill-current" />
            <span>5-Star Rated RV Resort</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Your Perfect
            <span className="block bg-warm-gradient bg-clip-text text-transparent">
              Mountain Retreat
            </span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Experience the ultimate RV camping adventure surrounded by pristine nature, 
            modern amenities, and breathtaking mountain views.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="hero" size="lg" asChild>
              <Link to="/reservations">Book Your Stay</Link>
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
              <Link to="/amenities">Explore Amenities</Link>
            </Button>
          </div>

          {/* Quick Features */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <Wifi className="h-6 w-6" />
              </div>
              <span className="text-sm font-medium">Free WiFi</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <Car className="h-6 w-6" />
              </div>
              <span className="text-sm font-medium">Full Hookups</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <Trees className="h-6 w-6" />
              </div>
              <span className="text-sm font-medium">Nature Trails</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <Waves className="h-6 w-6" />
              </div>
              <span className="text-sm font-medium">Lake Access</span>
            </div>
          </div>
        </div>
      </div>

      {/* Location Badge */}
      <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm text-primary px-4 py-3 rounded-lg shadow-medium">
        <div className="flex items-center gap-2">
          <MapPin className="h-4 w-4 text-orange" />
          <div className="text-sm">
            <p className="font-semibold">Mountain View, California</p>
            <p className="text-muted-foreground">1 hour from San Francisco</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;