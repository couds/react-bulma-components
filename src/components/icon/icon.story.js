/* eslint-disable react/prop-types */
import React from 'react';
import classnames from 'classnames';
import { Box, Icon } from '../..';
import CONSTANTS from '../../constants';
import Element from '../element';

const faSizeMapper = {
  small: '',
  medium: 'lg',
  large: '2x',
};

export const Default = ({ size, useIconText, ...args }) => {
  const Wrapper = useIconText ? Icon.Text : React.Fragment;
  return (
    <Box>
      <Wrapper>
        <Icon {...args} size={size} style={{ border: '1px solid red' }}>
          <i
            className={classnames('fas fa-home', {
              [`fa-${faSizeMapper[size]}`]: size,
            })}
          />
        </Icon>
        <Element renderAs="span">Some text in a span</Element>
      </Wrapper>
    </Box>
  );
};

Default.args = {
  useIconText: false,
};

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
