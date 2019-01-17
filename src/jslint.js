'use strict'

const parse = require('comment-parser')
const Linter = require('eslint').Linter
const fs = require('fs')
const path = require('path')
const rules = require('./rules.json')

const linter = new Linter()

exports = module.exports = function (code, filePath) {
  let commentFlag = false
  let msg
  let comment = parse(code)

  if(comment.length && comment[0].tags.length){
    let ta = comment[0].tags
    for( let i = 0;i < ta.length; i++) {
      if(ta[i].tag === 'file'){
        commentFlag = true
        break;
      }
    }
  }
  if(!commentFlag && filePath){
    let comment = [
      '/**',
      ' * @file ' + path.parse(filePath).base,
      ' */'
    ]
    code = comment.join('\r\n') + '\r\n' + code
  }
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
