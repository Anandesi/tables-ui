






import React from 'react';




import ViewACL from '../../../public/app/components/tableComponents/td/aclComponents/viewAcl.js';




describe('<ViewACL >', () => {



  let wrapper;
    before(() => {
      wrapper = shallow(< ViewACL />);
    });

    it('Component is rendering', () => {
      expect(wrapper).to.exist;
  });



});
