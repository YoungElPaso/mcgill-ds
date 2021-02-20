// Import the TW config.
const twConfig = require("./tailwind.config.js");

// Figure out some environment variables.
const env = {
  'prod': process.env.NODE_ENV === "production"
};

module.exports = {
  // If need to specifically set a 'from' and 'to' option for postcss:
  // from: "src/css/mds.css",
  // to: "dist/css/mds.css",
  plugins: {
    // Use the tailwindcss plugin with twConfig.
    tailwindcss: twConfig || null,

    // Use autoprefixer with default config.
    // Also ensure this runs only on prod build? 
    // Probably only need to test on evergreen browsers until prod anyway.
    autoprefixer: {} || null,

    // Use cssnano (minifier) with cssnano-preset-default package only on 
    // NODE_ENV===production.
    ...env['prod'] && {cssnano: {
        preset: [require("cssnano-preset-default")]
      }}
    
  }
};
