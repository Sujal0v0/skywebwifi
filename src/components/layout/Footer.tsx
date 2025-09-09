import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-orange rounded-full flex items-center justify-center text-orange-foreground font-bold text-xl">
                RV
              </div>
              <div>
                <h3 className="text-xl font-bold">Pine Ridge RV Resort</h3>
                <p className="text-primary-foreground/80">
                  Your Home Away From Home
                </p>
              </div>
            </div>
            <p className="text-primary-foreground/80 mb-6 max-w-md">
              Nestled in the heart of nature, Pine Ridge RV Resort offers
              premium camping experiences with modern amenities and breathtaking
              mountain views. Create memories that last a lifetime.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <Link
                to="/"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                About Us
              </Link>
              <Link
                to="/amenities"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Amenities
              </Link>
              <Link
                to="/rates"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Rates & Pricing
              </Link>
              <Link
                to="/reservations"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Reservations
              </Link>
              <Link
                to="/about/rules"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Park Rules
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-orange" />
                <div>
                  <p className="font-medium">(555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-orange" />
                <div>
                  <p className="font-medium">info@pineridgerv.com</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-orange" />
                <div>
                  <p className="font-medium">
                    123 Forest Trail
                    <br />
                    Mountain View, CA 94041
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © 2024 Pine Ridge RV Resort. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
