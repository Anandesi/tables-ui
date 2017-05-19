import React from 'react';
import  NumberListComponent  from '../../../../public/app/components/tableComponents/td/listComponents/numberList.js';

describe('<TABLE TD listComponents NumberListComponent />', () => {

  let wrapper;
  before(() => {
        const props = {
					updateElementData:sinon.spy(),
					removeFromElementData:sinon.spy(),

        };

  wrapper = shallow(< NumberListComponent {...props}/>);
  });

    it('Component is rendering', () => {
      expect(wrapper).to.exist;
    });

});
