const path  = require('path')
const pkg   = require(path.resolve(__dirname, '../package.json'))
const year  = new Date().getFullYear()

function getBanner(pluginFilename) {
  return `/*!
  * UVIGOWEB${pluginFilename ? ` ${pluginFilename}` : ''} v${pkg.version} (${pkg.homepage})
  * Copyright 2018-${year} ${pkg.author}
  * Licensed under MIT (https://github.com/uvigo/contrib-web-portalmp-frontend/LICENSE)
  */`
}

module.exports = getBanner
