




import React from 'react';




import RowErrorComponent  from '../../public/app/components/tableComponents/rowErrorComponents.js';




describe('<RowCheckBoxComponent >', () => {



  let wrapper;
    before(() => {
      wrapper = shallow(< RowErrorComponent />);
    });

    it('Component is rendering', () => {
      expect(wrapper).to.exist;
  });



});
