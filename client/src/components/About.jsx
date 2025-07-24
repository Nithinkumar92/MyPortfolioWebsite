import { motion } from 'framer-motion';

const timeline = [
  {
    year: '2025',
    title: 'Full Stack Developer Intern - Blackbuck Engineers',
    desc: 'Completed a 120-hour internship in Full Stack Web Development using the MERN stack from May to July 2025.'
  },
  {
    year: '2024',
    title: 'Frontend Developer Intern - NIELIT',
    desc: 'Built responsive and interactive UIs using HTML, CSS, JavaScript, and React for internal projects.'
  },
  {
    year: '2023',
    title: 'Project Developer',
    desc: 'Developed an Electricity Billing System in Java and a modern restaurant website with a beautiful UI.'
  },
  {
    year: '2022',
    title: 'UI/UX & Web Design Explorer',
    desc: 'Started experimenting with Tailwind CSS, React, and Framer Motion to design clean and interactive UIs.'
  }
];

export default function About() {
  return (
    <section id="about" className="w-full flex justify-center items-center py-24 bg-white dark:bg-black transition-colors duration-500">
      <motion.div
        className="max-w-2xl w-full flex flex-col items-center px-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-12 text-center">About Me</h2>
        <div className="flex flex-col gap-12 w-full">
          {timeline.map((item, i) => (
            <motion.div
              key={item.year}
              className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 w-full"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex-shrink-0 text-2xl font-semibold text-gray-500 dark:text-gray-400 w-24 text-center md:text-right">{item.year}</div>
              <div className="flex-1">
                <div className="text-xl font-bold text-gray-900 dark:text-white mb-1">{item.title}</div>
                <div className="text-gray-600 dark:text-gray-300 text-lg">{item.desc}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
} 