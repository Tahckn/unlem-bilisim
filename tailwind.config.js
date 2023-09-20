/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'navbar': '#131313',
        'background' : '#FFF',
        'border': '#F1F1F2',
        'primary':'#3E97FF',
        'success': '#50CD89'
      },
      fontFamily : {
        'raleway' : ['Raleway', 'sans-serif']
      }
    },
  },
  plugins: [],
}
