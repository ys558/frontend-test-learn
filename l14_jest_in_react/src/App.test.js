import React from 'react';
import App from './App';

// 这里引入Enyme，他对React组件进行包装：
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });

test('renders without crashing', () => {
  // 由于create-react-app本身是单页面应用，如果要对其进行class里的状态进行检查，普通操作不合适：
  // const div = document.createElement('div')
  // ReactDOM.render(<App/>, div)

  // const container = div.getElementsByClassName('App')
  // console.log(container)
  // expect(container.length).toBe(1)

  const wrapper = shallow(<App/>)
  // console.log(wrapper.find('.app'))
  expect(wrapper.find('.app').length).toBe(1)
  // console.log(expect(wrapper.find('.app').prop('title')))
  expect(wrapper.find('.app').prop('title')).toBe('123')

});
