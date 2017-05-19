import React from 'react';
//components

import GenericNewTd from '../../public/app/components/tableComponents/genericNewTdComponent.js';

describe('<TABLE GenericNewTd/>', () => {

  let wrapper;
    before(() => {
          const props = {
            generaliseComponent:sinon.spy(),
            columnType:{
              dataType:sinon.spy(),
              name:sinon.spy(),
              required:sinon.spy()
            },
            columnData:{
              document:[]
            },
            tableStore: {

                showSnackbar:sinon.spy()
              }
          };

    wrapper = shallow(<GenericNewTd {...props}/>);
    });



    it('Component is rendering', () => {
      expect(wrapper).to.exist;
  });
});
