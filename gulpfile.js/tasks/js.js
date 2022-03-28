//PACKAGES
const { src, dest } = require("gulp");
const webpack = require("webpack-stream");

//CONFIG
const config = require("../config");

// JS TASK
module.exports = () => {
  return src(config.js.src, { sourcemaps: config.isDevelopment })
    .pipe(
      webpack({
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
      })
    )
    .pipe(dest(config.js.public, { sourcemaps: config.isDevelopment }));
};
