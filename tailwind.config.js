/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary5: "#fff1f0",
        primary10: "#ffe3e0",
        primary20: "#ffc8c1",
        primary30: "#feaca3",
        primary40: "#fe9184",
        primary50: "#fe7565",
        primary60: "#d75f51",
        primary70: "#b0493d",
        primary80: "#893228",
        primary90: "#621c14",
        gray0: "#ffffff",
        gray5: "#f8f8f8",
        gray10: "#f0f0f0",
        gray20: "#e4e4e4",
        gray30: "#d8d8d8",
        gray40: "#c6c6c6",
        gray50: "#8e8e8e",
        gray60: "#717171",
        gray70: "#555555",
        gray80: "#2d2d2d",
        gray90: "#1d1d1d",
      },
      space: {
        sm: "10px",
        md: "24px",
        lg: "38px",
      },
      fontSize: {
        xxl: "32px",
        xl: "25px",
        lg: "21px",
        md: "17px",
        sm: "15px",
      },
      fontWeight: {
        bold: "700",
        medium: "400",
      },
      fontFamily: {
        Pretendard: ["Pretendard"],
      },
    },
  },
  plugins: [],
};
