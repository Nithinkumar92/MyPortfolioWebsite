/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          light: '#6366F1',
          dark: '#818CF8',
          background: '#F9FAFB',
          foreground: '#0F172A',
          neon: '#00F0FF',
          glass: 'rgba(255,255,255,0.15)',
        },
        glass: 'rgba(255,255,255,0.15)',
        glassDark: 'rgba(30,41,59,0.25)',
      },
      fontFamily: {
        urbanist: ['Urbanist', 'Inter', 'Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        glass: '0 8px 32px 0 rgba(31, 38, 135, 0.18)',
        neon: '0 0 16px 2px #00F0FF',
      },
      backdropBlur: {
        glass: '12px',
      },
      backgroundImage: {
        'blob-blue': "url('data:image/svg+xml;utf8,<svg width=\'400\' height=\'400\' viewBox=\'0 0 400 400\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'><ellipse cx=\'200\' cy=\'200\' rx=\'180\' ry=\'120\' fill=\'%236366F1\' fill-opacity=\'0.18\'/></svg>')",
        'blob-pink': "url('data:image/svg+xml;utf8,<svg width=\'400\' height=\'400\' viewBox=\'0 0 400 400\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'><ellipse cx=\'200\' cy=\'200\' rx=\'180\' ry=\'120\' fill=\'%23F472B6\' fill-opacity=\'0.18\'/></svg>')",
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}