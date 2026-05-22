import { motion } from 'framer-motion';
import { experience } from '../data';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Experience</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My professional journey and work experience
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative border-l-4 border-primary-500 ml-3 md:ml-6">
            {experience.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="mb-10 ml-8 relative"
              >
                {/* Timeline Dot */}
                <span className="absolute -left-11 flex items-center justify-center w-6 h-6 bg-primary-500 rounded-full ring-8 ring-white"></span>
                
                {/* Content Card */}
                <div className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <h3 className="flex items-center mb-1 text-xl font-bold text-gray-900">
                    {exp.role}
                  </h3>
                  <div className="text-primary-600 font-semibold mb-2">{exp.company}</div>
                  <div className="flex items-center text-gray-500 text-sm mb-4">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                    {exp.duration}
                  </div>
                  
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    {exp.responsibilities.map((task, i) => (
                      <li key={i} className="text-sm">
                        {task}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;