

import React from 'react';
import ObjectC from '../../../../public/app/components/tableComponents/td/relationComponents/object.js';

describe('<TABLE TD relationComponents ObjectC />', () => {

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

  wrapper = shallow(< ObjectC {...props}/>);
  });

    it('Component is rendering', () => {
      expect(wrapper).to.exist;
    });

});
