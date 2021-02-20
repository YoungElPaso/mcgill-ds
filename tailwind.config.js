// tailwind.config.js

// Generic, *universal* JS object w/ MDS config, including:
// * Colors:
//  * red,
//  * white,
//  * black,
//  *gray.
//  * These are now the ONLY colors in this build. No other TW colors allowed!
// *
// * Font stacks:
//  * sans-medium, serif-medium, standard.
// *
// * What else? Spacing? Shadow depths? All of it could be configured here!
const mdsConfig = {
  colors: {
    red: "#ed1b2f",
    black: "#000",
    white: "#fff",
    gray: "#f4f4f4"
  },
  fonts: {
    "sans-medium": [
      "McGillSans-Medium",
      "Helvetica Neue-Medium",
      "Helvetica Neue Medium",
      "Helvetica Neue",
      "Helvetica",
      "Arial",
      "sans-serif"
    ],
    "serif-medium": [
      "McGillSerif-Medium",
      "MinionPro-Medium",
      "Minion Pro Medium",
      "Minion Pro",
      "Century",
      "Georgia",
      "serif"
    ],
    standard: [
      "McGillSans-Regular",
      "Helvetica Neue-Medium",
      "Helvetica Neue Medium",
      "Helvetica Neue",
      "Helvetica",
      "Arial",
      "sans-serif"
    ]
  }
};

// Export the config object.
module.exports = {
  // TW only purges unused code if `NODE_ENV` is set to `production`.
  purge: {
    enabled: process.env.NODE_ENV === "production" ? true : false,
    content: ["./src/components/**/*.twig", "./src/components/**/*.js"]
  },
  // NB: uses the 'dark' utility class.
  // See: https://tailwindcss.com/docs/dark-mode#toggling-dark-mode-manually
  darkMode: "class",
  theme: {
    colors: {
      // Not a 'real' color, so not in the mdsConfig but useful and basically
      // required.
      transparent: "transparent",

      // Core TW colors, replaced with mdsConfig colors:
      black: mdsConfig.colors.black,
      white: mdsConfig.colors.white,
      gray: mdsConfig.colors.gray,
      red: mdsConfig.colors.red

      // Could also export a class, to be shared 'mds-xxx' colors:
      // 'mds-red': mdsConfig.colors.red
      // TODO: consider this?
    },
    extend: {
      // Adds font families for use in utility class like:
      // 'font-mds-serif-medium'.
      fontFamily: {
        "mds-sans-medium": mdsConfig.fonts["sans-medium"],
        "mds-serif-medium": mdsConfig.fonts["serif-medium"],
        "mds-standard": mdsConfig.fonts["standard"]
      }
    }
  },
  variants: {},
  plugins: []
};
