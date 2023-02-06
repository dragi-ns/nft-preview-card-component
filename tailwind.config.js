/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        "soft-blue": "hsl(215, 51%, 70%)",
        cyan: "hsl(178, 100%, 50%)",
        "main-very-dark-blue": "hsl(217, 54%, 11%)",
        "card-very-dark-blue": "hsl(216, 50%, 16%)",
        "line-very-dark-blue": "hsl(215, 32%, 27%)",
      },
      backgroundImage: {
        "image-overlay": "url('../images/icon-view.svg')",
      },
    },
  },
  plugins: [],
};
