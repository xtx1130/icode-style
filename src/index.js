'use strict'

const cssLint = require('./csslint')
const jsLint = require('./jslint')
const vuelint = require('./vuelint')

exports = module.exports = {
  cssLint: cssLint,
  jsLint: jsLint,
  vueLint: vuelint
}
