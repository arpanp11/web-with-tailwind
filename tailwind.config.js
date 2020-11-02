module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: ['src/**/*.html'],
  theme: {
    extend: {},
  },
  variants: {
    backgroundOpacity: ['responsive', 'even', 'odd', 'hover', 'focus'],
  },
  plugins: [],
};
