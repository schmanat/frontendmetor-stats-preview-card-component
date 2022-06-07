module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        mobile: "375px",
        desktop: "1440px",
      },
      colors: {
        "very-dark-blue": "hsl(233, 47%, 7%)",
        "dark-desaturated-blue": "hsl(244, 38%, 16%)",
        "soft-violet": "hsl(277, 64%, 61%)",
        "slightly-white": "hsla(0, 0%, 100%, 0.75)",
        "slightly-white-transparent": "hsla(0, 0%, 100%, 0.6)",
      },
      fontSize: {
        normal: "0.938rem",
      },
      fontFamily: {
        inter: "'Inter', sans-serif",
        lexend: "'Lexend Deca', sans-serif",
      },
    },
  },
  plugins: [],
};
