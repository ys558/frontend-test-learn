// 2. 将mommonjs的导出方式改为es的导出方式：
export const add = (a, b) => a+b
export const minus = (a, b) => a-b

// // 1. 这里套上try/catch为了在浏览器运行，实际上项目中, 多用前端框架，如react，vue， 本身即模块化开心，不需要写try/catch：
// try{
//   module.exports = {
//     add, minus
//   }
// }catch (e){}