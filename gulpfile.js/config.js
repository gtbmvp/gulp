const src = "./src";
const public = "./public";
const isProduction = process.argv.includes("--production");
const isDevelopment = !isProduction;

module.exports = {
  isProduction,
  isDevelopment,

  public,

  html: {
    src: src + "/html/*.html",
    watch: src + "/html/**/*.html",
    public,
  },
  ejs: {
    src: src + "/ejs/*.ejs",
    watch: src + "/ejs/**/*.ejs",
    public,
  },
  css: {
    src: src + "/css/*.css",
    watch: src + "/css/**/*.css",
    public: public + "/css",
  },

  sass: {
    src: src + "/sass/*.{sass,scss}",
    watch: src + "/sass/**/*.{sass,scss}",
    public: public + "/sass",
  },

  js: {
    src: src + "/js/*.js",
    watch: src + "/js/**/*.js",
    public: public + "/js",
  },
  img: {
    src: src + "/img/*.{png,svg,jpg,jpeg,gif}",
    watch: src + "/img/**/*.{png,svg,jpg,jpeg,gif}",
    public: public + "/img",
  },

  svg: {
    src: src + "/img/svg/*.svg",
    watch: src + "img/svg/**/*.svg",
    public: public + "/img/svg",
  },

  font: {
    src: src + "/font/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}",
    watch: src + "/font/**/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}",
    public: public + "/font",
  },
};
