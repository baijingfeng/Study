/** 模块与命名空间 */
/**
 * ts新增形式
 * 兼容commonJs
 * export = name
 * import moment = require('moment')
 * 命名空间 (之前的内部模块) namespace
 * 程序内部防止全局污染, 使用namespace
 * namespace Vate = {
 *  // 定义变量与方法
 *  export someValue
 * }
 * /// <reference path="space.ts" /> 三斜线指令
 * 多个同名命名空间会合并为一个
 * 命名空间别名, import
 */

// 相对导入
// 非相对导入, 模块解析策略'node', 'classic', 先找a.ts 再找a.d.ts
// clasical从现在到上级遍历
// 'node', 会查找package.json, 确定main入口

/**
 * 模块解析配置项
 *
 */

/**
 * 声明合并
 * 合并接口, 多个接口定义的非函数成员命名不重复; 函数成员成为函数重载
 * 合并命名空间,
 * 合并命名空间和类合并
 * 合并命名空间和函数合并
 * 合并命名空间和枚举合并
 */