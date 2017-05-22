

import React from 'react';
import Id from '../../../../public/app/components/tableComponents/td/relationComponents/id.js';

describe('<TABLE TD relationComponents Id />', () => {

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

  wrapper = shallow(< Id {...props}/>);
  });

    it('Component is rendering', () => {
      expect(wrapper).to.exist;
    });

});
