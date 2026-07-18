const { dest, src } = require("gulp");

// Grabs all images, runs them through imagemin
const images = async () => {
  const imageminModule = await import("gulp-imagemin");
  const imagemin = imageminModule.default;
  const mozjpeg = imageminModule.mozjpeg;
  const optipng = imageminModule.optipng;

  // We have specific configs for jpeg and png files to try
  // to really pull down asset sizes
  return src("./assets/images/**/*")
    .pipe(
      imagemin(
        [
          mozjpeg({ quality: 60, progressive: true }),
          optipng({ optimizationLevel: 5, interlaced: null }),
        ],
        {
          verbose: true,
        }
      )
    )
    .pipe(dest("./_site/assets/images"));
};

module.exports = images;
