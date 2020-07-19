// 测试共用配置: 
// 1. 再去 package.json里修改
// "setupFilesAfterEnv": [
//   "<rootDir>/src/utils/testSetup.js"
// ],
// 2. react-create-app v3.3+, yarn eject弹出后, 有直接的配置目录:写在这里也行:
// \src\setupTests.js
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });