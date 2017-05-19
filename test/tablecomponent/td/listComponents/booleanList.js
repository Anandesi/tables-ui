import React from 'react';
import  BooleanListComponent from '../../../../public/app/components/tableComponents/td/listComponents/genericAddToList.js';

describe('<TABLE TD listComponents  BooleanListComponent/>', () => {

  let wrapper;
  before(() => {
        const props = {
					updateElementData:sinon.spy(),
					removeFromElementData:sinon.spy(),
					index:sinon.spy()
        };

  wrapper = shallow(< BooleanListComponent {...props}/>);
  });

    it('Component is rendering', () => {
      expect(wrapper).to.exist;
    });

});
