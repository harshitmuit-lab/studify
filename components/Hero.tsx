import React from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
            // Using a specific ID from picsum to ensure a relevant "campus/people" look, or a generic placeholder
            backgroundImage: `url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop')` 
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-studify-dark/90 to-studify-main/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center md:text-left flex flex-col md:flex-row items-center pt-20">
        <div className="md:w-2/3 space-y-6">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-2">
            <span className="bg-studify-accent text-studify-dark text-xs font-bold px-2 py-0.5 rounded-sm">NEW</span>
            <span className="text-white text-sm font-light">Campus Mental Health Support Added</span>
            <ChevronRight size={16} className="text-white" />
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white leading-tight">
            Empower Your <br />
            <span className="text-studify-accent">Student Journey</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl font-light leading-relaxed">
            All your campus rights, opportunities & support — in one place. 
            Know your rights, report issues securely, and never miss a scholarship deadline.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button className="flex items-center justify-center gap-2 bg-studify-accent hover:bg-yellow-400 text-studify-dark font-bold py-4 px-8 rounded-full transition-all shadow-[0_0_20px_rgba(249,178,51,0.5)] hover:shadow-[0_0_30px_rgba(249,178,51,0.7)] text-lg">
              Get Started
              <ArrowRight size={20} />
            </button>
            <button className="flex items-center justify-center gap-2 bg-transparent border-2 border-white hover:bg-white/10 text-white font-semibold py-4 px-8 rounded-full transition-all text-lg backdrop-blur-sm">
              Explore Features
            </button>
          </div>
          
          <div className="pt-8 flex items-center gap-4 text-white/80 text-sm">
             <div className="flex -space-x-2">
                {[1,2,3].map(i => (
                    <img key={i} src={`https://picsum.photos/seed/user${i}/100/100`} alt="User" className="w-8 h-8 rounded-full border-2 border-studify-dark" />
                ))}
             </div>
             <p>Trusted by 10,000+ students</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;