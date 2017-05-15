import React from 'react';
//components

import FilterRows from '../../public/app/components/headerComponents/filterRowsComponent.js';
describe('<FilterRowsComponent/>', () => {
  let wrapper;
    before(() => {
      wrapper = shallow(< FilterRows />);
    });

    it('Component is rendering', () => {
      expect(wrapper).to.exist;
  });

});
