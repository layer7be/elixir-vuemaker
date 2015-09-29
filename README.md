# Elixir Vuemaker

## Install

```bash
$ npm install elixir-vuemaker --save-dev
```

## Usage

### Example `gulpfile.js`

```js
var elixir = require( 'laravel-elixir' );

elixir( function( mix )
{
    mix.vuemaker( 'resources/assets/vue/*.+(js|css|html)', 'resources/assets/vue-compiled' );
});
```

# License

[MIT](/LICENSE)
