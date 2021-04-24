require('raf/polyfill');
const Adapter = require('@wojtekmaj/enzyme-adapter-react-17');
const enzyme = require('enzyme');

enzyme.configure({ adapter: new Adapter() });
