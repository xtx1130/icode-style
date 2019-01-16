'use strict'

const prettier = require('prettier')

exports = module.exports = function (code, isfix) {
  if (isfix) { return prettier.format(code, { parser: 'css', tabWidth: 4 }) } else { return prettier.check(code, { parser: 'css', tabWidth: 4 }) }
}
