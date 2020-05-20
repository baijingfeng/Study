/*
 * @lc app=leetcode.cn id=829 lang=javascript
 *
 * [829] 连续整数求和
 */

// @lc code=start
/**
 * @param {number} N
 * @return {number}
 */
var consecutiveNumbersSum = function (N) {
	let res = 0
	for (let i = 1; N > 0; N -= i++) {
		res += N % i == 0
	}
	return res
}
// @lc code=end
