const { VueLoaderPlugin } = require('vue-loader');
const path = require('path');
const config = {
  mode: 'development',
  resolve: {
    extensions: [".js", ".json", ".vue", ".css"],
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        // include: [path.join(__dirname, '../src')],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        loader: 'file-loader'
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader',
        ],
        // include: [path.join(__dirname, '../src')],
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin()
  ],
};

module.exports = config;