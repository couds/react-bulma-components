const MediaProps = [
  {
    name: 'renderAs',
    type: 'ReactElement',
    required: 'false',
    default: 'div',
  },
  {
    name: 'style',
    type: 'Object',
    required: 'false',
    default: 'undefined',
  },
];

const MediaItemProps = [
  {
    name: 'renderAs',
    type: 'ReactElement',
    required: 'false',
    default: 'div',
  },
  {
    name: 'position',
    type: '"left" | "right" | "center"',
    required: 'false',
    default: '"center"',
  },
  {
    name: 'style',
    type: 'Object',
    required: 'false',
    default: 'undefined',
  },
];

export { MediaProps, MediaItemProps };
