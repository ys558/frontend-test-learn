import React from 'react';

// 传统class组件, 采用Enzyme测试:
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TodoList from '../../index'
import { findTestWrapper } from '../../../../utils/testUtils'

Enzyme.configure({ adapter: new Adapter() });

describe('TodoList 组件', ()=>{
let wrapper = null
beforeEach(()=> wrapper =  shallow(<TodoList/>))

test('初始化列表为空', () => {
  expect(wrapper.state('undoList')).toEqual([])
});

test('Header组件存在 addUndoItem 组件', ()=>{
  const Header = wrapper.find('Header')
  expect(Header.prop('addUndoItem')).toBeTruthy()
})

// 单元测试应该和Header分开, 不要耦合在一起: 
test('addUndoItem 被执行时, undoList应该新增一条记录', ()=>{
  const {addUndoItem} = wrapper.instance()
  const content = 'xxx'
  addUndoItem(content)
  expect(wrapper.state('undoList').length).toBe(1)
  expect(wrapper.state('undoList')[0]).toBe(content)
  addUndoItem(content)
  expect(wrapper.state('undoList').length).toBe(2)
})

test('UndoList 组件应该接收undoList 和 removeItem 两个参数', ()=>{
  const UndoList = wrapper.find('UndoList')
  expect(UndoList.prop('undoList')).toBeTruthy()
  expect(UndoList.prop('removeItem')).toBeTruthy()
})

test('当 removeItem 方法被执行时, undoList 应该删除内容', ()=>{
  const mockData = ['item 1', 'item 2', 'item 3'] 
  wrapper.setState({ undoList: mockData })
  wrapper.instance().removeItem(1)
  expect(wrapper.state('undoList')).toEqual([mockData[0], mockData[2]])
})
})
