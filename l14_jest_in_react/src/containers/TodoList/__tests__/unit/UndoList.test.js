import React from 'react';

// 传统class组件, 采用Enzyme测试:
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import UndoList from '../../UndoList'
import { findTestWrapper } from '../../../../utils/testUtils';

Enzyme.configure({ adapter: new Adapter() });

let wrapper = null
beforeEach(()=> wrapper =  shallow(<UndoList undoList={[]} />))

test('UndoList 未完成列表初始化数目为0, 列表无内容', () => {
  const countEl = findTestWrapper(wrapper, 'count')
  const listItems = findTestWrapper(wrapper, 'list-item')
  expect(countEl.text()).toEqual('0')
  expect(listItems.length).toEqual(0)
});

test('UndoList 有内容时, count数目显示数据长度, 列表不为空', () => {
  const listData = ['item one', 'item two']
  const wrapper = shallow(<UndoList undoList={listData}/>)

  const countEl = findTestWrapper(wrapper, 'count')
  const listItems = findTestWrapper(wrapper, 'list-item')
  expect(countEl.text()).toEqual('2')
  expect(listItems.length).toEqual(2)
});

test('UndoList 有内容时, 每条记录后有对应的删除按钮', () => {
  const listData = ['item one', 'item two']
  const wrapper = shallow(<UndoList undoList={listData}/>)
  const removeItems = findTestWrapper(wrapper, 'remove-item')
  expect(removeItems).toExist()
});

test('UndoList 有内容时, 点击每条记录后的删除按钮, 会调用删除方法', () => {
  const listData = ['item 1','item 2' ,'item 3']
  const fn = jest.fn()
  const wrapper2 = shallow(<UndoList undoList={listData} removeItem={fn}/>)
  const removeItems = findTestWrapper(wrapper2, 'remove-item')
  removeItems.at(1).simulate('click')
  expect(fn).toHaveBeenLastCalledWith(1)
});

