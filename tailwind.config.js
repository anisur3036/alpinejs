module.exports = {
  content: ['./**/*.html'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      }
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
