module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'secondary-100': '#00B0FF',
        'secondary-200': '#0477fb',
        'secondary-300': '#005EDD',
        'secondary-400': '#0046BF',
        'primary': '#ffffff',
        'accent-100': '#FFA32E',
        'accent-200': '#fb8804',
        'accent-300': '#CF6500'
      },
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
