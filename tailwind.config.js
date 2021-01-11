const colors = require('tailwindcss/colors');

module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: ['src/**/*.html'],
  theme: {
    extend: {
      teal: colors.teal,
      orange: colors.orange,
    },
  },
  variants: {
    backgroundOpacity: ['responsive', 'even', 'odd', 'hover', 'focus'],
  },
  plugins: [],
};
