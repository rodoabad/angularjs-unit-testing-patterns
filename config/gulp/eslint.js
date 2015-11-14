import gulp from 'gulp';
import eslint from 'gulp-eslint';
import friendlyFormatter from 'eslint-friendly-formatter';

import paths from '../paths';

const lintSrc = [
  paths.app,
  paths.test
];

gulp.task('eslint', () => {
  gulp.src(lintSrc)
    .pipe(eslint('.eslintrc'))
    .pipe(eslint.format(friendlyFormatter))
    .pipe(eslint.failAfterError());
});
