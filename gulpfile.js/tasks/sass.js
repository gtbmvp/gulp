//PACKAGES
const { src, dest } = require("gulp");
const autoprefixer = require("gulp-autoprefixer");
const csso = require("gulp-csso");
const rename = require("gulp-rename");
const groupCssMedia = require("gulp-group-css-media-queries");
const sass = require("gulp-sass")(require("sass"));
const webpCss = require("gulp-webp-css-fixed");

//CONFIG
const config = require("../config");

// SASS TASK
module.exports = sass_task = () => {
  return src(config.sass.src, { sourcemaps: config.isDevelopment })
    .pipe(sass())
    .pipe(webpCss())
    .pipe(autoprefixer())
    .pipe(groupCssMedia())
    .pipe(dest(config.sass.public, { sourcemaps: config.isDevelopment }))
    .pipe(rename({ suffix: ".min" }))
    .pipe(csso())
    .pipe(dest(config.sass.public, { sourcemaps: config.isDevelopment }));
};
