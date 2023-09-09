/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'light-gray': '#D6E2F0',
        'grayish-blue': '#7B879D',
        'dark-blue': '#1F3251',
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
      },
      screens: {
        desktop: '1440px',
        mobile: '375px',
      },
    },
  },
  plugins: [],
};
