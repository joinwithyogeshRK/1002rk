import React from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, Star, Heart } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1610189018716-63b8b3e0a151?w=1920&h=1080&fit=crop" 
          alt="Beautiful woman in traditional saree"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
            <Star className="h-5 w-5 text-gold-400" />
            <span className="text-sm font-medium">Award-Winning Bridal Makeup Artist</span>
          </div>

          {/* Main Heading */}
          <h1 className="heading-elegant text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight">
            suryansh
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed" style={{color: '#F8E3E8'}}>
            Where artistry meets romance - transforming your natural beauty into a masterpiece that captures the magic of your wedding day.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-gold-300">500+</div>
              <div className="text-sm text-blush-200">Happy Brides</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gold-300">8+</div>
              <div className="text-sm text-blush-200">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gold-300">5.0</div>
              <div className="text-sm text-blush-200">Star Rating</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg"
              className="bg-gold-500 hover:bg-gold-600 text-white px-8 py-4 text-lg font-medium rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              onClick={() => window.location.href = '/booking'}
            >
              <Calendar className="h-5 w-5 mr-2" />
              Book Your Trial
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-charcoal-950 px-8 py-4 text-lg font-medium rounded-full backdrop-blur-sm bg-white/10 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              onClick={() => {
                const element = document.getElementById('portfolio');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <Heart className="h-5 w-5 mr-2" />
              View Portfolio
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 flex flex-wrap justify-center items-center gap-8 text-blush-200">
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 text-gold-400" />
              <span className="text-sm">Featured in Bridal Magazine</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 text-gold-400" />
              <span className="text-sm">Certified Professional Artist</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 text-gold-400" />
              <span className="text-sm">Destination Weddings Available</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;