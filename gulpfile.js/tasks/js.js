//PACKAGES
const { src, dest } = require("gulp");
const babel = require("gulp-babel");
const webpack = require("webpack-stream");

//CONFIG
const config = require("../config");

// JS TASK
module.exports = () => {
  return src(config.js.src, { sourcemaps: config.isDevelopment })
    .pipe(babel())
    .pipe(
      webpack({
        mode: config.isDevelopment ? "development" : "production",
      })
    )
    .pipe(dest(config.js.public, { sourcemaps: config.isDevelopment }));
};
