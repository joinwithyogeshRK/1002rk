import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { cn } from "@/lib/utils";

const Contact = () => {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="heading-elegant text-4xl md:text-5xl lg:text-6xl mb-4 text-forest-800">
              Get in Touch
            </h1>
            <p className="text-lg text-onyx-600 max-w-2xl mx-auto">
              We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-slide-up">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="heading-elegant text-2xl mb-4 text-forest-700">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-forest-100 p-2 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-forest-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-onyx-800">Phone</h3>
                    <p className="text-onyx-600">(555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-forest-100 p-2 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-forest-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-onyx-800">Email</h3>
                    <p className="text-onyx-600">info@example.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-forest-100 p-2 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-forest-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-onyx-800">Address</h3>
                    <p className="text-onyx-600">123 Main Street<br />Anytown, ST 12345</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-forest-100 p-2 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-forest-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-onyx-800">Hours</h3>
                    <p className="text-onyx-600">Monday - Friday: 9am - 5pm<br />Saturday: 10am - 4pm<br />Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="heading-elegant text-2xl mb-4 text-forest-700">Send a Message</h2>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-onyx-700 mb-1">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className={cn(
                      "w-full px-4 py-2 border border-onyx-200 rounded-md focus:outline-none",
                      "focus:ring-2 focus:ring-forest-500 focus:border-forest-500"
                    )}
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-onyx-700 mb-1">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className={cn(
                      "w-full px-4 py-2 border border-onyx-200 rounded-md focus:outline-none",
                      "focus:ring-2 focus:ring-forest-500 focus:border-forest-500"
                    )}
                    placeholder="Your email"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-onyx-700 mb-1">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    className={cn(
                      "w-full px-4 py-2 border border-onyx-200 rounded-md focus:outline-none",
                      "focus:ring-2 focus:ring-forest-500 focus:border-forest-500"
                    )}
                    placeholder="Subject"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-onyx-700 mb-1">Message</label>
                  <textarea 
                    id="message" 
                    rows={4} 
                    className={cn(
                      "w-full px-4 py-2 border border-onyx-200 rounded-md focus:outline-none",
                      "focus:ring-2 focus:ring-forest-500 focus:border-forest-500"
                    )}
                    placeholder="Your message"
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className={cn(
                    "w-full bg-forest-600 text-white font-medium py-2 px-4 rounded-md",
                    "hover:bg-forest-700 transition-colors duration-300",
                    "focus:outline-none focus:ring-2 focus:ring-forest-500 focus:ring-offset-2"
                  )}
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
          
          <div className="mt-12 animate-slide-up">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="heading-elegant text-2xl mb-4 text-forest-700">Find Us</h2>
              <div className="aspect-w-16 aspect-h-9 h-80 bg-onyx-100 rounded-md">
                {/* Map placeholder - in a real app, you'd integrate Google Maps or similar */}
                <div className="w-full h-full flex items-center justify-center bg-forest-50 border border-forest-200 rounded-md">
                  <div className="text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-forest-400 mb-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    <p className="text-onyx-600">Interactive map would be displayed here</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Contact;