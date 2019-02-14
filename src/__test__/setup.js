import 'jest-dom/extend-expect';
import 'react-testing-library/cleanup-after-each';

require('raf/polyfill');
const Adapter = require('enzyme-adapter-react-16');
const enzyme = require('enzyme');

enzyme.configure({ adapter: new Adapter() });
