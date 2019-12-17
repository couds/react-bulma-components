const MediaProps = [
  {
    name: 'renderAs',
    type: 'ReactElement',
    required: 'false',
    default: 'div',
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
];

export { MediaProps, MediaItemProps };
