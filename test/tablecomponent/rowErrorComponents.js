import React from 'react';
//component
import RowErrorComponent  from '../../public/app/components/tableComponents/rowErrorComponents.js';

describe('<TABLE RowErrorComponent  >', () => {

  let wrapper;
  before(() => {
    const props = {
      error:sinon.spy()
    };

  wrapper = shallow(<RowErrorComponent  {...props}/>);
  });

    it('Component is rendering', () => {
      expect(wrapper).to.exist;
    });

});
