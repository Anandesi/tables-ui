import React from 'react';
//components
import HideColumns from '../../public/app/components/headerComponents/hideColumnsComponent.js';
describe('<hideColumnsComponent.js/>', () => {

  let wrapper;
    before(() => {
            const props = {
                tableStore: {
                    hideColumn:sinon.spy(),
                    removeHiddenColumn:sinon.spy(),
                    showAll:sinon.spy(),
                    getColumns:[],
                    hiddenColumns:sinon.spy()
                }
          };
        wrapper = shallow(<HideColumns {...props}/>);
      });




    it('Component is rendering', () => {
      expect(wrapper).to.exist;
    });
});
