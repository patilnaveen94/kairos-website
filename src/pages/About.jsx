import { motion } from 'framer-motion';
import { Target, Eye, Heart, Lightbulb, Users } from 'lucide-react';

const About = () => {
  const founders = [
    {
      name: 'Mr. Ramesh Avvappagounda Patil',
      position: 'Director',
      description: 'A visionary leader with a strong background in project execution and workforce development. He has led numerous skill-based initiatives across Karnataka under government and private partnerships.',
    },
    {
      name: 'Mr. Abhishek Neelappa Patil',
      position: 'Director',
      description: 'A dynamic strategist passionate about youth empowerment and digital innovation in education. He oversees partnerships, training quality, and technological enablement across KAIROS centers.',
    },
  ];

  const values = [
    { icon: Heart, title: 'Integrity', description: 'We maintain the highest standards of honesty and transparency in all our operations.' },
    { icon: Users, title: 'Inclusion', description: 'We believe in creating opportunities for all, regardless of background or circumstances.' },
    { icon: Lightbulb, title: 'Innovation', description: 'We continuously evolve our training methods to meet industry demands.' },
    { icon: Target, title: 'Impact', description: 'We measure our success by the positive change we create in lives and communities.' },
  ];

  const timeline = [
    { year: '2016', event: 'KAIROS Integrated Solutions founded in Karnataka' },
    { year: '2017', event: 'First partnership with State Skill Mission established' },
    { year: '2018', event: 'Launched PMKVY training programs across multiple centers' },
    { year: '2019', event: 'Expanded to 15+ training centers statewide' },
    { year: '2020', event: 'Adapted to digital training during pandemic' },
    { year: '2021', event: 'Crossed 5,000 trained candidates milestone' },
    { year: '2022', event: 'Launched CSR partnership programs' },
    { year: '2023', event: 'Achieved 25+ active training centers' },
    { year: '2024', event: 'Trained over 10,000 candidates successfully' },
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
            <h1 className="text-5xl font-bold mb-6">About KAIROS</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Transforming lives through skill development since 2016
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gray-50 p-8 rounded-lg"
            >
              <Target className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To skill, reskill, and upskill India's youth for employability and entrepreneurship, 
                bridging the gap between education and industry requirements.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gray-50 p-8 rounded-lg"
            >
              <Eye className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be the most trusted partner in nation-building through vocational training 
                and workforce transformation across India.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md text-center"
              >
                <value.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <h4 className="text-xl font-semibold mb-3">{value.title}</h4>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Our Leadership</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {founders.map((founder, index) => (
              <motion.div
                key={founder.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="w-48 h-48 bg-gray-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-gray-500">Photo</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">{founder.name}</h3>
                <p className="text-primary font-semibold mb-4">{founder.position}</p>
                <p className="text-gray-600">{founder.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-gold/10 rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-gold mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A decade of excellence in skill development and nation building
            </p>
          </motion.div>
          
          <div className="relative">
            {/* Modern Timeline Line - Desktop Only */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-primary via-gold to-primary h-full rounded-full shadow-lg"></div>
            
            {/* Mobile Timeline Line */}
            <div className="md:hidden absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-primary via-gold to-primary h-full rounded-full shadow-lg"></div>
            
            {/* Desktop Timeline */}
            <div className="hidden md:block space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.15 }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className="flex-1">
                    <motion.div 
                      whileHover={{ scale: 1.02, y: -5 }}
                      className={`bg-white border border-gray-200 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 ${index % 2 === 0 ? 'mr-8' : 'ml-8'}`}
                    >
                      <p className="text-gray-700 text-lg leading-relaxed font-medium">{item.event}</p>
                    </motion.div>
                  </div>
                  
                  {/* Year Badge on Timeline */}
                  <motion.div 
                    initial={{ scale: 0, rotate: 180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.15 + 0.4 }}
                    className="relative z-20 flex items-center justify-center w-20 h-20"
                  >
                    <div className="bg-gradient-to-br from-primary to-blue-600 text-white px-3 py-2 rounded-2xl font-bold text-base shadow-2xl border-4 border-white w-16 h-16 flex items-center justify-center">
                      {item.year}
                    </div>
                    {/* Glow Effect */}
                    <div className="absolute inset-2 bg-primary/30 rounded-2xl animate-pulse"></div>
                  </motion.div>
                  
                  <div className="flex-1"></div>
                </motion.div>
              ))}
            </div>
            
            {/* Mobile Timeline */}
            <div className="md:hidden space-y-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className="flex-1">
                    <motion.div 
                      whileHover={{ scale: 1.02, y: -5 }}
                      className={`bg-white border border-gray-200 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ${index % 2 === 0 ? 'mr-4' : 'ml-4'}`}
                    >
                      <p className="text-gray-700 text-base leading-relaxed font-medium">{item.event}</p>
                    </motion.div>
                  </div>
                  
                  {/* Year Badge for Mobile */}
                  <motion.div 
                    initial={{ scale: 0, rotate: 180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                    className="relative z-20 flex items-center justify-center w-16 h-16"
                  >
                    <div className="bg-gradient-to-br from-primary to-blue-600 text-white px-2 py-1 rounded-xl font-bold text-xs shadow-xl border-2 border-white w-12 h-12 flex items-center justify-center">
                      {item.year}
                    </div>
                    {/* Glow Effect */}
                    <div className="absolute inset-1 bg-primary/30 rounded-xl animate-pulse"></div>
                  </motion.div>
                  
                  <div className="flex-1"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;