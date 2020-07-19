import React from 'react';
import Header from '../../components/Header.jsx'
import { findTestWrapper } from '../../../../utils/testUtils'

import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Header 组件', ()=>{
let wrapper = null
// 利用回调函数, 测试input框是否被调用, 用到jest.fn()
const fn = jest.fn()
beforeEach(()=> wrapper = shallow(<Header addUndoItem={fn}/>))

// 快照测试, 用于保存组件样式等, 不再改动的东西:
test('样式正常渲染', () =>expect(wrapper).toMatchSnapshot())

test('包含一个input输入框', () => {
  const inputEl = findTestWrapper(wrapper, 'input')
  expect(inputEl).toExist()
});

test('input 输入框内容, 初始化应该为空', ()=>{
  const inputEl = findTestWrapper(wrapper, 'input')
  expect(inputEl.prop('value')).toEqual('')
})

test('input 输入框内容, 会跟随用户输入而变化', ()=>{
  const inputEl = findTestWrapper(wrapper, 'input')
  const userInput = 'test content'
  inputEl.simulate('change', { target: { value: userInput} })
  expect(wrapper.state('value')).toBe(userInput)

  // 另一种写法: 渲染完成后,对DOM相关测试:
  const inputEl2 = wrapper.find("[data-test='input']")
  expect(inputEl2.prop('value')).toBe(userInput)
})

it('输入框无内容时, 触发回车事件无反应', ()=>{
  const inputEl = findTestWrapper(wrapper, 'input')
  wrapper.setState({ value : '' })
  inputEl.simulate('keyUp', {keyCode: 13})
  // 判断是否调用了回调函数:
  expect(fn).not.toHaveBeenCalled()
})

it('输入框有内容触发时, 外部传入函数被调用, 且按下enter后, 输入框内容被清空', ()=>{
  const inputEl = findTestWrapper(wrapper, 'input')
  wrapper.setState({ value : 'test for input' })
  inputEl.simulate('keyUp', {keyCode: 13})
  // 判断是否调用了回调函数:
  expect(fn).toHaveBeenCalled()
  expect(fn).toHaveBeenLastCalledWith('test for input')
  const InputEl2 = findTestWrapper(wrapper, 'input')
  // 判断是否为空:
  expect(InputEl2.prop('value')).toBe('')
})
})
