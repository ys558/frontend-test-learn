import Counter from './Counter'

describe('counter 的测试：', ()=>{
  // 测试class类须先实例化：
  // const counter = new Counter()
  
  // 但上面这种方法有弊端，counter会被下面多个测试用例重复调用，
  // 单独中间某一测试用例，会连累其他前面和后面的测试用例也要一起改
  // Jest建议用其提供的钩子函数beforeEach(), 使得每一个测试用例独立运行
  let counter = null
  beforeEach(()=>{
    console.log('beforeEach')
    counter = new Counter()
  })
  
  // 另外还有：afterEach()，每次beforeEach()执行后调用；beforeAll(), 所有测试用例执行之前执行；afterAll(), 所有测试用例执行之后执行
  afterEach(()=> console.log('afterEach'))
  beforeAll(()=> console.log('beforeAll'))
  afterAll(()=> console.log('afterAll'))
  
  // 分组：describe() 把加法和减法的代码分别分组进行处理：
  describe('加法相关的代码',()=>{
    // .only修饰符，仅测试该用例，其余用例跳过
    test.only('测试Counter中的add1方法：', ()=> {
      console.log('测试Counter中的add1方法：')
      counter.add1()
      expect(counter.number).toBe(1)
    })
    test('测试Counter中的add2方法：', ()=> {
      console.log('测试Counter中的add1方法：')
      counter.add2()
      expect(counter.number).toBe(2)
    })
  })
  
  
  describe('减法相关代码', ()=> {
    test('测试Counter中的minus1方法：', ()=> {
      console.log('测试Counter中的minus1方法：')
      counter.minus1()
      expect(counter.number).toBe(-1)
    })
    test('测试Counter中的minus2方法：', ()=> {
      console.log('测试Counter中的minus1方法：')
      counter.minus2()
      expect(counter.number).toBe(-2)
    })
  })
})

