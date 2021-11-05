module.exports = {
  purge: {
    enabled: true,
    content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    safelist: []
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
