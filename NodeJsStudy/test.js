/** JS如何判断一组数字是否连续  */
var arr = [3, 4, 13, 14, 15, 17, 20, 22]

function test(arr) {
	if (arr.length < 2) {
		return arr
	}

	const retArr = []
	let tempArr = [arr[0]]

	for (let i = 1; i < arr.length; i++) {
		if (arr[i] === arr[i - 1] + 1) {
			tempArr.push
		}
	}

	return retArr
}

/** 九宫格输入法 */
var enter = '22 5555 22 666 00 88 888 7777 4444 666 44'

function jiugongge(enter) {
	const key = ['0 ', '1,.?!', '2ABC', '3DEF', '4GHI', '5JKL', '6MNO', '7PQRS', '8TUV', '9WXYZ']

	let rst = ''
	let begin = 0
	let end = 0
	for (let i = 0; i < enter.length; i++) {
		if (enter[i] === ' ' || i === enter.length - 1) {
			let count = end - begin

			if (i === enter.length - 1) {
				count++
			}

			let index = (count - 1) % key[enter[begin] - '0'].length

			rst += key[enter[begin] - '0'][index]
			begin = i + 1
		}
		end++
	}
	console.log(rst)
	console.log('\n')
}

/** 航班预定座位数 */

var bookings = [
		[1, 2, 10],
		[2, 3, 20],
		[2, 5, 25]
	]
var n = 5

function flightBookings(bookings, n) {
	// let range = (start, end) => new Array(end - start).fill(start).map((el, i) => start + i);
	let rst = new Array(n).fill(0)

	for (let [i, j, num] of bookings) {
		rst[i - 1] += num

		if (j < n) {
			rst[j] -= num
		}
	}

	for (let k = 1; k < n; k++) {
		rst[k] += rst[k - 1]
	}

	console.log(rst)
	return rst
}
