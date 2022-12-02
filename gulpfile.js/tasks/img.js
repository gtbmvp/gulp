//PACKAGES
const { src, dest } = require("gulp");
const imagemin = require("gulp-imagemin");
const newer = require("gulp-newer");
const webp = require("gulp-webp");
const gulpIf = require("gulp-if");

//CONFIG
const config = require("../config");

// IMG TASK
module.exports = img_task = () => {
  return src(config.img.src)
    .pipe(newer(config.img.public))
    .pipe(webp())
    .pipe(dest(config.img.public))
    .pipe(src(config.img.src))
    .pipe(newer(config.img.public))
    .pipe(gulpIf(config.isProduction, imagemin({ verbose: true })))
    .pipe(dest(config.img.public));
};
