import { motion } from 'framer-motion';

const certifications = [
    {
      title: 'Programming in Java',
      issuer: 'NPTEL (IIT Kharagpur)',
      date: 'April 2024',
      credentialId: 'NPTEL-JAVA-2024',
      link: 'https://drive.google.com/file/d/1yaMIvhJ2eqhTEiMqAGpUyMNwidul0XLR/view?usp=share_link', // optional, replace if you have one
      image:'https://cdn.worldvectorlogo.com/logos/java.svg',
    },
    {
      title: 'Programming Essentials in Python',
      issuer: 'Cisco Networking Academy & Python Institute',
      date: 'November 2023',
      credentialId: 'CISCO-PY-2023',
      link: 'https://drive.google.com/file/d/18JsFUXcvE-06f5ChEy2bLuTTRQ2_fBv8/view?usp=share_link',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR18fItqFPLFbcZBONMvd9u4ZUwyNqNCjzwsg&s',
    },
    {
      title: 'Programming Essentials in C++',
      issuer: 'Cisco Networking Academy & C++ Institute',
      date: 'November 2023',
      credentialId: 'CISCO-CPP-2023',
      link: 'https://drive.google.com/file/d/1fOwFlbFXIcBTqAquyf8-YvL1Im8G14kP/view?usp=share_link',
      image: 'https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg',
    },
    {
      title: 'Web Development Bootcamp',
      issuer: 'Udemy',
      date: 'August 2024',
      credentialId: 'UC-620663fe-3ede-4172-b9f9-852a59bb72e7|', // Replace with actual ID if available
      link: 'https://www.udemy.com/certificate/UC-620663fe-3ede-4172-b9f9-852a59bb72e7/', // Replace with actual URL
      image: 'https://cdn-icons-png.flaticon.com/512/9414/9414296.png',
    }
  ];

export default function Certifications() {
  return (
    <section id="certifications" className="w-full flex flex-col items-center py-24 bg-white dark:bg-black transition-colors duration-500">
      <div className="max-w-5xl w-full px-4 mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white tracking-tight">Certifications</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {certifications.map((cert, idx) => (
            <motion.a
              key={cert.credentialId}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -8, scale: 1.03, boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.18)' }}
              className="group bg-white/80 dark:bg-slate-900/80 border border-gray-200 dark:border-slate-800 rounded-2xl p-6 flex flex-col items-center shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <img
                src={cert.image}
                alt={cert.title}
                className="w-20 h-20 object-contain rounded-xl mb-4 border border-gray-100 dark:border-slate-800 bg-white dark:bg-slate-900"
                loading="lazy"
              />
              <div className="flex flex-col items-center text-center">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1 group-hover:text-indigo-600 dark:group-hover:text-cyan-400 transition-colors">{cert.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{cert.issuer}</p>
                <p className="text-xs text-gray-400 dark:text-gray-500 mb-2">{cert.date}</p>
                <span className="text-xs font-mono text-gray-400 dark:text-gray-500">ID: {cert.credentialId}</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
} 