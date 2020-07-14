const math = require('./math')
const {add, minus} = math

test('测试加法3+7', ()=> expect(add(3,7)).toBe(10))
test('测试加法3-3', ()=> expect(minus(3,3)).toBe(0))
