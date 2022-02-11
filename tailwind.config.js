module.exports = {
  important: true,
  darkMode: "class",
  content: ["./src/**/*.{html,js}"],
  i18n: {
    locales: ["en-US"],
    defaultLocale: "en-US",
  },
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      backgroundColor: ["checked"],
      borderColor: ["checked"],
      inset: ["checked"],
      zIndex: ["hover", "active"],
    },
  },
  plugins: [],
  future: {
    purgeLayersByDefault: true,
  },
}