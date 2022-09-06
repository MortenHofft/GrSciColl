const path = require('path');
const nodeExternals = require('webpack-node-externals');

console.log(path.resolve(__dirname, "node_modules/react"));

module.exports = [
  {
    mode: 'development',
    entry: ['@babel/polyfill', './src/server.js'],
    output: {
      path: path.join(__dirname, 'dist'),
      filename: 'server.js',
      libraryTarget: 'commonjs2',
      publicPath: '/',
    },
    target: 'node',
    node: {
      console: false,
      global: false,
      process: false,
      Buffer: false,
      __filename: false,
      __dirname: false,
    },
    externals: nodeExternals(),
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
            },
          ],
        },
      ],
    },
    resolve: {
      symlinks: false,
      modules: [
        "node_modules",
        path.resolve("../react-components/node_modules"),],
      alias: {
        "react$": path.resolve(__dirname, "node_modules/react"),
        "react-dom$": path.resolve(__dirname, "node_modules/react-dom")
      },
      extensions: [".js", ".css"]
    }
  },
  {
    mode: 'development',
    // devtool: 'eval-cheap-source-map', // options https://webpack.js.org/configuration/devtool/
    optimization: {
      usedExports: true
    },
    entry: ['@babel/polyfill', './src/browser.js'],
    output: {
      path: path.join(__dirname, 'dist/assets'),
      publicPath: '/',
      filename: 'bundle.js',
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
            },
          ],
        },
      ],
    },
    resolve: {
      modules: ["node_modules"],
      alias: {
        react: path.resolve(__dirname, "node_modules/react")
      },
      extensions: [".js", ".css"]
    }
  },
];
