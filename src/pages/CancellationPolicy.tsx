import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  CreditCard, 
  AlertTriangle, 
  CheckCircle, 
  XCircle,
  RefreshCw,
  Clock,
  Shield
} from 'lucide-react';

const CancellationPolicy = () => {
  const cancellationTiers = [
    {
      period: '48+ Hours Before Check-in',
      refund: 'Full Refund',
      icon: CheckCircle,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      description: 'Cancel up to 48 hours before arrival for a complete refund'
    },
    {
      period: '24-48 Hours Before Check-in',
      refund: '50% Refund',
      icon: RefreshCw,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      description: 'Partial refund available with advance notice'
    },
    {
      period: 'Less than 24 Hours',
      refund: 'No Refund',
      icon: XCircle,
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      description: 'No refund for last-minute cancellations'
    }
  ];

  const specialCircumstances = [
    {
      title: 'Weather-Related Cancellations',
      description: 'Full refund for severe weather warnings issued by National Weather Service',
      icon: Shield,
      details: [
        'Severe storm warnings (tornado, hurricane)',
        'Blizzard or ice storm conditions',
        'Flood warnings affecting campground access',
        'Must be officially declared emergency'
      ]
    },
    {
      title: 'Medical Emergencies',
      description: 'Refund consideration for documented medical emergencies',
      icon: CreditCard,
      details: [
        'Hospital admission documentation required',
        'Physician verification needed',
        'Must occur within 7 days of arrival',
        'Case-by-case evaluation'
      ]
    },
    {
      title: 'Military Deployment',
      description: 'Full refund for unexpected military deployments',
      icon: CheckCircle,
      details: [
        'Official deployment orders required',
        'Must be unexpected/emergency deployment',
        'Service member or immediate family',
        'No time restrictions apply'
      ]
    }
  ];

  const modificationPolicy = [
    'Date changes subject to availability and rate differences',
    'Modifications allowed up to 24 hours before check-in',
    'Site upgrades available for additional fee',
    'Downgrades refund the difference to original payment method',
    'Holiday bookings have stricter modification policies'
  ];

  const refundProcess = [
    {
      step: '1',
      title: 'Submit Cancellation',
      description: 'Cancel online through your booking confirmation or call our office'
    },
    {
      step: '2', 
      title: 'Confirmation Email',
      description: 'Receive cancellation confirmation with refund details within 24 hours'
    },
    {
      step: '3',
      title: 'Processing Time',
      description: 'Refunds processed within 3-5 business days to original payment method'
    },
    {
      step: '4',
      title: 'Bank Processing',
      description: 'Allow additional 2-3 business days for funds to appear in your account'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Cancellation Policy</h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8">
              Fair and transparent cancellation terms for your peace of mind
            </p>
          </div>
        </div>
      </section>

      {/* Cancellation Tiers */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Cancellation Timeline
            </h2>
            <p className="text-xl text-muted-foreground">
              Refund amounts based on when you cancel your reservation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {cancellationTiers.map((tier, index) => (
              <Card key={index} className={`border-2 ${tier.bgColor} border-current`}>
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 rounded-full ${tier.bgColor} flex items-center justify-center mx-auto mb-4`}>
                    <tier.icon className={`h-8 w-8 ${tier.color}`} />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{tier.period}</h3>
                  <div className={`text-2xl font-bold ${tier.color} mb-3`}>{tier.refund}</div>
                  <p className="text-sm text-muted-foreground">{tier.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center bg-muted/50 p-6 rounded-lg max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Clock className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold">Important Timing Note</h3>
            </div>
            <p className="text-muted-foreground">
              Cancellation time is based on your scheduled check-in time, not calendar days. 
              Check-in is at 2:00 PM, so 48 hours before means 2:00 PM two days prior.
            </p>
          </div>
        </div>
      </section>

      {/* Special Circumstances */}
      <section className="py-20 bg-subtle-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Special Circumstances
            </h2>
            <p className="text-xl text-muted-foreground">
              Exceptions to our standard cancellation policy
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {specialCircumstances.map((circumstance, index) => (
              <Card key={index} className="border-border hover:shadow-soft transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <circumstance.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{circumstance.title}</CardTitle>
                  </div>
                  <CardDescription>{circumstance.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {circumstance.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Modification Policy */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Reservation Modifications
              </h2>
              <p className="text-xl text-muted-foreground">
                Flexible options for changing your reservation details
              </p>
            </div>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <RefreshCw className="h-5 w-5 text-primary" />
                  Modification Guidelines
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {modificationPolicy.map((policy, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-semibold text-primary">{index + 1}</span>
                      </div>
                      <span className="text-muted-foreground">{policy}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Refund Process */}
      <section className="py-20 bg-subtle-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Refund Process
            </h2>
            <p className="text-xl text-muted-foreground">
              Simple steps to process your refund quickly and efficiently
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {refundProcess.map((step, index) => (
              <Card key={index} className="border-border text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-orange rounded-full flex items-center justify-center mx-auto mb-4 text-orange-foreground font-bold text-lg">
                    {step.step}
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Card className="max-w-2xl mx-auto border-orange/20">
              <CardContent className="p-6">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <AlertTriangle className="h-5 w-5 text-orange" />
                  <h3 className="font-semibold text-foreground">Processing Note</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Refunds are processed to the original payment method only. For credit card payments, 
                  the refund will appear as a credit on your statement. Cash payments require in-person 
                  pickup with valid ID.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact & Questions */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Questions About Cancellations?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Our friendly staff is here to help with any questions about our cancellation policy
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="nature" size="lg" asChild>
                <a href="tel:+15551234567">Call (555) 123-4567</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="mailto:info@pineridgerv.com">Email Us</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Rates */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <Button variant="cta" asChild>
            <Link to="/rates">← Back to Rates & Pricing</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default CancellationPolicy;