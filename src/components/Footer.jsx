import { Link } from 'react-router-dom';
import { Facebook, Linkedin, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-gold mb-4">KAIROS</h3>
            <p className="text-gray-300 mb-4">
              Building a Skilled India Together
            </p>
            <p className="text-sm text-gray-400">
              KAIROS Integrated Solutions Pvt. Ltd. is a Karnataka-based skill development 
              organization working closely with Government of India, State Skill Missions, 
              and Corporate CSR initiatives.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-gold">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-gold">About</Link></li>
              <li><Link to="/projects" className="text-gray-300 hover:text-gold">Projects</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-gold">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-gold">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-gold">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-gold">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-gold">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 KAIROS Integrated Solutions Pvt. Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;