import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { 
  Calculator,
  CheckCircle2,
  Clock,
  DollarSign,
  FileText,
  Send,
  Users,
  Building,
  Globe,
  Zap
} from 'lucide-react';
import { useState } from 'react';
import Header from '@/components/Header';

export default function Quote() {
  const [formData, setFormData] = useState({
    // Company Information
    companyName: '',
    industry: '',
    companySize: '',
    location: '',
    
    // Contact Information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    jobTitle: '',
    
    // Project Details
    services: [] as string[],
    projectType: '',
    timeline: '',
    budget: '',
    currentSystem: '',
    
    // Requirements
    requirements: '',
    challenges: '',
    goals: '',
    
    // Additional Options
    urgentProject: false,
    consultationNeeded: false,
    nda: false
  });

  const [estimatedCost, setEstimatedCost] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const services = [
    { id: 'erp-implementation', name: 'ERP Implementation', baseCost: 25000 },
    { id: 'digital-marketing', name: 'Digital Marketing', baseCost: 3000 },
    { id: 'business-analytics', name: 'Business Analytics', baseCost: 8000 },
    { id: 'security-compliance', name: 'Security & Compliance', baseCost: 12000 },
    { id: 'process-optimization', name: 'Process Optimization', baseCost: 15000 },
    { id: 'support-maintenance', name: '24/7 Support & Maintenance', baseCost: 2500 }
  ];

  const companySizes = [
    { value: 'startup', label: 'Startup (1-10 employees)', multiplier: 0.7 },
    { value: 'small', label: 'Small Business (11-50 employees)', multiplier: 1.0 },
    { value: 'medium', label: 'Medium Business (51-200 employees)', multiplier: 1.5 },
    { value: 'large', label: 'Large Enterprise (201-1000 employees)', multiplier: 2.0 },
    { value: 'enterprise', label: 'Enterprise (1000+ employees)', multiplier: 3.0 }
  ];

  const industries = [
    'Manufacturing', 'Retail', 'Healthcare', 'Finance', 'Technology', 
    'Logistics', 'Education', 'Government', 'Non-profit', 'Other'
  ];

  const handleInputChange = (field: string, value: string | boolean | string[]) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    calculateEstimate({ ...formData, [field]: value });
  };

  const handleServiceChange = (serviceId: string, checked: boolean) => {
    const newServices = checked 
      ? [...formData.services, serviceId]
      : formData.services.filter(id => id !== serviceId);
    
    handleInputChange('services', newServices);
  };

  const calculateEstimate = (data: typeof formData) => {
    let total = 0;
    
    // Calculate base cost from selected services
    data.services.forEach(serviceId => {
      const service = services.find(s => s.id === serviceId);
      if (service) total += service.baseCost;
    });

    // Apply company size multiplier
    const sizeMultiplier = companySizes.find(s => s.value === data.companySize)?.multiplier || 1;
    total *= sizeMultiplier;

    // Apply timeline urgency multiplier
    if (data.timeline === 'asap') total *= 1.3;
    if (data.timeline === '1-month') total *= 1.2;

    // Apply urgent project fee
    if (data.urgentProject) total *= 1.25;

    setEstimatedCost(Math.round(total));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    console.log('Quote form submitted:', formData);
    
    // Show success message
    setIsSubmitted(true);
    
    // In a real application, you would send this data to your backend
    // Example: await submitQuoteRequest(formData);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="pt-24 pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <Card className="p-8 shadow-2xl">
                <CardContent className="p-0 space-y-6">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="h-8 w-8 text-green-600" />
                  </div>
                  <h1 className="text-3xl font-bold text-gray-900">Quote Request Submitted!</h1>
                  <p className="text-lg text-gray-600">
                    Thank you for your interest in our ERP solutions. We've received your quote request and will get back to you within 24 hours.
                  </p>
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="font-bold text-blue-900 mb-2">What happens next?</h3>
                    <ul className="text-sm text-blue-800 space-y-2">
                      <li>• Our team will review your requirements</li>
                      <li>• We'll prepare a detailed proposal</li>
                      <li>• Schedule a consultation call within 48 hours</li>
                      <li>• Provide you with a customized solution</li>
                    </ul>
                  </div>
                  <div className="text-2xl font-bold text-blue-600">
                    Estimated Project Value: ${estimatedCost.toLocaleString()}
                  </div>
                  <Button 
                    onClick={() => window.location.href = '/'}
                    className="bg-blue-600 hover:bg-blue-700"
                  >
                    Return to Homepage
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-in fade-in slide-in-from-bottom-8 duration-700">
              Get Your Custom Quote
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
              Tell us about your project and get a personalized quote within 24 hours
            </p>
            <div className="flex flex-wrap justify-center gap-4 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-400">
              <Badge className="bg-white/20 text-white hover:bg-white/30">Free Consultation</Badge>
              <Badge className="bg-white/20 text-white hover:bg-white/30">Custom Pricing</Badge>
              <Badge className="bg-white/20 text-white hover:bg-white/30">24h Response</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-2xl">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900 flex items-center">
                    <Calculator className="mr-3 h-6 w-6 text-blue-600" />
                    Project Details
                  </CardTitle>
                  <p className="text-gray-600">Please provide detailed information about your project requirements.</p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Company Information */}
                    <div className="space-y-6">
                      <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                        <Building className="mr-2 h-5 w-5 text-blue-600" />
                        Company Information
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Company Name *</label>
                          <Input
                            placeholder="Your Company Ltd."
                            value={formData.companyName}
                            onChange={(e) => handleInputChange('companyName', e.target.value)}
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Industry *</label>
                          <Select onValueChange={(value) => handleInputChange('industry', value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select industry" />
                            </SelectTrigger>
                            <SelectContent>
                              {industries.map(industry => (
                                <SelectItem key={industry} value={industry.toLowerCase()}>
                                  {industry}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Company Size *</label>
                          <Select onValueChange={(value) => handleInputChange('companySize', value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select company size" />
                            </SelectTrigger>
                            <SelectContent>
                              {companySizes.map(size => (
                                <SelectItem key={size.value} value={size.value}>
                                  {size.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                          <Input
                            placeholder="City, Country"
                            value={formData.location}
                            onChange={(e) => handleInputChange('location', e.target.value)}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Contact Information */}
                    <div className="space-y-6">
                      <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                        <Users className="mr-2 h-5 w-5 text-blue-600" />
                        Contact Information
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                          <Input
                            placeholder="John"
                            value={formData.firstName}
                            onChange={(e) => handleInputChange('firstName', e.target.value)}
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                          <Input
                            placeholder="Doe"
                            value={formData.lastName}
                            onChange={(e) => handleInputChange('lastName', e.target.value)}
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                          <Input
                            type="email"
                            placeholder="john@company.com"
                            value={formData.email}
                            onChange={(e) => handleInputChange('email', e.target.value)}
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                          <Input
                            placeholder="+1 (555) 123-4567"
                            value={formData.phone}
                            onChange={(e) => handleInputChange('phone', e.target.value)}
                          />
                        </div>
                        <div className="md:col-span-2">
                          <label className="block text-sm font-medium text-gray-700 mb-2">Job Title</label>
                          <Input
                            placeholder="CEO, CTO, IT Manager, etc."
                            value={formData.jobTitle}
                            onChange={(e) => handleInputChange('jobTitle', e.target.value)}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Services Selection */}
                    <div className="space-y-6">
                      <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                        <Zap className="mr-2 h-5 w-5 text-blue-600" />
                        Services Required *
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        {services.map(service => (
                          <div key={service.id} className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-gray-50">
                            <Checkbox
                              id={service.id}
                              checked={formData.services.includes(service.id)}
                              onCheckedChange={(checked) => handleServiceChange(service.id, checked as boolean)}
                            />
                            <label htmlFor={service.id} className="flex-1 cursor-pointer">
                              <div className="font-medium text-gray-900">{service.name}</div>
                              <div className="text-sm text-gray-500">Starting from ${service.baseCost.toLocaleString()}</div>
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Project Details */}
                    <div className="space-y-6">
                      <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                        <FileText className="mr-2 h-5 w-5 text-blue-600" />
                        Project Details
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Project Timeline *</label>
                          <Select onValueChange={(value) => handleInputChange('timeline', value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select timeline" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="asap">ASAP (Rush project)</SelectItem>
                              <SelectItem value="1-month">Within 1 month</SelectItem>
                              <SelectItem value="3-months">1-3 months</SelectItem>
                              <SelectItem value="6-months">3-6 months</SelectItem>
                              <SelectItem value="flexible">Flexible timeline</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Budget Range</label>
                          <Select onValueChange={(value) => handleInputChange('budget', value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select budget range" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="under-25k">Under $25,000</SelectItem>
                              <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                              <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                              <SelectItem value="100k-250k">$100,000 - $250,000</SelectItem>
                              <SelectItem value="over-250k">Over $250,000</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="md:col-span-2">
                          <label className="block text-sm font-medium text-gray-700 mb-2">Current System</label>
                          <Input
                            placeholder="What ERP/software are you currently using?"
                            value={formData.currentSystem}
                            onChange={(e) => handleInputChange('currentSystem', e.target.value)}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Requirements */}
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Project Requirements *</label>
                        <Textarea
                          placeholder="Describe your project requirements, specific features needed, integration requirements, etc."
                          value={formData.requirements}
                          onChange={(e) => handleInputChange('requirements', e.target.value)}
                          className="h-24"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Current Challenges</label>
                        <Textarea
                          placeholder="What challenges are you facing with your current system?"
                          value={formData.challenges}
                          onChange={(e) => handleInputChange('challenges', e.target.value)}
                          className="h-24"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Project Goals</label>
                        <Textarea
                          placeholder="What do you hope to achieve with this project?"
                          value={formData.goals}
                          onChange={(e) => handleInputChange('goals', e.target.value)}
                          className="h-24"
                        />
                      </div>
                    </div>

                    {/* Additional Options */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-gray-900">Additional Options</h3>
                      <div className="space-y-3">
                        <div className="flex items-center space-x-3">
                          <Checkbox
                            id="urgent"
                            checked={formData.urgentProject}
                            onCheckedChange={(checked) => handleInputChange('urgentProject', checked as boolean)}
                          />
                          <label htmlFor="urgent" className="text-sm text-gray-700">
                            This is an urgent project (25% rush fee applies)
                          </label>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Checkbox
                            id="consultation"
                            checked={formData.consultationNeeded}
                            onCheckedChange={(checked) => handleInputChange('consultationNeeded', checked as boolean)}
                          />
                          <label htmlFor="consultation" className="text-sm text-gray-700">
                            I would like a free consultation call before proceeding
                          </label>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Checkbox
                            id="nda"
                            checked={formData.nda}
                            onCheckedChange={(checked) => handleInputChange('nda', checked as boolean)}
                          />
                          <label htmlFor="nda" className="text-sm text-gray-700">
                            This project requires an NDA (Non-Disclosure Agreement)
                          </label>
                        </div>
                      </div>
                    </div>

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full bg-blue-600 hover:bg-blue-700 hover:scale-105 transition-all duration-300"
                      disabled={formData.services.length === 0}
                    >
                      Submit Quote Request
                      <Send className="ml-2 h-5 w-5" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Quote Summary */}
            <div className="space-y-6">
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900 flex items-center">
                    <DollarSign className="mr-2 h-5 w-5 text-green-600" />
                    Quote Summary
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center p-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg">
                    <div className="text-sm opacity-90">Estimated Project Value</div>
                    <div className="text-3xl font-bold">
                      ${estimatedCost.toLocaleString()}
                    </div>
                    <div className="text-xs opacity-75 mt-2">
                      *Final quote may vary based on requirements
                    </div>
                  </div>

                  {formData.services.length > 0 && (
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Selected Services:</h4>
                      <div className="space-y-2">
                        {formData.services.map(serviceId => {
                          const service = services.find(s => s.id === serviceId);
                          return service ? (
                            <div key={serviceId} className="flex justify-between text-sm">
                              <span>{service.name}</span>
                              <span>${service.baseCost.toLocaleString()}+</span>
                            </div>
                          ) : null;
                        })}
                      </div>
                    </div>
                  )}

                  <div className="space-y-3 pt-4 border-t">
                    <div className="flex items-center text-sm text-gray-600">
                      <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
                      Free initial consultation
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="h-4 w-4 text-blue-500 mr-2" />
                      24-hour response time
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Globe className="h-4 w-4 text-purple-500 mr-2" />
                      Global project delivery
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6 bg-orange-50 border-orange-200">
                <h3 className="font-bold text-orange-800 mb-2">Need Help?</h3>
                <p className="text-orange-700 text-sm mb-4">
                  Have questions about our services or need assistance with the quote form?
                </p>
                <Button size="sm" variant="outline" className="w-full border-orange-300 text-orange-700 hover:bg-orange-100">
                  Contact Our Team
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}