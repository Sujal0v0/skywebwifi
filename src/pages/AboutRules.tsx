import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Clock, 
  Volume2, 
  PawPrint, 
  Shield, 
  Car, 
  Trash2,
  Flame,
  Users,
  AlertTriangle
} from 'lucide-react';

const AboutRules = () => {
  const checkInOut = {
    checkIn: '2:00 PM - 8:00 PM',
    checkOut: '11:00 AM',
    earlyCheckIn: 'Available upon request with prior arrangement',
    lateCheckOut: 'Available for $25 fee (subject to availability)'
  };

  const quietHours = {
    standard: '10:00 PM - 7:00 AM',
    weekend: '11:00 PM - 8:00 AM (Friday & Saturday)',
    enforcement: 'Strictly enforced for all guests\' comfort'
  };

  const petPolicies = [
    'Maximum 2 pets per site',
    '$5 per night, per pet fee',
    'Must be leashed at all times',
    'Owners responsible for cleanup',
    'No aggressive breeds permitted',
    'Current vaccination records required',
    'Pets not allowed in buildings or pool area',
    'Designated dog park area available'
  ];

  const safetyGuidelines = [
    'Speed limit: 5 MPH throughout park',
    'Children must be supervised at all times',
    'Swimming allowed only during posted hours with lifeguard present',
    'No glass containers in pool or lake areas',
    'Report any suspicious activity to management immediately',
    'Emergency procedures posted in all common areas',
    'AED and first aid stations located throughout property',
    'Security patrol 24/7'
  ];

  const generalRules = [
    'No more than 6 people per site',
    'Vehicles must remain on designated paved areas',
    'No washing of RVs/vehicles on site',
    'Generators allowed: 8 AM - 6 PM only',
    'No outside alcohol in common areas',
    'Campfires only in designated fire rings',
    'Quiet activities only after 10 PM',
    'No reserving of common area facilities'
  ];

  const violationPolicy = [
    '1st Violation: Written warning',
    '2nd Violation: $50 fee and final warning',
    '3rd Violation: Immediate eviction without refund'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Campground Rules & Policies</h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8">
              Ensuring a safe, peaceful, and enjoyable experience for all guests
            </p>
          </div>
        </div>
      </section>

      {/* Check-in/Check-out */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="mb-8">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Clock className="h-6 w-6 text-primary" />
                  <CardTitle className="text-2xl">Check-in & Check-out Times</CardTitle>
                </div>
                <CardDescription>
                  Please adhere to these times to ensure smooth operations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-3 text-foreground">Standard Times</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Check-in:</span>
                        <span className="font-medium">{checkInOut.checkIn}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Check-out:</span>
                        <span className="font-medium">{checkInOut.checkOut}</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-3 text-foreground">Special Arrangements</h3>
                    <div className="space-y-2 text-sm">
                      <p><strong>Early Check-in:</strong> {checkInOut.earlyCheckIn}</p>
                      <p><strong>Late Check-out:</strong> {checkInOut.lateCheckOut}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quiet Hours */}
            <Card className="mb-8">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Volume2 className="h-6 w-6 text-primary" />
                  <CardTitle className="text-2xl">Quiet Hours</CardTitle>
                </div>
                <CardDescription>
                  Respecting our guests' need for peaceful rest
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-muted rounded-lg">
                    <h4 className="font-semibold mb-2">Sunday - Thursday</h4>
                    <p className="text-lg font-bold text-primary">{quietHours.standard}</p>
                  </div>
                  <div className="text-center p-4 bg-muted rounded-lg">
                    <h4 className="font-semibold mb-2">Friday - Saturday</h4>
                    <p className="text-lg font-bold text-primary">{quietHours.weekend}</p>
                  </div>
                  <div className="text-center p-4 bg-orange/10 rounded-lg">
                    <h4 className="font-semibold mb-2">Enforcement</h4>
                    <p className="text-sm text-muted-foreground">{quietHours.enforcement}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Pet Policies */}
            <Card className="mb-8">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <PawPrint className="h-6 w-6 text-primary" />
                  <CardTitle className="text-2xl">Pet Policies</CardTitle>
                </div>
                <CardDescription>
                  We welcome well-behaved pets with these guidelines
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {petPolicies.map((policy, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{policy}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Safety Guidelines */}
            <Card className="mb-8">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Shield className="h-6 w-6 text-primary" />
                  <CardTitle className="text-2xl">Safety Guidelines</CardTitle>
                </div>
                <CardDescription>
                  Your safety is our top priority
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {safetyGuidelines.map((guideline, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-orange rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{guideline}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* General Park Rules */}
            <Card className="mb-8">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Users className="h-6 w-6 text-primary" />
                  <CardTitle className="text-2xl">General Park Rules</CardTitle>
                </div>
                <CardDescription>
                  Guidelines for a respectful community experience
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {generalRules.map((rule, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{rule}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Violation Policy */}
            <Card className="border-destructive/20">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <AlertTriangle className="h-6 w-6 text-destructive" />
                  <CardTitle className="text-2xl">Rule Violation Policy</CardTitle>
                </div>
                <CardDescription>
                  Consequences for not following park rules
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {violationPolicy.map((policy, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-destructive/5 rounded-lg">
                      <div className="w-8 h-8 bg-destructive/10 rounded-full flex items-center justify-center text-destructive font-bold">
                        {index + 1}
                      </div>
                      <span className="text-muted-foreground">{policy}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-orange/10 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong>Note:</strong> Management reserves the right to immediately evict guests for serious violations 
                    including but not limited to: illegal activities, violence, property damage, or behavior that 
                    threatens the safety and enjoyment of other guests.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutRules;