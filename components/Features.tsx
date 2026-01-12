import React from 'react';
import { BookOpen, ShieldAlert, Trophy, Bell, PenTool, Heart } from 'lucide-react';

const features = [
  {
    icon: <BookOpen className="text-studify-main" size={32} />,
    title: "Rights Library",
    description: "Access a comprehensive database of student rights, university bylaws, and policy documents tailored to your institution.",
    bg: "bg-blue-50"
  },
  {
    icon: <ShieldAlert className="text-red-500" size={32} />,
    title: "Complaint Desk",
    description: "File grievances regarding academic or campus issues securely and anonymously. Track status in real-time.",
    bg: "bg-red-50"
  },
  {
    icon: <Trophy className="text-studify-accent" size={32} />,
    title: "Scholarships",
    description: "Get personalized notifications for scholarships, grants, and internships that match your academic profile.",
    bg: "bg-yellow-50"
  },
  {
    icon: <Bell className="text-purple-500" size={32} />,
    title: "Notice Board",
    description: "A centralized digital notice board ensuring you never miss exam schedules, events, or urgent announcements.",
    bg: "bg-purple-50"
  },
  {
    icon: <PenTool className="text-green-500" size={32} />,
    title: "Academic Tools",
    description: "GPA calculators, citation generators, and study planners designed to streamline your academic workflow.",
    bg: "bg-green-50"
  },
  {
    icon: <Heart className="text-pink-500" size={32} />,
    title: "Mental Wellness",
    description: "Direct access to campus counselors, stress management resources, and emergency helplines.",
    bg: "bg-pink-50"
  }
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-studify-main font-bold tracking-wider uppercase text-sm mb-3">Core Pillars</h2>
          <h3 className="text-3xl md:text-4xl font-heading font-bold text-studify-dark mb-4">
            Everything You Need to Succeed on Campus
          </h3>
          <p className="text-gray-600">
            We've built a complete ecosystem to support your academic journey and personal well-being.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group p-8 rounded-2xl border border-gray-100 hover:border-studify-main/30 hover:shadow-xl transition-all duration-300 bg-white"
            >
              <div className={`w-16 h-16 rounded-2xl ${feature.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              <h4 className="text-xl font-bold text-studify-dark mb-3 group-hover:text-studify-main transition-colors">
                {feature.title}
              </h4>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;