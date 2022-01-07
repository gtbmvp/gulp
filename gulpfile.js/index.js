//PACKAGES
const { series, parallel, watch } = require("gulp");
const del = require("del");
const browserSync = require("browser-sync").create();

//CONFIG
const config = require("./config");

//TASKS IMPORT
const html = require("./tasks/html");
const ejs = require("./tasks/ejs");
const font = require("./tasks/font");
const css = require("./tasks/css");
const sass = require("./tasks/sass");
const js = require("./tasks/js");
const img = require("./tasks/img");
const svg = require("./tasks/svg");

//COMMON TASKS
const clear = () => {
  return del(config.public);
};

//SERVER
const server = () => {
  browserSync.init({
    server: config.public,
  });
};

//WATCHER
const watcher = () => {
  watch(config.html.watch, html).on("all", browserSync.reload);
  watch(config.ejs.watch, ejs).on("all", browserSync.reload);
  watch(config.font.watch, font).on("all", browserSync.reload);
  watch(config.css.watch, css).on("all", browserSync.reload);
  watch(config.sass.watch, sass).on("all", browserSync.reload);
  watch(config.js.watch, js).on("all", browserSync.reload);
  watch(config.img.watch, img).on("all", browserSync.reload);
  watch(config.svg.watch, svg).on("all", browserSync.reload);
};

//PRODUCTION or DEVELOPMENT
const production = series(
  clear,
  parallel(html, ejs, series(font, css, sass), js, img, svg)
);
const development = series(production, parallel(watcher, server));

exports.default = config.isProduction ? production : development;

//SEPARATE EXPORTS
exports.clear = clear;
exports.html = html;
exports.ejs = ejs;
exports.font = font;
exports.css = css;
exports.sass = sass;
exports.js = js;
exports.img = img;
exports.svg = svg;
