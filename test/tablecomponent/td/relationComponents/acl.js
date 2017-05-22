
import React from 'react';
import ACLTd  from '../../../../public/app/components/tableComponents/td/relationComponents/boolean.js';

describe('<TABLE TD relationComponents ACLTd />', () => {

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

  wrapper = shallow(< ACLTd  {...props}/>);
  });

    it('Component is rendering', () => {
      expect(wrapper).to.exist;
    });

});
