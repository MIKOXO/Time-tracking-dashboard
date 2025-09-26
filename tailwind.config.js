/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Primary
        Purple600: "hsl(246, 80%, 60%)",
        Orange300: "hsl(15, 100%, 70%)",
        Blue300: "hsl(195, 74%, 62%)",
        Pink400: "hsl(348, 100%, 68%)",
        Green400: "hsl(145, 58%, 55%)",
        Purple700: "hsl(264, 64%, 52%)",
        Yellow300: "hsl(43, 84%, 65%)",

        // Neutral
        Navy950: "hsl(226, 43%, 10%)",
        Navy900: "hsl(235, 46%, 20%)",
        Purple500: "hsl(235, 45%, 61%)",
        Navy200: "hsl(236, 100%, 87%)",
      },
    },
  },
  plugins: [],
};
