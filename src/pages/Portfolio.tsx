import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, TrendingUp, Users, DollarSign, Calendar, MapPin } from 'lucide-react';
import Header from '@/components/Header';

export default function Portfolio() {
  const projects = [
    {
      title: "Manufacturing ERP Transformation",
      client: "TechCorp Industries",
      category: "Manufacturing",
      location: "Detroit, USA",
      year: "2023",
      image: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=600&h=400&fit=crop&crop=center",
      results: [
        { icon: TrendingUp, label: "Efficiency", value: "+45%" },
        { icon: DollarSign, label: "Cost Savings", value: "$2.3M" },
        { icon: Users, label: "Users", value: "500+" }
      ],
      description: "Complete ERP overhaul for a leading manufacturing company, implementing SAP S/4HANA with custom modules for production planning and quality management. The project resulted in streamlined operations and significant cost savings.",
      challenge: "Legacy systems causing production delays and inventory management issues",
      solution: "Implemented integrated ERP solution with real-time production tracking and automated inventory management",
      technologies: ["SAP S/4HANA", "Power BI", "Azure Cloud", "React Dashboard"]
    },
    {
      title: "Retail Chain Digital Marketing",
      client: "GlobalMart",
      category: "Retail",
      location: "London, UK",
      year: "2023",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop&crop=center",
      results: [
        { icon: TrendingUp, label: "Sales Growth", value: "+78%" },
        { icon: Users, label: "New Customers", value: "12K+" },
        { icon: DollarSign, label: "ROI", value: "340%" }
      ],
      description: "Comprehensive digital marketing campaign with ERP integration for a major retail chain, focusing on omnichannel customer experience and inventory optimization.",
      challenge: "Disconnected online and offline sales channels with poor inventory visibility",
      solution: "Unified commerce platform with integrated marketing automation and real-time inventory sync",
      technologies: ["Shopify Plus", "Google Ads", "HubSpot CRM", "Analytics 360"]
    },
    {
      title: "Healthcare System Integration",
      client: "MediCare Solutions",
      category: "Healthcare",
      location: "Toronto, Canada",
      year: "2022",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop&crop=center",
      results: [
        { icon: Users, label: "Patients", value: "50K+" },
        { icon: TrendingUp, label: "Efficiency", value: "+60%" },
        { icon: DollarSign, label: "Cost Reduction", value: "$1.8M" }
      ],
      description: "Integrated ERP solution for healthcare management with patient records, billing, and resource optimization, ensuring HIPAA compliance and improved patient care.",
      challenge: "Fragmented patient data across multiple systems and manual billing processes",
      solution: "Unified healthcare ERP with integrated EMR, automated billing, and compliance monitoring",
      technologies: ["Epic EHR", "HL7 FHIR", "Microsoft Azure", "Power Platform"]
    },
    {
      title: "E-commerce Platform Launch",
      client: "StartupXYZ",
      category: "E-commerce",
      location: "San Francisco, USA",
      year: "2023",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&crop=center",
      results: [
        { icon: TrendingUp, label: "Growth", value: "+120%" },
        { icon: Users, label: "Active Users", value: "25K+" },
        { icon: DollarSign, label: "Revenue", value: "$5.2M" }
      ],
      description: "Full-stack e-commerce solution with integrated ERP for a tech startup, including inventory management, order processing, and customer analytics.",
      challenge: "Rapid scaling requirements with need for automated operations and real-time analytics",
      solution: "Cloud-native e-commerce platform with integrated ERP and advanced analytics dashboard",
      technologies: ["WooCommerce", "AWS", "Stripe", "Vue.js", "Node.js"]
    },
    {
      title: "Financial Services Automation",
      client: "FinanceFirst",
      category: "Finance",
      location: "Sydney, Australia",
      year: "2022",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop&crop=center",
      results: [
        { icon: TrendingUp, label: "Processing Speed", value: "+85%" },
        { icon: Users, label: "Clients Served", value: "15K+" },
        { icon: DollarSign, label: "Savings", value: "$3.1M" }
      ],
      description: "Automated financial processing system with compliance management and real-time reporting capabilities for a leading financial services firm.",
      challenge: "Manual processes causing delays and compliance risks in financial operations",
      solution: "Automated workflow system with integrated compliance monitoring and real-time reporting",
      technologies: ["Oracle Financials", "Python", "Tableau", "Node.js", "MongoDB"]
    },
    {
      title: "Supply Chain Optimization",
      client: "LogiFlow Corp",
      category: "Logistics",
      location: "Hamburg, Germany",
      year: "2023",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop&crop=center",
      results: [
        { icon: TrendingUp, label: "Efficiency", value: "+52%" },
        { icon: Users, label: "Suppliers", value: "200+" },
        { icon: DollarSign, label: "Cost Savings", value: "$4.5M" }
      ],
      description: "End-to-end supply chain management system with real-time tracking, predictive analytics, and automated procurement processes.",
      challenge: "Complex global supply chain with limited visibility and manual coordination",
      solution: "Integrated supply chain platform with IoT tracking and AI-powered demand forecasting",
      technologies: ["Microsoft Dynamics 365", "IoT Sensors", "Machine Learning", "Power BI"]
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
              Our Portfolio
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
              Success stories from businesses we've transformed across industries and continents
            </p>
            <div className="flex flex-wrap justify-center gap-4 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-400">
              <Badge className="bg-white/20 text-white hover:bg-white/30">150+ Projects</Badge>
              <Badge className="bg-white/20 text-white hover:bg-white/30">25+ Countries</Badge>
              <Badge className="bg-white/20 text-white hover:bg-white/30">98% Success Rate</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {projects.map((project, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 overflow-hidden animate-in fade-in slide-in-from-bottom-8 duration-700" style={{ animationDelay: `${index * 150}ms` }}>
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-white/90 text-gray-800">
                      {project.category}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="flex items-center space-x-4 text-sm">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {project.location}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {project.year}
                      </div>
                    </div>
                  </div>
                </div>

                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </CardTitle>
                  <p className="text-sm text-gray-500 font-medium">{project.client}</p>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <p className="text-gray-600 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Challenge & Solution */}
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Challenge:</h4>
                      <p className="text-sm text-gray-600">{project.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Solution:</h4>
                      <p className="text-sm text-gray-600">{project.solution}</p>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="grid grid-cols-3 gap-4 py-4 bg-gray-50 rounded-lg px-4">
                    {project.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="text-center">
                        <result.icon className="h-5 w-5 text-blue-600 mx-auto mb-2" />
                        <div className="text-lg font-bold text-gray-900">{result.value}</div>
                        <div className="text-xs text-gray-500">{result.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button 
                    className="w-full bg-blue-600 hover:bg-blue-700 group-hover:scale-105 transition-all duration-300"
                  >
                    View Full Case Study
                    <ExternalLink className="ml-2 h-4 w-4" />
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
            Ready to Join Our Success Stories?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
            Let's discuss how we can transform your business with our proven ERP solutions and digital marketing expertise.
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-400">
            Start Your Project
            <ExternalLink className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
}