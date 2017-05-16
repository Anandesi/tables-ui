import React from 'react';

//components

import FilterRow from '../../public/app/components/headerComponents/filterRowComponent.js';

describe('<filterRowComponent.js/>', () => {

let wrapper;
  before(() => {
          const props = {
              changeHandler:sinon.spy(),
              removeListDataValue:sinon.spy(),
              deleteFilter:sinon.spy(),
              filterData:{
                  id:sinon.spy(),
                  filterTypes:[],
                  columnType:sinon.spy(),
                  dataValue:sinon.spy(),
                  relatedTo:sinon.spy(),
                  listDataValue:[],
                  type:[]

              },
              tableStore: {
                  getColumns:[]
              }

        };
      wrapper = shallow(<FilterRow {...props}/>);
    });


    it('Component is rendering', () => {
      expect(wrapper).to.exist;
    });



});
