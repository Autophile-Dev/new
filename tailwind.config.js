/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  theme: {
    extend: {
      maxWidth:{
        '780px':'780px',
        '530px':'530px',
      },
      colors:{
        'blue-1':'#394F89',
        'blue-2':'#4C5EC2',
        'blue-3':'#9DF6FC',
        'blue-4':'#BBEEF1',
        'blue-5':'#60BDC4',
        'blue-6':'#659EBC',
        'blue-7':'#05396B',
        'blue-8':'#0A3670',
        'dark-1':'#1A2239',
        'dark-gray':'#5A5A5A',
        'light-gray':'#808080',
        'text-white-1':'#f1f1f1',
        'white-2':'#D3D3D3',

      },
      width:{
        '500px':'500px',
        '780px':'780px',
        '900px' : '900px',
      },
    },

  },
  
  plugins: [
    require('tailwindcss-transform')(['responsive']),
    require('@kamona/tailwindcss-perspective'),
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}