// module.exports = ({ config }) => {
//   config.module.rules.push({
//     test: /\.(ts|tsx)$/,
//     use: [
//       {
//         loader: require.resolve("react-docgen-typescript-loader")
//       },
//       {
//         loader: require.resolve('@storybook/addon-storysource/loader'),
//         options: { parser: 'typescript' }
//       }
//     ]
//   });
//   config.resolve.extensions.push(".ts", ".tsx");
//   return config;
// };

const path = require('path');
// your app's webpack.config.js
const custom = require('../webpack.config.js')('development');

module.exports = async ({ config, mode }) => {
  return { ...config, module: { ...config.module, rules: custom.module.rules } };
};