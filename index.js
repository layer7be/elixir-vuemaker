var gulp = require('gulp')
var vuemaker = require('gulp-vuemaker')
var Elixir = require('laravel-elixir')

/*
 |----------------------------------------------------------------
 | Vuemaker
 |----------------------------------------------------------------
 |
 | This task uses Vuemaker to combine HTML, Javascript and CSS
 | into Vue components with a .vue extension
 */

Elixir.extend('vuemaker', function (src, destination, options) {

  new Elixir.Task('vuemaker', function () {
    return (
      gulp
      .src(src)
      .pipe(vuemaker())
      .pipe(gulp.dest(destination))
      .pipe(new Elixir.Notification('Vuemaker completed'))
    )
  })
  .watch(src)
})
