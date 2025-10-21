import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Settings, 
  BarChart3, 
  Users, 
  Shield, 
  Zap, 
  HeadphonesIcon,
  ArrowRight,
  CheckCircle,
  Star,
  Clock
} from 'lucide-react';
import Header from '@/components/Header';

export default function Services() {
  const services = [
    {
      icon: Settings,
      title: "ERP Implementation",
      description: "Complete ERP system setup and configuration tailored to your business needs with industry best practices.",
      features: ["Custom Configuration", "Data Migration", "System Integration", "User Training", "Go-Live Support", "Post-Implementation Review"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=300&fit=crop&crop=center",
      price: "Starting from $25,000",
      duration: "3-6 months",
      rating: 4.9
    },
    {
      icon: BarChart3,
      title: "Business Analytics",
      description: "Advanced reporting and analytics solutions to drive data-driven business decisions and insights.",
      features: ["Real-time Dashboards", "Custom Reports", "KPI Tracking", "Predictive Analytics", "Data Visualization", "Performance Monitoring"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=300&fit=crop&crop=center",
      price: "Starting from $8,000",
      duration: "1-2 months",
      rating: 4.8
    },
    {
      icon: Users,
      title: "Digital Marketing",
      description: "Comprehensive digital marketing strategies specifically designed to grow your ERP and technology business.",
      features: ["SEO Optimization", "Content Marketing", "Social Media Management", "Lead Generation", "PPC Campaigns", "Marketing Automation"],
      image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=600&h=300&fit=crop&crop=center",
      price: "Starting from $3,000/month",
      duration: "Ongoing",
      rating: 4.9
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Ensure your ERP system meets industry standards and security requirements with comprehensive protection.",
      features: ["Data Protection", "Compliance Audits", "Security Monitoring", "Risk Assessment", "Penetration Testing", "Security Training"],
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=300&fit=crop&crop=center",
      price: "Starting from $12,000",
      duration: "2-3 months",
      rating: 4.7
    },
    {
      icon: Zap,
      title: "Process Optimization",
      description: "Streamline your business processes for maximum efficiency, productivity, and cost reduction.",
      features: ["Workflow Automation", "Process Mapping", "Efficiency Analysis", "Performance Tuning", "Change Management", "ROI Optimization"],
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=300&fit=crop&crop=center",
      price: "Starting from $15,000",
      duration: "2-4 months",
      rating: 4.8
    },
    {
      icon: HeadphonesIcon,
      title: "24/7 Support & Maintenance",
      description: "Round-the-clock technical support and proactive maintenance for your ERP systems and infrastructure.",
      features: ["Technical Support", "System Maintenance", "Bug Fixes", "Performance Monitoring", "Emergency Response", "Regular Updates"],
      image: "https://images.unsplash.com/photo-1553775282-20af80779df7?w=600&h=300&fit=crop&crop=center",
      price: "Starting from $2,500/month",
      duration: "Ongoing",
      rating: 4.9
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-in fade-in slide-in-from-bottom-8 duration-700">
              Our ERP Services
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
              Comprehensive solutions to transform your business operations and drive sustainable growth
            </p>
            <div className="flex flex-wrap justify-center gap-4 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-400">
              <Badge className="bg-white/20 text-white hover:bg-white/30">Expert Implementation</Badge>
              <Badge className="bg-white/20 text-white hover:bg-white/30">24/7 Support</Badge>
              <Badge className="bg-white/20 text-white hover:bg-white/30">Proven Results</Badge>
              <Badge className="bg-white/20 text-white hover:bg-white/30">Industry Leaders</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg hover:-translate-y-3 overflow-hidden animate-in fade-in slide-in-from-bottom-8 duration-700" style={{ animationDelay: `${index * 100}ms` }}>
                {/* Service Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 flex items-center space-x-1 bg-white/90 rounded-full px-2 py-1">
                    <Star className="h-3 w-3 text-yellow-500 fill-current" />
                    <span className="text-xs font-semibold text-gray-800">{service.rating}</span>
                  </div>
                </div>

                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="h-4 w-4 mr-1" />
                      {service.duration}
                    </div>
                    <div className="text-lg font-bold text-blue-600">
                      {service.price}
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full bg-blue-600 hover:bg-blue-700 group-hover:scale-105 transition-all duration-300"
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-in fade-in slide-in-from-bottom-8 duration-700">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
            Get a free consultation and discover how our ERP solutions can drive your business forward.
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-400">
            Schedule Free Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
}