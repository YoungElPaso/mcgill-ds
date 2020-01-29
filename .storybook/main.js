// Require path to find some Sass config so all components can use any mcgill-ds module that uses custom config.
path = require('path');

// Configuration for Storybook.
module.exports = {
  // Add to Storybook's webpack config with rules for preprocessing Sass in Svelte.
  webpackFinal: async baseConfig => {
    // Taken from Sapper template webpack config.
    let newRules = [
      {
        test: /\.(svelte|html)$/,
        exclude: /node_modules/,
        use: {
          loader: "svelte-loader",
          options: {
            // Allows Sass to be included in Svelte components.
            preprocess: require("svelte-preprocess")({
              scss: {
                includePaths: [
                  // Required so that Storybook can find the configuration file.
                  path.resolve(__dirname)
                ]
              }
            })
          }
        }
      },
      {
        // Required to load SVG and other images and files.
        test: /\.(png|svg|jpg|gif|woff)$/,
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
