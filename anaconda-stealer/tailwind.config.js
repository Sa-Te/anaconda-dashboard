module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#A1FD84",
        textColor: "#84FFA7",
        textLight: "#CFCFCF",
        textDark: "#656565",
      },
      fontFamily: {
        MontserratRegular: ["MontserratRegular", "sans"],
        Chivo: ["Chivo", "sans"],
        ChivoBold: ["ChivoBold", "sans"],
        ProximaNovaRegular: ["ProximaNovaRegular", "sans"],
        ProximaNovaBold: ["ProximaNovaBold", "sans"],
        MontserratBold: ["MontserratBold", "sans"],
      },
      backgroundImage: {
        background: "url('/src/public/assets/background.svg')",
      },
      screens: {
        xs: { max: "320px" }, // Mobile (iPhone 3 - iPhone XS Max)
        sm: { min: "321px", max: "480px" }, // Mobile (matches max: iPhone 11 Pro Max landscape @ 896px)
        md: { min: "481px", max: "1024px" }, // Tablet (matches max: iPad Pro @ 1112px)
        lg: { min: "1025px", max: "2300px" },
        xl: { min: "2301px", max: "3840px" },
      },
    },
    variants: {},
  },
  plugins: [],
};
