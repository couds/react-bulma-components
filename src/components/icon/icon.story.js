/* eslint-disable react/prop-types */
import React from 'react';
import classnames from 'classnames';
import { Box, Icon } from '../..';
import CONSTANTS from '../../constants';

const faSizeMapper = {
  small: '',
  medium: 'lg',
  large: '2x',
};

export const Default = ({ size, ...args }) => (
  <Box>
    <Icon {...args} size={size} style={{ border: '1px solid red' }}>
      <i
        className={classnames('fas fa-home', {
          [`fa-${faSizeMapper[size]}`]: size,
        })}
      />
    </Icon>
  </Box>
);

Default.argTypes = {
  color: {
    control: {
      type: 'select',
      options: ['default'].concat(Object.values(CONSTANTS.COLORS)),
    },
  },
  size: {
    control: {
      type: 'select',
      options: ['default', 'small', 'medium', 'large'],
    },
  },
};
