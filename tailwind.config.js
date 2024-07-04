/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      inset: {
        '2px': '2px'
      },
      colors: {
        'yellow-bee' : '#f4c70f'
      }
    },
  },
  plugins: [],
}
