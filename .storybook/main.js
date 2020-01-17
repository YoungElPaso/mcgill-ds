// Configuration for Storybook.
module.exports = {
  // Add to Storybook's webpack config with rules for preprocessing Sass in Svelte.
  webpackFinal: async baseConfig => {
    // Taken from Sapper template webpack config.
    let newRules = [
      {
        test: /\.(svelte|html)$/,
        use: {
          loader: "svelte-loader",
          options: {
            // Allows Sass to be included in Svelte components.
            preprocess: require("svelte-preprocess")({
              sass: true
            })
          }
        }
      },
      {
        // Required to load SVG and other images.
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"]
      }
    ];
    return {
      ...baseConfig,
      module: {
        ...baseConfig.module,
        rules: newRules
      }
    };
  },
  // Tells Storybook where to look for stories.
  stories: ["../.stories/**/*.stories.[tj]s"]
};
