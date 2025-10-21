import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send,
  MessageSquare,
  Calendar,
  Globe,
  CheckCircle2
} from 'lucide-react';
import { useState } from 'react';
import Header from '@/components/Header';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We\'ll get back to you within 24 hours.');
    setFormData({ name: '', email: '', company: '', service: '', message: '' });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Global Headquarters",
      details: ["123 Business District", "New York, NY 10001", "United States"],
      highlight: "Main Office"
    },
    {
      icon: Phone,
      title: "Phone & Support",
      details: ["+1 (555) 123-4567", "+1 (555) 987-6543", "24/7 Emergency: +1 (555) 911-2345"],
      highlight: "Always Available"
    },
    {
      icon: Mail,
      title: "Email Contacts",
      details: ["info@erpro-digital.com", "sales@erpro-digital.com", "support@erpro-digital.com"],
      highlight: "Quick Response"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Monday - Friday: 9:00 AM - 6:00 PM", "Saturday: 10:00 AM - 4:00 PM", "Sunday: Emergency Support Only"],
      highlight: "Extended Hours"
    }
  ];

  const offices = [
    { city: "New York", country: "USA", image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=300&h=200&fit=crop" },
    { city: "London", country: "UK", image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=300&h=200&fit=crop" },
    { city: "Toronto", country: "Canada", image: "https://images.unsplash.com/photo-1517935706615-2717063c2225?w=300&h=200&fit=crop" },
    { city: "Sydney", country: "Australia", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop" }
  ];

  const benefits = [
    "Free initial consultation",
    "24/7 customer support",
    "Dedicated project manager",
    "Guaranteed ROI improvement",
    "Post-implementation support",
    "Industry best practices"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-in fade-in slide-in-from-bottom-8 duration-700">
              Get In Touch
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
              Ready to transform your business? Let's start the conversation today.
            </p>
            <div className="flex flex-wrap justify-center gap-4 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-400">
              <Badge className="bg-white/20 text-white hover:bg-white/30">Free Consultation</Badge>
              <Badge className="bg-white/20 text-white hover:bg-white/30">Quick Response</Badge>
              <Badge className="bg-white/20 text-white hover:bg-white/30">Expert Guidance</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-2xl animate-in fade-in slide-in-from-left-8 duration-700">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900 flex items-center">
                  <MessageSquare className="mr-3 h-6 w-6 text-blue-600" />
                  Send Us a Message
                </CardTitle>
                <p className="text-gray-600">Fill out the form below and we'll get back to you within 24 hours.</p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <Input
                        type="text"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        required
                        className="w-full transition-all duration-300 focus:scale-105"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        required
                        className="w-full transition-all duration-300 focus:scale-105"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name
                    </label>
                    <Input
                      type="text"
                      placeholder="Your Company Ltd."
                      value={formData.company}
                      onChange={(e) => handleInputChange('company', e.target.value)}
                      className="w-full transition-all duration-300 focus:scale-105"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Service Interest
                    </label>
                    <Select onValueChange={(value) => handleInputChange('service', value)}>
                      <SelectTrigger className="w-full transition-all duration-300 focus:scale-105">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="erp-implementation">ERP Implementation</SelectItem>
                        <SelectItem value="digital-marketing">Digital Marketing</SelectItem>
                        <SelectItem value="business-analytics">Business Analytics</SelectItem>
                        <SelectItem value="process-optimization">Process Optimization</SelectItem>
                        <SelectItem value="support-maintenance">Support & Maintenance</SelectItem>
                        <SelectItem value="consultation">Free Consultation</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Project Details *
                    </label>
                    <Textarea
                      placeholder="Tell us about your project requirements, timeline, and goals..."
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      required
                      className="w-full h-32 resize-none transition-all duration-300 focus:scale-105"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-blue-600 hover:bg-blue-700 hover:scale-105 transition-all duration-300"
                  >
                    Send Message
                    <Send className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8 animate-in fade-in slide-in-from-right-8 duration-700">
              {/* Contact Details */}
              <div className="grid gap-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="p-6 hover:shadow-xl transition-all duration-500 hover:-translate-y-1" style={{ animationDelay: `${index * 100}ms` }}>
                    <CardContent className="p-0">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                          <info.icon className="h-6 w-6 text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="font-bold text-gray-900">{info.title}</h3>
                            <Badge variant="secondary" className="text-xs">{info.highlight}</Badge>
                          </div>
                          {info.details.map((detail, detailIndex) => (
                            <p key={detailIndex} className="text-gray-600 text-sm">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* What You Get */}
              <Card className="p-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                <CardContent className="p-0">
                  <h3 className="text-xl font-bold mb-4">What You Get</h3>
                  <div className="space-y-3">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle2 className="h-5 w-5 text-blue-200 flex-shrink-0" />
                        <span className="text-blue-100">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card className="p-6">
                <CardContent className="p-0 space-y-4">
                  <h3 className="text-xl font-bold text-gray-900">Quick Actions</h3>
                  <div className="space-y-3">
                    <Button 
                      variant="outline" 
                      className="w-full hover:bg-blue-50 hover:border-blue-300 transition-all duration-300 hover:scale-105"
                    >
                      <Calendar className="mr-2 h-4 w-4" />
                      Schedule a Meeting
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full hover:bg-blue-50 hover:border-blue-300 transition-all duration-300 hover:scale-105"
                    >
                      <Phone className="mr-2 h-4 w-4" />
                      Request a Call Back
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full hover:bg-blue-50 hover:border-blue-300 transition-all duration-300 hover:scale-105"
                    >
                      <Globe className="mr-2 h-4 w-4" />
                      Live Chat Support
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Global Offices */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-in fade-in slide-in-from-bottom-8 duration-700">
              Our Global Presence
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
              With offices around the world, we're always close to our clients
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {offices.map((office, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-2 animate-in fade-in slide-in-from-bottom-8 duration-700" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="relative h-32 overflow-hidden">
                  <img 
                    src={office.image}
                    alt={`${office.city} office`}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-2 left-2 text-white">
                    <div className="font-bold">{office.city}</div>
                    <div className="text-sm opacity-90">{office.country}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}