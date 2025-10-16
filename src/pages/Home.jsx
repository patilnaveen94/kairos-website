import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Users, Award, MapPin, Briefcase } from 'lucide-react';
import AnimatedCounter from '../components/AnimatedCounter';
import { useRef } from 'react';

const Home = () => {
  const stats = [
    { icon: Users, label: 'Years of Service', value: '8+' },
    { icon: Award, label: 'Trainees Trained', value: '10,000+' },
    { icon: MapPin, label: 'Active Centers', value: '25+' },
    { icon: Briefcase, label: 'Projects Delivered', value: '50+' },
  ];

  const partners = [
    'Skill India', 'NSDC', 'State Skill Missions', 'CSR Partners'
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Empowering Skills.<br />
              <span className="text-gold">Empowering India.</span>
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              KAIROS Integrated Solutions is your trusted partner in skill development, 
              training excellence, and nation-building through vocational education.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/projects"
                className="bg-gold text-primary px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors"
              >
                Explore Our Projects
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors"
              >
                Become a Partner
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection stats={stats} />

      {/* About Section */}
      <AboutSection />

      {/* Current & Upcoming Projects */}
      <ProjectsSection />

      {/* Partners Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our Trusted Partners
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {partners.map((partner, index) => (
              <motion.div
                key={partner}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md text-center"
              >
                <div className="text-lg font-semibold text-gray-800">{partner}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

// Scroll-animated components
const StatsSection = ({ stats }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 80, scale: 0.8 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 80, scale: 0.8 }}
              transition={{ duration: 0.8, delay: index * 0.2, type: "spring", bounce: 0.4 }}
              className="text-center"
            >
              <stat.icon className="w-12 h-12 text-primary mx-auto mb-4" />
              <div className="text-3xl font-bold text-primary mb-2">
                <AnimatedCounter end={stat.value} suffix={stat.value.includes('+') ? '+' : ''} />
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -100, rotateY: -15 }}
            animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : { opacity: 0, x: -100, rotateY: -15 }}
            transition={{ duration: 1, type: "spring", bounce: 0.3 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Building a Skilled India Since 2016
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              KAIROS Integrated Solutions Pvt. Ltd. is a Karnataka-based skill development 
              organization working closely with Government of India, State Skill Missions, 
              and Corporate CSR initiatives.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Since 2016, KAIROS has empowered thousands of youth by offering industry-aligned 
              vocational training, placement support, and digital skilling programs.
            </p>
            <Link
              to="/about"
              className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Learn More About Us
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100, rotateY: 15 }}
            animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : { opacity: 0, x: 100, rotateY: 15 }}
            transition={{ duration: 1, delay: 0.3, type: "spring", bounce: 0.3 }}
            className="bg-gray-200 h-96 rounded-lg flex items-center justify-center"
          >
            <span className="text-gray-500">Training Center Image</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 bg-gradient-to-r from-primary via-blue-800 to-primary relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-2xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-white mb-4">Active Projects</h2>
          <div className="w-32 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Transforming communities through strategic skill development initiatives
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -100, rotateX: -15 }}
            animate={isInView ? { opacity: 1, x: 0, rotateX: 0 } : { opacity: 0, x: -100, rotateX: -15 }}
            transition={{ duration: 1, delay: 0.2, type: "spring", bounce: 0.4 }}
            className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 hover:bg-white/15 transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
              <h3 className="text-2xl font-bold text-white">Current Projects</h3>
            </div>
            <div className="space-y-4">
              <div className="bg-white/5 rounded-xl p-4 border-l-4 border-green-400">
                <h4 className="text-lg font-semibold text-white mb-2">PMKVY 4.0 Implementation</h4>
                <p className="text-gray-300 text-sm mb-2">Training 2,500+ candidates across 15 centers</p>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-green-400 h-2 rounded-full w-3/4"></div>
                </div>
                <span className="text-xs text-gray-400">75% Complete</span>
              </div>
              <div className="bg-white/5 rounded-xl p-4 border-l-4 border-blue-400">
                <h4 className="text-lg font-semibold text-white mb-2">Digital Literacy Program</h4>
                <p className="text-gray-300 text-sm mb-2">Rural youth digital empowerment initiative</p>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-blue-400 h-2 rounded-full w-1/2"></div>
                </div>
                <span className="text-xs text-gray-400">50% Complete</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100, rotateX: 15 }}
            animate={isInView ? { opacity: 1, x: 0, rotateX: 0 } : { opacity: 0, x: 100, rotateX: 15 }}
            transition={{ duration: 1, delay: 0.4, type: "spring", bounce: 0.4 }}
            className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 hover:bg-white/15 transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-4 h-4 bg-gold rounded-full animate-pulse"></div>
              <h3 className="text-2xl font-bold text-white">Upcoming Projects</h3>
            </div>
            <div className="space-y-4">
              <div className="bg-white/5 rounded-xl p-4 border-l-4 border-gold">
                <h4 className="text-lg font-semibold text-white mb-2">Green Skills Initiative</h4>
                <p className="text-gray-300 text-sm mb-2">Renewable energy & sustainability training</p>
                <div className="flex items-center gap-2">
                  <span className="bg-gold/20 text-gold px-3 py-1 rounded-full text-xs font-medium">Q2 2025</span>
                  <span className="text-gray-400 text-xs">Launch Date</span>
                </div>
              </div>
              <div className="bg-white/5 rounded-xl p-4 border-l-4 border-purple-400">
                <h4 className="text-lg font-semibold text-white mb-2">AI & Robotics Training</h4>
                <p className="text-gray-300 text-sm mb-2">Future-ready technology skills program</p>
                <div className="flex items-center gap-2">
                  <span className="bg-purple-400/20 text-purple-400 px-3 py-1 rounded-full text-xs font-medium">Q3 2025</span>
                  <span className="text-gray-400 text-xs">Launch Date</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.8 }}
          transition={{ duration: 0.8, delay: 0.6, type: "spring", bounce: 0.4 }}
          className="text-center"
        >
          <Link
            to="/projects"
            className="inline-flex items-center gap-3 bg-gold text-primary px-8 py-4 rounded-2xl font-bold text-lg hover:bg-yellow-400 transition-all duration-300 hover:scale-105 shadow-2xl"
          >
            View All Projects
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;