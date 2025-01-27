import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Clock, Target } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen py-16">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative bg-indigo-900 text-white py-20"
      >
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About UDAYA INFRASTRUCTURES</h1>
            <p className="text-xl text-indigo-200 max-w-3xl mx-auto">
              Building excellence through innovation and dedication since our inception. We are committed to delivering quality infrastructure solutions that stand the test of time.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Company Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded with a vision to revolutionize the infrastructure industry, UDAYA INFRASTRUCTURES has grown to become a leading name in construction excellence. Our journey began with a simple mission: to deliver exceptional quality and innovative solutions in every project we undertake.
              </p>
              <p className="text-gray-600">
                Today, we stand proud as a company that has successfully completed numerous landmark projects, each testament to our commitment to quality, innovation, and customer satisfaction. Our team of experts brings together decades of experience in construction and infrastructure development.
              </p>
            </motion.div>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                alt="Construction site"
                className="rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Award, stat: '15+', label: 'Years Experience' },
              { icon: Users, stat: '200+', label: 'Team Members' },
              { icon: Clock, stat: '500+', label: 'Projects Completed' },
              { icon: Target, stat: '98%', label: 'Client Satisfaction' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <item.icon className="h-8 w-8 text-indigo-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">{item.stat}</div>
                <div className="text-gray-600">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              These principles guide every decision we make and every project we undertake.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Quality Excellence',
                description: 'We maintain the highest standards in every aspect of our work, from materials to execution.',
                image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
              },
              {
                title: 'Innovation',
                description: 'We embrace new technologies and methodologies to deliver cutting-edge solutions.',
                image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
              },
              {
                title: 'Customer Focus',
                description: 'Your satisfaction is our priority. We work closely with clients to exceed expectations.',
                image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img src={value.image} alt={value.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;