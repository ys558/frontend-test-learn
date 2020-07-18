import React from 'react';

// 传统class组件, 采用Enzyme测试:
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header from '../../components/Header.jsx'

Enzyme.configure({ adapter: new Adapter() });

test('Header 组件包含一个input框', () => {
  const wrapper = shallow(<Header/>)
  const inputEl = wrapper.find("[data-test='input']")
  // expect(inputEl.length).toBe(1)
  // 或者用: jest-enzyme的方法:
  expect(inputEl).toExist()
});

test('Header 组件input 框内容, 初始化应该为空', ()=>{
  const wrapper = shallow(<Header/>)
  const inputEl = wrapper.find("[data-test='input']")
  expect(inputEl.prop('value')).toEqual('')
})

test('Header 组件input 框内容, 当用户输入是，会跟随用户的输入而变化', ()=>{
  const wrapper = shallow(<Header/>)
  const inputEl = wrapper.find("[data-test='input']")
  const userInput = 'test content'
  inputEl.simulate('change', { target: { value: userInput} })
  // 对数据流的测试:
  expect(wrapper.state('value')).toBe(userInput)

  // 另一种写法: 渲染完成后,对DOM相关测试:
  const inputEl2 = wrapper.find("[data-test='input']")
  expect(inputEl2.prop('value')).toBe(userInput)
})

it('Header组件input框, 输入回车时, 如果input框无内容,无操作', ()=>{
  const fn = jest.fn()
  // mock一个数据fn给wrapper:
  const wrapper = shallow(<Header addUndoItem={fn}/>)
  const inputEl = wrapper.find("[data-test='input']")
  wrapper.setState({ value : '' })
  inputEl.simulate('keyUp', {keyCode: 13})
  expect(fn).not.toHaveBeenCalled()
})

it('Header组件input框, 输入回车时, 如果input框有内容, 回调函数应该被调用', ()=>{
  const fn = jest.fn()
  const wrapper = shallow(<Header addUndoItem={fn}/>)
  const inputEl = wrapper.find("[data-test='input']")
  wrapper.setState({ value : 'test for input' })
  inputEl.simulate('keyUp', {keyCode: 13})
  expect(fn).toHaveBeenCalled()
})

test('Header组件input框, 输入回车时, 如果input框有内容, 回车后会被清空', ()=>{
  const fn = jest.fn()
  const wrapper = shallow(<Header addUndoItem={fn}/>)
  const inputEl = wrapper.find("[data-test='input']")
  wrapper.setState({ value : 'test for input' })
  inputEl.simulate('keyUp', {keyCode: 13})
  const InputEl2 = wrapper.find("[data-test='input']")
  expect(InputEl2.prop('value')).toBe('')
})
