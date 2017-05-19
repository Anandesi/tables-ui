import React from 'react';
import  DateTdComponent from '../../../public/app/components/tableComponents/td/dateTdComponent.js';

describe('<TABLE TD DateTdComponent />', () => {

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

  wrapper = shallow(< DateTdComponent {...props}/>);
  });

    it('Component is rendering', () => {
      expect(wrapper).to.exist;
    });

});
