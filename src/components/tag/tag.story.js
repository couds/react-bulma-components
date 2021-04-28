/* eslint-disable react/prop-types */
import React from 'react';
import { Box, Tag, Block } from '../..';
import CONSTANTS from '../../constants';

export const Default = ({ hasAddons, ...args }) => {
  return (
    <>
      <Box>
        <Block>You can use a single tag individualy</Block>
        <Block>
          <Tag {...args}>Tag Text</Tag>
        </Block>
      </Box>
      <Box>
        <Block>Or group then together (Check the hasAddon control ^_^)</Block>
        <Block>
          <Tag.Group hasAddons={hasAddons}>
            <Tag color="success">My Tag</Tag>
            <Tag remove />
          </Tag.Group>
          <Tag.Group hasAddons={hasAddons}>
            <Tag color="danger">My Second Tag</Tag>
            <Tag remove />
          </Tag.Group>
          <Tag.Group hasAddons={hasAddons}>
            <Tag color="info">npm downloads</Tag>
            <Tag>18k/month</Tag>
          </Tag.Group>
        </Block>
      </Box>
    </>
  );
};

Default.argTypes = {
  color: {
    table: {
      category: 'Tag',
    },
    control: {
      type: 'select',
      options: ['default'].concat(Object.values(CONSTANTS.COLORS)),
    },
  },
  size: {
    table: {
      category: 'Tag',
    },
    control: {
      type: 'select',
      options: ['default', 'normal', 'medium', 'large'],
    },
  },
  rounded: {
    table: {
      category: 'Tag',
    },
    control: {
      type: 'boolean',
    },
  },
  remove: {
    table: {
      category: 'Tag',
    },
    control: {
      type: 'boolean',
    },
  },
  hasAddons: {
    table: {
      category: 'Tag Group',
    },
    control: {
      type: 'boolean',
    },
    defaultValue: true,
  },
};
