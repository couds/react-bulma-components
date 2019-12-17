const LevelProps = [
  {
    name: 'breakpoint',
    type: '"desktop" | "tablet" | "mobile" | "widescreen" | "fullhd" | "touch"',
    required: 'false',
    default: 'undefined',
  },
  {
    name: 'mobile',
    type: 'boolean',
    required: 'false',
    default: 'false',
  },
  {
    name: 'renderAs',
    type: 'ReactElement',
    required: 'false',
    default: 'div',
  },
];

const LevelSideProps = [
  {
    name: 'align',
    type: '"left" | "right"',
    required: 'false',
    default: '"left"',
  },
  {
    name: 'renderAs',
    type: 'ReactElement',
    required: 'false',
    default: 'div',
  },
];

const LevelItemProps = [];

export { LevelProps, LevelSideProps, LevelItemProps };
