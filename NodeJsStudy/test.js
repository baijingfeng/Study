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
	const charDictArr = ['0 ', '1,.?!', '2ABC', '3DEF', '4GHI', '5JKL', '6MNO', '7PQRS', '8TUV', '9WXYZ']
	for(let i = 0; i < enter.length; i++) {
		
	}
}
