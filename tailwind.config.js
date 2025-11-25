/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        primary: "#7ACFF5",
        secondary: "#C8B6FF",
        accent: "#F5F5F5",
      },
      borderRadius: {
        card: "24px",
        xl: "20px",
      },
      boxShadow: {
        card: "0 10px 40px rgba(122, 207, 245, 0.15)",
        "card-hover": "0 15px 50px rgba(122, 207, 245, 0.25)",
      },
    },
  },
  plugins: [],
};
