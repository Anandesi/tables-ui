import React from 'react';
import RowCheckBoxComponent  from '../../public/app/components/tableComponents/rowCheckBoxComponent.js';

describe('<Table RowCheckBoxComponent >', () => {


    let wrapper;
    before(() => {
          const props = {
            tableStore: {

                rowsToDelete:[]
              },
              rowObject:{
                id:''
              },
              checkHandler:sinon.spy(),
              indexValue:sinon.spy()
          };

    wrapper = shallow(< RowCheckBoxComponent {...props}/>);
    });


    it('Component is rendering', () => {
      expect(wrapper).to.exist;
    });

});
