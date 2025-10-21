import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Award, 
  Users, 
  Globe, 
  TrendingUp,
  ArrowRight,
  CheckCircle2,
  Target,
  Eye,
  Heart
} from 'lucide-react';
import Header from '@/components/Header';

export default function About() {
  const achievements = [
    { icon: Award, number: "8+", text: "Years Experience", description: "Leading the industry" },
    { icon: Users, number: "500+", text: "Happy Clients", description: "Worldwide success" },
    { icon: Globe, number: "25+", text: "Countries Served", description: "Global presence" },
    { icon: TrendingUp, number: "150+", text: "ERP Projects", description: "Completed successfully" }
  ];

  const values = [
    {
      icon: Target,
      title: "Mission",
      description: "To empower businesses with cutting-edge ERP solutions and digital marketing strategies that drive efficiency, growth, and competitive advantage."
    },
    {
      icon: Eye,
      title: "Vision", 
      description: "To be the global leader in ERP consulting and digital transformation, helping businesses achieve operational excellence and sustainable growth."
    },
    {
      icon: Heart,
      title: "Values",
      description: "Excellence, Innovation, Integrity, Customer Success, Continuous Learning, and Collaborative Partnership in everything we do."
    }
  ];

  const timeline = [
    { year: "2016", title: "Company Founded", description: "Started as a small ERP consulting firm" },
    { year: "2018", title: "Digital Expansion", description: "Added digital marketing services" },
    { year: "2020", title: "Global Reach", description: "Expanded to serve 15+ countries" },
    { year: "2022", title: "Industry Leader", description: "Recognized as top ERP consultant" },
    { year: "2024", title: "Innovation Hub", description: "Leading AI-powered ERP solutions" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-in fade-in slide-in-from-bottom-8 duration-700">
              About ERPro Digital
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
              Leading ERP solutions and digital marketing agency transforming businesses worldwide
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-in fade-in slide-in-from-left-8 duration-700">
              <div>
                <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">
                  Our Story
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Transforming Businesses Since 2016
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Founded with a vision to revolutionize how businesses operate, ERPro Digital has grown from a small consulting firm to a global leader in ERP implementation and digital marketing solutions.
                </p>
                <p className="text-gray-600 mb-8">
                  Our journey began when our founders recognized the gap between powerful ERP systems and businesses' ability to leverage them effectively. Today, we've successfully transformed over 500 companies across 25+ countries.
                </p>
              </div>

              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Learn More About Our Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            <div className="animate-in fade-in slide-in-from-right-8 duration-700">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop&crop=center"
                alt="Modern Office Space"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-in fade-in slide-in-from-bottom-8 duration-700">
              Our Achievements
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
              Numbers that speak to our commitment to excellence and client success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center p-8 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 animate-in fade-in slide-in-from-bottom-8 duration-700" style={{ animationDelay: `${index * 100}ms` }}>
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <achievement.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">
                    {achievement.number}
                  </div>
                  <div className="text-lg font-semibold text-gray-700 mb-1">
                    {achievement.text}
                  </div>
                  <div className="text-sm text-gray-500">
                    {achievement.description}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-in fade-in slide-in-from-bottom-8 duration-700">
              Our Foundation
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="p-8 text-center hover:shadow-xl transition-all duration-500 hover:-translate-y-2 animate-in fade-in slide-in-from-bottom-8 duration-700" style={{ animationDelay: `${index * 200}ms` }}>
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-in fade-in slide-in-from-bottom-8 duration-700">
              Our Journey
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
              Key milestones in our growth and evolution
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <div key={index} className={`flex items-center mb-12 animate-in fade-in slide-in-from-bottom-8 duration-700`} style={{ animationDelay: `${index * 150}ms` }}>
                <div className="flex-shrink-0 w-24 text-right mr-8">
                  <div className="text-2xl font-bold text-blue-600">{item.year}</div>
                </div>
                <div className="flex-shrink-0 w-4 h-4 bg-blue-600 rounded-full mr-8 relative">
                  <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-0.5 h-16 bg-blue-200"></div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}