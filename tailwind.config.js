/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xs: '320px',
      sm: '601px',
      'sm-md': { min: '450px', max: '767px' },
      md: '768px',
      lg: '1024px',
      xl: '1366px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        'main-font': 'var(--main-font-color)',
        'main-bg': 'var(--main-bg-color)',
        'main-board': 'var(--main-board-color)',
        'main-die': 'var(--main-die-color)',
        'main-die-active': 'var(--main-die-color--active)',
        'main-button': 'var(--main-button-color)',
      },
    },
  },
  daisyui: {
    themes: [
      {
        light: {
          ...require('daisyui/src/theming/themes')['light'],
          primary: '#5035ff',
          secondary: '#2b283a',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
};
