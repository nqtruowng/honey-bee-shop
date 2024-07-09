/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '1500': '1500px',
        '860': '860px',
        '750': '750px',
        '480': '480px'
      },
      width: {
        '1920': '1920px',
        '480': '480px',
        '500': '500px'
      },
      inset: {
        '2px': '2px'
      },
      colors: {
        'yellow-blur': '#FFFAEF',
        'yellow-bee' : '#F4C70F'
      },
      margin: {
        '128': '128px'
      },
      backgroundImage: {
        'li-style': 'url("./src/assets/images/li_bee.webp")'
      }
    },
  },
  plugins: [],
}
