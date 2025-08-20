import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, Star, Heart, Sparkles, Calendar } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      title: "Bridal Trial",
      price: "$150",
      duration: "2 hours",
      description: "Perfect your wedding day look with a complete trial session including consultation and photography.",
      features: [
        "In-depth consultation",
        "Complete makeup application",
        "Photography for reference",
        "Product recommendations",
        "Style adjustments"
      ],
      popular: false,
      icon: Heart
    },
    {
      title: "Wedding Day Package",
      price: "$350",
      duration: "4-5 hours",
      description: "Complete bridal makeup service for your special day with premium products and flawless finish.",
      features: [
        "Early morning availability",
        "Airbrush or traditional makeup",
        "Premium false lashes",
        "Touch-up kit included",
        "Photography ready finish",
        "Stress-free experience"
      ],
      popular: true,
      icon: Star
    },
    {
      title: "Bridal Party Package",
      price: "$120",
      duration: "1.5 hours per person",
      description: "Beautiful makeup for bridesmaids and family members, coordinated with the bridal look.",
      features: [
        "Coordinated with bridal style",
        "Natural or glam options",
        "Group booking discounts",
        "Flexible scheduling",
        "Professional application"
      ],
      popular: false,
      icon: Sparkles
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-blush-50 to-white">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-elegant text-4xl md:text-5xl text-charcoal-950 mb-6">
            Bridal Makeup Services
          </h2>
          <p className="text-lg text-charcoal-700 max-w-3xl mx-auto">
            From intimate trials to your dream wedding day, we offer comprehensive makeup services 
            tailored to make you look and feel absolutely stunning.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className={`service-card relative h-full ${service.popular ? 'ring-4 ring-gold-400' : ''}`}>
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <Badge className="bg-gold-500 text-white px-6 py-2 text-sm font-medium">
                      <Star className="h-4 w-4 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <div className="bg-gradient-to-br from-gold-100 to-rose-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-rose-600" />
                  </div>
                  
                  <CardTitle className="heading-elegant text-2xl text-charcoal-950 mb-2">
                    {service.title}
                  </CardTitle>
                  
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <span className="text-3xl font-bold text-gold-600">{service.price}</span>
                    <span className="text-charcoal-600">• {service.duration}</span>
                  </div>
                  
                  <p className="text-charcoal-700">{service.description}</p>
                </CardHeader>
                
                <CardContent className="flex-1 flex flex-col">
                  <ul className="space-y-3 mb-8 flex-1">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <Check className="h-5 w-5 text-gold-600 flex-shrink-0" />
                        <span className="text-charcoal-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full ${service.popular 
                      ? 'bg-gold-500 hover:bg-gold-600 text-white' 
                      : 'bg-rose-700 hover:bg-rose-800 text-white'
                    } py-3`}
                    onClick={() => window.location.href = '/booking'}
                  >
                    <Calendar className="h-4 w-4 mr-2" />
                    Book {service.title}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="service-card">
            <CardContent className="p-8 text-center">
              <div className="bg-gold-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="h-8 w-8 text-gold-600" />
              </div>
              <h3 className="heading-elegant text-xl text-charcoal-950 mb-3">
                Add-On Services
              </h3>
              <p className="text-charcoal-700 mb-4">
                Enhance your experience with hair styling, additional touch-ups, or travel services.
              </p>
              <Button 
                variant="outline" 
                className="border-gold-500 text-gold-700 hover:bg-gold-50"
                onClick={() => window.location.href = '/services'}
              >
                View All Services
              </Button>
            </CardContent>
          </Card>
          
          <Card className="service-card">
            <CardContent className="p-8 text-center">
              <div className="bg-rose-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-rose-600" />
              </div>
              <h3 className="heading-elegant text-xl text-charcoal-950 mb-3">
                Custom Packages
              </h3>
              <p className="text-charcoal-700 mb-4">
                Need something special? We create custom packages for destination weddings and unique events.
              </p>
              <Button 
                variant="outline" 
                className="border-rose-600 text-rose-700 hover:bg-rose-50"
                onClick={() => window.location.href = '/contact'}
              >
                Get Custom Quote
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;