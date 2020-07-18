import React, { Component } from 'react'

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
      <div>
        {/* data-test='input' 专门为测试单元测试而准备的属性: */}
        <input 
          type="text" value={value}
          data-test='input'
          onChange={this.changeInputValue}
          onKeyUp ={this.handleInputKeyup}
        />
      </div>
    )
  }
}
