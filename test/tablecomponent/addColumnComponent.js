import React from 'react';
import AddColumnComponent from '../../public/app/components/tableComponents/addColumnComponent.js';

describe('<TABLE addColumnComponent.js/>', () => {

  let wrapper;
  before(() => {
        const props = {
          tableStore: {
              getTables:[],
              showTopLoader:sinon.spy(),
              addColumn:sinon.spy(),
              showSnackbar:sinon.spy()
            }
        };

  wrapper = shallow(<AddColumnComponent {...props}/>);
  });




    it('Component is rendering', () => {
      expect(wrapper).to.exist;
    });



});
