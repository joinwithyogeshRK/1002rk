import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, Star, Heart, Sparkles } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      title: "Bridal Trial",
      price: "$150",
      duration: "2 hours",
      description: "Perfect your wedding day look with a complete trial session",
      features: [
        "Consultation and skin analysis",
        "Complete makeup application",
        "Photography for reference",
        "Product recommendations",
        "Style adjustments"
      ],
      popular: false
    },
    {
      title: "Wedding Day Package",
      price: "$350",
      duration: "4-5 hours",
      description: "Complete bridal makeup for your special day",
      features: [
        "Early morning start time",
        "Airbrush or traditional makeup",
        "False lashes included",
        "Touch-up kit provided",
        "Photography ready finish",
        "Stress-free experience"
      ],
      popular: true
    },
    {
      title: "Bridal Party Package",
      price: "$120",
      duration: "1.5 hours per person",
      description: "Beautiful makeup for bridesmaids and family",
      features: [
        "Coordinated with bridal look",
        "Natural or glam options",
        "Group booking discounts",
        "Flexible timing",
        "Professional application"
      ],
      popular: false
    },
    {
      title: "Engagement Session",
      price: "$180",
      duration: "2 hours",
      description: "Stunning makeup for your engagement photos",
      features: [
        "Camera-ready application",
        "Romantic or bold styles",
        "Touch-up between shots",
        "Consultation included",
        "Perfect for photos"
      ],
      popular: false
    }
  ];

  const addOns = [
    { name: "Additional Bridesmaid", price: "$100" },
    { name: "Flower Girl Makeup", price: "$50" },
    { name: "Mother of Bride/Groom", price: "$130" },
    { name: "Hair Styling Add-on", price: "$80" },
    { name: "Travel Fee (over 30 miles)", price: "$50" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blush-50 to-gold-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="heading-elegant text-4xl md:text-5xl text-charcoal-950 mb-6">
              Bridal Makeup Services
            </h1>
            <p className="text-lg text-charcoal-700 mb-8">
              From intimate trials to your dream wedding day, we create stunning looks that capture your unique beauty and style.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className={`service-card relative ${service.popular ? 'ring-4 ring-gold-400' : ''}`}>
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gold-500 text-white px-6 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                      <Star className="h-4 w-4" />
                      Most Popular
                    </span>
                  </div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <CardTitle className="heading-elegant text-2xl text-charcoal-950 mb-2">
                    {service.title}
                  </CardTitle>
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <span className="text-3xl font-bold text-gold-600">{service.price}</span>
                    <span className="text-charcoal-600">• {service.duration}</span>
                  </div>
                  <p className="text-charcoal-700">{service.description}</p>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <Check className="h-5 w-5 text-gold-600 flex-shrink-0" />
                        <span className="text-charcoal-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full ${service.popular ? 'bg-gold-500 hover:bg-gold-600' : 'bg-rose-700 hover:bg-rose-800'} text-white`}
                    onClick={() => window.location.href = '/booking'}
                  >
                    Book {service.title}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-16 bg-gradient-to-br from-blush-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="heading-elegant text-3xl text-charcoal-950 mb-4">
              Additional Services
            </h2>
            <p className="text-charcoal-700 max-w-2xl mx-auto">
              Enhance your bridal experience with our additional services and make your special day even more memorable.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="service-card">
              <CardHeader>
                <CardTitle className="heading-elegant text-2xl text-charcoal-950 text-center mb-6">
                  <Sparkles className="h-6 w-6 inline-block mr-2 text-gold-600" />
                  Add-On Services
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  {addOns.map((addon, index) => (
                    <div key={index} className="flex justify-between items-center p-4 bg-white rounded-lg border border-blush-200">
                      <span className="font-medium text-charcoal-800">{addon.name}</span>
                      <span className="text-gold-600 font-semibold">{addon.price}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 text-center">
                  <Button 
                    className="bg-gold-500 hover:bg-gold-600 text-white px-8"
                    onClick={() => window.location.href = '/booking'}
                  >
                    <Heart className="h-4 w-4 mr-2" />
                    Book Your Perfect Day
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="heading-elegant text-3xl text-charcoal-950 mb-4">
              Our Process
            </h2>
            <p className="text-charcoal-700 max-w-2xl mx-auto">
              From consultation to your wedding day, we ensure every step is perfect.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { step: "01", title: "Consultation", desc: "Discuss your vision and style preferences" },
              { step: "02", title: "Trial Session", desc: "Perfect your look with a complete trial" },
              { step: "03", title: "Final Planning", desc: "Confirm timeline and final details" },
              { step: "04", title: "Wedding Day", desc: "Flawless application for your special day" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gold-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="heading-elegant text-xl text-charcoal-950 mb-2">{item.title}</h3>
                <p className="text-charcoal-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;