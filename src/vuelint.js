'use strict'

const prettier = require('prettier')

exports = module.exports = function (code, isfix) {
  if (isfix) {
    return prettier.format(code, {
      parser: 'vue',
      tabWidth: 4,
      semi: true
    })
  } else {
    return prettier.check(code, {
      parser: 'vue',
      tabWidth: 4,
      semi: true
    })
  }
}
