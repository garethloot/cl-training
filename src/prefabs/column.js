(() => ({
  name: 'Column',
  icon: 'ContainerIcon',
  category: 'LAYOUT',
  structure: [
    {
      name: 'column',
      options: [
        {
          type: 'CUSTOM',
          label: 'Alignment',
          key: 'alignment',
          value: 'left',
          configuration: {
            as: 'BUTTONGROUP',
            dataType: 'string',
            allowedInput: [
              {
                name: 'Left',
                value: 'left',
              },
              {
                name: 'Center',
                value: 'center',
              },
              {
                name: 'Right',
                value: 'right',
              },
            ],
          },
        },
      ],
      descendants: [],
    },
  ],
}))();
