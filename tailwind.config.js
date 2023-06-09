
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    // "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    screens: {
      xs: "320px",
      sm: "375px",
      lsm: "425px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "16px",
        sm: "16px",
        md: "16px",
        lg: "16px",
        xl: "16px",
        "2xl": "16px",
      },
      screens: {
        sm: "600px",
        md: "728px",
        lg: "984px",
        // xl: "1280px",
        // "2xl": "1536px",
        xl: "1146px",
        "2xl": "1146px",
      },
    },
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
        Raleway: ["Raleway", "sans-serif"],
        Playfair: ["Playfair Display", "sans-serif"],
        Inter: ["Inter", "sans-serif"],
        Overpass: ["Overpass", "sans-serif"],
        Roboto: ["Roboto", "sans-serif"],
        edwardian: ["edwardian_script_itcregular"],
      },

      colors: {
        primary: "#070707",
        yellow: "#FEBB41",
        success: "#004738",
       
      },
    },
  },
  plugins: [],
}