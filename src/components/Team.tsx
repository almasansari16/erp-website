import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Linkedin, Twitter, Mail } from 'lucide-react';

export default function Team() {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "CEO & ERP Strategist",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face",
      bio: "15+ years in ERP consulting with expertise in digital transformation and business process optimization.",
      specialties: ["ERP Strategy", "Business Analysis", "Digital Transformation"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "sarah@erpro-digital.com"
      }
    },
    {
      name: "Michael Chen",
      role: "CTO & Solutions Architect",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
      bio: "Technical leader with deep expertise in ERP systems, cloud architecture, and enterprise integrations.",
      specialties: ["System Architecture", "Cloud Solutions", "Technical Leadership"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "michael@erpro-digital.com"
      }
    },
    {
      name: "Emily Rodriguez",
      role: "Digital Marketing Director",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face",
      bio: "Creative marketing professional specializing in B2B campaigns, content strategy, and lead generation.",
      specialties: ["Digital Marketing", "Content Strategy", "Lead Generation"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "emily@erpro-digital.com"
      }
    },
    {
      name: "David Kim",
      role: "Senior ERP Consultant",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
      bio: "ERP implementation specialist with experience across manufacturing, retail, and healthcare industries.",
      specialties: ["ERP Implementation", "Process Optimization", "Training"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "david@erpro-digital.com"
      }
    },
    {
      name: "Lisa Thompson",
      role: "UX/UI Designer",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=face",
      bio: "Design expert focused on creating intuitive ERP interfaces and engaging digital marketing materials.",
      specialties: ["UI/UX Design", "User Research", "Design Systems"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "lisa@erpro-digital.com"
      }
    },
    {
      name: "James Wilson",
      role: "Data Analytics Manager",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face",
      bio: "Data scientist specializing in business intelligence, reporting, and predictive analytics for ERP systems.",
      specialties: ["Data Analytics", "Business Intelligence", "Reporting"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "james@erpro-digital.com"
      }
    }
  ];

  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Meet Our Expert Team
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our diverse team of ERP specialists, digital marketers, and technology experts are dedicated to delivering exceptional results for your business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <CardContent className="p-6 text-center">
                {/* Avatar */}
                <div className="relative mb-6">
                  <img 
                    src={member.avatar}
                    alt={member.name}
                    className="w-24 h-24 mx-auto rounded-full object-cover shadow-lg group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 w-24 h-24 mx-auto rounded-full bg-gradient-to-t from-blue-600/20 to-transparent group-hover:from-blue-600/40 transition-all duration-300"></div>
                </div>

                {/* Name and Role */}
                <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-medium mb-4">{member.role}</p>

                {/* Bio */}
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {member.bio}
                </p>

                {/* Specialties */}
                <div className="flex flex-wrap gap-1 justify-center mb-6">
                  {member.specialties.map((specialty, specialtyIndex) => (
                    <Badge 
                      key={specialtyIndex} 
                      variant="secondary" 
                      className="text-xs bg-blue-100 text-blue-800"
                    >
                      {specialty}
                    </Badge>
                  ))}
                </div>

                {/* Social Links */}
                <div className="flex justify-center space-x-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-10 h-10 p-0 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300"
                  >
                    <Linkedin className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-10 h-10 p-0 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300"
                  >
                    <Twitter className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-10 h-10 p-0 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300"
                  >
                    <Mail className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-indigo-600/5"></div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&h=200&fit=crop&crop=center"
                alt="Team collaboration"
                className="w-full h-32 object-cover rounded-lg mb-6"
              />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Join Our Growing Team
              </h3>
              <p className="text-gray-600 mb-6">
                We're always looking for talented individuals who share our passion for ERP excellence and digital innovation.
              </p>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                View Open Positions
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}