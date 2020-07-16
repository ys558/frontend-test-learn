// import Util from './util'

// let util = null
// beforeAll(()=> util = new Util()) 

// test('测试a方法', ()=>{
//   // expect(util.a(1,2).toBe('12'))
// })

// 模拟类：加入a方法和b方法异常复杂：
// jest.mock发现util是一个类，会自动把类的构造函数和方法变成jest.fn()
jest.mock('./util', ()=>{
  const Util = jest.fn(()=>{
    console.log('constructor')
  })
  Util.prototype.a = jest.fn(()=> console.log('a function'))
  Util.prototype.b = jest.fn(()=> console.log('b function'))
  return Util
})
// 即相当于：
// const Util = jest.fn()
// Util.prototype.a = jest.fn()
// Util.prototype.b = jest.fn()

import demoFunc from './demo'
import Util from './util'

test('测试 demoFunc', ()=>{
  demoFunc()
  expect(Util).toHaveBeenCalled()
  // console.log(Util.mock.instances[0])

  // 测试mock Util里的方法是否可被执行：
  expect(Util.mock.instances[0].a).toHaveBeenCalled()
  expect(Util.mock.instances[0].b).toHaveBeenCalled()
})