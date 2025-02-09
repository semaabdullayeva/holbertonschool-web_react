// jest.setup.js
import 'jest-canvas-mock'; // If you're testing components that use canvas
import { JSDOM } from 'jsdom';

const dom = new JSDOM('');
global.window = dom.window;
global.document = dom.window.document;
global.navigator = {
  userAgent: 'node.js',
};
