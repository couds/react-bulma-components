/* eslint-disable react/prop-types */
import React from 'react';
import { Box, Image, Block } from '../..';

export const Default = (args) => {
  return (
    <Box>
      <Block>This text is above the image</Block>
      <Block>
        <Image {...args} />
      </Block>
      <Block>
        And this is below and it is where it should be even before the image is
        loaded
      </Block>
    </Box>
  );
};

Default.args = {
  src: 'https://wallpapercave.com/wp/tU89SSy.jpg',
  fullwidth: false,
  rounded: false,
  fallback:
    'https://nosequemepasa.com/wp-content/themes/wishful-blog/wishfulthemes/assets/images/fallback-image-one.jpg',
};

Default.argTypes = {
  size: {
    control: {
      type: 'select',
      options: [
        16,
        24,
        32,
        48,
        64,
        96,
        128,
        'square',
        '1by1',
        '4by3',
        '3by2',
        '16by9',
        '2by1',
        '5by4',
        '5by3',
        '3by1',
        '4by5',
        '3by4',
        '2by3',
        '3by5',
        '9by16',
        '1by2',
        '1by3',
      ],
    },
  },
};
