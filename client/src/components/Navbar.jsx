import { useState, useEffect } from 'react';

const navLinks = [
  { to: '#about', label: 'About' },
  { to: '#skills', label: 'Skills' },
  { to: '#certifications', label: 'Certifications' },
  { to: '#projects', label: 'Projects' },
  { to: '#video-editing', label: 'Video Editing' },
  { to: '#contact', label: 'Contact' },
];

function getActiveSection() {
  if (typeof window === 'undefined') return '';
  const scrollY = window.scrollY;
  const offsets = navLinks.map(link => {
    const el = document.querySelector(link.to);
    return el ? el.offsetTop : Infinity;
  });
  const pageBottom = window.innerHeight + scrollY;
  if (Math.abs(pageBottom - document.body.scrollHeight) < 10) {
    return navLinks[navLinks.length - 1].to;
  }
  let activeIdx = 0;
  for (let i = 0; i < offsets.length; i++) {
    if (scrollY + 100 >= offsets[i]) activeIdx = i;
  }
  return navLinks[activeIdx].to;
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('#about');

  useEffect(() => {
    const onScroll = () => setActive(getActiveSection());
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full bg-white/80 dark:bg-black/80 backdrop-blur border-b border-gray-200 dark:border-slate-800 transition-colors duration-500">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 relative">
        {/* Mobile Hamburger (left) */}
        <button
          className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 mr-2"
          onClick={() => setOpen(v => !v)}
          aria-label="Toggle menu"
        >
          <svg className="w-7 h-7 text-gray-900 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
        </button>
        {/* Logo/Name: center on mobile, left on desktop */}
        <a
          href="#hero"
          className="font-extrabold text-2xl tracking-tight text-gray-900 dark:text-white md:static md:translate-x-0 md:left-0 md:top-0 md:relative md:order-none md:ml-0 md:mr-0 md:block
            absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 md:transform-none md:order-1 md:relative md:left-0 md:top-0 md:static md:translate-x-0 md:translate-y-0 md:ml-0 md:mr-0 md:block"
          style={{ zIndex: 10 }}
        >
          Nithin
        </a>
        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <a
              key={link.to}
              href={link.to}
              className="relative text-lg font-medium text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white transition-colors px-2 py-1 rounded"
            >
              <span className="relative block">
                {link.label}
                <span
                  className={`absolute left-1/2 -translate-x-1/2 bottom-0 h-0.5 rounded-full transition-all duration-300
                    ${active === link.to ? 'w-8 bg-black dark:bg-white' : 'w-0 bg-transparent'}
                  `}
                />
              </span>
            </a>
          ))}
        </div>
      </nav>
      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white dark:bg-black border-t border-gray-200 dark:border-slate-800 px-6 pb-4 flex flex-col gap-4">
          {navLinks.map(link => (
            <a
              key={link.to}
              href={link.to}
              className="text-lg font-medium text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white transition-colors px-2 py-1 rounded"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
} 