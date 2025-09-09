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
} from "lucide-react";

const Reservations = () => {
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Reservation Request Submitted!",
      description: "We'll contact you within 24 hours to confirm your booking.",
    });
  };

  const features = [
    {
      icon: Shield,
      title: "Secure Booking",
      description: "SSL encrypted and secure payment processing",
    },
    {
      icon: CheckCircle,
      title: "Instant Confirmation",
      description: "Receive confirmation within 24 hours",
    },
    {
      icon: Star,
      title: "Best Rate Guarantee",
      description: "Book direct for the lowest rates available",
    },
  ];

  const bookingInfo = [
    "Check-in: 2:00 PM - 8:00 PM",
    "Check-out: 11:00 AM",
    "Minimum stay: 2 nights on weekends during peak season",
    "Maximum occupancy: 6 people per site",
    "Pet fee: $5 per night, per pet",
    "Cancellation: Free cancellation up to 48 hours before arrival",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-hero-gradient text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Make a Reservation
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8">
              Book your perfect mountain getaway at Pine Ridge RV Resort
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-white/10 p-4 rounded-lg"
                >
                  <feature.icon className="h-6 w-6 text-orange" />
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
                    <CalendarIcon className="h-6 w-6 text-primary" />
                    Reservation Details
                  </CardTitle>
                  <CardDescription>
                    Fill out the form below to request your reservation
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Dates */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="checkin">Check-in Date</Label>
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
                        <Label htmlFor="checkout">Check-out Date</Label>
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

                    {/* Site Preference & Guests */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="siteType">Site Preference</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select site type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="standard">
                              Standard Site ($45/night)
                            </SelectItem>
                            <SelectItem value="premium">
                              Premium Site ($55/night)
                            </SelectItem>
                            <SelectItem value="no-preference">
                              No Preference
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="guests">Number of Guests</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select guests" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1">1 Guest</SelectItem>
                            <SelectItem value="2">2 Guests</SelectItem>
                            <SelectItem value="3">3 Guests</SelectItem>
                            <SelectItem value="4">4 Guests</SelectItem>
                            <SelectItem value="5">
                              5 Guests (+$5/night)
                            </SelectItem>
                            <SelectItem value="6">
                              6 Guests (+$10/night)
                            </SelectItem>
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

                    {/* RV Information */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold">RV Information</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="rvLength">RV Length (feet)</Label>
                          <Input id="rvLength" type="number" placeholder="32" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="rvType">RV Type</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select RV type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="motorhome">
                                Motorhome
                              </SelectItem>
                              <SelectItem value="travel-trailer">
                                Travel Trailer
                              </SelectItem>
                              <SelectItem value="fifth-wheel">
                                Fifth Wheel
                              </SelectItem>
                              <SelectItem value="popup">
                                Pop-up Camper
                              </SelectItem>
                              <SelectItem value="tent">Tent</SelectItem>
                            </SelectContent>
                          </Select>
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
                          <Label htmlFor="pets">Number of Pets</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select pets" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="0">No Pets</SelectItem>
                              <SelectItem value="1">
                                1 Pet (+$5/night)
                              </SelectItem>
                              <SelectItem value="2">
                                2 Pets (+$10/night)
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="electrical">
                            Electrical Preference
                          </Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select electrical" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="30amp">
                                30 Amp (Standard)
                              </SelectItem>
                              <SelectItem value="50amp">
                                50 Amp (+$3/night)
                              </SelectItem>
                              <SelectItem value="no-preference">
                                No Preference
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>

                    {/* Special Requests */}
                    <div className="space-y-2">
                      <Label htmlFor="requests">
                        Special Requests or Comments
                      </Label>
                      <Textarea
                        id="requests"
                        placeholder="Any special requests, accessibility needs, or additional information..."
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

            {/* Booking Information Sidebar */}
            <div className="space-y-6">
              {/* Quick Contact */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Need Help?</CardTitle>
                  <CardDescription>
                    Call us directly for immediate assistance
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-semibold">(555) 123-4567</p>
                      <p className="text-sm text-muted-foreground">
                        Daily 8 AM - 8 PM
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-semibold">
                        reservations@pineridgerv.com
                      </p>
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
                  <CardTitle className="text-xl">Booking Information</CardTitle>
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

              {/* Group Reservations */}
              <Card className="border-orange/20">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <Users className="h-5 w-5 text-orange" />
                    Group Reservations
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Planning a family reunion, rally, or group event? We offer
                    special group rates and reserved sections.
                  </p>
                  <Button variant="outline" size="sm" className="w-full">
                    <Mail className="h-4 w-4 mr-2" />
                    Contact for Group Rates
                  </Button>
                </CardContent>
              </Card>

              {/* Payment Security */}
              <Card className="border-green-200">
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Shield className="h-5 w-5 text-green-600" />
                    <span className="font-semibold text-green-700">
                      Secure Booking
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Your information is protected with SSL encryption. We accept
                    all major credit cards and PayPal.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Availability Calendar Info */}
      <section className="py-16 bg-subtle-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Check Real-Time Availability
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Want to see our current availability? Call us or visit our office
              for real-time booking assistance.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center gap-3 bg-white/80 p-4 rounded-lg">
                <CalendarIcon className="h-6 w-6 text-primary" />
                <div className="text-left">
                  <p className="font-semibold text-sm">
                    Real-Time Availability
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Updated every hour
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white/80 p-4 rounded-lg">
                <MapPin className="h-6 w-6 text-orange" />
                <div className="text-left">
                  <p className="font-semibold text-sm">Site Selection</p>
                  <p className="text-xs text-muted-foreground">
                    Choose your preferred location
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white/80 p-4 rounded-lg">
                <CreditCard className="h-6 w-6 text-accent" />
                <div className="text-left">
                  <p className="font-semibold text-sm">Instant Confirmation</p>
                  <p className="text-xs text-muted-foreground">
                    Book now, pay later option
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

export default Reservations;
