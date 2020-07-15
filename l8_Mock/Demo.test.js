import { runCb, createObj, getData  }from './Demo'
import Axios from 'axios'

// 1. 普通测试，测试runCb传入的回调函数是否有被执行：
test('测试 runCb', () => {
  // 自己须定义一个函数：写一个模拟的返回值：
  const fn = () => 'hello'
  // 测试其返回值是否通过：
  expect(runCb(fn)).toBe('hello')
})

// 2. Jest的Mock测试，两个核心作用：
// 2.1 捕获函数的调用和返回结果，以及this的调用
// 2.2 设置返回结果
// 2.3 mock第三个作用：改变函数的内部实现
test.only('利用Mock测试 runCb', ()=>{
  /** jest.fn() 方法，捕获函数是否被执行，普通函数没有此能力 */
  const func = jest.fn(
    // ()=> /* 1. 模拟返回结果 方法1 直接写回调*/ 456
  ) 
  // 这种写法和上面这种，直接写在jest.fn(()=>{})的回调函数写法一致,
  // 这种的好处是写一些额外的逻辑：
  func.mockImplementation(()=>456)
  func.mockImplementationOnce(()=> 678)

  // 2. 模拟返回结果：方法2：利用官方api mockReturnValue: 
  // func.mockReturnValue('d')
  // func.mockReturnValueOnce('第一次返回结果').mockReturnValueOnce('第二次返回结果') // mockReturnValueOnce： 模拟返回结果1次

  runCb(func)
  runCb(func)
  console.log(func.mock)
  // {
  //   calls: [ [ 'abc' ], [ 'abc' ] ], // 传进来的回调如果有参数，会记录在该数组里
  //   instances: [ undefined, undefined ],
  //   invocationCallOrder: [ 1, 2 ], 
  //   results: [ { type: 'return', value: 456 }, { type: 'return', value: 456 } ]
  // }

  // 调用了两次：
  expect(func.mock.calls.length).toBe(2)
  expect(func).toBeCalled()
})

test('测试createObj',()=>{
  const func = jest.fn()
  createObj(func)
  console.log(func.mock)
  // {
  //   calls: [ [] ],
  //   instances: [ mockConstructor {} ], // 实例化，即this指向,
  //   invocationCallOrder: [ 1 ],
  //   results: [ { type: 'return', value: undefined } ]
  // }
})

// 无需获取的请求结果的情况下，前端模拟异步测试请求：
jest.mock('axios')
test.only('测试异步获取接口', async () => {
  // 2.3 mock第三个作用：改变函数的内部实现
  // 当前端模拟接口请求，而无需获取结果时，可以用mock请求数据：
  Axios.get.mockResolvedValue({data: 'hello'})
  await getData().then(data=>{
    expect(data).toBe('hello')
  })
})