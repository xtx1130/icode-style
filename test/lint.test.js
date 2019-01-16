'use strict'

const fs = require('fs')
const path = require('path')
const lint = require('../src/')

describe('css lint must has a return', () => {
  let code = fs.readFileSync(path.join(__dirname, '/spec', 'test.css')).toString()
  it('Should return code in isfix mode', () => {
    let val = lint.cssLint(code, true)
    expect(/test/.test(val)).toBe(true)
  })
  it('Should return Boolean in default mode', () => {
    let val = lint.cssLint(code)
    expect(val).toBe(false)
  })
})

describe('js lint must have a return', () => {
  let file = path.join(__dirname, 'test.lint.js')
  afterAll(() => {
    fs.unlinkSync(file)
  })
  let code = fs.readFileSync(path.join(__dirname, '/spec', 'test.js')).toString()
  it('Should return Array in default mode', () => {
    let val = lint.jsLint(code)
    expect(Array.isArray(val)).toBe(true)
  })
  it('Should write to files in fix mode', () => {
    let val = lint.jsLint(code, file)
    expect(/ktest/.test(fs.readFileSync(file).toString())).toBe(true)
  })
})

describe('vue lint must have a return', () => {
  let code = fs.readFileSync(path.join(__dirname, '/spec', 'test.vue')).toString()
  it('Should return code in isfix mode', () => {
    let val = lint.vueLint(code, true)
    expect(/test/.test(val)).toBe(true)
  })
  it('Should return Boolean in default mode', () => {
    let val = lint.vueLint(code)
    expect(val).toBe(false)
  })
})