import React from 'react';
import App from './App';

// 这里引入Enyme，他对React组件进行包装：
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

test('renders without crashing', () => {
  // 由于create-react-app本身是单页面应用，如果要对其进行class里的状态进行检查，普通ReactDOM操作不合适：
  // const div = document.createElement('div')
  // ReactDOM.render(<App/>, div)
  // const container = div.getElementsByClassName('App')
  // console.log(container)
  // expect(container.length).toBe(1)

  // shallow是浅渲染: 适用于单元测试: 即组件无嵌套时使用:
  const wrapperShallow = shallow(<App/>)
  // console.log(wrapperShallow.find('.app'))
  expect(wrapperShallow.find('.app').length).toBe(1)
  // console.log(expect(wrapperShallow.find('.app').prop('title')))
  expect(wrapperShallow.find('.app').prop('title')).toBe('123')

  /*
  另外, 如果我们用源代码的class去作为选择器进行选择, 耦合性会比较高,
  假如源代码改变class名字,那么所有测试代码也要一并跟着改.
  解决办法:
  在源代码设置一个转为前端测试的属性名, 如: data-test
  */
  expect(wrapperShallow.find('[data-test="app-container"]').length).toBe(1)
  expect(wrapperShallow.find('[data-test="app-container"]').prop('title')).toBe('123')

  // jest-enzyme 的匹配器:
  // npm i -D jest-enzyme 或 yarn add -D jest-enzyme
  // https://github.com/FormidableLabs/enzyme-matchers/tree/master/packages/jest-enzyme#usage-with-create-react-app
  // 拉到最底部有配置介绍, 在create-react-app中的 src/setupTests.js 文件里添加:
  // import 'jest-enzyme';
  // 之后能能运用其提供的api, 把上面的两行改写:
  expect(wrapperShallow.find('[data-test="app-container"]')).toExist()
  expect(wrapperShallow.find('[data-test="app-container"]')).toHaveProp('title','123')

  // mount测试一堆组件包括子组件的集合, 适用于集成测试: 即组件存在嵌套时使用:
  const wrapperMount = mount(<App/>)
  // 如果页面涉及敏感关键信息, 不宜过度更改的话, 可以用snapshot的功能, 把快照保存下来: 
  // 生产 快照, 如果改了源码, 就会出现测试不通过, 这时如果要更新快照, 则在控制台按u键
  // l14_jest_in_react\src\__snapshots__\App.test.js.snap
  expect(wrapperMount).toMatchSnapshot()
  
});
