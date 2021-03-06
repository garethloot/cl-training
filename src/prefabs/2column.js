(() => ({
  name: '2 Columns',
  icon: 'ContainerIcon',
  category: 'LAYOUT',
  structure: [
    {
      name: 'row',
      options: [],
      descendants: [
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
    },
  ],
}))();
