/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const path = require('path');

const config = {
stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
addons: [
   "@storybook/addon-links",
   "@storybook/addon-essentials",
   "@storybook/preset-create-react-app",
   "@storybook/addon-onboarding",
   "@storybook/addon-interactions",
   "@storybook/addon-storysource" // 애드온 추가
],
framework: {
   name: "@storybook/react-webpack5",
   options: {
      builder: {
      useSWC: true,
      },
   },
},
docs: {
   autodocs: "tag",
},
staticDirs: ["../public"],
webpackFinal: async (config) => {
   config.module.rules.push({
      test: /\.stories\.@(js|jsx|mjs|ts|tsx)$/,
      use: [{ loader: require.resolve('@storybook/source-loader') }],
      enforce: 'pre',
      include: [path.resolve(__dirname, '../src')],
   });

   return config;
},

};
export default config;