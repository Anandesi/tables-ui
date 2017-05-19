



import React from 'react';
import  FilePicker from '../../../public/app/components/tableComponents/td/filePicker.js';

describe('<TABLE TD filePicker/>', () => {

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

  wrapper = shallow(< FilePicker {...props}/>);
  });

    it('Component is rendering', () => {
      expect(wrapper).to.exist;
    });

});
