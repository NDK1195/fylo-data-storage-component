/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-progress": "linear-gradient(90deg, #FFA197 0%, #FF4A95 100%)",
      },
      colors: {
        "pale-blue": "hsl(243, 100%, 93%)",
        "grayish-blue": "hsl(229, 7%, 55%)",
        "dark-blue": "hsl(228, 56%, 26%)",
        "very-dark-blue": "hsl(229, 57%, 11%)",
      },
      boxShadow: {
        box: "0px 75px 100px -30px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};
