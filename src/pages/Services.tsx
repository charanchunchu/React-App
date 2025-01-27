import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useSearchParams } from 'react-router-dom';
import { AppWindow as Window, Shield, DoorClosed, CheckCircle, PenTool as Tool, Clock } from 'lucide-react';

const Services = () => {
  const [searchParams] = useSearchParams();
  const [activeService, setActiveService] = useState('window');

  useEffect(() => {
    const type = searchParams.get('type');
    if (type && ['window', 'warranty', 'door'].includes(type)) {
      setActiveService(type);
    }
  }, [searchParams]);

  const services = {
    window: {
      title: 'Window Solutions',
      description: 'Premium window installations and services for residential and commercial properties',
      image: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
      features: [
        { icon: CheckCircle, title: 'Energy Efficient', description: 'High-performance windows that reduce energy costs' },
        { icon: Tool, title: 'Professional Installation', description: 'Expert installation by certified technicians' },
        { icon: Clock, title: 'Timely Service', description: 'Quick and efficient installation process' }
      ]
    },
    warranty: {
      title: 'Warranty Services',
      description: 'Comprehensive warranty coverage for all our installations and services',
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
      features: [
        { icon: Shield, title: 'Extended Coverage', description: 'Long-term protection for your investments' },
        { icon: CheckCircle, title: 'Quick Claims', description: 'Hassle-free warranty claim process' },
        { icon: Tool, title: 'Expert Support', description: '24/7 technical support and assistance' }
      ]
    },
    door: {
      title: 'Door Systems',
      description: 'High-quality door solutions for enhanced security and aesthetics',
      image: 'https://images.unsplash.com/photo-1517005097604-42c637d7d22b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
      features: [
        { icon: CheckCircle, title: 'Security First', description: 'Advanced security features and robust construction' },
        { icon: Tool, title: 'Custom Design', description: 'Tailored solutions to match your architecture' },
        { icon: Clock, title: 'Swift Installation', description: 'Efficient installation and setup' }
      ]
    }
  };

  return (
    <div className="min-h-screen py-16">
      {/* Service Navigation */}
      <div className="bg-indigo-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl font-bold text-center mb-8"
          >
            Our Services
          </motion.h1>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { id: 'window', icon: Window, label: 'Window Solutions' },
              { id: 'warranty', icon: Shield, label: 'Warranty Services' },
              { id: 'door', icon: DoorClosed, label: 'Door Systems' }
            ].map(({ id, icon: Icon, label }) => (
              <motion.button
                key={id}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                whileHover={{ scale: 1.05 }}
                onClick={() => setActiveService(id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-colors ${
                  activeService === id
                    ? 'bg-white text-indigo-900'
                    : 'bg-indigo-800 hover:bg-indigo-700'
                }`}
              >
                <Icon className="h-5 w-5" />
                <span>{label}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* Active Service Content */}
      <motion.div
        key={activeService}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto px-4 py-12"
      >
        {/* Service Hero */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {services[activeService as keyof typeof services].title}
            </h2>
            <p className="text-gray-600 text-lg mb-6">
              {services[activeService as keyof typeof services].description}
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-indigo-600 text-white px-8 py-3 rounded-full hover:bg-indigo-700 transition-colors"
            >
              Request Quote
            </motion.button>
          </div>
          <div className="relative">
            <img
              src={services[activeService as keyof typeof services].image}
              alt={services[activeService as keyof typeof services].title}
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services[activeService as keyof typeof services].features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <feature.icon className="h-8 w-8 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Services;