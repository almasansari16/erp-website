import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight animate-in fade-in slide-in-from-bottom-8 duration-700">
                Transform Your Business with 
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent animate-pulse"> ERP Solutions</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
                We're a digital marketing agency specializing in ERP implementation, optimization, and growth strategies. 
                Help your business streamline operations and boost productivity with our expert solutions.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-400">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 hover:scale-105 transition-all duration-300"
                onClick={() => scrollToSection('services')}
              >
                Explore Services
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              <Link to="/portfolio">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 hover:scale-105 transition-all duration-300 w-full sm:w-auto"
                >
                  <Play className="mr-2 h-5 w-5" />
                  View Our Work
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-600">
              <div className="text-center group">
                <div className="text-3xl font-bold text-blue-600 group-hover:scale-110 transition-transform duration-300">150+</div>
                <div className="text-sm text-gray-600">ERP Projects</div>
              </div>
              <div className="text-center group">
                <div className="text-3xl font-bold text-blue-600 group-hover:scale-110 transition-transform duration-300">98%</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
              <div className="text-center group">
                <div className="text-3xl font-bold text-blue-600 group-hover:scale-110 transition-transform duration-300">24/7</div>
                <div className="text-sm text-gray-600">Support</div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative animate-in fade-in slide-in-from-right-8 duration-700 delay-300">
            {/* Main Dashboard Image */}
            <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-8 hover:shadow-3xl transition-all duration-500 hover:-translate-y-2">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=center"
                alt="ERP Dashboard Analytics"
                className="w-full h-64 object-cover rounded-lg mb-6 hover:scale-105 transition-transform duration-500"
              />
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center animate-pulse">
                    <div className="w-6 h-6 bg-blue-600 rounded"></div>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">ERP Dashboard</div>
                    <div className="text-sm text-gray-500">Real-time Analytics</div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Sales Performance</span>
                    <span className="text-sm font-semibold text-green-600 animate-bounce">+24%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full w-3/4 animate-pulse"></div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Efficiency Rate</span>
                    <span className="text-sm font-semibold text-green-600 animate-bounce">+18%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-indigo-600 h-2 rounded-full w-4/5 animate-pulse"></div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Cost Reduction</span>
                    <span className="text-sm font-semibold text-green-600 animate-bounce">+32%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-purple-600 h-2 rounded-full w-5/6 animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Background decoration */}
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-2xl -z-10 opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-64 h-64 bg-gradient-to-tr from-purple-400 to-pink-600 rounded-2xl -z-10 opacity-20 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}