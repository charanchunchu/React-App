import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
      title: "Building Tomorrow's Infrastructure Today",
      subtitle: "Excellence in construction, innovation in design"
    },
    {
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
      title: "Quality That Stands the Test of Time",
      subtitle: "Committed to excellence in every project"
    },
    {
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
      title: "Innovation Meets Experience",
      subtitle: "Leading the way in modern construction"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section with Slider */}
      <section className="relative h-screen">
        {slides.map((slide, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: currentSlide === index ? 1 : 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              display: currentSlide === index ? 'block' : 'none'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30" />
            <div className="relative h-full max-w-7xl mx-auto px-4 flex items-center">
              <div className="text-white">
                <motion.h1
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-5xl md:text-6xl font-bold mb-4"
                >
                  {slide.title}
                </motion.h1>
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-xl mb-8"
                >
                  {slide.subtitle}
                </motion.p>
              </div>
            </div>
          </motion.div>
        ))}
        
        {/* Slider Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 p-2 rounded-full text-white transition-colors"
        >
          <ArrowLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 p-2 rounded-full text-white transition-colors"
        >
          <ArrowRight className="h-6 w-6" />
        </button>

        {/* Slider Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                currentSlide === index ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl font-bold text-blue-900 mb-6">Building Excellence</h2>
              <p className="text-gray-700 text-lg mb-6">
                At UDAYA INFRASTRUCTURES, we believe in creating spaces that inspire. With over 15 years of experience,
                we've established ourselves as a leader in the construction industry, delivering projects that exceed
                expectations and stand the test of time.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center space-x-2 bg-blue-900 text-white px-8 py-3 rounded-full hover:bg-blue-800 transition-colors"
              >
                <span>Read More</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </motion.div>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                alt="Construction site"
                className="rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Why Choose Us</h2>
            <p className="text-xl text-gray-600">Building excellence through innovation and dedication</p>
          </motion.div>

          <div className="flex overflow-x-auto pb-8 -mx-4 scrollbar-hide">
            <div className="flex space-x-6 px-4">
              {[
                {
                  title: "Expert Team",
                  description: "Our team of professionals brings years of experience and expertise to every project.",
                  image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                },
                {
                  title: "Quality Work",
                  description: "We maintain the highest standards of quality in all our construction projects.",
                  image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                },
                {
                  title: "Timely Delivery",
                  description: "We understand the importance of deadlines and ensure timely project completion.",
                  image: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  whileHover={{ y: -10 }}
                  transition={{ delay: index * 0.2 }}
                  className="w-80 flex-shrink-0 group"
                >
                  <div className="relative overflow-hidden rounded-lg shadow-lg">
                    <img src={feature.image} alt={feature.title} className="w-full h-48 object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900 to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300" />
                    <div className="absolute inset-0 p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end">
                      <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                      <p className="text-sm">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;