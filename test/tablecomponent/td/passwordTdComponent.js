import React from 'react';
import PasswordTdComponent from '../../../public/app/components/tableComponents/td/passwordTdComponent.js';

describe('<TABLE TD passwordTdComponent.js/>', () => {

  let wrapper;
  before(() => {
        const props = {
					updateObject:sinon.spy(),
					updateElement:sinon.spy(),
					

        };

  wrapper = shallow(<PasswordTdComponent {...props}/>);
  });




    it('Component is rendering', () => {
      expect(wrapper).to.exist;
    });



});
