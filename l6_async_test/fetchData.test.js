import { fetchData, nothenInPromise, test404 } from './fetchData'

// 普通写法不能执行异步函数：因为根本没等其执行返回成功，该测试用例就测试结束了：
// test('fetchData 返回结果为 { success: true } ', () =>{
//   fetchData(data => expect(data).toEqual({success: true}))
// })

// 修改为：done
test('fetchData 返回结果为 { success: true } ', done =>{
  fetchData(data => {
    expect(data).toEqual({success: true})
    // 只有单done()执行过，返回值正确才是真正异步结束
    done()
  })
})

// 源码中没有返回值的, 即.then()的写法：
test('nothenInPromise 返回结果为 { success: true } ', () => (
  nothenInPromise().then(response => 
    expect(response.data).toEqual({success: true})
  ))
)
// 也可直接改写为: 利用resolves, 可以达到同样效果:
test('nothenInPromise 返回结果为 { success: true } resolves', () => (
    expect(nothenInPromise()).resolves.toMatchObject({
      data: {success: true}
    })
  )
)
// 也可直接改写为: async/await
test('nothenInPromise 返回结果为 { success: true } async/await 1', async () => (
    await expect(nothenInPromise()).resolves.toMatchObject({
      data: {success: true}
    })
  )
)
test('nothenInPromise 返回结果为 { success: true } async/await 2', async () => {
    const response = await nothenInPromise()
    expect(response.data).toEqual({ success: true})
  }
)


// 异步测试404页面, 如果不加expect.assertions, 则可能不执行catch后面的代码且还通过测试, 这显然不符合预期
test('test404 返回结果为状态码 404 assertions', () => {
  // 确保expect至少执行一次:
  expect.assertions(1)
  return test404().catch(e => {
    expect(e.toString().indexOf('404')>-1).toBe(true)
  })
})
// 也可直接改写为: 利用rejects, 可以达到同样效果:
test('test404 返回结果为状态码 404 rejects', ()=>{
  return expect(test404()).rejects.toThrow()
})
// 也可直接改写为: async/await
test('test404 返回结果为状态码 404 async/await 1', async ()=>{
  await expect(test404()).rejects.toThrow()
})
test('test404 返回结果为状态码 404 async/await 2', async ()=>{
  expect.assertions(1)
  try{
    await test404()
  }catch(e){
    // console.log(e.toString()) // Error: Request failed with status code 404
    expect(e.toString()).toEqual('Error: Request failed with status code 404')
  }
})
