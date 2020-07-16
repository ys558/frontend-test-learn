import timer from './timer'

// 如果所测的timer过长，则不能采用这种方法测试：
// test('timer 测试', done =>{
//   timer(()=> {
//     expect(1).toBe(1)
//     done()
//   })
// })

jest.useFakeTimers()
test('timer 测试', () =>{
  const fn = jest.fn()
  timer(fn)
  // jest.runAllTimers()

  // 只执行当前队列里的Timer：不执行嵌套里的回调的timer：
  // jest.runOnlyPendingTimers()
  // Timer被调用的次数：
  // expect(fn).toHaveBeenCalledTimes(1)
  
  // jest v24版本中，提供了另外一个api检测：
  // 这里相当于快进3秒，直接执行：
  jest.advanceTimersByTime(3000)
  expect(fn).toHaveBeenCalledTimes(1)
  jest.advanceTimersByTime(3000)
  expect(fn).toHaveBeenCalledTimes(2)
})

// 如果同一代码片段有多个timer代码片段，则须用到beforeEach()来分割执行代码块，达到解耦的目的
// beforeEach('timer2 测试', ()=>{

// })