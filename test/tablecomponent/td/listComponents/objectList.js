import React from 'react';
import  ObjectListComponent  from '../../../../public/app/components/tableComponents/td/listComponents/objectList.js';

describe('<TABLE TD listComponents ObjectListComponent />', () => {

  let wrapper;
  before(() => {
        const props = {
					updateElementData:sinon.spy(),
					removeFromElementData:sinon.spy(),

        };

  wrapper = shallow(< ObjectListComponent {...props}/>);
  });

    it('Component is rendering', () => {
      expect(wrapper).to.exist;
    });

});
