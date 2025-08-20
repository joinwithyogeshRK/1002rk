import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all required fields.');
      return;
    }
    
    console.log('Contact form submitted:', formData);
    alert("Thank you for your message! We'll get back to you within 24 hours.");
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blush-50 to-white">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-elegant text-4xl md:text-5xl text-charcoal-950 mb-6">
            Get In Touch
          </h2>
          <p className="text-lg text-charcoal-700 max-w-3xl mx-auto">
            Ready to discuss your bridal makeup needs? We would love to hear from you and 
            help make your special day absolutely perfect.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          
          {/* Contact Form */}
          <Card className="service-card">
            <CardHeader>
              <CardTitle className="heading-elegant text-2xl text-charcoal-950 flex items-center gap-2">
                <MessageCircle className="h-6 w-6 text-rose-600" />
                Send Us a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-charcoal-700 font-medium">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="form-input"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-charcoal-700 font-medium">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="form-input"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="phone" className="text-charcoal-700 font-medium">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="form-input"
                  />
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-charcoal-700 font-medium">Message *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    className="form-textarea"
                    placeholder="Tell us about your wedding date, style preferences, and any questions you have..."
                    rows={5}
                    required
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-gold-500 hover:bg-gold-600 text-white py-3"
                >
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            
            {/* Contact Details */}
            <Card className="service-card">
              <CardHeader>
                <CardTitle className="heading-elegant text-2xl text-charcoal-950">
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-gold-100 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-gold-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal-950 mb-1">Phone</h3>
                    <p className="text-charcoal-700">(555) 123-4567</p>
                    <p className="text-sm text-charcoal-600">Call or text for quick questions</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-rose-100 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-rose-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal-950 mb-1">Email</h3>
                    <p className="text-charcoal-700">hello@bridalmakeupstudio.com</p>
                    <p className="text-sm text-charcoal-600">We respond within 24 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-blush-100 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-blush-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal-950 mb-1">Studio Location</h3>
                    <p className="text-charcoal-700">123 Beauty Lane<br />Downtown District<br />City, State 12345</p>
                    <p className="text-sm text-charcoal-600">By appointment only</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Business Hours */}
            <Card className="service-card">
              <CardHeader>
                <CardTitle className="heading-elegant text-xl text-charcoal-950 flex items-center gap-2">
                  <Clock className="h-5 w-5 text-gold-600" />
                  Business Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-charcoal-700">Monday - Friday</span>
                    <span className="text-charcoal-950 font-medium">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-charcoal-700">Saturday</span>
                    <span className="text-charcoal-950 font-medium">8:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-charcoal-700">Sunday</span>
                    <span className="text-charcoal-950 font-medium">10:00 AM - 4:00 PM</span>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-gold-50 rounded-lg">
                  <p className="text-sm text-charcoal-700">
                    <strong>Wedding Days:</strong> We start as early as 6:00 AM for wedding day services.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <div className="space-y-4">
              <Button 
                className="w-full bg-rose-700 hover:bg-rose-800 text-white py-3"
                onClick={() => window.location.href = '/booking'}
              >
                Book Consultation
              </Button>
              <Button 
                variant="outline"
                className="w-full border-gold-500 text-gold-700 hover:bg-gold-50 py-3"
                onClick={() => window.location.href = '/contact'}
              >
                View Full Contact Page
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;