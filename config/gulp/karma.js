import gulp from 'gulp';
import { Server } from 'karma';
import path from 'path';

const server = new Server({
  configFile: path.resolve('./karma.conf.js')
});

gulp.task('karma', ['eslint'], () => server.start());
