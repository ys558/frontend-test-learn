// const math = require('./math')
// const {add, minus} = math

// 2. 将mommonjs的导出方式改为es的导出方式：
// 此时需安装：nyarn add @babel/core@7.4.5 @babel/preset-env@7.4.5 -D
// 再创建.bablerc
import math from './math'
import {add, minus} from './math'

test('测试加法3+7', ()=> expect(add(3,7)).toBe(10))
test('测试加法3-3', ()=> expect(minus(3,3)).toBe(0))
