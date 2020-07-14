import { fetchData, fetchData1 } from './fetchData'

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
test('fetchData 返回结果为 { success: true } ', done =>
  fetchData1().then(response => 
    expect(response.data).toEqual({success: true})
  )
)