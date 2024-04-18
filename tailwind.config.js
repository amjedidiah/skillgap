module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "twitter-blue": "#1D9BF0",
        black: {
          DEFAULT: "#000000",
          100: "#020B12",
        },
        gray: {
          DEFAULT: "#8F8F8F",
          300: "#D0D5DD",
          700: "#344054",
        },
        "dm-l1": "#141414",
        primary: "#292D32",
        error: {
          500: "#F04438",
        },
      },
    },
  },
  plugins: [],
};
