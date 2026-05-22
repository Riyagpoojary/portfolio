import { motion } from 'framer-motion';
import { education } from '../data';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Education</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My academic background and qualifications
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative border-l-4 border-blue-500 ml-3 md:ml-6">
            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="mb-10 ml-8 relative"
              >
                {/* Timeline Dot */}
                <span className="absolute -left-11 flex items-center justify-center w-6 h-6 bg-blue-500 rounded-full ring-8 ring-white"></span>
                
                {/* Content Card */}
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <h3 className="flex items-center mb-1 text-xl font-bold text-gray-900">
                    {edu.degree}
                  </h3>
                  <div className="text-blue-600 font-semibold mb-2">{edu.institution}</div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-gray-500 text-sm">
                    <span className="mb-2 sm:mb-0 flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                      </svg>
                      {edu.duration}
                    </span>
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      Score: {edu.score}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;