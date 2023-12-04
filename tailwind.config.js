/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      'sm' : '640px',
      'max-sm' : {'max' : '640px'},
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

