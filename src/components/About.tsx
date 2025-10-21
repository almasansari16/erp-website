import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Award, 
  Users, 
  Globe, 
  TrendingUp,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

export default function About() {
  const achievements = [
    { icon: Award, number: "8+", text: "Years Experience" },
    { icon: Users, number: "500+", text: "Happy Clients" },
    { icon: Globe, number: "25+", text: "Countries Served" },
    { icon: TrendingUp, number: "150+", text: "ERP Projects" }
  ];

  const values = [
    "Expert ERP Implementation",
    "Digital Marketing Excellence",
    "24/7 Customer Support",
    "Data-Driven Solutions",
    "Scalable Architecture",
    "Industry Best Practices"
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">
                About ERPro Digital
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Leading ERP Solutions & Digital Marketing Agency
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                We are a specialized digital agency focused on ERP implementation and digital marketing solutions. 
                Our team combines technical expertise with marketing excellence to help businesses streamline operations 
                and accelerate growth.
              </p>
              <p className="text-gray-600 mb-8">
                With over 8 years of experience, we've successfully implemented ERP solutions for 500+ clients across 
                25+ countries, helping them achieve operational excellence and sustainable growth.
              </p>
            </div>

            {/* Values Grid */}
            <div className="grid grid-cols-2 gap-4">
              {values.map((value, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm text-gray-700">{value}</span>
                </div>
              ))}
            </div>

            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Learn More About Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Right Content */}
          <div className="space-y-8">
            {/* Office Image */}
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=300&fit=crop&crop=center"
                alt="Modern Office Space"
                className="w-full h-64 object-cover rounded-2xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-2xl"></div>
            </div>

            {/* Achievement Cards */}
            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-0">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <achievement.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900 mb-1">
                      {achievement.number}
                    </div>
                    <div className="text-sm text-gray-600">
                      {achievement.text}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Mission Statement */}
            <Card className="p-8 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
              <CardContent className="p-0">
                <h3 className="text-xl font-bold mb-4">Our Mission</h3>
                <p className="text-blue-100 leading-relaxed">
                  To empower businesses with cutting-edge ERP solutions and digital marketing strategies 
                  that drive efficiency, growth, and competitive advantage in today's digital landscape.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}