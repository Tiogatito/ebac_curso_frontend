import { rm } from 'node:fs/promises';
import { Transform } from 'node:stream';
import path from 'node:path';
import { dest, parallel, series, src, watch } from 'gulp';
import gulpSass from 'gulp-sass';
import * as dartSass from 'sass';
import sharp from 'sharp';
import terser from 'gulp-terser';

const sass = gulpSass(dartSass);

const paths = {
  styles: {
    source: 'src/scss/main.scss',
    destination: 'dist/css',
  },
  images: {
    source: 'src/images/**/*.{jpg,jpeg,png}',
    destination: 'dist/images',
  },
  scripts: {
    source: 'src/js/**/*.js',
    destination: 'dist/js',
  },
};

export function styles() {
  return src(paths.styles.source)
    .pipe(sass({ style: 'compressed' }).on('error', sass.logError))
    .pipe(dest(paths.styles.destination));
}

export function images() {
  return src(paths.images.source, { encoding: false })
    .pipe(new Transform({
      objectMode: true,
      transform(file, _encoding, callback) {
        if (file.isNull()) return callback(null, file);
        if (file.isStream()) return callback(new Error(`Não foi possível processar ${file.path}: o arquivo chegou como stream.`));

        const extension = path.extname(file.path).toLowerCase();
        let optimizer = sharp(file.contents, { failOn: 'none' })
          .rotate()
          .resize({ width: 1600, withoutEnlargement: true });

        if (extension === '.png') {
          optimizer = optimizer.png({ compressionLevel: 9 });
        } else {
          optimizer = optimizer.jpeg({ quality: 82, progressive: true, mozjpeg: true });
        }

        optimizer.toBuffer()
          .then((contents) => {
            file.contents = contents;
            callback(null, file);
          })
          .catch(callback);
      },
    }))
    .pipe(dest(paths.images.destination));
}

export function scripts() {
  return src(paths.scripts.source)
    .pipe(terser())
    .pipe(dest(paths.scripts.destination));
}

export async function clean() {
  await rm('dist', { recursive: true, force: true });
}

export function watchFiles() {
  watch('src/scss/**/*.scss', styles);
  watch(paths.images.source, images);
  watch(paths.scripts.source, scripts);
}

export const build = series(clean, parallel(styles, images, scripts));
export default build;
