import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Eye, Heart, ArrowRight } from 'lucide-react';

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const portfolioItems = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=400&h=500&fit=crop",
      category: "classic",
      title: "Classic Elegance",
      description: "Timeless bridal beauty with soft glam",
      bride: "Sarah M."
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=400&h=500&fit=crop",
      category: "modern",
      title: "Modern Romance",
      description: "Contemporary bridal style with bold eyes",
      bride: "Emma L."
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=400&h=500&fit=crop",
      category: "bohemian",
      title: "Bohemian Beauty",
      description: "Natural, ethereal bridal makeup",
      bride: "Luna R."
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&h=500&fit=crop",
      category: "glam",
      title: "Hollywood Glam",
      description: "Dramatic evening bridal look",
      bride: "Victoria K."
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=400&h=500&fit=crop",
      category: "classic",
      title: "Vintage Romance",
      description: "Classic vintage-inspired style",
      bride: "Grace T."
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?w=400&h=500&fit=crop",
      category: "modern",
      title: "Minimalist Chic",
      description: "Clean, modern bridal aesthetic",
      bride: "Aria S."
    }
  ];

  const categories = [
    { id: 'all', name: 'All Styles' },
    { id: 'classic', name: 'Classic' },
    { id: 'modern', name: 'Modern' },
    { id: 'bohemian', name: 'Bohemian' },
    { id: 'glam', name: 'Glamorous' }
  ];

  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-elegant text-4xl md:text-5xl text-charcoal-950 mb-6">
            Bridal Portfolio
          </h2>
          <p className="text-lg text-charcoal-700 max-w-3xl mx-auto mb-8">
            Discover our stunning collection of bridal transformations. Each look is carefully 
            crafted to enhance natural beauty and create unforgettable moments.
          </p>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeFilter === category.id ? "default" : "outline"}
                className={`${activeFilter === category.id 
                  ? 'bg-gold-500 hover:bg-gold-600 text-white' 
                  : 'border-gold-500 text-gold-700 hover:bg-gold-50'
                } px-6 py-2`}
                onClick={() => setActiveFilter(category.id)}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredItems.map((item) => (
            <Card key={item.id} className="portfolio-card group cursor-pointer overflow-hidden">
              <div className="relative">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="heading-elegant text-xl mb-1">{item.title}</h3>
                  <p className="text-sm text-blush-200 mb-1">{item.description}</p>
                  <p className="text-xs text-blush-300">Bride: {item.bride}</p>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                    <Eye className="h-5 w-5 text-white" />
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="heading-elegant text-lg text-charcoal-950">{item.title}</h3>
                  <Heart className="h-5 w-5 text-rose-600" />
                </div>
                <p className="text-charcoal-700 text-sm mb-2">{item.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-charcoal-600">Bride: {item.bride}</span>
                  <Badge variant="outline" className="text-xs border-gold-300 text-gold-700">
                    {item.category}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <p className="text-charcoal-700 mb-6">
            Want to see more of our work? Visit our complete portfolio gallery.
          </p>
          <Button 
            className="bg-gold-500 hover:bg-gold-600 text-white px-8 py-3"
            onClick={() => window.location.href = '/portfolio'}
          >
            View Full Portfolio
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;