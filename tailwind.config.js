/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#0f172a',
        ember: '#f97316',
        coral: '#ef4444',
        solar: '#facc15',
        climate: '#0f766e',
        mist: '#f8fafc',
      },
      boxShadow: {
        soft: '0 20px 55px rgba(15, 23, 42, 0.12)',
        glow: '0 18px 60px rgba(249, 115, 22, 0.28)',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'fade-up': 'fadeUp 0.75s ease both',
        pulsebar: 'pulseBar 2.6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeUp: {
          from: { opacity: 0, transform: 'translateY(22px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
        pulseBar: {
          '0%, 100%': { transform: 'translateX(-18%)' },
          '50%': { transform: 'translateX(18%)' },
        },
      },
    },
  },
  plugins: [],
};
