import React from 'react';
import  GenericAddToList from '../../../../public/app/components/tableComponents/td/listComponents/fileList.js';

describe('<TABLE TD listComponents  GenericAddToList />', () => {

  let wrapper;
  before(() => {
        const props = {
					updateElementData:sinon.spy(),
					removeFromElementData:sinon.spy(),
					columnType:''
        };

  wrapper = shallow(< GenericAddToList {...props}/>);
  });

    it('Component is rendering', () => {
      expect(wrapper).to.exist;
    });

});
