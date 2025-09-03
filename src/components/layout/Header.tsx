import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, MapPin, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { 
      name: 'About', 
      href: '/about',
      submenu: [
        { name: 'About Us', href: '/about' },
        { name: 'Campground Rules', href: '/about/rules' }
      ]
    },
    { name: 'Amenities', href: '/amenities' },
    { 
      name: 'Rates', 
      href: '/rates',
      submenu: [
        { name: 'Rates & Pricing', href: '/rates' },
        { name: 'Cancellation Policy', href: '/rates/cancellation' }
      ]
    },
    { name: 'Reservations', href: '/reservations' }
  ];

  const isActive = (href: string) => location.pathname === href;
  const isActiveSection = (href: string, submenu?: any[]) => {
    if (submenu) {
      return submenu.some(item => location.pathname === item.href);
    }
    return location.pathname === href;
  };

  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50 shadow-soft">
      <div className="container mx-auto px-4">
        {/* Top bar with contact info */}
        <div className="hidden md:flex items-center justify-between py-2 text-sm text-muted-foreground border-b border-border/50">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>(555) 123-4567</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>123 Forest Trail, Mountain View, CA</span>
            </div>
          </div>
          <div className="text-primary font-medium">
            Open Year Round • 7 Days a Week
          </div>
        </div>

        {/* Main navigation */}
        <div className="flex items-center justify-between py-4">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-hero-gradient rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl">
              RV
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Pine Ridge RV Resort</h1>
              <p className="text-sm text-muted-foreground">Your Home Away From Home</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                {item.submenu ? (
                  <>
                    <Link
                      to={item.href}
                      className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary ${
                        isActiveSection(item.href, item.submenu) ? 'text-primary' : 'text-foreground'
                      }`}
                    >
                      {item.name}
                      <ChevronDown className="h-3 w-3" />
                    </Link>
                    <div className="absolute top-full left-0 mt-8 w-48 bg-background border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          className={`block px-4 py-3 text-sm hover:bg-muted transition-colors first:rounded-t-lg last:rounded-b-lg ${
                            isActive(subItem.href) ? 'text-primary bg-muted' : 'text-foreground'
                          }`}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    to={item.href}
                    className={`text-sm font-medium transition-colors hover:text-primary ${
                      isActive(item.href) ? 'text-primary' : 'text-foreground'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="cta" asChild>
              <Link to="/reservations">Book Now</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-2">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.href}
                    className={`block text-sm font-medium py-2 transition-colors hover:text-primary ${
                      isActiveSection(item.href, item.submenu) ? 'text-primary' : 'text-foreground'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.submenu && (
                    <div className="ml-4 space-y-1">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          className={`block text-sm py-1 transition-colors hover:text-primary ${
                            isActive(subItem.href) ? 'text-primary' : 'text-muted-foreground'
                          }`}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Button variant="cta" asChild className="mt-2">
                <Link to="/reservations" onClick={() => setIsMenuOpen(false)}>
                  Book Now
                </Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;