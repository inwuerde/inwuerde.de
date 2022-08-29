const { dest, src } = require("gulp");
const imagemin = require("gulp-imagemin");

// Grabs all images, runs them through imagemin
const images = () => {
  // We have specific configs for jpeg and png files to try
  // to really pull down asset sizes
  return src("./assets/images/**/*")
    .pipe(
      imagemin(
        [
          imagemin.mozjpeg({ quality: 60, progressive: true }),
          imagemin.optipng({ optimizationLevel: 5, interlaced: null }),
        ],
        {
          verbose: true,
        }
      )
    )
    .pipe(dest("./_site/assets/images"));
};

module.exports = images;
