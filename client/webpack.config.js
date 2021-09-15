const path = require("path");
const webpack = require("webpack");
const CURRENT_WORKING_DIR = process.cwd();
const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
  template: path.join(CURRENT_WORKING_DIR, "src/index.html"),
  filename: "index.html",
  inject: "body",
});

const config = {
  name: "browser",
  mode: "development",
  devtool: "source-map",
  entry: [
    // "webpack-hot-middleware/client?reload=true",
    "@babel/polyfill",
    path.join(CURRENT_WORKING_DIR, "src/index.js"),
  ],
  output: {
    path: path.join(CURRENT_WORKING_DIR, "/dist/"),
    filename: "bundle.js",
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.html$/,
        use: ["html-loader"],
      },
      {
        test: /\.css?$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(ttf|eot|svg|gif|jpg|png)(\?[\s\S]+)?$/,
        use: "file-loader",
      },
    ],
  },
  plugins: [
    htmlPlugin,
    // new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
  resolve: {
    alias: {
      "react-dom": "@hot-loader/react-dom",
    },
  },
  devServer: {
    historyApiFallback: true,
  },
};

module.exports = config;
