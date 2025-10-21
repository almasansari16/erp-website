import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Settings, 
  BarChart3, 
  Users, 
  Shield, 
  Zap, 
  HeadphonesIcon,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  const services = [
    {
      icon: Settings,
      title: "ERP Implementation",
      description: "Complete ERP system setup and configuration tailored to your business needs.",
      features: ["Custom Configuration", "Data Migration", "System Integration", "User Training"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=200&fit=crop&crop=center"
    },
    {
      icon: BarChart3,
      title: "Business Analytics",
      description: "Advanced reporting and analytics to drive data-driven business decisions.",
      features: ["Real-time Dashboards", "Custom Reports", "KPI Tracking", "Predictive Analytics"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop&crop=center"
    },
    {
      icon: Users,
      title: "Digital Marketing",
      description: "Comprehensive digital marketing strategies to grow your ERP business.",
      features: ["SEO Optimization", "Content Marketing", "Social Media", "Lead Generation"],
      image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=400&h=200&fit=crop&crop=center"
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Ensure your ERP system meets industry standards and security requirements.",
      features: ["Data Protection", "Compliance Audits", "Security Monitoring", "Risk Assessment"],
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=200&fit=crop&crop=center"
    },
    {
      icon: Zap,
      title: "Process Optimization",
      description: "Streamline your business processes for maximum efficiency and productivity.",
      features: ["Workflow Automation", "Process Mapping", "Efficiency Analysis", "Performance Tuning"],
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=200&fit=crop&crop=center"
    },
    {
      icon: HeadphonesIcon,
      title: "24/7 Support",
      description: "Round-the-clock technical support and maintenance for your ERP systems.",
      features: ["Technical Support", "System Maintenance", "Bug Fixes", "Performance Monitoring"],
      image: "https://images.unsplash.com/photo-1553775282-20af80779df7?w=400&h=200&fit=crop&crop=center"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our ERP Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive ERP solutions and digital marketing services to transform your business operations and drive growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2 overflow-hidden">
              {/* Service Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
              </div>

              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-gray-600">
                  {service.description}
                </CardDescription>
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
                  variant="outline" 
                  className="w-full group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/quote">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8 py-3 hover:scale-105 transition-all duration-300">
              Get Custom Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}