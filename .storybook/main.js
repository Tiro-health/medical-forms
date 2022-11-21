const path = require("path")
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
module.exports = {
  core: {
    builder: "webpack5",
  },
  features: {
    interactionsDebugger: true,
  },
  stories: ["../src/Questionnaires/Questionnaires.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx|mdx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  webpackFinal: (config) => {
    config.module.rules.push({
      test: /\.css$/,
      use: [
        {
          loader: 'postcss-loader',
          options: {
            postcssOptions: {
              plugins: [
                require('tailwindcss'),
                require('autoprefixer'),
              ],
            },
          },
        },
      ],
      include: path.resolve(__dirname, '../src'),
    })
    config.resolve.plugins = [
      ...(config.resolve.plugins || []),
      new TsconfigPathsPlugin({
        extensions: config.resolve.extensions,
      }),
    ];
    return config
  }
};
