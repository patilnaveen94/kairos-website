import { motion } from 'framer-motion';
import { Building, Users, Briefcase } from 'lucide-react';

const Projects = () => {
  const projectCategories = [
    {
      icon: Building,
      title: 'Government Projects',
      description: 'Partnering with government initiatives for nationwide skill development',
      projects: [
        {
          title: 'PMKVY (Pradhan Mantri Kaushal Vikas Yojana)',
          region: 'Karnataka',
          summary: 'Comprehensive skill training program covering multiple trades including IT, retail, and manufacturing sectors.',
          image: 'pmkvy-image'
        },
        {
          title: 'DDUGKY (Deen Dayal Upadhyaya Grameen Kaushalya Yojana)',
          region: 'Rural Karnataka',
          summary: 'Rural youth skill development program focusing on placement-linked training for sustainable livelihoods.',
          image: 'ddugky-image'
        },
        {
          title: 'NULM (National Urban Livelihoods Mission)',
          region: 'Urban Centers',
          summary: 'Urban skill development initiatives targeting self-employment and wage employment opportunities.',
          image: 'nulm-image'
        },
        {
          title: 'State Skill Mission Programs',
          region: 'Statewide',
          summary: 'Collaborative programs with Karnataka State Skill Mission for targeted skill development.',
          image: 'state-mission-image'
        }
      ]
    },
    {
      icon: Users,
      title: 'CSR Projects',
      description: 'Corporate Social Responsibility initiatives for community development',
      projects: [
        {
          title: 'IT Sector Skill Development',
          region: 'Bangalore & Mysore',
          summary: 'Partnership with leading IT companies for digital literacy and programming skills training.',
          image: 'it-csr-image'
        },
        {
          title: 'Manufacturing Skills Program',
          region: 'Industrial Corridors',
          summary: 'Collaboration with manufacturing companies for technical skills and safety training.',
          image: 'manufacturing-csr-image'
        },
        {
          title: 'Retail & Hospitality Training',
          region: 'Major Cities',
          summary: 'Customer service and hospitality skills training funded by retail sector partners.',
          image: 'retail-csr-image'
        }
      ]
    },
    {
      icon: Briefcase,
      title: 'Private Initiatives',
      description: 'Industry-specific courses and employability programs',
      projects: [
        {
          title: 'Employability Enhancement Program',
          region: 'Multi-location',
          summary: 'Comprehensive soft skills and technical training for job readiness and career advancement.',
          image: 'employability-image'
        },
        {
          title: 'Entrepreneurship Development',
          region: 'Karnataka',
          summary: 'Business development and startup incubation programs for aspiring entrepreneurs.',
          image: 'entrepreneurship-image'
        },
        {
          title: 'Digital Skills Initiative',
          region: 'Urban & Semi-urban',
          summary: 'Digital literacy and technology skills training for the modern workforce.',
          image: 'digital-skills-image'
        }
      ]
    }
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
            <h1 className="text-5xl font-bold mb-6">Our Projects</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Transforming lives through diverse skill development initiatives across government, 
              corporate, and private sectors
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects by Category */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {projectCategories.map((category, categoryIndex) => (
            <div key={category.title} className="mb-16">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
                className="text-center mb-12"
              >
                <category.icon className="w-16 h-16 text-primary mx-auto mb-4" />
                <h2 className="text-4xl font-bold mb-4">{category.title}</h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">{category.description}</p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.projects.map((project, projectIndex) => (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: (categoryIndex * 0.2) + (projectIndex * 0.1) }}
                    className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                  >
                    <div className="h-48 bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-500">{project.image}</span>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-primary font-semibold mb-3">{project.region}</p>
                      <p className="text-gray-600">{project.summary}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Partner With Us?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join us in building a skilled India. Whether you're a government agency, 
              corporate entity, or training partner, we're here to collaborate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Start a Project
              </a>
              <a
                href="/training-network"
                className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors"
              >
                Join Our Network
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Projects;