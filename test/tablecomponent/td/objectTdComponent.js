
import React from 'react';
import ObjectTdComponent from '../../../public/app/components/tableComponents/td/objectTdComponent.js';

describe('<TABLE TD numberTdComponent.js />', () => {

  let wrapper;
  before(() => {
        const props = {

					// elementData:sinon.spy(),
					// columnType:{
					// 	relatedTo:sinon.spy()
					// },
					fetchObject:sinon.spy(),
					updateObject:sinon.spy(),
					updateElement:sinon.spy()
        };

  wrapper = shallow(<ObjectTdComponent {...props}/>);
  });

    it('Component is rendering', () => {
      expect(wrapper).to.exist;
    });

});
