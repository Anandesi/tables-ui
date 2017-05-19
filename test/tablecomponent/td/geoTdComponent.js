


import React from 'react';
import  GeoTdComponent  from '../../../public/app/components/tableComponents/td/geoTdComponent.js';

describe('<TABLE TD GeoTdComponent />', () => {

  let wrapper;
  before(() => {
        const props = {

					
					fetchObject:sinon.spy(),
					updateObject:sinon.spy(),
					updateElement:sinon.spy()
        };

  wrapper = shallow(< GeoTdComponent {...props}/>);
  });

    it('Component is rendering', () => {
      expect(wrapper).to.exist;
    });

});
