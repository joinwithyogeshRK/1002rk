import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Checkbox } from '@/components/ui/checkbox';
import { CalendarDays, Clock, MapPin, Phone, Mail, User, Heart } from 'lucide-react';
import { format } from 'date-fns';

const Booking: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedService, setSelectedService] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    weddingDate: '',
    venue: '',
    guestCount: '',
    bridalPartySize: '',
    makeupStyle: '',
    skinType: '',
    allergies: '',
    additionalServices: [] as string[],
    specialRequests: '',
    hearAboutUs: ''
  });

  const services = [
    { id: 'trial', name: 'Bridal Trial', price: 150, duration: '2 hours' },
    { id: 'wedding', name: 'Wedding Day Package', price: 350, duration: '4-5 hours' },
    { id: 'engagement', name: 'Engagement Session', price: 180, duration: '2 hours' },
    { id: 'party', name: 'Bridal Party Package', price: 120, duration: '1.5 hours per person' }
  ];

  const timeSlots = [
    '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM',
    '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'
  ];

  const additionalServices = [
    { id: 'hair', name: 'Hair Styling Add-on', price: 80 },
    { id: 'lashes', name: 'Premium Lash Application', price: 25 },
    { id: 'touchup', name: 'Touch-up Kit', price: 35 },
    { id: 'travel', name: 'Travel Fee (over 30 miles)', price: 50 }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleAdditionalServiceChange = (serviceId: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      additionalServices: checked 
        ? [...prev.additionalServices, serviceId]
        : prev.additionalServices.filter(id => id !== serviceId)
    }));
  };

  const calculateTotal = () => {
    const selectedServiceObj = services.find(s => s.id === selectedService);
    const basePrice = selectedServiceObj ? selectedServiceObj.price : 0;
    
    const addOnTotal = formData.additionalServices.reduce((total, serviceId) => {
      const service = additionalServices.find(s => s.id === serviceId);
      return total + (service ? service.price : 0);
    }, 0);
    
    return basePrice + addOnTotal;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!selectedDate || !selectedService || !selectedTime || !formData.firstName || !formData.email) {
      alert('Please fill in all required fields.');
      return;
    }
    
    // Here you would typically send the data to your backend
    console.log('Booking submitted:', {
      ...formData,
      date: selectedDate,
      service: selectedService,
      time: selectedTime,
      total: calculateTotal()
    });
    
    alert('Thank you for your booking request! We will contact you within 24 hours to confirm your appointment.');
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blush-50 to-gold-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="heading-elegant text-4xl md:text-5xl text-charcoal-950 mb-6">
              Book Your Appointment
            </h1>
            <p className="text-lg text-charcoal-700 mb-8">
              Ready to look absolutely stunning? Schedule your bridal makeup consultation or wedding day service with us.
            </p>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">
              
              {/* Main Form */}
              <div className="lg:col-span-2 space-y-8">
                
                {/* Service Selection */}
                <Card className="service-card">
                  <CardHeader>
                    <CardTitle className="heading-elegant text-2xl text-charcoal-950 flex items-center gap-2">
                      <Heart className="h-6 w-6 text-rose-600" />
                      Select Your Service
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      {services.map((service) => (
                        <div 
                          key={service.id}
                          className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                            selectedService === service.id 
                              ? 'border-gold-500 bg-gold-50' 
                              : 'border-gray-200 hover:border-gold-300'
                          }`}
                          onClick={() => setSelectedService(service.id)}
                        >
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="font-semibold text-charcoal-950">{service.name}</h3>
                            <span className="text-gold-600 font-bold">${service.price}</span>
                          </div>
                          <p className="text-sm text-charcoal-600">{service.duration}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Date & Time Selection */}
                <Card className="service-card">
                  <CardHeader>
                    <CardTitle className="heading-elegant text-2xl text-charcoal-950 flex items-center gap-2">
                      <CalendarDays className="h-6 w-6 text-rose-600" />
                      Choose Date & Time
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label className="text-charcoal-700 font-medium mb-2 block">Preferred Date</Label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant="outline"
                              className="w-full justify-start text-left font-normal border-gray-200 hover:border-gold-500"
                            >
                              <CalendarDays className="mr-2 h-4 w-4" />
                              {selectedDate ? format(selectedDate, 'PPP') : 'Select date'}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={selectedDate}
                              onSelect={setSelectedDate}
                              disabled={(date) => date < new Date()}
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                      </div>
                      
                      <div>
                        <Label className="text-charcoal-700 font-medium mb-2 block">Preferred Time</Label>
                        <Select value={selectedTime} onValueChange={setSelectedTime}>
                          <SelectTrigger className="border-gray-200 focus:border-gold-500">
                            <Clock className="mr-2 h-4 w-4" />
                            <SelectValue placeholder="Select time" />
                          </SelectTrigger>
                          <SelectContent>
                            {timeSlots.map((time) => (
                              <SelectItem key={time} value={time}>{time}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Personal Information */}
                <Card className="service-card">
                  <CardHeader>
                    <CardTitle className="heading-elegant text-2xl text-charcoal-950 flex items-center gap-2">
                      <User className="h-6 w-6 text-rose-600" />
                      Personal Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName" className="text-charcoal-700 font-medium">First Name *</Label>
                        <Input
                          id="firstName"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange('firstName', e.target.value)}
                          className="form-input"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName" className="text-charcoal-700 font-medium">Last Name *</Label>
                        <Input
                          id="lastName"
                          value={formData.lastName}
                          onChange={(e) => handleInputChange('lastName', e.target.value)}
                          className="form-input"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="email" className="text-charcoal-700 font-medium">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          className="form-input"
                          required
                        />
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
                    </div>
                  </CardContent>
                </Card>

                {/* Wedding Details */}
                <Card className="service-card">
                  <CardHeader>
                    <CardTitle className="heading-elegant text-2xl text-charcoal-950 flex items-center gap-2">
                      <MapPin className="h-6 w-6 text-rose-600" />
                      Wedding Details
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="weddingDate" className="text-charcoal-700 font-medium">Wedding Date</Label>
                        <Input
                          id="weddingDate"
                          type="date"
                          value={formData.weddingDate}
                          onChange={(e) => handleInputChange('weddingDate', e.target.value)}
                          className="form-input"
                        />
                      </div>
                      <div>
                        <Label htmlFor="venue" className="text-charcoal-700 font-medium">Venue/Location</Label>
                        <Input
                          id="venue"
                          value={formData.venue}
                          onChange={(e) => handleInputChange('venue', e.target.value)}
                          className="form-input"
                          placeholder="Wedding venue or location"
                        />
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="guestCount" className="text-charcoal-700 font-medium">Guest Count</Label>
                        <Select value={formData.guestCount} onValueChange={(value) => handleInputChange('guestCount', value)}>
                          <SelectTrigger className="border-gray-200 focus:border-gold-500">
                            <SelectValue placeholder="Select guest count" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="intimate">Intimate (1-50)</SelectItem>
                            <SelectItem value="medium">Medium (51-100)</SelectItem>
                            <SelectItem value="large">Large (101-200)</SelectItem>
                            <SelectItem value="xlarge">Extra Large (200+)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="bridalPartySize" className="text-charcoal-700 font-medium">Bridal Party Size</Label>
                        <Input
                          id="bridalPartySize"
                          type="number"
                          value={formData.bridalPartySize}
                          onChange={(e) => handleInputChange('bridalPartySize', e.target.value)}
                          className="form-input"
                          placeholder="Number of bridesmaids"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Makeup Preferences */}
                <Card className="service-card">
                  <CardHeader>
                    <CardTitle className="heading-elegant text-2xl text-charcoal-950">
                      Makeup Preferences
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label className="text-charcoal-700 font-medium">Preferred Makeup Style</Label>
                        <Select value={formData.makeupStyle} onValueChange={(value) => handleInputChange('makeupStyle', value)}>
                          <SelectTrigger className="border-gray-200 focus:border-gold-500">
                            <SelectValue placeholder="Select style" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="natural">Natural & Glowing</SelectItem>
                            <SelectItem value="classic">Classic Elegance</SelectItem>
                            <SelectItem value="glam">Glamorous</SelectItem>
                            <SelectItem value="bohemian">Bohemian</SelectItem>
                            <SelectItem value="vintage">Vintage</SelectItem>
                            <SelectItem value="modern">Modern</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label className="text-charcoal-700 font-medium">Skin Type</Label>
                        <Select value={formData.skinType} onValueChange={(value) => handleInputChange('skinType', value)}>
                          <SelectTrigger className="border-gray-200 focus:border-gold-500">
                            <SelectValue placeholder="Select skin type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="normal">Normal</SelectItem>
                            <SelectItem value="dry">Dry</SelectItem>
                            <SelectItem value="oily">Oily</SelectItem>
                            <SelectItem value="combination">Combination</SelectItem>
                            <SelectItem value="sensitive">Sensitive</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="allergies" className="text-charcoal-700 font-medium">Allergies or Sensitivities</Label>
                      <Input
                        id="allergies"
                        value={formData.allergies}
                        onChange={(e) => handleInputChange('allergies', e.target.value)}
                        className="form-input"
                        placeholder="Please list any makeup allergies or skin sensitivities"
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* Additional Services */}
                <Card className="service-card">
                  <CardHeader>
                    <CardTitle className="heading-elegant text-2xl text-charcoal-950">
                      Additional Services
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {additionalServices.map((service) => (
                      <div key={service.id} className="flex items-center justify-between p-3 bg-blush-50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <Checkbox
                            id={service.id}
                            checked={formData.additionalServices.includes(service.id)}
                            onCheckedChange={(checked) => handleAdditionalServiceChange(service.id, checked as boolean)}
                          />
                          <Label htmlFor={service.id} className="text-charcoal-800 font-medium">
                            {service.name}
                          </Label>
                        </div>
                        <span className="text-gold-600 font-semibold">+${service.price}</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Special Requests */}
                <Card className="service-card">
                  <CardHeader>
                    <CardTitle className="heading-elegant text-2xl text-charcoal-950">
                      Special Requests
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label htmlFor="specialRequests" className="text-charcoal-700 font-medium">
                        Additional Notes or Special Requests
                      </Label>
                      <Textarea
                        id="specialRequests"
                        value={formData.specialRequests}
                        onChange={(e) => handleInputChange('specialRequests', e.target.value)}
                        className="form-textarea"
                        placeholder="Tell us about any special requests, inspiration photos, or additional details..."
                        rows={4}
                      />
                    </div>
                    
                    <div>
                      <Label className="text-charcoal-700 font-medium">How did you hear about us?</Label>
                      <Select value={formData.hearAboutUs} onValueChange={(value) => handleInputChange('hearAboutUs', value)}>
                        <SelectTrigger className="border-gray-200 focus:border-gold-500">
                          <SelectValue placeholder="Select option" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="instagram">Instagram</SelectItem>
                          <SelectItem value="facebook">Facebook</SelectItem>
                          <SelectItem value="google">Google Search</SelectItem>
                          <SelectItem value="referral">Friend/Family Referral</SelectItem>
                          <SelectItem value="vendor">Wedding Vendor</SelectItem>
                          <SelectItem value="website">Website</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Booking Summary */}
              <div className="lg:col-span-1">
                <Card className="service-card sticky top-8">
                  <CardHeader>
                    <CardTitle className="heading-elegant text-xl text-charcoal-950">
                      Booking Summary
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {selectedService && (
                      <div className="border-b border-blush-200 pb-4">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium text-charcoal-800">
                            {services.find(s => s.id === selectedService)?.name}
                          </span>
                          <span className="text-gold-600 font-semibold">
                            ${services.find(s => s.id === selectedService)?.price}
                          </span>
                        </div>
                        <p className="text-sm text-charcoal-600">
                          {services.find(s => s.id === selectedService)?.duration}
                        </p>
                      </div>
                    )}
                    
                    {selectedDate && (
                      <div className="flex items-center gap-2 text-charcoal-700">
                        <CalendarDays className="h-4 w-4" />
                        <span>{format(selectedDate, 'PPP')}</span>
                      </div>
                    )}
                    
                    {selectedTime && (
                      <div className="flex items-center gap-2 text-charcoal-700">
                        <Clock className="h-4 w-4" />
                        <span>{selectedTime}</span>
                      </div>
                    )}
                    
                    {formData.additionalServices.length > 0 && (
                      <div className="border-t border-blush-200 pt-4">
                        <h4 className="font-medium text-charcoal-800 mb-2">Add-ons:</h4>
                        {formData.additionalServices.map(serviceId => {
                          const service = additionalServices.find(s => s.id === serviceId);
                          return service ? (
                            <div key={serviceId} className="flex justify-between text-sm mb-1">
                              <span className="text-charcoal-700">{service.name}</span>
                              <span className="text-gold-600">+${service.price}</span>
                            </div>
                          ) : null;
                        })}
                      </div>
                    )}
                    
                    {selectedService && (
                      <div className="border-t border-blush-200 pt-4">
                        <div className="flex justify-between items-center text-lg font-semibold">
                          <span className="text-charcoal-950">Total:</span>
                          <span className="text-gold-600">${calculateTotal()}</span>
                        </div>
                      </div>
                    )}
                    
                    <Button 
                      type="submit"
                      className="w-full bg-gold-500 hover:bg-gold-600 text-white py-3 mt-6"
                      disabled={!selectedDate || !selectedService || !selectedTime || !formData.firstName || !formData.email}
                    >
                      Request Booking
                    </Button>
                    
                    <p className="text-xs text-charcoal-600 text-center mt-4">
                      * This is a booking request. We will contact you within 24 hours to confirm availability and finalize your appointment.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Booking;