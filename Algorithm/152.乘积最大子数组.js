/*
 * @lc app=leetcode.cn id=152 lang=javascript
 *
 * [152] 乘积最大子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
	if (nums.length === 1) {
		return nums[0]
	}

	let result = 0
	let targetValue = 1,
		isChange = false,
		targetItem = []

	let targetArr = []

	for (let value of nums) {
		if (value !== 0) {
			;(targetValue *= value), (isChange = true)
			targetItem.push(value)
		} else {
			if (isChange) {
				targetArr.push([targetValue, targetItem])
			} else {
				targetArr.push([0, []])
			}

			;(targetValue = 1), (targetItem = [])
		}
  }
  
  
}
// @lc code=end
maxProduct([2, 3])
