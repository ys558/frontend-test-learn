jest.mock('./mock2')
// jest.unmock('./mock2')

import {fetchData} from './mock2'



test('fetchData 测试', ()=> {
  return fetchData().then(data => {
    expect(eval(data)).toEqual('123')
  })
})

// 1. 已经mock数据了，会直接取__mocks__/mock2.js的内容, 不会取./mock2.js的内容
// test('getNum', ()=> expect(getNum()).toEqual('456'))

// 1. 解决方法:jest.requireActual, 获取实际文件里的函数:
const {getNum} = jest.requireActual('./mock2')
test('getNum', ()=> expect(getNum()).toEqual('456'))