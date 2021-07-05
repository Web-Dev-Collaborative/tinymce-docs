var path = require('path');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  resolve: {
    extensions: ['.js']
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      title: 'TinyMCE Webpack Demo',
      meta: {viewport: 'width=device-width, initial-scale=1'}
    }),
  ],
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './public',
  },
  module: {
    rules: [
      {
        test: /skin\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /content\.css$/i,
        loader: 'css-loader',
        options: {
          esModule: false,
        },
      },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        tinymceVendor: {
          test: /[\\/](tinymce)[\\/](.*js|.*skin.css)|[\\/]plugins[\\/]/,
          name: 'tinymce'
        },
      },
    }
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'public'),
    clean: true,
  },
};
