import React from 'react';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Mail, Instagram, Facebook, Heart, Calendar } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Contact', href: '/contact' }
  ];

  const services = [
    { name: 'Bridal Trial', href: '/services' },
    { name: 'Wedding Day Package', href: '/services' },
    { name: 'Bridal Party Makeup', href: '/services' },
    { name: 'Engagement Sessions', href: '/services' }
  ];

  return (
    <footer className="bg-charcoal-950 text-white">
      <div className="container mx-auto px-4">
        
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <h3 className="heading-script text-3xl text-gold-300 mb-4">
                Bridal Makeup Studio
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Creating stunning bridal looks that enhance your natural beauty and make your special day absolutely unforgettable.
              </p>
              
              {/* Social Media */}
              <div className="flex gap-4">
                <Button 
                  variant="outline" 
                  size="sm"
                  className="border-gold-400 text-gold-400 hover:bg-gold-400 hover:text-charcoal-950 w-10 h-10 p-0"
                  onClick={() => window.open('https://instagram.com', '_blank')}
                >
                  <Instagram className="h-4 w-4" />
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="border-gold-400 text-gold-400 hover:bg-gold-400 hover:text-charcoal-950 w-10 h-10 p-0"
                  onClick={() => window.open('https://facebook.com', '_blank')}
                >
                  <Facebook className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="heading-elegant text-xl text-white mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className="text-gray-300 hover:text-gold-300 transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="heading-elegant text-xl text-white mb-6">Our Services</h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <a 
                      href={service.href}
                      className="text-gray-300 hover:text-gold-300 transition-colors duration-300"
                    >
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="heading-elegant text-xl text-white mb-6">Contact Info</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-gold-400 mt-1 flex-shrink-0" />
                  <div className="text-gray-300">
                    <p>123 Beauty Lane</p>
                    <p>Downtown District</p>
                    <p>City, State 12345</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-gold-400 flex-shrink-0" />
                  <a 
                    href="tel:+15551234567" 
                    className="text-gray-300 hover:text-gold-300 transition-colors"
                  >
                    (555) 123-4567
                  </a>
                </div>
                
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-gold-400 flex-shrink-0" />
                  <a 
                    href="mailto:hello@bridalmakeupstudio.com" 
                    className="text-gray-300 hover:text-gold-300 transition-colors"
                  >
                    hello@bridalmakeupstudio.com
                  </a>
                </div>
              </div>
              
              {/* CTA Button */}
              <div className="mt-6">
                <Button 
                  className="bg-gold-500 hover:bg-gold-600 text-white w-full"
                  onClick={() => window.location.href = '/booking'}
                >
                  <Calendar className="h-4 w-4 mr-2" />
                  Book Now
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-gray-700 py-8">
          <div className="text-center">
            <h4 className="heading-elegant text-2xl text-white mb-4">
              Stay Updated with Beauty Tips & Inspiration
            </h4>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest bridal beauty trends, makeup tips, and exclusive offers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-600 text-white placeholder-gray-400 focus:border-gold-400 focus:outline-none"
              />
              <Button className="bg-gold-500 hover:bg-gold-600 text-white px-6">
                <Heart className="h-4 w-4 mr-2" />
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © {currentYear} Bridal Makeup Studio. All rights reserved.
            </div>
            
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-gold-300 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-gold-300 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-gold-300 transition-colors">Cookie Policy</a>
            </div>
          </div>
          
          <div className="text-center mt-4 text-gray-500 text-xs">
            Made with <Heart className="h-3 w-3 inline-block text-rose-500" /> for beautiful brides everywhere
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;