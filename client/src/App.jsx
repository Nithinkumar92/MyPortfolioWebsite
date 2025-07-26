import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Projects from './components/Projects'
import Skills from './components/Skills'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ThemeToggle from './components/ThemeToggle'
import VideoEditing from './components/VideoEditing'
import Certifications from './components/Certifications';
import { useState, useEffect } from 'react'
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

export default function App() {
  const [theme, setTheme] = useState('dark')
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <div className={theme === 'dark' ? 'min-h-screen w-full bg-gradient-to-br from-black via-slate-900 to-cyan-950 text-white scroll-smooth' : 'min-h-screen w-full bg-gradient-to-br from-white via-slate-100 to-cyan-100 text-gray-900 scroll-smooth'}>
      <Particles
        id="main-bg-particles"
        init={particlesInit}
        options={{
          fullScreen: { enable: true, zIndex: 0 },
          background: { color: { value: 'transparent' } },
          particles: {
            number: { value: 80 },
            shape: {
              type: 'char',
              character: {
                value: ['<', '/', '>', '{', '</>', '📩', '👨‍💻', ';','🎥','🎯'],
                font: 'Fira Mono',
                fill: true
              }
            },
            size: { value: 24, random: true },
            move: {
              enable: true,
              speed: 0.5,
              direction: 'bottom',
              outModes: { default: 'out' }
            },
            color: { value: '#ff00ff' }, // highly visible magenta
            opacity: { value: 0.3 }
          }
        }}
        className="fixed inset-0 z-0 pointer-events-none select-none"
      />
      <div className="relative z-10">
        <Navbar />
        <div className="fixed top-4 right-4 z-50">
          <ThemeToggle theme={theme} setTheme={setTheme} />
        </div>
        <HeroSection />
        <About />
        <Skills />
        <Certifications />
        <Projects />
        <VideoEditing />
        <Contact />
        <Footer />
      </div>
      </div>
  )
}