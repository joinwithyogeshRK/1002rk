import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Heart, Eye, ArrowLeft, ArrowRight, X } from 'lucide-react';

const Portfolio: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [filter, setFilter] = useState('all');

  const portfolioItems = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=500&h=600&fit=crop",
      category: "classic",
      title: "Classic Elegance",
      description: "Timeless bridal look with soft glam",
      bride: "Sarah M.",
      venue: "The Grand Ballroom"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=500&h=600&fit=crop",
      category: "modern",
      title: "Modern Romance",
      description: "Contemporary bridal style with bold eyes",
      bride: "Emma L.",
      venue: "City Loft Wedding"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=500&h=600&fit=crop",
      category: "bohemian",
      title: "Bohemian Beauty",
      description: "Natural, ethereal bridal makeup",
      bride: "Luna R.",
      venue: "Garden Wedding"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=500&h=600&fit=crop",
      category: "glam",
      title: "Hollywood Glam",
      description: "Dramatic evening bridal look",
      bride: "Victoria K.",
      venue: "Luxury Resort"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=500&h=600&fit=crop",
      category: "classic",
      title: "Vintage Romance",
      description: "Classic vintage-inspired bridal style",
      bride: "Grace T.",
      venue: "Historic Manor"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?w=500&h=600&fit=crop",
      category: "modern",
      title: "Minimalist Chic",
      description: "Clean, modern bridal aesthetic",
      bride: "Aria S.",
      venue: "Modern Art Gallery"
    },
    {
      id: 7,
      image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=500&h=600&fit=crop",
      category: "bohemian",
      title: "Wildflower Bride",
      description: "Free-spirited bohemian bridal look",
      bride: "Sage W.",
      venue: "Outdoor Ceremony"
    },
    {
      id: 8,
      image: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=500&h=600&fit=crop",
      category: "glam",
      title: "Red Carpet Ready",
      description: "Glamorous evening bridal makeup",
      bride: "Sophia D.",
      venue: "Five Star Hotel"
    },
    {
      id: 9,
      image: "https://images.unsplash.com/photo-1506629905607-45c8b2d60b5b?w=500&h=600&fit=crop",
      category: "classic",
      title: "Timeless Beauty",
      description: "Traditional bridal elegance",
      bride: "Isabella C.",
      venue: "Cathedral Wedding"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Styles', count: portfolioItems.length },
    { id: 'classic', name: 'Classic', count: portfolioItems.filter(item => item.category === 'classic').length },
    { id: 'modern', name: 'Modern', count: portfolioItems.filter(item => item.category === 'modern').length },
    { id: 'bohemian', name: 'Bohemian', count: portfolioItems.filter(item => item.category === 'bohemian').length },
    { id: 'glam', name: 'Glamorous', count: portfolioItems.filter(item => item.category === 'glam').length }
  ];

  const filteredItems = filter === 'all' ? portfolioItems : portfolioItems.filter(item => item.category === filter);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredItems.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? filteredItems.length - 1 : selectedImage - 1);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blush-50 to-gold-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="heading-elegant text-4xl md:text-5xl text-charcoal-950 mb-6">
              Bridal Portfolio
            </h1>
            <p className="text-lg text-charcoal-700 mb-8">
              Discover our stunning collection of bridal transformations. Each look is carefully crafted to enhance natural beauty and create unforgettable moments.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-white border-b border-blush-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={filter === category.id ? "default" : "outline"}
                className={`${filter === category.id 
                  ? 'bg-gold-500 hover:bg-gold-600 text-white' 
                  : 'border-gold-500 text-gold-700 hover:bg-gold-50'
                } px-6 py-2`}
                onClick={() => setFilter(category.id)}
              >
                {category.name}
                <Badge className="ml-2 bg-white text-gold-700">
                  {category.count}
                </Badge>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <Card key={item.id} className="portfolio-card group cursor-pointer overflow-hidden" onClick={() => openLightbox(index)}>
                <div className="relative">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="heading-elegant text-xl mb-1">{item.title}</h3>
                    <p className="text-sm text-blush-200">{item.description}</p>
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
                  <p className="text-charcoal-700 text-sm mb-3">{item.description}</p>
                  <div className="flex justify-between items-center text-sm text-charcoal-600">
                    <span className="font-medium">{item.bride}</span>
                    <span>{item.venue}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 bg-white/20 backdrop-blur-sm rounded-full p-2 text-white hover:bg-white/30 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
            
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 backdrop-blur-sm rounded-full p-2 text-white hover:bg-white/30 transition-colors"
            >
              <ArrowLeft className="h-6 w-6" />
            </button>
            
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 backdrop-blur-sm rounded-full p-2 text-white hover:bg-white/30 transition-colors"
            >
              <ArrowRight className="h-6 w-6" />
            </button>
            
            <img 
              src={filteredItems[selectedImage].image}
              alt={filteredItems[selectedImage].title}
              className="max-w-full max-h-full object-contain"
            />
            
            <div className="absolute bottom-4 left-4 right-4 text-white text-center">
              <h3 className="heading-elegant text-2xl mb-2">{filteredItems[selectedImage].title}</h3>
              <p className="text-blush-200 mb-1">{filteredItems[selectedImage].description}</p>
              <p className="text-sm text-blush-300">
                {filteredItems[selectedImage].bride} • {filteredItems[selectedImage].venue}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-blush-50 to-gold-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="heading-elegant text-3xl text-charcoal-950 mb-4">
            Ready for Your Transformation?
          </h2>
          <p className="text-charcoal-700 mb-8 max-w-2xl mx-auto">
            Let us create a stunning bridal look that reflects your unique style and personality. Book your consultation today.
          </p>
          <Button 
            className="bg-gold-500 hover:bg-gold-600 text-white px-8 py-3"
            onClick={() => window.location.href = '/booking'}
          >
            Book Your Trial
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;