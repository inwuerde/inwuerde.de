const { parallel, watch } = require("gulp");

const images = require("./gulp-tasks/images.js");
const fonts = require("./gulp-tasks/fonts.js");
// Pull in each task
const sass = require("./gulp-tasks/sass.js");

// Set each directory and contents that we want to watch and
// assign the relevant task. `ignoreInitial` set to true will
// prevent the task being run when we run `gulp watch`, but it
// will run when a file changes.
const watcher = () => {
  watch("./assets/images/**/*", { ignoreInitial: true }, images);
  watch("./scss/**/*.scss", { ignoreInitial: true }, sass);
};

// The default (if someone just runs `gulp`) is to run each task in parrallel
exports.default = parallel(images, fonts, sass);

// This is our watcher task that instructs gulp to watch directories and
// act accordingly
exports.watch = watcher;
