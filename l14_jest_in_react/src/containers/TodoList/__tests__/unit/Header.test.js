import React from 'react';
import Header from '../../components/Header.jsx'
import { findTestWrapper } from '../../../../utils/testUtils'

import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

let wrapper = null
// 利用回调函数, 测试input框是否被调用, 用到jest.fn()
const fn = jest.fn()
beforeEach(()=> wrapper = shallow(<Header addUndoItem={fn}/>))

// 快照测试, 用于保存组件样式等, 不再改动的东西:
test('Header 样式正常, 无需改动', () =>expect(wrapper).toMatchSnapshot())

test('Header 组件包含一个input框', () => {
  const inputEl = findTestWrapper(wrapper, 'input')
  expect(inputEl).toExist()
});

test('Header 组件input 框内容, 初始化应该为空', ()=>{
  const inputEl = findTestWrapper(wrapper, 'input')
  expect(inputEl.prop('value')).toEqual('')
})

test('Header 组件input 框内容, 当用户输入是，会跟随用户的输入而变化', ()=>{
  const inputEl = findTestWrapper(wrapper, 'input')
  const userInput = 'test content'
  inputEl.simulate('change', { target: { value: userInput} })
  expect(wrapper.state('value')).toBe(userInput)

  // 另一种写法: 渲染完成后,对DOM相关测试:
  const inputEl2 = wrapper.find("[data-test='input']")
  expect(inputEl2.prop('value')).toBe(userInput)
})

it('Header组件input框, 输入回车时, 如果input框无内容,无操作', ()=>{
  const inputEl = findTestWrapper(wrapper, 'input')
  wrapper.setState({ value : '' })
  inputEl.simulate('keyUp', {keyCode: 13})
  // 判断是否调用了回调函数:
  expect(fn).not.toHaveBeenCalled()
})

it('Header组件input框, 输入回车时, 如果input框有内容, 回调函数应该被调用', ()=>{
  const inputEl = findTestWrapper(wrapper, 'input')
  wrapper.setState({ value : 'test for input' })
  inputEl.simulate('keyUp', {keyCode: 13})
  // 判断是否调用了回调函数:
  expect(fn).toHaveBeenCalled()
})

test('Header组件input框, 输入回车时, 如果input框有内容, 回车后会被清空', ()=>{
  const inputEl = findTestWrapper(wrapper, 'input')
  wrapper.setState({ value : 'test for input' })
  // 模拟按下enter:
  inputEl.simulate('keyUp', {keyCode: 13})
  const InputEl2 = findTestWrapper(wrapper, 'input')
  // 判断是否为空:
  expect(InputEl2.prop('value')).toBe('')
})
