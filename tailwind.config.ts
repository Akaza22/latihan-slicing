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
        foreground: "var(--foreground)",
        brand: "#FF6525",
        text: {
          "100": "#1C1C1C",
          "200": "#212838",
          "300": "#373737",
        },
        green: "#E3EBD6",
        background: "#FAF8F4"
      },
      fontFamily: {
        montserrat: ['"Montserrat"', "sans-serif"],
        poppins: ['"Poppins"', "sans-serif"]
      }
    },
  },
  plugins: [],
};
export default config;
