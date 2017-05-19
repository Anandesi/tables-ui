


import React from 'react';
import  IdTdComponent from '../../../public/app/components/tableComponents/td/idTdComponent.js';

describe('<TABLE TD  IdTdComponent />', () => {

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

  wrapper = shallow(< IdTdComponent {...props}/>);
  });

    it('Component is rendering', () => {
      expect(wrapper).to.exist;
    });

});
