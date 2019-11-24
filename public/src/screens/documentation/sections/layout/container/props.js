const ContainerProps = [
  {
    name: 'fluid',
    type: 'Boolean',
    required: 'false',
    default: 'false',
  },
  {
    name: 'breakpoint',
    type: '"desktop" | "tablet" | "mobile" | "widescreen" | "fullhd" | "touch"',
    required: 'false',
    default: 'undefined',
  },
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

export default ContainerProps;
