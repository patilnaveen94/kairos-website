import { motion } from 'framer-motion';
import { Play, Image as ImageIcon, Award, Users } from 'lucide-react';

const Gallery = () => {
  const mediaItems = [
    {
      type: 'image',
      title: 'PMKVY Training Session',
      description: 'Students engaged in hands-on technical training',
      category: 'Training'
    },
    {
      type: 'video',
      title: 'Success Story: Rajesh Kumar',
      description: 'From unemployed youth to skilled technician',
      category: 'Success Stories'
    },
    {
      type: 'image',
      title: 'Job Fair 2024',
      description: 'Connecting trained candidates with employers',
      category: 'Events'
    },
    {
      type: 'image',
      title: 'Digital Skills Workshop',
      description: 'Computer literacy training for rural youth',
      category: 'Training'
    },
    {
      type: 'video',
      title: 'Manufacturing Skills Program',
      description: 'Industrial training in partnership with corporates',
      category: 'Training'
    },
    {
      type: 'image',
      title: 'Certificate Distribution',
      description: 'Celebrating successful completion of courses',
      category: 'Events'
    },
    {
      type: 'image',
      title: 'Women Empowerment Program',
      description: 'Skill training for women entrepreneurs',
      category: 'Training'
    },
    {
      type: 'video',
      title: 'Success Story: Priya Sharma',
      description: 'Journey from housewife to successful entrepreneur',
      category: 'Success Stories'
    },
    {
      type: 'image',
      title: 'Healthcare Training',
      description: 'Nursing aid and patient care training',
      category: 'Training'
    }
  ];

  const successStories = [
    {
      name: 'Rajesh Kumar',
      age: 24,
      location: 'Bangalore',
      course: 'Electronics Technician',
      story: 'After completing the PMKVY electronics course at KAIROS, Rajesh secured a job at a leading electronics company with a starting salary of ₹18,000 per month. He now supports his family and has become a role model in his community.',
      image: 'rajesh-photo'
    },
    {
      name: 'Priya Sharma',
      age: 28,
      location: 'Mysore',
      course: 'Beauty & Wellness',
      story: 'Priya transformed her life through our beauty and wellness program. She started her own salon and now employs 3 other women from her neighborhood, creating a ripple effect of empowerment.',
      image: 'priya-photo'
    },
    {
      name: 'Mohammed Ali',
      age: 22,
      location: 'Hubli',
      course: 'Automotive Repair',
      story: 'From being unemployed to running his own automotive repair shop, Mohammed\'s journey exemplifies the power of skill development. He now earns ₹25,000 per month and plans to expand his business.',
      image: 'mohammed-photo'
    },
    {
      name: 'Lakshmi Devi',
      age: 35,
      location: 'Gulbarga',
      course: 'Tailoring & Fashion Design',
      story: 'A single mother of two, Lakshmi learned tailoring skills and now runs a successful boutique. She has trained 10 other women in her village, creating a network of skilled artisans.',
      image: 'lakshmi-photo'
    }
  ];

  const categories = ['All', 'Training', 'Events', 'Success Stories'];

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
            <h1 className="text-5xl font-bold mb-6">Gallery & Impact Stories</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Witness the transformation through our training programs and celebrate 
              the success stories of our skilled graduates
            </p>
          </motion.div>
        </div>
      </section>

      {/* Media Gallery */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Photo & Video Gallery</h2>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Media Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mediaItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
              >
                <div className="relative h-48 bg-gray-200 flex items-center justify-center">
                  {item.type === 'video' ? (
                    <Play className="w-16 h-16 text-primary" />
                  ) : (
                    <ImageIcon className="w-16 h-16 text-gray-400" />
                  )}
                  <div className="absolute top-4 right-4">
                    <span className="bg-primary text-white px-3 py-1 rounded-full text-sm">
                      {item.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-6">Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real stories of transformation, empowerment, and success from our graduates 
              who have built better lives through skill development
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={story.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg p-8"
              >
                <div className="flex items-start space-x-6">
                  <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-8 h-8 text-gray-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{story.name}</h3>
                    <div className="text-sm text-gray-600 mb-4">
                      Age: {story.age} | {story.location} | Course: {story.course}
                    </div>
                    <p className="text-gray-700 leading-relaxed">{story.story}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Our Impact in Numbers</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <Award className="w-12 h-12 mx-auto mb-4" />
              <div className="text-4xl font-bold mb-2">10,000+</div>
              <div className="text-lg">Lives Transformed</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <Users className="w-12 h-12 mx-auto mb-4" />
              <div className="text-4xl font-bold mb-2">85%</div>
              <div className="text-lg">Placement Rate</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <ImageIcon className="w-12 h-12 mx-auto mb-4" />
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-lg">Success Stories</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <Play className="w-12 h-12 mx-auto mb-4" />
              <div className="text-4xl font-bold mb-2">₹20,000</div>
              <div className="text-lg">Average Starting Salary</div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;