// 模拟异步请求:
export const fetchData = () => {
  return new Promise((resolve, reject)=>{
    resolve("(function(){ return '123' })()")
  })
}

