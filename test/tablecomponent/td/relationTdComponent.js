import React from 'react';
import RelationTd from '../../../public/app/components/tableComponents/td/relationTdComponent.js';

describe('<TABLE TD relationTdComponent.js />', () => {

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

  wrapper = shallow(<RelationTd {...props}/>);
  });

    it('Component is rendering', () => {
      expect(wrapper).to.exist;
    });

});
