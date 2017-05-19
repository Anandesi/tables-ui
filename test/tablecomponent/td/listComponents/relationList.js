import React from 'react';
import  RelationListComponent  from '../../../../public/app/components/tableComponents/td/listComponents/passwordList.js';

describe('<TABLE TD listComponents RelationListComponent />', () => {

  let wrapper;
  before(() => {
        const props = {
					updateElementData:sinon.spy(),
					removeFromElementData:sinon.spy(),

        };

  wrapper = shallow(< RelationListComponent {...props}/>);
  });

    it('Component is rendering', () => {
      expect(wrapper).to.exist;
    });

});
