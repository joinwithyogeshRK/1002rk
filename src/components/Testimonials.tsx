import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      wedding: "The Grand Ballroom Wedding",
      image: "https://images.unsplash.com/photo-1494790108755-2616c669c494?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Absolutely incredible experience! Sarah made me feel like a princess on my wedding day. The makeup was flawless and lasted through tears of joy, dancing, and everything in between. I cannot recommend her enough!",
      date: "June 2024"
    },
    {
      id: 2,
      name: "Emma Rodriguez",
      wedding: "Vineyard Estate Wedding",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Sarah is a true artist! She listened to my vision and created the most beautiful, natural look that enhanced my features perfectly. My husband said I had never looked more beautiful. The trial was so helpful and fun!",
      date: "August 2024"
    },
    {
      id: 3,
      name: "Victoria Chen",
      wedding: "Beach Resort Wedding",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Professional, talented, and so sweet! Sarah made my wedding morning stress-free and enjoyable. She also did makeup for my bridesmaids and mother - everyone looked stunning. Worth every penny!",
      date: "September 2024"
    },
    {
      id: 4,
      name: "Grace Thompson",
      wedding: "Garden Party Wedding",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "I was so nervous about my makeup, but Sarah put me completely at ease. She is incredibly skilled and created exactly the romantic, soft look I dreamed of. The photos turned out amazing!",
      date: "May 2024"
    },
    {
      id: 5,
      name: "Luna Martinez",
      wedding: "Bohemian Outdoor Wedding",
      image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Sarah understood my bohemian style perfectly and created a look that was both natural and glamorous. She is so talented and made the whole experience fun and relaxing. Highly recommend!",
      date: "July 2024"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 6000);
    return () => clearInterval(interval);
  }, []);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`h-5 w-5 ${i < rating ? 'text-gold-500 fill-current' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blush-50 to-gold-50">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-elegant text-4xl md:text-5xl text-charcoal-950 mb-6">
            What Our Brides Say
          </h2>
          <p className="text-lg text-charcoal-700 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our beautiful brides have to say about their experience with us.
          </p>
        </div>

        {/* Main Testimonial Carousel */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="testimonial-card relative">
            <CardContent className="p-8 md:p-12">
              
              {/* Quote Icon */}
              <div className="absolute top-6 left-6 text-gold-300">
                <Quote className="h-12 w-12" />
              </div>
              
              {/* Navigation Buttons */}
              <div className="absolute top-6 right-6 flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-gold-300 text-gold-600 hover:bg-gold-50 w-10 h-10 p-0"
                  onClick={prevTestimonial}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-gold-300 text-gold-600 hover:bg-gold-50 w-10 h-10 p-0"
                  onClick={nextTestimonial}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>

              <div className="text-center">
                {/* Bride Photo */}
                <div className="mb-6">
                  <img 
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].name}
                    className="w-20 h-20 rounded-full mx-auto object-cover border-4 border-gold-200"
                  />
                </div>

                {/* Rating */}
                <div className="flex justify-center mb-6">
                  {renderStars(testimonials[currentTestimonial].rating)}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-xl md:text-2xl text-charcoal-800 mb-8 leading-relaxed italic">
                  "{testimonials[currentTestimonial].text}"
                </blockquote>

                {/* Bride Info */}
                <div className="border-t border-blush-200 pt-6">
                  <h4 className="heading-elegant text-xl text-charcoal-950 mb-1">
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <p className="text-charcoal-600 mb-1">
                    {testimonials[currentTestimonial].wedding}
                  </p>
                  <p className="text-sm text-charcoal-500">
                    {testimonials[currentTestimonial].date}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Testimonial Indicators */}
          <div className="flex justify-center mt-6 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentTestimonial ? 'bg-gold-500' : 'bg-gold-200'
                }`}
                onClick={() => setCurrentTestimonial(index)}
              />
            ))}
          </div>
        </div>

        {/* Additional Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <Card key={testimonial.id} className="testimonial-card">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-charcoal-950">{testimonial.name}</h4>
                    <div className="flex">
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>
                </div>
                <p className="text-charcoal-700 text-sm leading-relaxed">
                  "{testimonial.text.substring(0, 120)}..."
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="text-center">
          <div className="grid md:grid-cols-4 gap-8 max-w-3xl mx-auto mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-gold-600 mb-2">500+</div>
              <div className="text-sm text-charcoal-700">Happy Brides</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gold-600 mb-2">5.0</div>
              <div className="text-sm text-charcoal-700">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gold-600 mb-2">100%</div>
              <div className="text-sm text-charcoal-700">Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gold-600 mb-2">8+</div>
              <div className="text-sm text-charcoal-700">Years Experience</div>
            </div>
          </div>
          
          <Button 
            className="bg-gold-500 hover:bg-gold-600 text-white px-8 py-3"
            onClick={() => window.location.href = '/booking'}
          >
            Book Your Experience
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;