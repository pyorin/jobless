/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#001AFF",
      },
      fontFamily: {
        poppins: "Poppins, sans-serif;",
      },
    },
  },
  plugins: [],
};
