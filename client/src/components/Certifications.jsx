import { motion } from 'framer-motion';

const certifications = [
    {
      title: 'Programming in Java',
      issuer: 'NPTEL (IIT Kharagpur)',
      date: 'April 2024',
      credentialId: 'NPTEL-JAVA-2024',
      link: 'https://drive.google.com/file/d/1yaMIvhJ2eqhTEiMqAGpUyMNwidul0XLR/view?usp=share_link',
      image:'https://cdn.worldvectorlogo.com/logos/java.svg',
      category: 'Programming',
      level: 'Advanced'
    },
    {
      title: 'Programming Essentials in Python',
      issuer: 'Cisco Networking Academy & Python Institute',
      date: 'November 2023',
      credentialId: 'CISCO-PY-2023',
      link: 'https://drive.google.com/file/d/18JsFUXcvE-06f5ChEy2bLuTTRQ2_fBv8/view?usp=share_link',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR18fItqFPLFbcZBONMvd9u4ZUwyNqNCjzwsg&s',
      category: 'Programming',
      level: 'Intermediate'
    },
    {
      title: 'Programming Essentials in C++',
      issuer: 'Cisco Networking Academy & C++ Institute',
      date: 'November 2023',
      credentialId: 'CISCO-CPP-2023',
      link: 'https://drive.google.com/file/d/1fOwFlbFXIcBTqAquyf8-YvL1Im8G14kP/view?usp=share_link',
      image: 'https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg',
      category: 'Programming',
      level: 'Intermediate'
    },
    {
      title: 'Web Development Bootcamp',
      issuer: 'Udemy',
      date: 'August 2024',
      credentialId: 'UC-620663fe-3ede-4172-b9f9-852a59bb72e7',
      link: 'https://www.udemy.com/certificate/UC-620663fe-3ede-4172-b9f9-852a59bb72e7/',
      image: 'https://cdn-icons-png.flaticon.com/512/9414/9414296.png',
      category: 'Web Development',
      level: 'Comprehensive'
    }
  ];

export default function Certifications() {
  return (
    <section id="certifications" className="w-full flex flex-col items-center py-24 bg-white dark:bg-black transition-colors duration-500">
      <div className="max-w-6xl w-full px-4 mx-auto">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900 dark:text-white tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Certifications & Achievements
        </motion.h2>
        
        {/* Timeline Style Layout */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 hidden lg:block"></div>
          
          <div className="space-y-12">
            {certifications.map((cert, idx) => (
              <motion.div
                key={cert.credentialId}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: idx * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Timeline Dot */}
                <div className="hidden lg:block relative z-10">
                  <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-white dark:border-black shadow-lg"></div>
                </div>
                
                {/* Certificate Card */}
                <motion.a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex-1 max-w-md w-full group ${
                    idx % 2 === 0 ? 'lg:mr-8' : 'lg:ml-8'
                  }`}
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-full -translate-y-16 translate-x-16 opacity-50"></div>
                    
                    {/* Header */}
                    <div className="flex items-start gap-4 mb-4 relative z-10">
                      <div className="flex-shrink-0">
                        <img
                          src={cert.image}
                          alt={cert.title}
                          className="w-16 h-16 object-contain rounded-xl border border-gray-200 dark:border-slate-600 bg-white dark:bg-slate-800 p-2"
                          loading="lazy"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                          {cert.title}
                        </h3>
                        <div className="flex flex-wrap gap-2 mb-2">
                          <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-semibold rounded-full">
                            {cert.category}
                          </span>
                          <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-xs font-semibold rounded-full">
                            {cert.level}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Details */}
                    <div className="space-y-3 relative z-10">
                      <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                        <span>{cert.issuer}</span>
                      </div>
                      
                      <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span>{cert.date}</span>
                      </div>
                      
                      <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 font-mono">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V4a2 2 0 114 0v2m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                        </svg>
                        <span>ID: {cert.credentialId}</span>
                      </div>
                    </div>
                    
                    {/* Hover Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </motion.a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 