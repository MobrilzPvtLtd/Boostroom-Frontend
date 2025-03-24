/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./component/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'navy': {
          800: '#131d38',
          900: '#0a1427',
        },
        'yellow': {
          400: '#F6C31C',
          500: '#e5b80f',
        },
        'dark':{
          100:'#1B236C',
          300:'#131746',
          500:'#0E1237'
        },
        'fuchsia': {
          500: '#d100d1',
        },
        'orange':{
          300:'#8F7326'
        }

      },
   
    },
  },
  plugins: [],
};
