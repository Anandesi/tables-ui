import React from 'react';
//component
import GenericTh from '../../public/app/components/tableComponents/genericThTrComponent.js';

describe('< TABLE genericThTrComponent >', () => {

  let wrapper;
  before(() => {
        const props = {
          selectDeselectAllRows:sinon.spy(),
          tableStore: {
              hiddenColumns:[],
              getColumns:[]
            }
        };

  wrapper = shallow(<GenericTh {...props}/>);
  });






    it('Component is rendering', () => {
      expect(wrapper).to.exist;
    });
});
