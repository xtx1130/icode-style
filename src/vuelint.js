// 'use strict'

// const Linter = require("eslint").Linter
// const fs = require('fs')
// const rules = require('./rules.json')
// const parser = require('vue-eslint-parser')

// const linter = new Linter()

// linter.defineParser('vue-eslint-parser', parser)

// exports = module.exports = function (code, filePath) {
//   let msg = linter.verifyAndFix(code, {
//     extends: 'plugin:vue/recommended',
//     parser: 'vue-eslint-parser',
//     parserOptions: {
//       sourceType: 'module',
//       ecmaVersion: 2018,
//       parser: 'babel-eslint'
//     }
//   })
//   if (msg.fixed){
//     filePath && fs.writeFileSync(filePath, msg.output, 'utf-8')
//   }
//   return msg
// }

'use strict'

const prettier = require("prettier")

exports = module.exports = function (code, isfix) {
    if(isfix)
        return prettier.format(code, {
            parser: 'vue',
            tabWidth: 4,
            semi: true
        })
    else
        return prettier.check(code, {
            parser: 'vue',
            tabWidth: 4,
            semi: true
        })
}