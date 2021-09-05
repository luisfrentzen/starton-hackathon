module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        'bounce-right': 'bounce-right 2s ease-out infinite'
      },
      keyframes: {
        'bounce-right': {
          '0%, 100%': {
            transform: 'translateX(0)'
          },
          '50%': {
            transform: 'translateX(-5%)'
          }
        }
      }
    },
  },
  variants: {
    extend: {
      animation: ['hover']
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
