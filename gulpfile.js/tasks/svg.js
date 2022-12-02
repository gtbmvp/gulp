//PACKAGES
const { src, dest } = require("gulp");
const svgSprite = require("gulp-svg-sprite");

//CONFIG
const config = require("../config");

// SVG TASK
module.exports = () => {
  return src(config.svg.src)
    .pipe(
      svgSprite({
        mode: {
          stack: {
            sprite: "../icons.svg",
            example: {
              dest: "../html-example.html",
            },
            rootviewbox: false
          },
        },
      })
    )
    .pipe(dest(config.svg.public));
};