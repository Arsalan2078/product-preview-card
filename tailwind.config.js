/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "pure-white": "#FFFFFF",
      "cream": "#F2EAE2",
      "aurometal-saurus": "#6C7289",
      "deep-aquamarine": "#3D8168",
      "deep-aquamarine-hover": "#1A4032",
      "gunmetal": "#1C232B",
    },
    extend: {
      maxWidth: {
        "card": "37.5rem",
      },
    },
  },
  plugins: [],
};
