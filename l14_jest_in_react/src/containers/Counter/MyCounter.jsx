import React,{useState, useEffect} from 'react'

const Counter = ({ onCountChange = () =>{}}) => {
  const [count, setCount] = useState(0)

  // 回调，用于测试：
  useEffect(() => onCountChange(count),[count])

  return <div>
    <p>Count: {count}</p>
    <button onClick={()=> setCount(count + 1)}>+ 1</button>
  </div>
}

export default Counter