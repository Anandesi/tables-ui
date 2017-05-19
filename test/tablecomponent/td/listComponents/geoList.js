import React from 'react';
import  GeoListComponent from '../../../../public/app/components/tableComponents/td/listComponents/fileList.js';

describe('<TABLE TD listComponents  GeoListComponent />', () => {

  let wrapper;
  before(() => {
        const props = {
					updateElementData:sinon.spy(),
					removeFromElementData:sinon.spy(),
					
        };

  wrapper = shallow(< GeoListComponent {...props}/>);
  });

    it('Component is rendering', () => {
      expect(wrapper).to.exist;
    });

});
