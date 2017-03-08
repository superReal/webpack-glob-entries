/**
 * Finds and returns entry point files in a custom folder
 *
 * @since  08.03.2017
 * @type   Module
 * @author Sergej Müller, superReal GmbH
 */


/**
 * Required modules
 */

const glob = require( 'glob' )
const path = require( 'path' )


/**
 * Finds and returns entry point files in a custom folder
 *
 * @since   08.03.2017
 * @access  public
 *
 * @param   string  rootPath  Root path of glob path [required]
 * @param   string  globPath  Glob path for entry points [required]
 * @param   string  entryExt  Extension of entry point files [optional]
 *
 * @return  object  entries   Object with collected entry points
 */

module.exports = ( ( rootPath, globPath, entryExt = '.entry.js' ) => {

    const fullPath = path.join( rootPath, globPath )
    const globFiles = glob.sync( fullPath )

    let entries = {}
    let entry
    let name

    globFiles.forEach( globFile => {

        entry = path.relative( rootPath, globFile )
        name = entry.replace( entryExt, '' )

        entries[ name ] = entry

    } )

    return entries

} )
