import React from 'react';
import ColumnOptions from '../../public/app/components/tableComponents/columnOptionsComponent.js';
describe('<TABLE ColumnOptions >', () => {

    let wrapper;
    before(() => {
          const props = {
            columnData:{
                unique:sinon.spy(),
                required:sinon.spy()

            },

            tableStore: {
                getTables:[],
                hideColumn:sinon.spy(),
                sortColumnsData:sinon.spy(),
                deleteColumn:sinon.spy(),
                editColumn:sinon.spy(),

              },
              handleRequestClose:sinon.spy()
          };

    wrapper = shallow(<ColumnOptions {...props}/>);
    });



    it('Component is rendering', () => {
        expect(wrapper).to.exist;
      });



});
