(() => ({
  name: 'Data List',
  icon: 'UnorderedListIcon',
  category: 'DATA',
  structure: [
    {
      name: 'dataList',
      options: [
        {
          type: 'MODEL',
          label: 'Model',
          key: 'modelId',
          value: '',
        },
        {
          type: 'FILTER',
          label: 'Filter',
          key: 'filter',
          value: {},
          configuration: {
            dependsOn: 'modelId',
          },
        },
        {
          type: 'NUMBER',
          label: 'Limit',
          key: 'limit',
          value: 5,
        },
      ],
      descendants: [],
    },
  ],
}))();
