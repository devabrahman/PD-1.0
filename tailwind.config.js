/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      colors: {
        green: '#2CF672',
        gold: '#FFCF0D',
        primary: '#5798F6',
        pdGrey: '#D6D6D6',
        accent: ' #1C92FF'
      },
      fontFamily: {
        primary: ['Poppins', 'sans-serif'],
        secondary: ['Montserrat', 'sans-serif']
      }
    }
  },
  plugins: []
};
