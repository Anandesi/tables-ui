

import React from 'react';
// import { mount, render, shallow } from 'enzyme';
// import { expect } from 'chai';
//
// import { observer } from "mobx-react"
// import { Popover, PopoverAnimationVertical } from 'material-ui/Popover'
// //components
//
import Header from '../public/app/components/header.js';
// import HideColumns from '../public/app/components/headerComponents/hideColumnsComponent.js';
// import FilterRows from '../public/app/components/headerComponents/filterRowsComponent.js';
// import Search from '../../tables-ui/public/app/components/headerComponents/searchComponent.js';
// import HeaderTable from '../public/app/components/headerComponents/headerTableComponent.js';
//


 describe('<HEADERRRRRRRRRRRRRRRRs/>', () => {




       it('Component is rendering', () => {

          wrapper = shallow(< Header  />);
          var table = {
            'id': { label: function() { return '12345'; } },
            'title': { label: function() { return 'akshay'; } }

          };
         expect(wrapper).to.exist;
     });


  });
