module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      primary: 'Orbitron',
      secondary: 'Rajdhani',
      tertiary: 'Aldrich',
    },
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '380px',
      md: '620px',
      lg: '880px',
      xl: '1100px',
    },
    extend: {
      colors: {
        primary: '#0a0a0a',
        accent: '#B809C3',
      },
      backgroundImage: {
        site: "url('./assets/site-bg.jpg')",
        about: "url('./assets/about.png')",
        services: "url('./assets/services.png')",
        imgMobile: "url('/Users/pikachu/Downloads/multi-step-form-main/multi-step-form/src/assets/images/bg-sidebar-mobile.svg')",
        imgDesktop: "url('/Users/pikachu/Downloads/multi-step-form-main/multi-step-form/src/assets/images/bg-sidebar-desktop.svg')",

      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
