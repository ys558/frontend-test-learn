import React, { Component } from 'react';
import Header from './components/Header'
import UndoList from './UndoList';

export default class TodoList extends Component {
  constructor(props){
    super(props)
    this.state = { undoList: [] }
  }
  addUndoItem = value => this.setState({undoList: [value, ...this.state.undoList]})
  removeItem = index => {
    const newList = [...this.state.undoList]
    newList.splice(index, 1)
    this.setState({ undoList : newList })
  }
  render(){
    const {undoList} = this.state
    return <div>
      <Header addUndoItem={this.addUndoItem} />
      <UndoList undoList={undoList} removeItem={this.removeItem}/>
    </div>
  }
}