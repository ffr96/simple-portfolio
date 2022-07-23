module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    extend: {
      flexShrink: {
        4: 4,
      },
      animation: {
        fadein: 'fadeIn 750ms ease-in',
        scalein: 'scaleIn 1s ease-in-out',
        leftin: 'leftIn 1s cubic-bezier(.73,.39,.14,1.11)',
        rightin: 'rightIn 1s cubic-bezier(.73,.39,.14,1.11)',
        swipeleft: 'leftSwipe 500ms ease-in-out',
        swiperight: 'rightSwipe 500ms ease-in-out',
        halfrotatef: 'halfRotatef 500ms ease-in-out forwards',
        halfrotateb: 'halfRotateb 500ms ease-in-out ',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        leftIn: {
          from: { transform: 'translateX(-20%)', opacity: 0 },
          '50%': { opacity: 0 },
          to: { transform: 'translateX(0)', opacity: 1 },
        },
        halfRotatef: {
          to: { transform: 'rotate(180deg)' },
        },
        halfRotateb: {
          from: { transform: 'rotate(180deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        rightIn: {
          from: { transform: 'translateX(20%)', opacity: 0 },
          '50%': { opacity: 0 },
          to: { transform: 'translateX(0)', opacity: 1 },
        },
        leftSwipe: {
          from: { transform: 'translateX(-100%)', opacity: 0 },
          to: { transform: 'translateX(0%)', opacity: 1 },
        },
        rightSwipe: {
          from: { transform: 'translateX(100%)', opacity: 0 },
          to: { transform: 'translateX(0%)', opacity: 1 },
        },
        scaleIn: {
          from: { transform: 'scale(1.5)', opacity: 0 },
          to: { transform: 'scale(1)', opacity: 1 },
        },
      },
      colors: {
        gray: {
          100: '#f7fafc',
          200: '#edf2f7',
          300: '#e2e8f0',
          400: '#cbd5e0',
          500: '#a0aec0',
          600: '#718096',
          700: '#4a5568',
          800: '#2d3748',
          900: '#1a202c',
        },
        blue: {
          100: '#ebf8ff',
          200: '#bee3f8',
          300: '#90cdf4',
          400: '#63b3ed',
          500: '#4299e1',
          600: '#3182ce',
          700: '#2b6cb0',
          800: '#2c5282',
          900: '#2a4365',
        },
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('child', '& > *');
    },
  ],
};
