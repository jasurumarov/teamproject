module.exports = {
  content: ['./*.html', './pages/*.html'],
  theme: {
    screens: {
      sm: '375px',
      smpro: '480px',
      smlite: '620px',
      md: '768px',
      lg: '976px',
      xl: '1146px',
    },
    extend: {
      colors: {
        colorFirst: '#FFC000',
        colorSecond: '#0D0D0D',
        colorThird: '',
        colorFourth: '',
        colorFifth: '',
        colorSixth: '',
        colorSeventh: '',
        colorEighth: '',
      },
      boxShadow: {
        'headerShadow': '0px 14px 64px -4px rgba(24, 39, 75, 0.12), 0px 8px 22px -6px rgba(24, 39, 75, 0.12)',
      }
    },
    fontFamily: {
      inter: ['Inter'],
      montserrat: ['Montserrat'],
      poppins: ['Poppins'],
      poppins700: ['Poppins700'],
    }
  },
  plugins: [],
}

