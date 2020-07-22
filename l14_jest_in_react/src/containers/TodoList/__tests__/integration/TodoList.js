import React from 'react'
import { shallow, mount } from 'enzyme'
import TodoList from '../../index'
import { findTestWrapper } from '../../../../utils/testUtils'

test(`
  1. 输入框输入内容
  2. 点击回车
  3. 列表中展示用户输入的内容项
`, ()=> {
  // 1. 输入框输入内容
  const wrapper = mount(<TodoList/>)
  const inputEl = findTestWrapper(wrapper, 'header-input')
  const content = 'xxx'
  inputEl.simulate('change', {
    target: {value:content}
  })

  // 2. 点击回车
  inputEl.simulate('keyUp', {keyCode:13})

  const listItem = findTestWrapper(wrapper,'list-item')
  // 3. 列表中展示用户输入的内容项:
  expect(listItem.length).toEqual(1)
  // 这里用toContain
  expect(listItem.text()).toContain(content)
})