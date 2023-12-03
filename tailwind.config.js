/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      'max-lg' : {'max' : '1250px'}
    },
    extend: {
      fontFamily: {
        ubuntu: ['Ubuntu' , 'sans-serif']
      },
    },
  },
  plugins: [],
}

