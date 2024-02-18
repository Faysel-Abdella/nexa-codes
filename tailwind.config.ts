import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-bg': "url('../public/images/herobackground.png')",
      },


      backgroundColor: {
        474747: '#474747',
        D3D3D: '#3D3D3D',
      },

      textColor: {
        'light-gray': '#ACACAC',
        'veryLight-gray': '#D9D9D9',
      },

      fontSize: {
        'small-size': '13px',
        'very-small-size': '10px',
        'very-very-small-size': '8px',
        lg: '20px',
      },

      borderColor: {
        'light-border': '#D9D9D9',
      },
      borderWidth: {
        0.5: '0.5px',
      },

      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        Lora: ["Lora", "sans-serif"],
        Lato: ["Lato", "sans-serif"],
      },

      boxShadow: {
        'sample-shadow': '4px 4px 4px 3px rgba(0, 0, 0, 0.15)'
      },

      screens: {
        largeMedium: "1200px",
        medium: "900px",
        midSmall: '750px',
        small: "540px",
        extraSmall: "450px",
        verySmall: "300px"
      },
    },
  },
  plugins: [require("daisyui"), require("tailgrids/plugin")],

}
export default config
