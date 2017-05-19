import React from 'react';
import  PasswordListComponent  from '../../../../public/app/components/tableComponents/td/listComponents/relationList.js';

describe('<TABLE TD listComponents PasswordListComponent />', () => {

  let wrapper;
  before(() => {
        const props = {
					updateElementData:sinon.spy(),
					removeFromElementData:sinon.spy(),

        };

  wrapper = shallow(< PasswordListComponent {...props}/>);
  });

    it('Component is rendering', () => {
      expect(wrapper).to.exist;
    });

});
