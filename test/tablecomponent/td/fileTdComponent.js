


import React from 'react';
import  FileTdComponent from '../../../public/app/components/tableComponents/td/fileTdComponent.js';

describe('<TABLE TD FileTdComponent />', () => {

  let wrapper;
  before(() => {
        const props = {

					// elementData:sinon.spy(),
					// columnType:{
					// 	relatedTo:sinon.spy()
					// },

					// generaliseList:sinon.spy(),
					// columnType:{
					// 	relatedTo:sinon.spy()
					// },
					fetchObject:sinon.spy(),
					updateObject:sinon.spy(),
					updateElement:sinon.spy()
        };

  wrapper = shallow(< FileTdComponent  {...props}/>);
  });

    it('Component is rendering', () => {
      expect(wrapper).to.exist;
    });

});
