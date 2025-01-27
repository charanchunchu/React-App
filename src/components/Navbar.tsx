import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Building2 } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    if (isHomePage) {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    } else {
      setIsScrolled(true);
    }
  }, [isHomePage]);

  const navbarClasses = `fixed w-full z-50 transition-all duration-300 ${
    isHomePage && !isScrolled
      ? 'bg-transparent'
      : 'bg-gradient-to-r from-blue-900 to-indigo-900 shadow-lg'
  }`;

  return (
    <nav className={navbarClasses}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-2">
            <Building2 className="h-8 w-8 text-white" />
            <span className="font-bold text-xl text-white">UDAYA INFRASTRUCTURES</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-blue-200 transition-colors">Home</Link>
            <Link to="/about" className="text-white hover:text-blue-200 transition-colors">About</Link>
            <Link to="/services" className="text-white hover:text-blue-200 transition-colors">Services</Link>
            {/* <Link to="/window" className="text-white hover:text-blue-200 transition-colors">Window</Link>
            <Link to="/warranty" className="text-white hover:text-blue-200 transition-colors">Warranty</Link>
            <Link to="/door" className="text-white hover:text-blue-200 transition-colors">Door</Link> */}
            <Link to="/contact" className="text-white hover:text-blue-200 transition-colors">Contact</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-gradient-to-r from-blue-900 to-indigo-900"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to="/" className="block px-3 py-2 text-white hover:bg-blue-800 rounded-md">Home</Link>
            <Link to="/about" className="block px-3 py-2 text-white hover:bg-blue-800 rounded-md">About</Link>
            <Link to="/window" className="block px-3 py-2 text-white hover:bg-blue-800 rounded-md">Window</Link>
            <Link to="/warranty" className="block px-3 py-2 text-white hover:bg-blue-800 rounded-md">Warranty</Link>
            <Link to="/door" className="block px-3 py-2 text-white hover:bg-blue-800 rounded-md">Door</Link>
            <Link to="/contact" className="block px-3 py-2 text-white hover:bg-blue-800 rounded-md">Contact</Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;