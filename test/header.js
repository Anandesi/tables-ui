import React from 'react';

// //component
import Header from '../public/app/components/header.js';

describe('<HEADER/>', () => {
      let wrapper;
      before(() => {
            const props = {
              tableStore: {
                  search:sinon.spy(),
                  updateColumnsData:sinon.spy(),
                  showTopLoader:sinon.spy(),
                  showSnackbar:sinon.spy() ,
                  setColumnsData:sinon.spy(),
                  showTopLoader:sinon.spy(),
                  deleteRows:sinon.spy(),
                  apps:[],
                  rowsToDelete:[]
                },
            appName:'',
            userProfile :{
            file:{
                document:{
                    url:''
                }

            },
            user:{
                name:''
            }
          }

        }
      wrapper = shallow(<Header {...props}/>);
});
       it('Component is rendering', () => {

         expect(wrapper).to.exist;
     });


  });
