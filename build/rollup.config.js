'use strict'

const path    = require('path')
const babel   = require('rollup-plugin-babel')
const resolve = require('rollup-plugin-node-resolve')
const banner  = require('./banner.js')

const BUNDLE  = process.env.BUNDLE === 'true'

let fileDest  = 'uvigoweb.js'
const external = ['jquery', 'popper.js', 'slick-carousel']
const plugins = [
  babel({
    // FG: Ignore next line because we are compiling node_modules files
    // exclude: 'node_modules/**', // Only transpile our source code
    externalHelpersWhitelist: [ // Include only required helpers
      'defineProperties',
      'createClass',
      'inheritsLoose',
      'defineProperty',
      'objectSpread2'
    ]
  })
]

const globals = {
  jquery: 'jQuery', // Ensure we use jQuery which is always available even in noConflict mode
  'popper.js': 'Popper',
  'slick-carousel': 'Slick'
}

if (BUNDLE) {
  fileDest = 'uvigoweb.bundle.js'
  // Remove last entry in external array to bundle Popper
  external.pop()
  external.pop()
  delete globals['popper.js']
  delete globals['slick-carousel']
  plugins.push(resolve())
}

const rollupConfig = {
  input: path.resolve(__dirname, '../js/src/uvigoweb.js'),
  output: {
    banner,
    file: path.resolve(__dirname, `../dist/js/${fileDest}`),
    format: 'umd',
    globals,
    name: 'uvigoweb'
  },
  external,
  plugins
}

module.exports = rollupConfig
