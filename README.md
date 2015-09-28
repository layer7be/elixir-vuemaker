# Elixir Vuize

## Install

```bash
$ npm install elixir-vuize --save-dev
```

## Usage

### Example `gulpfile.js`

```js
var elixir = require( 'laravel-elixir' );

elixir( function( mix )
{
    mix.vuize( './components/*.+(js|css|html)' );
});
```

# License

[MIT](/LICENSE)
