import React, { Component } from 'react';
import Header from './components/Header'

export default class TodoList extends Component {
  constructor(props){
    super(props)
    this.state = { undoList: [] }
  }
  addUndoItem = value => this.setState({undoList: [...this.state.undoList, value]})
  render(){
    return <div>
      <Header addUndoItem={this.addUndoItem} />
      {this.state.undoList.map((item, index) => <div key={'hehe'+index}>{item}</div>)}
    </div>
  }
}