import React from 'react';
import ReactDOM from 'react-dom' ;

 import ViewACL from '../../../../public/app/components/tableComponents/td/aclComponents/viewAcl.js';

describe('<TABLE TD ACLcomponents ViewACL/>', () => {

  let wrapper;

  before(() => {
        const props = {
					aclList:[]
				// 	aclList:{
				// 		id:[],
				// 		type:[]
				// }

        };

  wrapper = shallow(<ViewACL {...props}/>);
  });




    it('Component is rendering', () => {
      expect(wrapper).to.exist;
    });



});
