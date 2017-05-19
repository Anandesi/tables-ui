import React from 'react';
import  TextListComponent  from '../../../../public/app/components/tableComponents/td/listComponents/textList.js';

describe('<TABLE TD listComponents TextListComponent />', () => {

  let wrapper;
  before(() => {
        const props = {
					updateElementData:sinon.spy(),
					removeFromElementData:sinon.spy(),

        };

  wrapper = shallow(< TextListComponent {...props}/>);
  });

    it('Component is rendering', () => {
      expect(wrapper).to.exist;
    });

});
