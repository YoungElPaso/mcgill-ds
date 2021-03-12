// Configuration adn settings for Storybook.
const path = require("path");

// Figure out some environment variables.
const env = {
  prod: process.env.NODE_ENV === "production"
};

module.exports = {
  // By default, include any stories, including WIP's in the WIP directory.
  stories: [
    "../src/components/**/*.stories.mdx",
    "../src/wips/**/*.stories.mdx",
    "../src/components/**/*.stories.@(js|jsx|ts|tsx)"
  ],

  // Exclude WIP stories only on prod.
  // NODE_ENV===production.
  ...(env["prod"] && {
    stories: [
      "../src/components/**/*.stories.mdx",
      "../src/components/**/*.stories.@(js|jsx|ts|tsx)"
    ]
  }),

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
        use: ["file-loader"],
        include: path.resolve(__dirname, "../")
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
