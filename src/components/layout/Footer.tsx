"use client";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { navigation } from "./Header";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/skywebwifi-logo-white.svg"
                alt="SkyWeb Wi-Fi Logo"
                width={400}
                height={400}
                className="h-12 w-auto"
              />
            </div>
            <p className="text-primary-foreground/80 mb-6 max-w-md">
              Trusted by 800+ properties, SkyWeb delivers reliable connectivity,
              advanced security, and new revenue through branded portals and
              splash pages
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
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              {navigation.map((navLink, index) => {
                return (
                  <Link
                    href={navLink.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {navLink.name}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-orange" />
                <div className="font-medium">
                  Business:{" "}
                  <a
                    href="tel:9897717515"
                    className="hover:text-red-400 transition-all duration-150 ease-in-out"
                  >
                    989-771-7515
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-orange" />
                <div className="font-medium">
                  Residential:{" "}
                  <a
                    href="tel:9897928681"
                    className="hover:text-red-400 transition-all duration-150 ease-in-out"
                  >
                    989-792-8681
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-orange" />
                <div>
                  <p className="font-medium">
                    <a
                      href="mailto:support@skywebwifi.com"
                      className="hover:text-red-400 transition-all duration-150 ease-in-out"
                    >
                      support@skywebwifi.com
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-orange" />
                <div className="font-medium">
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=2798+Bay+Rd,+Saginaw,+Michigan+48603"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-red-400 transition-all duration-150 ease-in-out"
                  >
                    2798 Bay Rd, Saginaw, Michigan 48603
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/60 text-sm">
            Copyright © 2025 SkyWeb Networks | Powered by SkyWeb Networks
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
