# Demo for possible sourcemaps issue with TailwindCSS

1. Clone repo
2. Run `npm install`
3. Run `./node_modules/gulp/bin/gulp.js` to compile CSS and sourcemap

If you then open `index.html` in Chrome and inspect the blue button, you'll see some of the styles reference `<input css 1>` as the source instead of `main.css`. You'll also notice the `sources` array in `main.css.map` is: `["main.css","<input css 1>","<no source>"]`.
