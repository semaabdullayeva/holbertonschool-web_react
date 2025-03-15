import { JSDOM } from 'jsdom';

// Create a fake browser environment
const dom = new JSDOM('<!DOCTYPE html><html><head></head><body></body></html>');

global.window = dom.window;
global.document = dom.window.document;
global.navigator = {
  userAgent: 'node.js',
};

// Mock Aphrodite’s style injection to prevent errors
document.querySelector = (selector) => {
  if (selector === 'style[data-aphrodite]') {
    return document.createElement('style'); // Mock style tag
  }
  return null;
};
