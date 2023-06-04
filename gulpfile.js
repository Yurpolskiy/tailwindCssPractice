const gulp = require('gulp')
const exec = require('child_process').exec 

gulp.task('watch:index', () => {
    exec('npx tailwindcss -i ./src/index.css -o ./dist/output.css --watch')
})

gulp.task('watch:components', () => {
    exec('npx tailwindcss -i ./src/components.css -o ./dist/outputComponents.css --watch')
})

gulp.task('default', gulp.parallel('watch:index', 'watch:components'))