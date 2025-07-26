import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Animated Portfolio',
    desc: 'A creative animated developer portfolio featuring floating code symbols, glowing gradients, and responsive UI/UX.',
    tech: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite', 'GSAP'],
    link: 'https://yourportfolio.live',
    github: 'https://github.com/yourusername/animated-portfolio',
  },
  {
    title: 'GenixArt - AI Image Generator',
    desc: 'A beautiful and functional AI image generation app where users can generate images using prompts.',
    tech: ['React', 'Tailwind CSS', 'OpenAI API', 'Node.js', 'Express', 'MongoDB'],
    link: 'https://genixart.live',
    github: 'https://github.com/Nithinkumar92/Genixart.git',
  },
  {
    title: 'Real-time Chat App',
    desc: 'A responsive real-time chat application with user authentication and live two-way messaging.',
    tech: ['React', 'Tailwind CSS', 'Node.js', 'Socket.io', 'Express.js', 'MongoDB', 'JWT'],
    link: 'https://fullstack-chat-me-webapp.onrender.com',
    github: 'https://github.com/Nithinkumar92/FullStack_Chat_Me_webapp.git',
  },
 
  {
    title: 'Turtle Crossing Game',
    desc: 'A fun Python game where a turtle tries to cross a busy road.',
    tech: ['Python', 'Turtle'],
    link: 'https://github.com/Nithinkumar92/turtle-crossing-start.git',
    github: 'https://github.com/Nithinkumar92/turtle-crossing-start.git',
  },
  {
    title: 'Pong Game',
    desc: 'A multiplayer Pong game made using Python and the Turtle library.',
    tech: ['Python', 'Turtle'],
    
    github: 'https://github.com/Nithinkumar92/pong-game-by-python.git',
  },
  {
    title: 'Restaurant Website',
    desc: 'A static but modern restaurant website with a responsive layout and visually appealing UI.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    link: 'https://restraunt92.netlify.app/',
    github: 'https://github.com/Nithinkumar92/Frontend-Restarunt.git',
  },
  {
    title: 'Electricity Billing System',
    desc: 'A desktop-based electricity billing software built using Java Swing and AWT with a MySQL backend.',
    tech: ['Java', 'Swing', 'AWT', 'MySQL', 'JDBC'],
    link: '#',
    github: 'https://drive.google.com/drive/folders/1MudraVlbyJpof-iiLb6LIE4abKGem3fg?usp=share_link',
  },
  {
    title: 'YouTube Horror Story Editor',
    desc: 'Edited horror story content with sound design, dramatic effects, and cinematic pacing for a Telugu YouTube channel.',
    tech: ['Final Cut Pro', 'DaVinci Resolve', 'CapCut'],
    link: 'https://www.youtube.com/@gohstlygupshup',
    github: null,
  },
  {
    title: 'Amazon Price Notifier Bot',
    desc: 'A Python-based bot that scrapes Amazon to find best value products under a target price and sends them to Telegram.',
    tech: ['Python', 'BeautifulSoup', 'Requests', 'Telegram Bot API', 'Automation'],
    
    github: 'https://github.com/Nithinkumar92/Telegramautomationdeals.git',
  }
];



export default function Projects() {
  return (
    <section id="projects" className="w-full flex justify-center items-center py-24 bg-white dark:bg-black transition-colors duration-500">
      <motion.div
        className="max-w-5xl w-full flex flex-col items-center px-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-12 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700 rounded-2xl p-8 shadow-lg flex flex-col gap-4 hover:scale-[1.03] transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.04 }}
            >
              <div className="text-xl font-bold text-gray-900 dark:text-white mb-2">{p.title}</div>
              <div className="text-gray-600 dark:text-gray-300 mb-2">{p.desc}</div>
              <div className="flex flex-wrap gap-2 mb-2">
                {p.tech.map(t => (
                  <span key={t} className="px-3 py-1 bg-gray-100 dark:bg-slate-800 text-gray-900 dark:text-white rounded text-xs font-medium border border-gray-200 dark:border-slate-700">{t}</span>
                ))}
              </div>
              <div className="flex gap-4 mt-auto">
                <a href={p.link} className="text-blue-600 dark:text-blue-400 hover:underline font-semibold" target="_blank" rel="noopener noreferrer">Live</a>
                <a href={p.github} className="text-gray-700 dark:text-gray-300 hover:underline font-semibold" target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
} 