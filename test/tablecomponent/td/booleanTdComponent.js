import React from 'react';
import  BooleanTdComponent from '../../../public/app/components/tableComponents/td/booleanTdComponent.js';

describe('<TABLE TD BooleanTdComponent/>', () => {

  let wrapper;
  before(() => {
        const props = {

					// elementData:sinon.spy(),
					// columnType:{
					// 	relatedTo:sinon.spy()
					// },

					generaliseList:sinon.spy(),
					columnType:{
						relatedTo:sinon.spy()
					},
					fetchObject:sinon.spy(),
					updateObject:sinon.spy(),
					updateElement:sinon.spy()
        };

  wrapper = shallow(< BooleanTdComponent {...props}/>);
  });

    it('Component is rendering', () => {
      expect(wrapper).to.exist;
    });

});
