//PACKAGES
const { src, dest } = require("gulp");
const rename = require("gulp-rename");
const ejs = require("gulp-ejs");
const webpHtml = require("gulp-webp-html");
const htmlmin = require("gulp-htmlmin");

//CONFIG
const config = require("../config");

// EJS TASK
module.exports = () => {
  return src(config.ejs.src)
    .pipe(ejs({ title: "EXAMPLE" }))
    .pipe(rename({ extname: ".html" }))
    .pipe(webpHtml())
    .pipe(htmlmin({ collapseWhitespace: config.isProduction }))
    .pipe(dest(config.ejs.public));
};
