import axios from 'axios'

// 这是真的异步接口请求:
export const fetchData = () => axios.get('/').then(res => res.data)

export const getNum = () => '456'