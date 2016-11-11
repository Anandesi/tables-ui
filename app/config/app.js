var configObject = {
	dataTypes :
	[
            {
              name : 'Text',
              text : 'Text',
              type:'static',
              visible: true,
              columnsOption:['hide','sortString'],
              unique:true,
              icon:'fa fa-text-height'
            },
            {
              name : 'Email',
              text : 'Email',
              type:'static',
              visible: true,
              columnsOption:['hide','sortString'],
              unique:true,
              icon:'fa fa-envelope-o'
            },
            {
              name : 'URL',
              text : 'URL',
              type:'static',
              visible: true,
              columnsOption:['hide','sortString'],
              unique:true,
              icon:'fa fa-globe'
            },
            {
              name : 'Number',
              text : 'Number',
               type: 'static',
               visible: true,
               columnsOption:['hide','sortString'],
               unique:true,
               icon:'fa fa-th'
            },
            {
              name : 'EncryptedText',
              text : 'Encrypted Text',
              type: 'static',
              visible: true,
              columnsOption:['hide'],
              unique:true,
              icon:'fa fa-asterisk'
            },
            {
              name : 'Boolean',
              text : 'Boolean',
              type: 'static',
              visible: true,
              columnsOption:['hide'],
              unique:false,
              icon:'fa fa-check'
            },
            {
              name : 'DateTime',
              text : 'Date Time',
              type: 'static',
              visible: true,
              columnsOption:['hide','sortDate'],
              unique:true,
              icon:'fa fa-calendar-o'
            },
            {
              name : 'GeoPoint',
              text : 'Geo Point',
              type: 'static',
              visible: true,
              columnsOption:['hide'],
              unique:false,
              icon:'fa fa-map-marker'
            },
            {
              name : 'File',
              text : 'File',
              type: 'static',
              visible: true,
              columnsOption:['hide'],
              unique:false,
              icon:'fa fa-paperclip'
            },
            {
              name : 'Id',
              text : 'ID',
              type: 'static',
              visible: false,
              columnsOption:['hide'],
              icon:'icon ion-pound'
            },
            {
              name : 'ACL',
              text : 'ACL',
              type: 'static',
              visible: false,
              columnsOption:['hide'],
              icon:'fa fa-lock'
            },
            {
              name : 'List',
              text : 'List',
              type: 'List',
              visible: true,
              columnsOption:['hide'],
              unique:false,
              icon:'fa fa-bars'
            },
            {
              name : 'Relation',
              text : 'Relation',
              type: 'Relation',
              visible: true,
              columnsOption:['hide'],
              unique:true,
              icon:'fa fa-external-link'
            },
            {
              name : 'Object',
              text : 'Object',
              type: 'static',
              visible: true,
              columnsOption:['hide'],
              unique:false,
              icon:'fa'
            }

    ],

    filterTypes:[
      {
        type:['Text','Email','URL','EncryptedText','Boolean'],
        options:[
          '','equalTo','notEqualTo','startsWith','exists','doesNotExists'
        ]
      },
      {
        type:['Number','DateTime'],
        options:[
          '','equalTo','notEqualTo','greaterThan','lessThan','greaterThanEqualTo','lessThanEqualTo','exists','doesNotExists'
        ]
      },
      {
        type:['File','Object','Relation'],
        options:[
          '','exists','doesNotExists'
        ]
      },
      {
        type:['GeoPoint'],
        options:[
          '','near','geoWithin'
        ]
      },
      {
        type:['List'],
        options:[
          '','containedIn','notContainedIn','containsAll'
        ]
      }

    ]
}

export default configObject