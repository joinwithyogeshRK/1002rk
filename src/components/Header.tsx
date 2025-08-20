import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, Calendar } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navigationItems = [
    { name: 'Home', href: '/', isExternal: true },
    { name: 'About', href: '#about', isExternal: false },
    { name: 'Services', href: '/services', isExternal: true },
    { name: 'Portfolio', href: '/portfolio', isExternal: true },
    { name: 'Contact', href: '/contact', isExternal: true }
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="heading-script text-2xl md:text-3xl text-rose-700">
              Bridal Makeup Studio
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              item.isExternal ? (
                <a
                  key={item.name}
                  href={item.href}
                  className="nav-link text-charcoal-700 hover:text-rose-700 font-medium transition-colors duration-300"
                >
                  {item.name}
                </a>
              ) : (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href.substring(1))}
                  className="nav-link text-charcoal-700 hover:text-rose-700 font-medium transition-colors duration-300"
                >
                  {item.name}
                </button>
              )
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button 
              variant="outline" 
              className="border-gold-500 text-gold-700 hover:bg-gold-50"
              onClick={() => window.location.href = 'tel:+15551234567'}
            >
              <Phone className="h-4 w-4 mr-2" />
              Call Now
            </Button>
            <Button 
              className="bg-gold-500 hover:bg-gold-600 text-white"
              onClick={() => window.location.href = '/booking'}
            >
              <Calendar className="h-4 w-4 mr-2" />
              Book Trial
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-charcoal-700 hover:text-rose-700 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-blush-200">
            <nav className="flex flex-col space-y-4">
              {navigationItems.map((item) => (
                item.isExternal ? (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-charcoal-700 hover:text-rose-700 font-medium transition-colors duration-300 py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ) : (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href.substring(1))}
                    className="text-left text-charcoal-700 hover:text-rose-700 font-medium transition-colors duration-300 py-2"
                  >
                    {item.name}
                  </button>
                )
              ))}
              
              <div className="flex flex-col space-y-3 pt-4 border-t border-blush-200">
                <Button 
                  variant="outline" 
                  className="border-gold-500 text-gold-700 hover:bg-gold-50 w-full"
                  onClick={() => {
                    window.location.href = 'tel:+15551234567';
                    setIsMenuOpen(false);
                  }}
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Call Now
                </Button>
                <Button 
                  className="bg-gold-500 hover:bg-gold-600 text-white w-full"
                  onClick={() => {
                    window.location.href = '/booking';
                    setIsMenuOpen(false);
                  }}
                >
                  <Calendar className="h-4 w-4 mr-2" />
                  Book Trial
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;