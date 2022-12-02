//PACKAGES
const { src, dest } = require("gulp");
const webpackStream = require("webpack-stream");
// const webpack = require("webpack") // for jQuery usage install webpack and jQuery

//CONFIG
const config = require("../config");

// JS TASK
module.exports = js_task = () => {
  return src(config.js.src, { sourcemaps: config.isDevelopment })
    .pipe(
      webpackStream({
        module: {
          rules: [
            {
              test: /\.m?js$/,
              exclude: /(node_modules|bower_components)/,
              use: {
                loader: "babel-loader",
                options: {
                  presets: ["@babel/preset-env"],
                },
              },
            },
          ],
        },
        mode: config.isDevelopment ? "development" : "production",
        output: {
          filename: "bundle.js",
        },
        // for jQuery usage
        // plugins: [
        //   new webpack.ProvidePlugin({
        //     $: "jquery",
        //   }),
        // ],
      })
    )
    .pipe(dest(config.js.public, { sourcemaps: config.isDevelopment }));
};
