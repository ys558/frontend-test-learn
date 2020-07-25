import React from 'react'
import { mount, shallow } from 'enzyme'
import TodoList from '../TodoList/index'
import { findTestWrapper } from '../../../src/utils/testUtils'
import { render, cleanup, debug } from '@testing-library/react'


test('1. Input输入框输入内容; 2. 点击回车; 3. 列表中展示用户输入的内容', ()=>{
  const wrapper = mount(<TodoList/>)
  const inputEl = findTestWrapper(wrapper, 'inputer')
  const inputContent = 'x'
  // 1. Input输入框输入内容; 
  inputEl.simulate('change', {target: {value: inputContent }})
  // 2. 点击回车;
  imputEl.simulate('keyUp', {keyCode: 13})
  const listItem = findTestWrapper(wrapper, 'list-item')


})
