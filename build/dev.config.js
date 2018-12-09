var path = require("path");
var webpack = require("webpack");
var prodConfig = require("./prod.config.js");
const merge = require('webpack-merge');

function resolve (dir) {
  return path.join(__dirname, '..', dir);
}

var devConfig = merge(prodConfig, {
    devServer: {
        contentBase: path.join(__dirname, "../"),
        publicPath: "/dev/",
        hot: true,
        host: "localhost",
        port: 8000
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
});

module.exports = devConfig;