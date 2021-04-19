let mix = require('laravel-mix');
mix
.js('src/app.js', 'dist/')
mix.sass('src/app.scss', 'dist').options({
  processCssUrls: false
});
