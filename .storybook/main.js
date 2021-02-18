// Configuration adn settings for Storybook.
const path = require("path");

module.exports = {
  stories: [
    "../src/components/**/*.stories.mdx",
    "../src/components/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    // Adds a HTML view - very useful for docs, showing the exact markup a
    // component renders. IE. what a user would consider the 'source'.
    "@whitespace/storybook-addon-html"
  ],
  // Adjusting the SB webpack configuration.
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Add some rules to the default SB webpack configuration.
    config.module.rules.push(
      // Required to load SVG and other images and files.
      {
        test: /\.(png|svg|jpg|gif|woff)$/,
        use: ["file-loader"]
      },
      // Adds support for loading Twig templates.
      {
        test: /\.twig$/,
        use: ["twig-loader"],
        include: path.resolve(__dirname, "../")
      },
      // Adds support for TailwindCSS via postcss-loader.
      {
        test: /\.css$/,
        use: [
          {
            loader: "postcss-loader"
          }
        ],
        include: path.resolve(__dirname, "../")
      }
    );

    // Return the altered config.
    return config;
  }
};
