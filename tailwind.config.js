/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        primary: "#4F46E5",
        secondary: "#7C3AED",
        accent: "#F3F4F6",
      },
      borderRadius: {
        card: "24px",
        xl: "20px",
      },
      boxShadow: {
        card: "0 10px 40px rgba(79, 70, 229, 0.15)",
        "card-hover": "0 15px 50px rgba(79, 70, 229, 0.25)",
      },
    },
  },
  plugins: [],
};
