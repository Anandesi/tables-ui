import React from 'react';
import  EmailTdComponent from '../../../public/app/components/tableComponents/td/emailTdComponent.js';

describe('<TABLE TD EmailTdComponent/>', () => {

  let wrapper;
  before(() => {
        const props = {
					fetchObject:sinon.spy(),
					updateObject:sinon.spy(),
					updateElement:sinon.spy()
        };

  wrapper = shallow(< EmailTdComponent {...props}/>);
  });

    it('Component is rendering', () => {
      expect(wrapper).to.exist;
    });

});
