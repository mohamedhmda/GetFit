/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1280px',
      '2xl': '2560px',
    },
    extend: {
      colors: {
        'theme-1': '#0B212F',
        'theme-2': '#1363DF',
        'theme-3': '#47B5FF',
        'theme-4': '#DFF6FF',
      },
      backgroundImage: {
        'header-1': "url('./images/header/header-1.png')",
        'header-2': "url('./images/header/header-2.png')",
        'header-3': "url('./images/header/header-3.png')",
      },
    },
  },
  plugins: [],
}
