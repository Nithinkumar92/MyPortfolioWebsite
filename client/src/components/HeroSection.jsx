import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

export default function HeroSection() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center py-16 overflow-hidden">
      {/* 70% transparent gradient overlays */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none block dark:hidden"
        style={{
          background: 'linear-gradient(135deg, rgba(255,255,255,0.7) 0%, rgba(241,245,249,0.7) 100%)'
        }}
      />
      <div className="absolute inset-0 z-0 pointer-events-none select-none hidden dark:block"
        style={{
          background: 'linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(30,41,59,0.7) 100%)'
        }}
      />
      <Particles
        id="hero-bg-particles"
        init={particlesInit}
        options={{
          background: { color: { value: 'transparent' } },
          particles: {
            number: { value: 50 },
            shape: {
              type: 'char',
              character: {
                value: [
                  "<", ">", "{", "}", "(", ")", ";", "/", "*", "=", "+", "-", "_", "|", "&", "%",
                  "$", "#", "@", "!", "?", "^", "~", "[", "]", ":", ",", ".", "√", "π", "λ", "Σ",
                  "Δ", "∞", "ƒ", "∑", "µ", "Ω", "★", "•", "→", "←", "↑", "↓", "≠", "≡", "≅", "∫", "∂",
                  "∇", "⊕", "⊗", "⊥", "∩", "∈", "∉", "∅", "∃", "∀", "∴", "∵", "∠", "∥", "∦", "∧", "⊂",
                  "⊃", "⊆", "⊇", "⊄", "⊅", "⊈", "⊉", "⊢", "⊣", "⊥", "⊨", "⊩", "⊪", "⊫", "⊬", "⊭"
                ],
                font: 'Roboto Mono',
                fill: true
              }
            },
            size: { value: 18, random: true },
            move: {
              enable: true,
              speed: 0.35,
              direction: 'bottom',
              outModes: { default: 'out' }
            },
            color: { value: [
              "#00ffc3", "#0ea5e9", "#ff00ff", "#f59e42", "#f43f5e",
              "#a3e635", "#fbbf24", "#6366f1", "#38bdf8", "#f472b6",
            
              // Additional vibrant and soft color shades:
              "#22d3ee", // cyan-400
              "#ec4899", // pink-500
              "#a78bfa", // purple-400
              "#14b8a6", // teal-500
              "#60a5fa", // blue-400
              "#eab308", // yellow-500
              "#84cc16", // lime-500
              "#fb7185", // rose-400
              "#c084fc", // violet-400
              "#10b981", // emerald-500
              "#f87171", // red-400
              "#ff80ed", // neon pink
              "#7c3aed", // deep purple
              "#0f172a", // slate black
              "#cbd5e1", // soft gray
              "#ffffff", // white
              "#ff6b6b", // pastel red
              "#ffd166", // pastel orange
              "#06d6a0", // pastel green
              "#118ab2", // pastel blue
              "#9b5de5", // soft violet
            ] },
            opacity: { value: 0.55 }
          }
        }}
        className="absolute inset-0 z-10 pointer-events-none select-none"
      />
      <motion.div
        className="relative z-20 max-w-2xl w-full flex flex-col items-center px-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        <motion.img
          src="https://drive.google.com/file/d/1_BvV0J3ROs9hJnO6ZvD4dulLi1_NaU-B/view?usp=sharing"
          alt="Profile"
          className="w-40 h-40 rounded-full border-4 border-white shadow-xl object-cover mb-8"
          whileHover={{ scale: 1.04 }}
        />
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-6 leading-tight">
          Nithin Kumar
        </h1>
        {/* Social Links */}
        <div className="flex gap-6 mb-6 justify-center">
          <a href="https://www.instagram.com/nithinkumar_gurajala/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-500 hover:text-pink-500 transition-colors">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
          </a>
          <a href="https://x.com/Nithin_Gurajala" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-gray-500 hover:text-sky-400 transition-colors">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 22.43.36a9.09 9.09 0 0 1-2.88 1.1A4.52 4.52 0 0 0 16.11 0c-2.5 0-4.52 2.01-4.52 4.5 0 .35.04.7.11 1.03C7.69 5.4 4.07 3.7 1.64 1.15c-.38.65-.6 1.4-.6 2.2 0 1.52.77 2.86 1.95 3.65A4.48 4.48 0 0 1 .96 6v.06c0 2.13 1.52 3.91 3.55 4.31-.37.1-.76.16-1.16.16-.28 0-.55-.03-.81-.08.55 1.7 2.16 2.94 4.07 2.97A9.05 9.05 0 0 1 0 19.54 12.8 12.8 0 0 0 6.95 22c8.38 0 12.96-6.94 12.96-12.96 0-.2 0-.39-.01-.58A9.22 9.22 0 0 0 23 3z"/></svg>
          </a>
          <a href="https://www.linkedin.com/in/nithin-kumar-gurajala-132a3a289/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-500 hover:text-blue-600 transition-colors">
            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm15.5 11.28h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.88v1.36h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v5.59z"/></svg>
          </a>
          <a href="https://github.com/Nithinkumar92" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-gray-500 hover:text-black dark:hover:text-white transition-colors">
            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.01c-3.2.7-3.87-1.54-3.87-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.41-5.25 5.7.42.36.79 1.08.79 2.18v3.24c0 .31.21.67.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z"/></svg>
          </a>
        </div>
        <TypeAnimation
          sequence={[
            'Frontend Developer',
            2000,
            'Full Stack Developer',
            2000,
            'Video Editor',
            2000
          ]}
          wrapper="h2"
          className="text-2xl md:text-3xl font-medium text-gray-600 dark:text-gray-300 mb-10 min-h-[2.5rem]"
          repeat={Infinity}
        />
        <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full justify-center">
          <a
            href="#projects"
            className="px-8 py-3 rounded-full bg-black text-white dark:bg-white dark:text-black font-semibold text-lg shadow hover:scale-105 transition-all duration-200 border border-transparent hover:border-gray-300 dark:hover:border-slate-700"
          >
            View Projects
          </a>
          <a
            href="/src/assets/Gurajala_Nithin_Kumar_Resume.pdf"
            className="px-8 py-3 rounded-full bg-white text-black dark:bg-black dark:text-white font-semibold text-lg shadow border border-gray-300 dark:border-slate-700 hover:bg-gray-100 dark:hover:bg-slate-900 hover:scale-105 transition-all duration-200"
            download
          >
            Download Resume
          </a>
        </div>
      </motion.div>
    </section>
  );
} 