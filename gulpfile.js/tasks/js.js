//PACKAGES
const { src, dest } = require("gulp");
const babel = require("gulp-babel");
const uglify = require("gulp-uglify-es").default;
const gulpIf = require("gulp-if");

//CONFIG
const config = require("../config");

// JS TASK
module.exports = () => {
  return src(config.js.src, { sourcemaps: config.isDevelopment })
    .pipe(babel())
    .pipe(gulpIf(config.isProduction, uglify()))
    .pipe(dest(config.js.public, { sourcemaps: config.isDevelopment }));
};
