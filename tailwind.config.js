module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
 darkMode: false, // or 'media' or 'class'
 theme: {

   backgroundColor: theme => ({
      ...theme('colors'),
      'darked': '#333',
      'secondary': '#fa9b1b',
      'darked-900': '#292929',
      
   } ),
   textColor: {
      'white': '#fff',
      'secondary': '#fa9b1b',
      'graycust': '#c2c0c3',
      'danger': '#e3342f',
      'brown-custom':'#ecc38c',
      'gray-strong':'#817c84',
      'gray-light':'#aeabae',
      'danger': '#e3342f',
   },
   backgroundImage: theme => ({
        'hero-pattern': "url('/assets/img/yo.png')",
        'footer-texture': "url('/img/footer-texture.png')",
       }),
      
   extend: {
      colors: {
        'darked-900': '#292929',
        'brown-custom':'#ecc38c',
      'gray-strong':'#817c84',
      'gray-light':'#aeabae',
      'danger': '#e3342f',
      },
    }
 },
 variants: {
   extend: {},
 },
 plugins: [],
}
