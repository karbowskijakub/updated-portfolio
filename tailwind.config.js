/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        'primary-orange': '#F9A826',
        'secondary-orange': '#FDF5EB',
        'primary-grey': '#696F70'
      },
      animation: {
        'bounce-slow': 'bounce 5s linear infinite',
      }
    },
  },
  plugins: [],
}