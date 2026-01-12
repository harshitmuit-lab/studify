import React from 'react';
import { GraduationCap, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-studify-dark text-white pt-16 pb-8 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-12">
          
          {/* Brand Column */}
          <div className="md:w-1/3">
            <div className="flex items-center space-x-2 mb-4">
                <div className="bg-white p-1.5 rounded-lg text-studify-dark">
                    <GraduationCap size={20} />
                </div>
                <span className="text-2xl font-heading font-bold text-white">STUDIFY</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Empowering students with knowledge, safety, and opportunities. 
              The all-in-one platform for your campus life.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-studify-accent hover:text-studify-dark transition-colors"><Twitter size={18} /></a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-studify-accent hover:text-studify-dark transition-colors"><Instagram size={18} /></a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-studify-accent hover:text-studify-dark transition-colors"><Linkedin size={18} /></a>
            </div>
          </div>

          {/* Links Columns */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 w-full md:w-2/3">
            <div>
              <h4 className="font-bold text-studify-accent mb-4">Platform</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#" className="hover:text-white">Features</a></li>
                <li><a href="#" className="hover:text-white">Rights Library</a></li>
                <li><a href="#" className="hover:text-white">Complaints</a></li>
                <li><a href="#" className="hover:text-white">Scholarships</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-studify-accent mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#" className="hover:text-white">Help Center</a></li>
                <li><a href="#" className="hover:text-white">Mental Health</a></li>
                <li><a href="#" className="hover:text-white">Contact Us</a></li>
                <li><a href="#" className="hover:text-white">Report Bug</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-studify-accent mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
          <p>&copy; {new Date().getFullYear()} Studify Inc. All rights reserved.</p>
          <div className="flex items-center gap-2 mt-4 md:mt-0">
             <Mail size={14} /> 
             <span>harshit.email</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;