(() => ({
  name: 'Text Component',
  icon: 'ParagraphIcon',
  category: 'CONTENT',
  structure: [
    {
      name: 'text',
      options: [
        {
          type: 'TOGGLE',
          label: 'Toggle Visibility',
          key: 'visible',
          value: true,
          configuration: {
            as: 'VISIBILITY',
          },
        },
        {
          type: 'VARIABLE',
          label: 'Content',
          key: 'content',
          value: ['Hello, World'],
        },
        {
          type: 'FONT',
          label: 'Font',
          key: 'font',
          value: 'Body1',
        },
        {
          type: 'COLOR',
          label: 'Color',
          key: 'color',
          value: 'Primary',
        },
        {
          type: 'CUSTOM',
          label: 'Alignment',
          key: 'alignment',
          value: 'inherit',
          configuration: {
            as: 'BUTTONGROUP',
            dataType: 'string',
            allowedInput: [
              {
                name: 'None',
                value: 'inherit',
              },
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
