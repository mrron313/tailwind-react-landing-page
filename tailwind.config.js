/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'white': '#ffffff',
        'primary': '#ffffff',
        'secondary': '#3b82f6',
        'orange': {
          'main': '#ea580c',
          'soft': '#fb923c'
        },
         slate: {
          200: '#e2e8f0',
          300: '#cbd5e1',
          500: '#64748b',
          700: '#334155' 
        },
      },
      width: {
        '46': '46%'
      }
    },
  },
  plugins: [],
}
