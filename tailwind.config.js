/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage:{
        'banner':"url('../dist/img/Banner.png')",
      },

      colors: {
        primary: "#51E9EF",
        secondary: "#39B0A8",
        light: "#F5F5F5",
        gray: "#4a4b4f",
        dark: '#1C1C1C',
      },

      fontSize: {
        huge: 'clamp(2rem, 6vw, 3rem)',
      },

      fontFamily: {
        roboto : ['Roboto', 'san-serif'],
        poppins : ['poppins' , 'san-serif'],
      }

    },

    container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1240px',
       '2xl': '1496px',
      },
    }

  },
  plugins: [],
}
