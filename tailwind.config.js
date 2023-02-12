/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  purge: ["./**/*.html", "./**/*.js,jsx,ts,tsx,vue"],
  content: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  theme: {
    extend: {
      height: {
        620: "620px",
      },
      spacing: {
        "40-c": "40rem",
      },
    },
  },
  plugins: [],
};
