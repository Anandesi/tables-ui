import { expect } from 'chai';
import  sinon from 'sinon';
import { mount, render, shallow } from 'enzyme';
require.extensions['.css'] = () => {
  return;
};

global.expect = expect;
global.sinon = sinon;
//global.spy = spy;

global.mount = mount;
global.render = render;
global.shallow = shallow;
