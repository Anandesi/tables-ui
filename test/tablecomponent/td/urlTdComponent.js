import React from 'react';
import URLTdComponent from '../../../public/app/components/tableComponents/td/urlTdComponent.js';

describe('<TABLE URLTdComponent />', () => {

  let wrapper;
  before(() => {
        const props = {
					updateObject:sinon.spy(),
					updateElement:sinon.spy(),
					

        };

  wrapper = shallow(<URLTdComponent {...props}/>);
  });




    it('Component is rendering', () => {
      expect(wrapper).to.exist;
    });



});
