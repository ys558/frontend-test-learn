import axios from 'axios'

export const runCb = cb => cb('abc')

export const createObj = (classItem) => {
  new classItem()
}

export const getData = () => axios.get('/api').then(res => res.data)