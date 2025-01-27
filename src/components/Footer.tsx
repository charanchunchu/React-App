import React from 'react';
import { Building2, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-indigo-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Building2 className="h-8 w-8" />
              <span className="font-bold text-xl">UDAYA INFRASTRUCTURES</span>
            </div>
            <p className="text-indigo-200">
              Building excellence through innovation and dedication. Your trusted partner in construction.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-indigo-200 hover:text-white transition-colors">Home</a></li>
              <li><a href="/about" className="text-indigo-200 hover:text-white transition-colors">About</a></li>
              <li><a href="/services" className="text-indigo-200 hover:text-white transition-colors">Services</a></li>
              <li><a href="/contact" className="text-indigo-200 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="/services?type=window" className="text-indigo-200 hover:text-white transition-colors">Window Solutions</a></li>
              <li><a href="/services?type=warranty" className="text-indigo-200 hover:text-white transition-colors">Warranty Services</a></li>
              <li><a href="/services?type=door" className="text-indigo-200 hover:text-white transition-colors">Door Systems</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-indigo-200" />
                <span className="text-indigo-200">123 Construction Ave, City</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-indigo-200" />
                <span className="text-indigo-200">+1 234 567 890</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-indigo-200" />
                <span className="text-indigo-200">info@udayainfra.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-indigo-800 mt-8 pt-8 text-center text-indigo-200">
          <p>&copy; {new Date().getFullYear()} UDAYA INFRASTRUCTURES. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;