const path = require("path");
module.exports = {
  stories: [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
    // '../components/pra/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  staticDirs: ["../public"],
  addons: [
    "@storybook/addon-controls", // 便利っぽい
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "storybook-css-modules-preset", //  to keep using CSS modules
    "storybook-addon-next-router",
    // '@storybook/addon-storysource', //お試し。This addon is used to show stories source in the addon panel.
    "@storybook/addon-docs", // docs
    {
      /**
       * Fix Storybook issue with PostCSS@8
       * @see https://github.com/storybookjs/storybook/issues/12668#issuecomment-773958085
       */
      name: "@storybook/addon-postcss",
      options: {
        postcssLoaderOptions: {
          implementation: require("postcss"),
        },
      },
    },
    // {
    //   /**
    //    * https://storybook.js.org/addons/@storybook/addon-docs
    //    */
    //   name: '@storybook/addon-docs',
    //   options: {
    //     configureJSX: true,
    //     babelOptions: {},
    //     sourceLoaderOptions: null,
    //     transcludeMarkdown: true,
    //   },
    // },
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5",
  },
  webpackFinal: async (config, { configType }) => {
    config.resolve.modules = [path.resolve(__dirname, ".."), "node_modules"];
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname, "../"),
    };
    return config;
  },
};
