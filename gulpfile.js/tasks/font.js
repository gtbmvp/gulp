//PACKAGES
const { src, dest } = require("gulp");
const newer = require("gulp-newer");
const ttf2woff = require("gulp-ttf2woff");
const ttf2woff2 = require("gulp-ttf2woff2");

//CONFIG
const config = require("../config");

// FONT TASK
module.exports = () => {
  return src(config.font.src)
    .pipe(newer(config.font.public))
    .pipe(ttf2woff())
    .pipe(dest(config.font.public))
    .pipe(src(config.font.src))
    .pipe(newer(config.font.public))
    .pipe(ttf2woff2())
    .pipe(dest(config.font.public));
};
