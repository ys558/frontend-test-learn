import React, { Component } from 'react'

export default class UndoList extends Component {
  constructor(props){
    super(props)
  }
  render() {
    const { undoList, removeItem } = this.props
    return (
      <div>
        <div data-test="count">{undoList.length}</div>
        <ul>
        {undoList.map((item, index) => 
          <li key={`${item}-${index}`} data-test="list-item"> {item}
            <button onClick={()=>removeItem(index)} data-test="remove-item">
              remove
            </button>
          </li>
        )}
        </ul>
      </div>
    )
  }
}
