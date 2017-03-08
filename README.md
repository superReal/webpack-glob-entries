# webpack-glob-entries
Finds and returns entry point files in a custom folder


## Instalation
```
npm install --save-dev @superReal/webpack-glob-entries
```


## Usage
```javascript
const globEntries = require( 'webpack-glob-entries' )

{
    entry: globEntries( '/root/path/project', '/**/*.entry.js' ),
    output: {
        filename: '[name].js'
    }
}
```
