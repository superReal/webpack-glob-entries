# webpack-glob-entries
Finds and returns entry point files in a custom folder


## Instalation
```
npm install --save-dev git+https://github.com/superReal/webpack-glob-entries.git
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
