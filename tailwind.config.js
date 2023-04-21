/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      colors: {
        // TODO: why you have named `green`?
        // TODO: don't you know default colors will be replaced? :angry:
        greenn: '#2CF672',
        gold: '#FFCF0D',
        primary: '#5798F6',
        pdGrey: '#D6D6D6',
        accent: ' #1C92FF',
        dark: '#061325',
        lightDark: '#0F1D2F',
        darkBorder: 'rgba(185, 185, 185, 0.5)'
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        secondary: ['Poppins', 'sans-serif'],
        DMSons: ['DM Sans', 'sans-serif']
      }
    }
  },
  plugins: [require('flowbite/plugin')]
};
