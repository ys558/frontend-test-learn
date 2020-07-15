import axios from 'axios'

export const fetchData = fn => {
  axios.get('http://www.dell-lee.com/react/api/demo.json')
  .then(response => fn(response.data))
}
export const nothenInPromise = () => axios.get('http://www.dell-lee.com/react/api/demo.json')

export const test404 = () => axios.get('http://www.dell-lee.com/react/api1/demo.json')
