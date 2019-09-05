const path = require("path");
const webpack = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const { NODE_ENV } = process.env;
const ROOT = path.resolve(__dirname, "./src/www");
const BUILD = path.resolve(__dirname, "./dist/build");

let DEVTOOL = "eval-source-map";

if (NODE_ENV === "production") {
  DEVTOOL = false;
}

module.exports = {
  devtool: DEVTOOL,

  mode: NODE_ENV,

  context: ROOT,

  entry: {
    main: "./entries/main.js",
    home: "./entries/home.js",
    "themes/default": "./entries/themes/default",
    "themes/black-friday": "./entries/themes/black-friday"
  },

  output: {
    path: BUILD,
    filename: "[name].js"
  },

  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "libs",
          chunks: "all"
        }
      }
    }
  },

  stats: {
    children: false
  },

  module: {
    rules: [
      {
        test: /.js[x]?$/,
        exclude: /(node_modules|test)/,
        loader: "babel-loader"
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract([
          "css-loader",
          "sass-loader",
          "postcss-loader"
        ])
      },
      {
        test: /\.(ttf|eot|woff|woff2)$/i,
        loader: "file-loader",
        options: {
          name: "/assets/fonts/[name].[ext]"
        }
      },
      {
        test: /\.(jpe?g|png|svg|gif)$/i,
        loader: "file-loader",
        options: {
          name: "/assets/images/[name].[ext]"
        }
      }
    ]
  },

  plugins: [
    new webpack.EnvironmentPlugin(["NODE_ENV"]),
    new ExtractTextPlugin({
      filename: getPath =>
        getPath("assets/css/[name].css").replace("css/js", "css"),
      allChunks: true
    }),
    new CopyWebpackPlugin([
      { from: "./assets/images/", to: "./assets/images/" }
    ])
  ],

  parallelism: 4
};
