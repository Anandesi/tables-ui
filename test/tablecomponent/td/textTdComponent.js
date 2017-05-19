import React from 'react';
import TextTdComponent from '../../../public/app/components/tableComponents/td/textTdComponent.js';

describe('<TABLE textTdComponent.js />', () => {

  let wrapper;
  before(() => {
        const props = {
					updateObject:sinon.spy(),
					updateElement:sinon.spy(),
					//elementData:[]

        };

  wrapper = shallow(<TextTdComponent {...props}/>);
  });




    it('Component is rendering', () => {
      expect(wrapper).to.exist;
    });



});
