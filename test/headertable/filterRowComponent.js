import React from 'react';
// import { mount, render, shallow } from 'enzyme';
// import { expect } from 'chai';


//components

import FilterRow from '../../public/app/components/headerComponents/filterRowComponent.js';



describe('<filterRowComponent.js/>', () => {



  let wrapper;
    before(() => {
      wrapper = shallow(< FilterRow/>);
    });

    it('Component is rendering', () => {
      expect(wrapper).to.exist;
  });



});
