import React, { Component } from 'react'

export default class UndoList extends Component {
  constructor(props){
    super(props)
  }
  render() {
    const { undoList, removeItem } = this.props
    return (
      <div className="undo-list">
        <h1 className="undo-list-title">
          正在进行
          <div data-test="count" className='undo-list-count'>{undoList.length}</div>
        </h1>
        <ul className='undo-list-content'>
        {undoList.map((item, index) => 
          <li className='undo-list-item' key={`${item}-${index}`} data-test="list-item"> {item}
            <div className='undo-list-remove' onClick={()=>removeItem(index)} data-test="remove-item">
              ×
            </div>
          </li>
        )}
        </ul>
      </div>
    )
  }
}
