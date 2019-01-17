# tb-format

> 产出符合icode规范的js和css代码

[![Build Status](https://travis-ci.org/xtx1130/icode-style.svg?branch=master)](https://travis-ci.org/xtx1130/icode-style) 
![license](https://img.shields.io/github/license/xtx1130/icode-style.svg?style=popout)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
## 安装

```shell
$ npm i tb-format
```

## 使用
### cli
```shell
$ tbformat (--fix)
```

`--fix` 自动修复
### API
由于js lint使用的是`esLint`，vue和css lint使用的是`prettier`,所以API有点差异（`prettier`仅会进行ast解析并产出正确代码，不会去验证lint之前的code是否有lint规范错误问题）
```js
const lint = require('icode-style')

/**
 * @param {String} code 需要lint的代码
 * @param {Boolean} isfix 是否需要修复，如果为false则返回Boolean类型（是否符合lint规范），如果为true则返回String类型（lint后的代码）
 * @return {Boolean|String} 
 */
lint.cssLint(code, isfix)

/**
 * @param {String} code 需要lint的代码
 * @param {String} filePath 产出文件路径
 * @return {Array} lint的信息以及错误信息 
 */
lint.jsLint(code, filePath)

/**
 * @param {String} code 需要lint的代码
 * @param {Boolean} isfix 是否需要修复，如果为false则返回Boolean类型（是否符合lint规范），如果为true则返回String类型（lint后的代码）
 * @return {Boolean|String} 
 */
lint.vueLint(code, isfix)
```
### ignore
可以在`pacakge.json`中配置ignore的文件或者路径，配置如下:
```json
{
    "tbformat": [".postcssrc.js", "coverage/"]
}
```