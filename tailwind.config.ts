import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlue: '#043873',
        customLightBlue: '#4F9CF9',
        customSkyBlue: '#C4DEFD',
        customYellow: '#FFE492',

      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'], // Specify the font family
      },
      backgroundImage: {
        'wave-pattern': "url('/wave.png')",
      },
    },
  },
  plugins: [],
};
export default config;
