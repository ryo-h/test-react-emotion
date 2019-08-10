const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = env => {
  const MODE = env && env.mode ? env.mode : 'production';
  const devToolStr = MODE === 'development' ? 'source-map' : 'none';
  return {
    mode: MODE,
    devtool: devToolStr,
    entry: [
      './src/index.tsx'
    ],
    output: {
      // path: './assets',
      publicPath: '/',
      path: `${__dirname}/dist`,
      filename: '[hash].bundle.js',
    },
    module: {
      rules: [
        {
          test: [/\.jsx?$/, /\.tsx?$/, /\.js?$/, /\.ts?$/],
          use: {
            loader: 'babel-loader',
            options: {
              plugins: ["emotion"],
              presets: [
                "@babel/env",
                "@babel/react",
                "@babel/typescript",
                "@emotion/babel-preset-css-prop"
              ]
            }
          },
          exclude: /node_modules/
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        },
        {
          test: /\.(jpg|png|gif|svg)$/,
          loader: ['url-loader'],
        },
      ]
    },
    resolve: {
      extensions: ['.js', '.ts', '.tsx'],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./src/index.html"
      }),
      new CleanWebpackPlugin({
        cleanOnceBeforeBuildPatterns: ['**/*bundle.js', '**/*style.css', '**/*.js.map', '**/*.css.map', '!*gitkeep'],
      }),
    ],
    devServer: {
      contentBase: './dist'
    }
  };
};