
import React from 'react';
import NumberTdComponent from '../../../public/app/components/tableComponents/td/numberTdComponent.js';

describe('<TABLE TD numberTdComponent.js />', () => {

  let wrapper;
  before(() => {
        const props = {

					// elementData:sinon.spy(),
					// columnType:{
					// 	relatedTo:sinon.spy()
					// },
					updateObject:sinon.spy(),
					updateElement:sinon.spy(),
        };

  wrapper = shallow(<NumberTdComponent {...props}/>);
  });

    it('Component is rendering', () => {
      expect(wrapper).to.exist;
    });

});
