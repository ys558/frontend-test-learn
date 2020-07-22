import React, { Component } from 'react'
import '../style.css'

export default class Header extends Component {
  constructor(props){
    super(props)
    this.state = { value: '' }
  }
  changeInputValue = e => { this.setState({ value: e.target.value })}
  handleInputKeyup = e => {
    const { value } = this.state
    if(e.keyCode === 13 && value) {
      this.props.addUndoItem(value)
      this.setState({value: ''})
    }
    return
  }
  render() {
    const {value} = this.state
    return (
      <div className='header'>
        <div className="header-content">
          TodoList
          <input
            className='header-input'
            type="text" value={value}
            data-test='header-input'
            onChange={this.changeInputValue}
            onKeyUp ={this.handleInputKeyup}
          />
        </div>
      </div>
    )
  }
}
