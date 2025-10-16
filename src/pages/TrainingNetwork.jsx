import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Users } from 'lucide-react';
import { useState } from 'react';

const TrainingNetwork = () => {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    phone: '',
    message: ''
  });

  const trainingCenters = [
    {
      city: 'Bangalore',
      location: 'Electronic City',
      programs: ['IT Skills', 'Digital Marketing', 'Data Entry'],
      contact: '+91 9876543210'
    },
    {
      city: 'Mysore',
      location: 'Hebbal Industrial Area',
      programs: ['Manufacturing', 'Quality Control', 'Safety Training'],
      contact: '+91 9876543211'
    },
    {
      city: 'Hubli',
      location: 'KIADB Industrial Area',
      programs: ['Automotive', 'Welding', 'Electrical'],
      contact: '+91 9876543212'
    },
    {
      city: 'Mangalore',
      location: 'Baikampady Industrial Area',
      programs: ['Hospitality', 'Retail', 'Customer Service'],
      contact: '+91 9876543213'
    },
    {
      city: 'Belgaum',
      location: 'Udyambag',
      programs: ['Agriculture', 'Food Processing', 'Packaging'],
      contact: '+91 9876543214'
    },
    {
      city: 'Gulbarga',
      location: 'Industrial Estate',
      programs: ['Textile', 'Handicrafts', 'Tailoring'],
      contact: '+91 9876543215'
    },
    {
      city: 'Davangere',
      location: 'Lokikere Industrial Area',
      programs: ['Construction', 'Plumbing', 'Masonry'],
      contact: '+91 9876543216'
    },
    {
      city: 'Shimoga',
      location: 'Tunga Nagar',
      programs: ['Healthcare', 'Beauty & Wellness', 'Nursing Aid'],
      contact: '+91 9876543217'
    }
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
    alert('Thank you for your interest! We will contact you soon.');
    setFormData({ name: '', organization: '', phone: '', message: '' });
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold mb-6">Training Network</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Our extensive network of training centers across Karnataka, 
              bringing quality skill development to every corner of the state
            </p>
          </motion.div>
        </div>
      </section>

      {/* Network Stats */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
              <div className="text-3xl font-bold text-primary mb-2">25+</div>
              <div className="text-gray-600">Training Centers</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <Users className="w-12 h-12 text-primary mx-auto mb-4" />
              <div className="text-3xl font-bold text-primary mb-2">15+</div>
              <div className="text-gray-600">Cities Covered</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <Phone className="w-12 h-12 text-primary mx-auto mb-4" />
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-gray-600">Training Programs</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Training Centers */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Our Training Centers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trainingCenters.map((center, index) => (
              <motion.div
                key={center.city}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <MapPin className="w-6 h-6 text-primary mr-2" />
                  <h3 className="text-xl font-bold">{center.city}</h3>
                </div>
                <p className="text-gray-600 mb-4">{center.location}</p>
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Programs Offered:</h4>
                  <div className="flex flex-wrap gap-2">
                    {center.programs.map((program) => (
                      <span
                        key={program}
                        className="bg-blue-100 text-primary px-3 py-1 rounded-full text-sm"
                      >
                        {program}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center text-gray-600">
                  <Phone className="w-4 h-4 mr-2" />
                  <span>{center.contact}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Form */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-6">Become a Training Partner</h2>
            <p className="text-xl text-gray-600">
              Join our network and help us expand quality skill development across India
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-2">
                    Organization *
                  </label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    value={formData.organization}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Tell us about your organization and how you'd like to partner with us..."
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Submit Partnership Request
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TrainingNetwork;