# GULPFILE.JS

---

### USAGE:

- _npm run production_
- _npm run development_ (server and watcher, sourcemaps for CSS/SASS/JS files )

---

### CONTENTS:

- tasks folder
- index.js
- config.js (source, destination and watch file paths for tasks; production/development info)

---

### TASK LIST:

- HTML:
  - _\<picture>_ element insert for webp image format;
  - minify (if _production_);
- EJS:
  - including partials and data (if passed);
  - changing extension to _.html_;
  - _\<picture>_ element insert for webp image format;
  - minify (if _production_);
- CSS/SASS:
  - concat files;
  - replace _@import_ to its content;
  - webp image format for BG images (if supported by browser);
  - autoprefixer (browserlist support: last 3 versions);
  - group CSS media queries at the end of styles;
  - saving both minified and not minified versions;
- JS:
  - babel with _@babel/preset-env_ preset;
  - webpack bundling with minification (if _production_);
- FONT:
  - convert ttf to woff and woff2;
  - generate CSS file with @font-face rules;
- IMG:
  - convert to webp image format;
  - minify (if _production_);
- SVG:
  - create SVG stack sprite with its _html_ example;
