import React from 'react';

// 传统class组件, 采用Enzyme测试:
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TodoList from '../../index'

Enzyme.configure({ adapter: new Adapter() });

let wrapper = null
beforeEach(()=> wrapper =  shallow(<TodoList/>))

test('TodoList 初始化列表为空', () => {
  expect(wrapper.state('undoList')).toEqual([])
});

test('TodoList 应给Header传递一个增加 UndoList 内容的方法', ()=>{
  const Header = wrapper.find('Header')
  expect(Header.prop('addUndoItem')).toBe(wrapper.instance().addUndoItem)
})

test('当Header按回车时, TodoList应该新增一条记录', ()=>{
  const Header = wrapper.find('Header')
  const addFunc = Header.prop('addUndoItem')
  addFunc('undo recrod 1')
  expect(wrapper.state('undoList').length).toBe(1)
  expect(wrapper.state('undoList')[0]).toBe('undo recrod 1')
})