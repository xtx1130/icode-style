# tbformat

> 产出符合icode规范的js和css代码
> 
## 安装

```shell
$ npm i git+https://github.com/xtx1130/icode-style
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
 * @param {Boolean} isfix 是否需要修复，如果为否则返回Boolean类型（是否符合lint规范），如果未是则返回String类型（lint后的代码）
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
 * @param {Boolean} isfix 是否需要修复，如果为否则返回Boolean类型（是否符合lint规范），如果未是则返回String类型（lint后的代码）
 * @return {Boolean|String} 
 */
lint.vueLint(code, isfix)
```