var webpack = require("webpack");
var path = require("path");

var BUILD_DIR = path.resolve(__dirname, "dist");
var SOURCE_DIR = path.resolve(__dirname, "src");

var config = {
  entry: SOURCE_DIR + "/index.jsx",
  output: {
    path: BUILD_DIR,
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: SOURCE_DIR,
        loader: "babel"
      },
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      }
    ]
  }
};

module.exports = config;
