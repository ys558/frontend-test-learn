import React, { useState } from 'react'

const ChangeState = () => {
  const [name, setName] = useState('Moe')

  const changeName = () => setName("Steve")
  return <div>
    <ChangeStateChild name={name} changeName={changeName}/>
  </div>
}

export const ChangeStateChild = props => {
  const [state, setState] = useState("initial State")
  const changeState = () => setState("initial State Changed")
  const changeNameToSteve = () => props.changeName()
  return <div>
    <button onClick={changeState}>State Change btn</button>
    <p>{state}</p>
    <button onClick={changeNameToSteve}>Change name</button>
    <p>{props.name}</p>
  </div>
}
export default ChangeState