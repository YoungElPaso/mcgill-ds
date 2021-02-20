// Import the TW config.
const twConfig = require("./tailwind.config.js");

module.exports = {
  // If need to specifically set a 'from' and 'to' option for postcss:
  // from: "src/css/mds.css",
  // to: "dist/css/mds.css",
  plugins: {
    // Use the tailwindcss plugin with twConfig.
    tailwindcss: twConfig || null,

    // Use autoprefixer with default config.
    autoprefixer: {} || null,

    // Use cssnano (miniferi) with cssnano-preset-default package.
    // TODO: this should only happen on NODE_ENV = PRODUCTION.
    // process.env.NODE_ENV === "production"
    cssnano: {
      preset: [require("cssnano-preset-default")]
    }
  }
};
