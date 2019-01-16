'use strict'

const fs = require('fs')
const path = require('path')
const jsLint = require('../src/jslint')
const cssLint = require('../src/csslint')

let jsFile = fs.readFileSync(path.join(__dirname, 'spec', 'test.js'), 'utf-8')
let cssFile = fs.readFileSync(path.join(__dirname, 'spec', 'test.css'), 'utf-8')

console.log(jsLint(jsFile), cssLint(cssFile))
