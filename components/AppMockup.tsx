import React from 'react';
import { Search, Home, FileText, Bell, User, MoreHorizontal, CheckCircle } from 'lucide-react';

const AppMockup: React.FC = () => {
  return (
    <section className="py-20 bg-studify-dark overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-studify-accent font-bold tracking-wider uppercase text-sm mb-3">Platform Preview</h2>
        <h3 className="text-3xl md:text-4xl font-heading font-bold text-white mb-12">
          A Modern Interface for Modern Students
        </h3>

        {/* Browser Mockup Window */}
        <div className="max-w-5xl mx-auto bg-gray-900 rounded-t-xl shadow-2xl border border-gray-700 overflow-hidden transform transition-transform hover:scale-[1.01] duration-500">
          
          {/* Browser Toolbar */}
          <div className="bg-gray-800 px-4 py-3 flex items-center gap-2 border-b border-gray-700">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="flex-1 text-center">
              <div className="inline-block bg-gray-900 text-gray-400 text-xs px-20 py-1 rounded-md font-mono">
                portal.studify.app/dashboard
              </div>
            </div>
          </div>
            <img src= "/images/d.png" alt="dashboard" className="w-full h-full object-cover" />
          
        </div>
      </div>
    </section>
  );
};

export default AppMockup;