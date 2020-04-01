/** Anagrams of string */

const anagrams = str => {
	if (str.length <= 2) return str.length === 2 ? [str, str[1] + str[0]] : [str]

	return str.split('').reduce((acc, letter, i) => acc.concat(anagrams(str.slice(0, i) + str.slice(i + 1)).map(val => letter + val)), [])
}
// anagrams('abc') -> ['abc','acb','bac','bca','cab','cba']

/** 数组平均数 */
const average = arr => arr.reduce((acc, val) => acc + val, 0) / arr.length
// average([1, 2, 3]) -> 2

/** 大写每个单词的首字母 */
const capitalizeEveryWord = str => str.replace(/\b[a-z]/g, char => char.toUpperCase())
// capitalizeEveryWord('hello world!') -> 'Hello World!'

/** 首字母大写 */
const capitalize = (str, lowerRest = false) => str.slice(0, 1).toUpperCase() + (lowerRest ? str.slice(1).toLowerCase() : str.slice(1))
// capitalize('myName', true) -> 'Myname'

