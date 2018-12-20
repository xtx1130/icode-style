'use strict'

const prettier = require("prettier")

exports = module.exports = function (code) {
    return prettier.format(code, {parser: 'css'})
}