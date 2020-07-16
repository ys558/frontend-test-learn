import addDivToBody from './demo'
import $ from 'jquery'

test('测试 addDivToBody', ()=>{
  addDivToBody()
  addDivToBody()
  // jest 自己模拟了一套dom的api，叫jsDom
  expect($('body').find('div').length).toBe(2)
})