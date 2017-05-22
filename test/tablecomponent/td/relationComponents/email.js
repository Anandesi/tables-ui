import React from 'react';
import Email  from '../../../../public/app/components/tableComponents/td/relationComponents/email.js';

describe('<TABLE TD relationComponents Email />', () => {

  let wrapper;
  before(() => {
        const props = {
					updateElementData:sinon.spy(),
					// removeFromElementData:sinon.spy(),
					// index:sinon.spy(),
          // generaliseACL:sinon.spy(),
          columnData:{
            name:sinon.spy()
          }
          // },
          // elementData:{
          //   document:{
          //     read:{
          //       allow:{
          //         user:[]
          //       }
          //     }
          //   }
          // }




        };

  wrapper = shallow(< Email {...props}/>);
  });

    it('Component is rendering', () => {
      expect(wrapper).to.exist;
    });

});
