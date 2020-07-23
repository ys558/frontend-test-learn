import React from 'react'
import { mount } from 'enzyme'
import TodoList from '../TodoList/index'
import { findTestWrapper } from '../../../src/utils/testUtils'
import { render, cleanup } from '@testing-library/react'

test('1. Input输入框输入内容; 2. 点击回车; 3. 列表中展示用户输入的内容', ()=>{
  const {debug } = render(<TodoList/>)
  debug()
})
