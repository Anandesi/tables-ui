
import React from 'react';
import ViewRelation from '../../../../public/app/components/tableComponents/td/relationComponents/viewRelation.js';

describe('<TABLE TD relationComponents ViewRelation />', () => {

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

  wrapper = shallow(< ViewRelation  {...props}/>);
  });

    it('Component is rendering', () => {
      expect(wrapper).to.exist;
    });

});
