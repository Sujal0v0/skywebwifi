"use client";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useToast } from "@/hooks/use-toast";
import { format } from "date-fns";
import {
  Calendar as CalendarIcon,
  Users,
  MapPin,
  Phone,
  Mail,
  CheckCircle,
  CreditCard,
  Shield,
  Star,
  Wifi,
  Zap,
} from "lucide-react";

const Contact = () => {
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Reservation Request Submitted!",
      description:
        "Our team will contact you within 24 hours to set up your SkyWeb service.",
    });
  };

  const features = [
    {
      icon: Shield,
      title: "Secure Booking",
      description: "Your information is SSL encrypted and safe with us",
    },
    {
      icon: CheckCircle,
      title: "Fast Setup",
      description: "Schedule installation and service activation quickly",
    },
    {
      icon: Star,
      title: "Reliable Service",
      description: "Trusted by 800+ campgrounds and RV parks nationwide",
    },
  ];

  const bookingInfo = [
    "Service activation within 24 hours after confirmation",
    "Flexible site coverage options: campsites, cabins, pools, and rec halls",
    "Paid and free guest Wi-Fi tiers",
    "Optional camera system integration",
    "24/7 monitoring and support",
    "Custom branded login portals for guests",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-hero-gradient text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Let’s Build Your Wi-Fi & Revenue Plan
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8">
              Fast, secure Wi-Fi that keeps guests connected and turns your
              network into a profit center.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 bg-white/10 p-4 rounded-lg"
                >
                  <feature.icon className="h-8 w-8 text-secondary/90" />
                  <div className="text-left">
                    <p className="font-semibold text-sm">{feature.title}</p>
                    <p className="text-xs text-primary-foreground/80">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
            {/* Booking Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <Wifi className="h-6 w-6 text-primary" />
                    Service Reservation
                  </CardTitle>
                  <CardDescription>
                    Fill out the form below to request your SkyWeb installation
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Dates */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="checkin">Preferred Start Date</Label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant="outline"
                              className="w-full justify-start text-left font-normal"
                            >
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              {checkIn ? format(checkIn, "PPP") : "Select date"}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0">
                            <Calendar
                              mode="single"
                              selected={checkIn}
                              onSelect={setCheckIn}
                              disabled={(date) => date < new Date()}
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="checkout">Preferred End Date</Label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant="outline"
                              className="w-full justify-start text-left font-normal"
                            >
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              {checkOut
                                ? format(checkOut, "PPP")
                                : "Select date"}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0">
                            <Calendar
                              mode="single"
                              selected={checkOut}
                              onSelect={setCheckOut}
                              disabled={(date) =>
                                date < new Date() ||
                                (checkIn && date <= checkIn)
                              }
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                      </div>
                    </div>

                    {/* Property & Devices */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="siteType">Property Type</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select property type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="campground">
                              Campground
                            </SelectItem>
                            <SelectItem value="rv-park">RV Park</SelectItem>
                            <SelectItem value="marina">Marina</SelectItem>
                            <SelectItem value="resort">Resort</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="devices">Number of Devices</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select devices" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="50">Up to 50 devices</SelectItem>
                            <SelectItem value="100">
                              Up to 100 devices
                            </SelectItem>
                            <SelectItem value="200">
                              Up to 200 devices
                            </SelectItem>
                            <SelectItem value="500">500+ devices</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Contact Information */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold">
                        Contact Information
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">First Name</Label>
                          <Input id="firstName" placeholder="John" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Last Name</Label>
                          <Input id="lastName" placeholder="Doe" required />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address</Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="john.doe@email.com"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            id="phone"
                            type="tel"
                            placeholder="(555) 123-4567"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    {/* Additional Options */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold">
                        Additional Options
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="camera">Include Camera System?</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select option" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="yes">Yes</SelectItem>
                              <SelectItem value="no">No</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="paidWifi">Enable Paid Wi-Fi?</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select option" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="yes">Yes</SelectItem>
                              <SelectItem value="no">No</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>

                    {/* Special Requests */}
                    <div className="space-y-2">
                      <Label htmlFor="requests">
                        Additional Notes or Requests
                      </Label>
                      <Textarea
                        id="requests"
                        placeholder="Any special requests, accessibility needs, or additional details..."
                        className="min-h-[100px]"
                      />
                    </div>

                    <Button
                      type="submit"
                      variant="cta"
                      size="lg"
                      className="w-full"
                    >
                      Submit Reservation Request
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Contact */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Need Assistance?</CardTitle>
                  <CardDescription>
                    Call or email our support team for immediate help
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <div>
                      <a
                        href="tel:9897717515"
                        className="hover:text-blue-800 transition-all duration-150 ease-in-out font-semibold"
                      >
                        989-771-7515
                      </a>
                      <p className="text-sm text-muted-foreground">
                        Mon-Fri 8 AM - 8 PM
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <div>
                      <a
                        href="tel:9897928681"
                        className="hover:text-blue-800 transition-all duration-150 ease-in-out font-semibold"
                      >
                        989-792-8681
                      </a>
                      <p className="text-sm text-muted-foreground">
                        Mon-Fri 8 AM - 8 PM
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <div>
                      <a
                        href="mailto:support@skywebwifi.com"
                        className="hover:text-blue-800 transition-all duration-150 ease-in-out font-semibold"
                      >
                        support@skywebwifi.com
                      </a>
                      <p className="text-sm text-muted-foreground">
                        Response within 24 hours
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Booking Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">
                    Service InfoFAQ FAQrmation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {bookingInfo.map((info, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-sm"
                      >
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{info}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Group Contact */}
              <Card className="border-secondary/20">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <Users className="h-5 w-5 text-secondary" />
                    Group Installations
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Planning multiple properties or large-scale installations?
                    Contact us for group rates and special packages.
                  </p>
                  <Button variant="outline" size="sm" className="w-full">
                    <Mail className="h-4 w-4 mr-2" />
                    Contact for Group Services
                  </Button>
                </CardContent>
              </Card>

              {/* Payment Security */}
              <Card className="border-green-200">
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Shield className="h-5 w-5 text-green-600" />
                    <span className="font-semibold text-green-700">
                      Secure & Trusted
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    SSL encryption protects your information. We accept all
                    major payment methods.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Availability Info */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Check Real-Time Service Availability
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Want to see coverage and service options? Call or email our team
              for real-time support.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center gap-3 bg-white/80 p-4 rounded-lg">
                <CalendarIcon className="h-6 w-6 text-primary" />
                <div className="text-left">
                  <p className="font-semibold text-sm">Real-Time Scheduling</p>
                  <p className="text-xs text-muted-foreground">
                    Updated hourly for installations
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white/80 p-4 rounded-lg">
                <MapPin className="h-6 w-6 text-orange" />
                <div className="text-left">
                  <p className="font-semibold text-sm">Property Coverage</p>
                  <p className="text-xs text-muted-foreground">
                    Choose areas and devices for service
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white/80 p-4 rounded-lg">
                <CreditCard className="h-6 w-6 text-accent" />
                <div className="text-left">
                  <p className="font-semibold text-sm">Instant Confirmation</p>
                  <p className="text-xs text-muted-foreground">
                    Confirm your reservation and payment online
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
