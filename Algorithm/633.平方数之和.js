/*
 * @lc app=leetcode.cn id=633 lang=javascript
 *
 * [633] 平方数之和
 */

// @lc code=start
/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function (c) {
  let a = 0, b = Math.sqrt(c) | 0
  while (a <= b) {
    let total = a ** 2 + b ** 2
    if (total === c) {
      return true
    } else if ( total < c) {
      a += 1
    } else if (total > c) {
      b -= 1
    }
  }
  return false
}
// @lc code=end
