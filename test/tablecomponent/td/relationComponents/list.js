

import React from 'react';
import ListTdComponent from '../../../../public/app/components/tableComponents/td/relationComponents/list.js';

describe('<TABLE TD relationComponents ListTdComponent />', () => {

  let wrapper;
  before(() => {
        const props = {
					updateElementData:sinon.spy(),
					removeFromElementData:sinon.spy(),
					index:sinon.spy(),
          generaliseACL:sinon.spy(),
          columnData:{
            name:sinon.spy()
          },
          elementData:{
            document:{
              read:{
                allow:{
                  user:[]
                }
              }
            }
          }




        };

  wrapper = shallow(< ListTdComponent {...props}/>);
  });

    it('Component is rendering', () => {
      expect(wrapper).to.exist;
    });

});
