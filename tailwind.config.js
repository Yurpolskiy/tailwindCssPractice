const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.html",
    "./dist/**/*.html",
    "./src/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        Inter: "'Inter', serif",
        Lato: "'Lato', serif",
        PlayFair: "'Playfair Display', serif",
      },
      screens: {
        'xs': '375px',
        '2xs': '525px',
      },
      backgroundImage: {
        'productSection': "url('./images/productSectionImg.png')",
        'quoteSection': "url('./images/quoteBackground.png')",
        'quoteLight': "url('./images/quoteLight.svg')",
        'quoteDark': "url('./images/quoteDark.svg')",
        'reviewsFirst': "url('./images/reviewsFirstImg.png')",
        'reviewsSecond': "url('./images/reviewsSecondImg.png')",
        'reviewsThird': "url('./images/reviewsThirdImg.png')"
      },
      backgroundSize: {
        '50%': '50%',
      },
      gradientColorStops: {
        'grad-from': '#161926',
        'grad-to': '#091221'
      }
    },
    colors: {
      'neonGreen': '#53F3CD',
      'neonDarkerGreen': '#02E0AB',
      'brightBlack': ' #262A3F',
      'slate': colors.slate,
      'coral': '#F1897B',
      'coralDarker': '#E54F3A',
      'blue': '#689FF2',
      'blueDeep': '#161926',
      'blueMainBackground': '#091221',
      'darkBlue': '#262A3F',
      'spring': '#85BBB1',
      'grayDark': ' #515773'
    },
  },
  plugins: [
    plugin(function({addComponents, addUtilities, addBase, theme}) {
      addBase({
        'h1': {fontSize: theme('fontSize.5xl'), fontFamily: theme('fontFamily.PlayFair') } ,
        'h2': {fontSize: theme('fontSize.40px'), fontFamily: theme('fontFamily.PlayFair') } ,
        'h3': {fontSize: theme('fontSize.3xl'), fontFamily: theme('fontFamily.PlayFair') } 
      })
    }),
  ],
}