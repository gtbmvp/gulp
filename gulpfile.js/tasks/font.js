//PACKAGES
const { src, dest } = require("gulp");
const fonter = require("gulp-fonter");
const ttf2woff2 = require("gulp-ttf2woff2");
const fontfacegen = require("gulp-fontfacegen");

//CONFIG
const config = require("../config");

// FONT TASK
module.exports = () => {
  return src(config.font.src)
    .pipe(
      fonter({
        formats: ["ttf", "woff"],
      })
    )
    .pipe(ttf2woff2())
    .pipe(fontfacegen())
    .pipe(dest(config.font.public));
};
