import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FBF0E0',
        'cream-dark': '#F5E6D0',
        beige: '#EAD0A8',
        terracotta: '#C86B42',
        'terracotta-dark': '#A85A3A',
        'terracotta-light': '#D4896A',
        'brown-dark': '#2C1810',
        'brown-medium': '#4A3228',
        'brown-warm': '#5C4033',
        gold: '#D4A843',
        'gold-light': '#E8C36A',
        sunset: '#E8945A',
        'text-dark': '#2C1810',
        'text-medium': '#5C4033',
        'text-light': '#8B7355',
        'off-white': '#FEFCF9',
        wine: '#8B2252',
        'wine-dark': '#6B1840',
        'sky-deep': '#1a1a2e',
        'sky-mid': '#16213e',
        'sun-warm': '#E8945A',
        'sun-gold': '#D4A843',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        heading: ['"Cormorant Garamond"', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
      maxWidth: {
        'section': '1200px',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      boxShadow: {
        'warm': '0 4px 30px rgba(44, 24, 16, 0.1)',
        'warm-lg': '0 8px 40px rgba(44, 24, 16, 0.15)',
        'gold': '0 4px 30px rgba(212, 168, 67, 0.2)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
