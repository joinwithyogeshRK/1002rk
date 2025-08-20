import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Award, Heart, Users, CheckCircle } from 'lucide-react';

const About: React.FC = () => {
  const achievements = [
    { icon: Users, number: "500+", label: "Happy Brides" },
    { icon: Award, number: "8+", label: "Years Experience" },
    { icon: CheckCircle, number: "100%", label: "Satisfaction Rate" }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          
          {/* Content */}
          <div className="order-2 lg:order-1">
            <h2 className="heading-elegant text-4xl md:text-5xl text-charcoal-950 mb-6">
              Meet Your Bridal Makeup Artist
            </h2>
            
            <div className="space-y-6 text-charcoal-700 text-lg leading-relaxed">
              <p>
                With over 8 years of experience in the beauty industry, I have had the incredible 
                privilege of being part of hundreds of love stories. My passion lies in enhancing 
                your natural beauty and helping you feel confident and radiant on your special day.
              </p>
              
              <p>
                I believe that makeup should enhance who you are, not change you. Every bride is 
                unique, and I love creating personalized looks that reflect your individual style 
                and personality while ensuring you feel like the most beautiful version of yourself.
              </p>
              
              <p>
                From intimate elopements to grand celebrations, I bring the same level of artistry, 
                professionalism, and care to every wedding. Your happiness and confidence are my 
                top priorities.
              </p>
            </div>

            {/* Achievements */}
            <div className="grid grid-cols-3 gap-6 my-8">
              {achievements.map((achievement, index) => {
                const IconComponent = achievement.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="bg-gold-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                      <IconComponent className="h-6 w-6 text-gold-600" />
                    </div>
                    <div className="text-2xl font-bold text-gold-600">{achievement.number}</div>
                    <div className="text-sm text-charcoal-600">{achievement.label}</div>
                  </div>
                );
              })}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-gold-500 hover:bg-gold-600 text-white px-8"
                onClick={() => window.location.href = '/about'}
              >
                Learn More About Me
              </Button>
              <Button 
                variant="outline"
                className="border-rose-600 text-rose-700 hover:bg-rose-50 px-8"
                onClick={() => window.location.href = '/booking'}
              >
                <Heart className="h-4 w-4 mr-2" />
                Book Consultation
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=600&h=700&fit=crop" 
                alt="Professional bridal makeup artist at work"
                className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-lg"
              />
              
              {/* Floating Card */}
              <Card className="absolute -bottom-6 -left-6 bg-white shadow-xl">
                <CardContent className="p-6 text-center">
                  <div className="text-2xl font-bold text-rose-600 mb-1">Sarah Johnson</div>
                  <div className="text-sm text-charcoal-700">Certified Bridal Artist</div>
                  <div className="text-xs text-charcoal-600 mt-1">Featured in Bridal Magazine</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;