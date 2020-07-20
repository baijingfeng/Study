const fp = require('lodash/fp')

// console.log('fp.replace', fp.replace)
const f = fp.flowRight(fp.replace(/\s+/g, '_'), fp.toLower)

console.log('f', f('Hello   World'))