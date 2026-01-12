import React from 'react';
import { Lock, Zap, Users, CheckCircle2 } from 'lucide-react';

const WhyChoose: React.FC = () => {
  return (
    <section id="why-us" className="py-20 bg-studify-bg relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-studify-main/5 rounded-full blur-3xl -mr-20 -mt-20"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-studify-accent/5 rounded-full blur-3xl -ml-20 -mb-20"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="lg:w-1/2">
            <h2 className="text-studify-main font-bold tracking-wider uppercase text-sm mb-3">Why Studify?</h2>
            <h3 className="text-3xl md:text-5xl font-heading font-bold text-studify-dark mb-6">
              Built by Students, <br />
              <span className="text-studify-main">For Students.</span>
            </h3>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              We understand the gap between university administration and student needs. Studify bridges that gap with transparency, privacy, and accessibility.
            </p>

            <div className="space-y-6">
              {[
                {
                  icon: <Lock className="text-studify-dark" size={24} />,
                  title: "100% Anonymous Reporting",
                  desc: "Your identity is protected when you file sensitive complaints."
                },
                {
                  icon: <Zap className="text-studify-accent" size={24} />,
                  title: "Real-time Updates",
                  desc: "Get instant push notifications for deadlines and notices."
                },
                {
                  icon: <Users className="text-studify-main" size={24} />,
                  title: "Inclusive Community",
                  desc: "A platform designed for diverse backgrounds and needs."
                }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="min-w-[50px] h-[50px] rounded-full bg-white shadow-md flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-studify-dark">{item.title}</h4>
                    <p className="text-gray-500 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="relative">
                {/* Abstract image composition */}
                <div className="grid grid-cols-2 gap-4">
                    <img 
                        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop" 
                        alt="Students collaborating" 
                        className="rounded-2xl shadow-xl w-full h-64 object-cover transform translate-y-8"
                    />
                    <img 
                        src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=800&auto=format&fit=crop" 
                        alt="Student on laptop" 
                        className="rounded-2xl shadow-xl w-full h-64 object-cover"
                    />
                </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChoose;