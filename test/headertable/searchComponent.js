
import React from 'react';
//components

import Search from '../../public/app/components/headerComponents/searchComponent.js';

describe('< Search/>', () => {
  let wrapper;
    before(() => {
      wrapper = shallow(< Search/>);
    });

    it('Component is rendering', () => {
      expect(wrapper).to.exist;
  });
});
