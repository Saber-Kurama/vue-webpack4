const webpack = require('webpack')
const { VueLoaderPlugin } = require('vue-loader');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const config = {
  mode: 'development',
  devServer: {
    hot: true,
    contentBase: '../dist'
  },
  resolve: {
    extensions: [".js", ".json", ".vue", ".css"],
    alias: {
      vue: 'vue/dist/vue.js'
    }
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
        include: [path.join(__dirname, '../src')],
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
        include: [path.join(__dirname, '../src')],
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      filename: path.join(__dirname, '../dist', 'index.html'),
      template: path.join(__dirname, '../src', 'index.html'),
      inject: true,
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
};

module.exports = config;