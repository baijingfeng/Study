const reg = /^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[^a-zA-Z0-9]).{8,16}$/

const res = reg.test('1woshi42A#@4324')
console.log('res', res)