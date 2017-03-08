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

## Params
Parameter  | Description | Required    | Default
---------  | ----------- | ----------- | -------
`rootPath` | Root path of glob path | ✔️ |
`globPath` | Glob path for entry points | ✔️ |
`entryExt` | Extension of entry point files | | `.entry.js`
