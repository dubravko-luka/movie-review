/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
      },
    },
    screens: {
      sssm: '410px',
      ssm: '480px',
      sm: '640px',
      md: '768px',
      llg: '992px',
      lg: '1024px',
      xl: '1280px',
      xxl: '1440px',
      xxxl: '1600px',
    },
    extend: {
      fontSize: {
        11: '11px',
        13: '13px'
      },
      colors: {
        main: 'rgba(15,15,15,.9)',
        bd: {
          255: 'rgba(255, 255, 255, .08)'
        },
        link: "#408BEA"
      },
      flex: {
        '3': '0 0 33.33%;'
      },
      padding: {
        nav: '70px',
      },
      translate: {
        nav: '70px'
      },
      minHeight: {
        nav: 'calc(100% - 70px)'
      },
      zIndex: {
        9: 9,
        100: 100,
        101: 101,
        102: 102,
        103: 103,
        900: 900,
        999: 999,
        9999: 9999,
      },
    },
  },
  plugins: [
    require('@tailwindcss/container-queries'),
  ],
}