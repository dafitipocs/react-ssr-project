import jsdom from 'jsdom';

const { JSDOM } = jsdom;
const { document } = (new JSDOM('<!doctype html><html><body></body></html>')).window;

const setup = () => {
  global.document = document;

  return document;
};

const dom = {
  document,
  setup
};

export default dom;
