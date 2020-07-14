// test case 测试用例：

// 具体可见：
// https://jestjs.io/docs/en/using-matchers

// toBe匹配器：连引用地址一起匹配
test('测试10是否为10', ()=> {
  // toBe 匹配器 matchers
  // 类似于objects.is ===
  expect(10).toBe(10)
})

// toEqual：内容匹配器，只匹配内容
test('内容匹配器', ()=>{
  const a = {one:1}
  expect(a).toEqual({one:1})
})

// null匹配器
test('null匹配器', ()=>{
  const a = null
  expect(a).toBeNull()
})

// 真假匹配器:
test('undefined matcher', ()=>{
  const a = undefined
  expect(a).toBeUndefined(undefined)
})
test('defined matcher', ()=>{
  const a = 1
  expect(a).toBeDefined()
})

// ture false匹配器：
test('toBeTruthy matcher', ()=>{
  const a = 1 /* 0或false则不能通过 */
  expect(a).toBeTruthy()
})
test('toBeTruthy matcher', ()=>{
  const a = 0 
  expect(a).toBeFalsy()
})

// not 取反匹配器
test('toBeTruthy matcher', ()=>{
  const a = 1
  expect(a).not.toBeFalsy()
})

// 数字相关匹配器：
test('number matcher', ()=>{
  const value = 2.0 + 2.0
  expect(value).toBeGreaterThan(3)
  expect(value).toBeGreaterThanOrEqual(3.5)
  expect(value).toBeLessThan(5)
  expect(value).toBeLessThanOrEqual(4.5)
  expect(value).toBeCloseTo(4.0) // 用于测试浮点数相加

  // toBe and toEqual are equivalent for numbers
  expect(value).toBe(4)
  expect(value).toEqual(4)
})

// 字符串
test('there is no I in team', () => {
  expect('team').not.toMatch(/I/);
});
test('but there is a "stop" in Christoph', () => {
  expect('Christoph').toMatch(/stop/);
});

// Array, Set
const shoppingList = [
  'diapers',
  'kleenex',
  'trash bags',
  'paper towels',
  'beer',
]
test('the shopping list has beer on it', () => {
  expect(shoppingList).toContain('beer')
  expect(new Set(shoppingList)).toContain('beer')
})

// exception
const throwNewError = () => {throw new Error(`it's a new error`)}
// tothrow()可写字符串或正则，检验和Error(`it's a new error`)里的信息是否一致
test('toThrow', ()=> expect(throwNewError).toThrow('xx'))