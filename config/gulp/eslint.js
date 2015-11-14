import gulp from 'gulp';
import eslint from 'gulp-eslint';
import friendlyFormatter from 'eslint-friendly-formatter';

import paths from '../paths';

gulp.task('eslint', () => {
  gulp.src(paths.app)
    .pipe(eslint('.eslintrc'))
    .pipe(eslint.format(friendlyFormatter))
    .pipe(eslint.failAfterError());
});
