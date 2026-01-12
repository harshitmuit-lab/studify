import React from 'react';
import { Quote } from 'lucide-react';

const SocialProof: React.FC = () => {
  return (
    <section id="community" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-studify-dark mb-4">
            Trusted by the Student Community
          </h2>
          <p className="text-gray-600">Join thousands of students who feel safer and more empowered.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "Harshit Sharma",
              role: "Student Council President",
              quote: "Studify completely changed how we handle student grievances. It's transparent, fast, and secure.",
              img: "https://picsum.photos/seed/sarah/100/100"
            },
            {
              name: "Hitika Chillar",
              role: "Engineering Undergraduate",
              quote: "I found a scholarship through the app. It paid for my semester tuition!",
              img: "https://picsum.photos/seed/david/100/100"
            },
            {
              name: "Maya Patel",
              role: "Freshman",
              quote: "As a new student, the Rights Library helped me understand the university policies without reading boring handbooks.",
              img: "https://picsum.photos/seed/maya/100/100"
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-studify-bg p-8 rounded-2xl relative">
              <Quote className="text-studify-main/20 absolute top-6 right-6" size={40} />
              <p className="text-gray-700 italic mb-6 relative z-10">"{item.quote}"</p>
              <div className="flex items-center gap-4">
                <img src={item.img} alt={item.name} className="w-12 h-12 rounded-full border-2 border-white shadow-sm" />
                <div>
                  <h5 className="font-bold text-studify-dark text-sm">{item.name}</h5>
                  <p className="text-xs text-gray-500">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Logos/Trust banner (Simulated) */}
        <div className="mt-20 border-t border-gray-100 pt-10">
            <p className="text-center text-gray-400 text-sm font-semibold uppercase tracking-widest mb-6">Partnering with top institutions</p>
            <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                {['University', 'College', 'Institute', 'Academy'].map((text, i) => (
                    <div key={i} className="text-2xl font-heading font-bold text-studify-dark flex items-center gap-2">
                        <div className="w-8 h-8 bg-gray-300 rounded-full"></div> {text}
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;