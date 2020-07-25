import React, { useState } from 'react';

const TodoList = () => {
  const [undoItem, addUndoItem] = useState([])
  return <div>
    <Input onAddUndoItem={value => addUndoItem([value, ...undoItem]) }  />
    <UndoList undoItem={undoItem} addUndoItem={addUndoItem} />
  </div>
}

const Input = ({ onAddUndoItem }) => {
  const [inputVal, setInputVal] = useState('')
  const onChange = e => setInputVal(e.target.value)
  const onKeyUp = e => { 
    if (e.keyCode === 13 && inputVal !=='' ) {
      onAddUndoItem(inputVal)
      setInputVal('')
    }
    return 
  }
  return <div>
    <div>Todo List:</div>
    <input type="text" value={inputVal} onChange={onChange} onKeyUp={onKeyUp} bddtest="inputer" />
  </div>
}

const UndoList = ({undoItem, addUndoItem }) => {
  const delItem = index => {
    const temp = [...undoItem]
    temp.splice(index, 1)
    addUndoItem(temp)
  }
  return <div>
    {undoItem.map((item, index)=> <div key={index}>
      <span bdd="list-item">{item}{' '}
        <button onClick={()=> delItem(index)}>—</button>
      </span>
    </div>)}
  </div>
}

export default TodoList