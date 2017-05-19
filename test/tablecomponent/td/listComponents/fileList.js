import React from 'react';
import  FileListComponent from '../../../../public/app/components/tableComponents/td/listComponents/fileList.js';

describe('<TABLE TD listComponents  FileListComponent />', () => {

  let wrapper;
  before(() => {
        const props = {
					updateElementData:sinon.spy(),
					removeFromElementData:sinon.spy(),
					isListOfRelation:''
        };

  wrapper = shallow(< FileListComponent {...props}/>);
  });

    it('Component is rendering', () => {
      expect(wrapper).to.exist;
    });

});
