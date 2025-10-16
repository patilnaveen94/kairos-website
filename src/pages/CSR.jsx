import { motion } from 'framer-motion';
import { Handshake, Target, Award, TrendingUp } from 'lucide-react';

const CSR = () => {
  const collaborations = [
    {
      sector: 'Information Technology',
      description: 'Partnering with leading IT companies to provide digital literacy, programming skills, and technology training to underserved communities.',
      impact: '2,500+ trained in digital skills',
      partners: ['Tech Corp A', 'Software Solutions B', 'Digital Innovation C']
    },
    {
      sector: 'Manufacturing',
      description: 'Collaboration with manufacturing giants to offer technical skills training, safety protocols, and quality control education.',
      impact: '1,800+ skilled in manufacturing',
      partners: ['Manufacturing Ltd', 'Industrial Solutions', 'Production Excellence']
    },
    {
      sector: 'Retail & Hospitality',
      description: 'Working with retail chains and hospitality groups to enhance customer service skills and operational excellence.',
      impact: '1,200+ trained in service sector',
      partners: ['Retail Chain X', 'Hotel Group Y', 'Service Excellence Z']
    },
    {
      sector: 'Healthcare',
      description: 'Healthcare sector partnerships focusing on nursing aid training, patient care, and medical equipment handling.',
      impact: '800+ healthcare professionals trained',
      partners: ['Healthcare Corp', 'Medical Services', 'Wellness Group']
    }
  ];

  const benefits = [
    {
      icon: Target,
      title: 'Targeted Impact',
      description: 'Focus on specific communities and skill gaps identified through comprehensive needs assessment.'
    },
    {
      icon: Award,
      title: 'Quality Assurance',
      description: 'Industry-standard training with certification and placement support for sustainable livelihoods.'
    },
    {
      icon: TrendingUp,
      title: 'Measurable Outcomes',
      description: 'Regular monitoring and evaluation with detailed impact reports and success metrics.'
    },
    {
      icon: Handshake,
      title: 'Long-term Partnership',
      description: 'Building lasting relationships with continuous support and program enhancement.'
    }
  ];

  const partnerLogos = [
    'Partner Logo 1', 'Partner Logo 2', 'Partner Logo 3', 'Partner Logo 4',
    'Partner Logo 5', 'Partner Logo 6', 'Partner Logo 7', 'Partner Logo 8'
  ];

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
            <h1 className="text-5xl font-bold mb-6">CSR & Collaborations</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Partnering with corporates to create meaningful social impact through 
              skill development and community empowerment initiatives
            </p>
          </motion.div>
        </div>
      </section>

      {/* CSR Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-6">Corporate Social Responsibility</h2>
              <p className="text-lg text-gray-600 mb-6">
                KAIROS partners with forward-thinking corporations to implement impactful 
                CSR initiatives that align with their values and our mission of skill development.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Our CSR programs are designed to create sustainable change by focusing on 
                employability, entrepreneurship, and community development through targeted 
                skill training initiatives.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">6,000+</div>
                  <div className="text-gray-600">Lives Impacted</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">25+</div>
                  <div className="text-gray-600">Corporate Partners</div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gray-200 h-96 rounded-lg flex items-center justify-center"
            >
              <span className="text-gray-500">CSR Impact Image</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sector Collaborations */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Successful Collaborations</h2>
          <div className="space-y-8">
            {collaborations.map((collab, index) => (
              <motion.div
                key={collab.sector}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg p-8"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <h3 className="text-2xl font-bold mb-4">{collab.sector}</h3>
                    <p className="text-gray-600 mb-4">{collab.description}</p>
                    <div className="text-primary font-semibold">{collab.impact}</div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Key Partners:</h4>
                    <ul className="space-y-2">
                      {collab.partners.map((partner) => (
                        <li key={partner} className="text-gray-600">• {partner}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Why Partner With Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <benefit.icon className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Logos */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Our Valued Partners</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {partnerLogos.map((logo, index) => (
              <motion.div
                key={logo}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md flex items-center justify-center h-24"
              >
                <span className="text-gray-500 text-sm">{logo}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Make an Impact?</h2>
            <p className="text-xl mb-8">
              Join us in creating meaningful change through strategic CSR partnerships. 
              Together, we can build a skilled and empowered India.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gold text-primary px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors"
              >
                Partner With Us
              </a>
              <a
                href="/projects"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors"
              >
                View Our Impact
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CSR;