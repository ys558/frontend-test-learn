import React from 'react';

// 传统class组件, 采用Enzyme测试:
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TodoList from '../../index'
import { findTestWrapper } from '../../../../utils/testUtils'

Enzyme.configure({ adapter: new Adapter() });

let wrapper = null
beforeEach(()=> wrapper =  shallow(<TodoList/>))

test('TodoList 初始化列表为空', () => {
  expect(wrapper.state('undoList')).toEqual([])
});

test('TodoList 应给Header传递一个增加 UndoList 内容的方法', ()=>{
  const Header = wrapper.find('Header')
  expect(Header.prop('addUndoItem')).toBeTruthy()
})

// 单元测试应该和Header分开, 不要耦合在一起: 
test('当addUndoItem 被执行时, 即Header按回车时, TodoList应该新增一条记录', ()=>{
  wrapper.instance().addUndoItem('test case 1')
  expect(wrapper.state('undoList').length).toBe(1)
  expect(wrapper.state('undoList')[0]).toBe('test case 1')
  wrapper.instance().addUndoItem('test case 1')
  expect(wrapper.state('undoList').length).toBe(2)
})

test('给 UndoList 传递 undoList 数据, 以及 removeItem 方法', ()=>{
  const UndoList = wrapper.find('UndoList')
  expect(UndoList.prop('undoList')).toBeTruthy()
  expect(UndoList.prop('removeItem')).toBeTruthy()
})

test('当 removeItem 方法被执行时, undoList 应该删除内容', ()=>{
  wrapper.setState({
    undoList: ['item 1', 'item 2', 'item 3']
  })
  wrapper.instance().removeItem(1)
  expect(wrapper.state('undoList')).toEqual(['item 1','item 3'])
})