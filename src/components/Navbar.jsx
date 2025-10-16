import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Training Network', path: '/training-network' },
    { name: 'CSR', path: '/csr' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-xl fixed w-full z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 group">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-blue-700 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-lg">K</span>
                </div>
                <div>
                  <span className="text-2xl font-black text-primary tracking-tight">KAIROS</span>
                  <div className="text-xs text-gray-500 font-medium tracking-widest -mt-1">INTEGRATED SOLUTIONS</div>
                </div>
              </div>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`relative px-4 py-2 text-sm font-semibold tracking-wide transition-all duration-300 rounded-lg group ${
                    isActive 
                      ? 'text-primary bg-primary/10' 
                      : 'text-gray-700 hover:text-primary hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                  <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-primary to-blue-600 transition-all duration-300 ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></div>
                </Link>
              );
            })}
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-primary"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-4 pt-4 pb-6 space-y-2 bg-white/95 backdrop-blur-md shadow-2xl border-t border-gray-100">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block px-4 py-3 text-base font-semibold rounded-xl transition-all duration-300 ${
                    isActive 
                      ? 'text-primary bg-primary/10 border-l-4 border-primary' 
                      : 'text-gray-700 hover:text-primary hover:bg-gray-50'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;