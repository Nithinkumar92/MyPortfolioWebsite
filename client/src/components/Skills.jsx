import { motion } from 'framer-motion';

const skills = [
  'React', 'Tailwind CSS', 'Framer Motion', 'JavaScript', 'Node.js', 'HTML', 'CSS', 'Vite', 'Java','Python','Git','GitHub','MongoDB','Mysql','Node.js','Express.js'
];

export default function Skills() {
  return (
    <section id="skills" className="w-full flex justify-center items-center py-24 bg-white dark:bg-black transition-colors duration-500">
      <motion.div
        className="max-w-3xl w-full flex flex-col items-center px-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-12 text-center">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, i) => (
            <motion.span
              key={skill + i}
              className="px-6 py-3 rounded-full bg-gray-100 dark:bg-slate-800 text-gray-900 dark:text-white text-lg font-semibold shadow-sm hover:scale-105 transition-all duration-200 cursor-pointer border border-gray-200 dark:border-slate-700"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.03 }}
              viewport={{ once: true }}
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </section>
  );
} 