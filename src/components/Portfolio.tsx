import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, TrendingUp, Users, DollarSign } from 'lucide-react';

export default function Portfolio() {
  const projects = [
    {
      title: "Manufacturing ERP Transformation",
      client: "TechCorp Industries",
      category: "Manufacturing",
      image: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=400&h=250&fit=crop&crop=center",
      results: [
        { icon: TrendingUp, label: "Efficiency", value: "+45%" },
        { icon: DollarSign, label: "Cost Savings", value: "$2.3M" },
        { icon: Users, label: "Users", value: "500+" }
      ],
      description: "Complete ERP overhaul for a leading manufacturing company, resulting in streamlined operations and significant cost savings.",
      technologies: ["SAP", "Power BI", "Azure", "React"]
    },
    {
      title: "Retail Chain Digital Marketing",
      client: "GlobalMart",
      category: "Retail",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=250&fit=crop&crop=center",
      results: [
        { icon: TrendingUp, label: "Sales Growth", value: "+78%" },
        { icon: Users, label: "New Customers", value: "12K+" },
        { icon: DollarSign, label: "ROI", value: "340%" }
      ],
      description: "Comprehensive digital marketing campaign with ERP integration for inventory management and customer analytics.",
      technologies: ["Shopify", "Google Ads", "Analytics", "CRM"]
    },
    {
      title: "Healthcare System Integration",
      client: "MediCare Solutions",
      category: "Healthcare",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=250&fit=crop&crop=center",
      results: [
        { icon: Users, label: "Patients", value: "50K+" },
        { icon: TrendingUp, label: "Efficiency", value: "+60%" },
        { icon: DollarSign, label: "Cost Reduction", value: "$1.8M" }
      ],
      description: "Integrated ERP solution for healthcare management with patient records, billing, and resource optimization.",
      technologies: ["Epic", "HL7", "FHIR", "Angular"]
    },
    {
      title: "E-commerce Platform Launch",
      client: "StartupXYZ",
      category: "E-commerce",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop&crop=center",
      results: [
        { icon: TrendingUp, label: "Growth", value: "+120%" },
        { icon: Users, label: "Active Users", value: "25K+" },
        { icon: DollarSign, label: "Revenue", value: "$5.2M" }
      ],
      description: "Full-stack e-commerce solution with integrated ERP for inventory, orders, and customer management.",
      technologies: ["WooCommerce", "AWS", "Stripe", "Vue.js"]
    },
    {
      title: "Financial Services Automation",
      client: "FinanceFirst",
      category: "Finance",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop&crop=center",
      results: [
        { icon: TrendingUp, label: "Processing Speed", value: "+85%" },
        { icon: Users, label: "Clients Served", value: "15K+" },
        { icon: DollarSign, label: "Savings", value: "$3.1M" }
      ],
      description: "Automated financial processing system with compliance management and real-time reporting capabilities.",
      technologies: ["Oracle", "Python", "Tableau", "Node.js"]
    },
    {
      title: "Supply Chain Optimization",
      client: "LogiFlow Corp",
      category: "Logistics",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=250&fit=crop&crop=center",
      results: [
        { icon: TrendingUp, label: "Efficiency", value: "+52%" },
        { icon: Users, label: "Suppliers", value: "200+" },
        { icon: DollarSign, label: "Cost Savings", value: "$4.5M" }
      ],
      description: "End-to-end supply chain management system with real-time tracking and predictive analytics.",
      technologies: ["Microsoft Dynamics", "IoT", "Machine Learning", "React Native"]
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Success Stories
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover how we've helped businesses across industries achieve remarkable results with our ERP solutions and digital marketing expertise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-white/90 text-gray-800">
                    {project.category}
                  </Badge>
                </div>
              </div>

              <CardHeader className="pb-4">
                <CardTitle className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </CardTitle>
                <p className="text-sm text-gray-500">{project.client}</p>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-gray-600 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Results */}
                <div className="grid grid-cols-3 gap-2">
                  {project.results.map((result, resultIndex) => (
                    <div key={resultIndex} className="text-center">
                      <result.icon className="h-4 w-4 text-blue-600 mx-auto mb-1" />
                      <div className="text-lg font-bold text-gray-900">{result.value}</div>
                      <div className="text-xs text-gray-500">{result.label}</div>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-300"
                >
                  View Case Study
                  <ExternalLink className="ml-2 h-3 w-3" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Ready to become our next success story?
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            Start Your Project
            <ExternalLink className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}