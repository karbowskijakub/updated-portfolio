/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'section-pattern': "url('/images/pattern-orange.svg')",
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        'primary-orange': '#F9A826',
        'secondary-orange': '#FDF5EB',
        'primary-grey': '#696F70'
      },
      height: {
        'half-screen': '50vh',
      },
      animation: {
        ["infinite-slider"]: "infiniteSlider 50s linear infinite",
        'bounce-slow': 'bounce 5s linear infinite',
      },
      keyframes: {
        infiniteSlider: {
          "0%": { transform: "translateX(0)" },
          "100%": {
            transform: "translateX(calc(-250px * 5))",
          },
        },
      },
    },
  },
  plugins: [],
}