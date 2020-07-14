// var result = add(3,7)
// var expected = 10
// if (result !== 10) {
//   throw Error(`3+7 应该等于${expected}, 但结果是${result}`)
// }

// var result = minus(3,3)
// var expected = 0
// if (result !== 0) {
//   throw Error(`3-3 应该等于${expected}, 但结果是${result}`)
// }

const expect = result => ({
  toBe: actual => {
    if (result !== actual) throw new Error(`预期值和实际值不相等 预期${actual} 结果是${result}`) 
  }
})

const test = (desc, fn) => {
  try{
    fn()
    console.log(`${desc} 通过测试`)
  }catch (e){
    console.log(`${desc} 没通过测试 ${e}`)
  }
}

test('测试加法3+7', ()=> expect(add(3,7)).toBe(10))
test('测试加法3-3', ()=> expect(minus(3,3)).toBe(0))