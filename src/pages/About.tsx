import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Award, Heart, Users, Calendar, Star, CheckCircle } from 'lucide-react';

const About: React.FC = () => {
  const achievements = [
    { icon: Users, number: "500+", label: "Happy Brides" },
    { icon: Calendar, number: "8+", label: "Years Experience" },
    { icon: Award, number: "50+", label: "Awards Won" },
    { icon: Star, number: "5.0", label: "Average Rating" }
  ];

  const certifications = [
    "Certified Makeup Artist - Beauty Institute",
    "Airbrush Makeup Specialist",
    "Bridal Makeup Certification",
    "Advanced Color Theory",
    "Skin Analysis & Care Specialist"
  ];

  const values = [
    {
      title: "Personalized Approach",
      description: "Every bride is unique, and we tailor each look to enhance your natural beauty and match your personal style.",
      icon: Heart
    },
    {
      title: "Professional Excellence",
      description: "We use only the highest quality products and latest techniques to ensure your makeup looks flawless and lasts all day.",
      icon: Award
    },
    {
      title: "Stress-Free Experience",
      description: "Your wedding day should be magical, not stressful. We handle all the beauty details so you can focus on celebrating.",
      icon: CheckCircle
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blush-50 to-gold-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="heading-elegant text-4xl md:text-5xl text-charcoal-950 mb-6">
              About Our Studio
            </h1>
            <p className="text-lg text-charcoal-700 mb-8">
              Passionate about creating stunning bridal looks that celebrate your unique beauty and make your special day absolutely unforgettable.
            </p>
          </div>
        </div>
      </section>

      {/* Artist Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="order-2 lg:order-1">
              <h2 className="heading-elegant text-3xl text-charcoal-950 mb-6">
                Meet Sarah, Your Bridal Makeup Artist
              </h2>
              <div className="space-y-4 text-charcoal-700">
                <p>
                  With over 8 years of experience in the beauty industry, I have had the incredible privilege of being part of hundreds of love stories. My journey began with a passion for art and a desire to help women feel their most beautiful and confident.
                </p>
                <p>
                  I believe that makeup is not about changing who you are, but about enhancing your natural beauty and helping you feel like the best version of yourself. Every bride has a unique story, and I love creating looks that reflect their personality and style.
                </p>
                <p>
                  When I am not behind the makeup brush, you can find me traveling for destination weddings, continuing my education with the latest beauty trends, or spending time with my family. I feel incredibly grateful to do what I love every single day.
                </p>
              </div>
              
              <div className="mt-8">
                <Button 
                  className="bg-gold-500 hover:bg-gold-600 text-white mr-4"
                  onClick={() => window.location.href = '/portfolio'}
                >
                  View My Work
                </Button>
                <Button 
                  variant="outline"
                  className="border-rose-600 text-rose-700 hover:bg-rose-50"
                  onClick={() => window.location.href = '/booking'}
                >
                  Book Consultation
                </Button>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=600&h=700&fit=crop" 
                  alt="Sarah - Bridal Makeup Artist"
                  className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-lg"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gold-600">500+</div>
                    <div className="text-sm text-charcoal-700">Happy Brides</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-gradient-to-br from-blush-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="heading-elegant text-3xl text-charcoal-950 mb-4">
              Our Achievements
            </h2>
            <p className="text-charcoal-700 max-w-2xl mx-auto">
              Years of dedication to bridal beauty have earned us recognition and the trust of countless brides.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <Card key={index} className="service-card text-center">
                  <CardContent className="p-6">
                    <div className="bg-gold-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-gold-600" />
                    </div>
                    <div className="text-3xl font-bold text-charcoal-950 mb-2">{achievement.number}</div>
                    <div className="text-charcoal-700">{achievement.label}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="heading-elegant text-3xl text-charcoal-950 mb-4">
              Our Values
            </h2>
            <p className="text-charcoal-700 max-w-2xl mx-auto">
              These core principles guide everything we do and ensure every bride receives exceptional service.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="service-card text-center">
                  <CardContent className="p-8">
                    <div className="bg-rose-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                      <IconComponent className="h-8 w-8 text-rose-600" />
                    </div>
                    <h3 className="heading-elegant text-xl text-charcoal-950 mb-4">{value.title}</h3>
                    <p className="text-charcoal-700">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-gradient-to-br from-gold-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="heading-elegant text-3xl text-charcoal-950 mb-4">
                Professional Certifications
              </h2>
              <p className="text-charcoal-700">
                Continuous education and professional development ensure we stay current with the latest techniques and trends.
              </p>
            </div>
            
            <Card className="service-card">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-6">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-gold-600 flex-shrink-0" />
                      <span className="text-charcoal-700">{cert}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="heading-elegant text-3xl text-charcoal-950 mb-4">
              Our Process
            </h2>
            <p className="text-charcoal-700 max-w-2xl mx-auto">
              From our first consultation to your wedding day, we ensure every step is carefully planned and executed.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Initial Consultation",
                  description: "We discuss your vision, style preferences, and wedding details to understand your needs."
                },
                {
                  step: "02",
                  title: "Makeup Trial",
                  description: "A complete trial session where we perfect your look and make any necessary adjustments."
                },
                {
                  step: "03",
                  title: "Final Planning",
                  description: "We confirm all details, timeline, and logistics for your wedding day service."
                },
                {
                  step: "04",
                  title: "Wedding Day",
                  description: "Flawless makeup application and touch-ups to ensure you look perfect all day long."
                }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="bg-gradient-to-br from-gold-500 to-rose-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="heading-elegant text-lg text-charcoal-950 mb-3">{item.title}</h3>
                  <p className="text-charcoal-700 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured In */}
      <section className="py-16 bg-gradient-to-br from-blush-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="heading-elegant text-3xl text-charcoal-950 mb-4">
              Featured In
            </h2>
            <p className="text-charcoal-700">
              Our work has been recognized by leading wedding publications and industry professionals.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-8 max-w-4xl mx-auto">
            {[
              "Bridal Magazine",
              "Wedding Style Weekly",
              "The Knot",
              "Martha Stewart Weddings",
              "Brides Magazine",
              "Wedding Wire"
            ].map((publication, index) => (
              <Badge key={index} variant="outline" className="px-6 py-3 text-charcoal-700 border-gold-300">
                {publication}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="heading-elegant text-3xl text-charcoal-950 mb-4">
            Ready to Start Your Beauty Journey?
          </h2>
          <p className="text-charcoal-700 mb-8 max-w-2xl mx-auto">
            Let us be part of your special day and create a look that makes you feel absolutely radiant.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-gold-500 hover:bg-gold-600 text-white px-8"
              onClick={() => window.location.href = '/booking'}
            >
              Book Your Trial
            </Button>
            <Button 
              variant="outline"
              className="border-rose-600 text-rose-700 hover:bg-rose-50 px-8"
              onClick={() => window.location.href = '/contact'}
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;