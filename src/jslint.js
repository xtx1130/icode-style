'use strict'

const Linter = require('eslint').Linter
const fs = require('fs')
const rules = require('./rules.json')

const linter = new Linter()

exports = module.exports = function (code, filePath) {
  let msg
  if (filePath) {
    msg = linter.verifyAndFix(code, {
      rules,
      parser: 'babel-eslint'
    })
  } else {
    msg = linter.verify(code, {
      rules,
      parser: 'babel-eslint'
    })
  }
  if (msg.fixed) {
    filePath && fs.writeFileSync(filePath, msg.output, 'utf-8')
  }
  return msg
}
