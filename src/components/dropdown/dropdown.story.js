/* eslint-disable react/prop-types */
import React, { useState } from 'react';

import CONSTANTS from '../../constants';
import { Box, Dropdown } from '../..';
import Icon from '../icon';

const icon = (
  <Icon>
    <i className="fas fa-angle-down" aria-hidden="true" />
  </Icon>
);

export const Overview = (args) => {
  return (
    <Box
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 600,
      }}
    >
      <Dropdown
        {...args}
        color={args.color === 'default' ? '' : args.color}
        icon={icon}
      >
        <Dropdown.Item renderAs="a" value="item">
          Dropdown item
        </Dropdown.Item>
        <Dropdown.Item renderAs="a" value="other">
          Other Dropdown item
        </Dropdown.Item>
        <Dropdown.Item renderAs="a" value="active">
          Active Dropdown item
        </Dropdown.Item>
        <Dropdown.Item renderAs="a" value="other 2">
          Other Dropdown item
        </Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item renderAs="a" value="divider">
          After divider
        </Dropdown.Item>
      </Dropdown>
    </Box>
  );
};

Overview.argTypes = {
  label: {
    defaultValue: 'Dropdown label',
    control: {
      type: 'text',
    },
  },
  color: {
    defaultValue: '',
    control: {
      type: 'select',
      options: ['default', ...Object.values(CONSTANTS.COLORS)],
    },
  },
  hoverable: {
    defaultValue: false,
    control: {
      type: 'boolean',
    },
  },
  closeOnSelect: {
    defaultValue: false,
    control: {
      type: 'boolean',
    },
  },
  right: {
    defaultValue: false,
    control: {
      type: 'boolean',
    },
  },
  up: {
    defaultValue: false,
    control: {
      type: 'boolean',
    },
  },
  disabled: {
    defaultValue: false,
    control: {
      type: 'boolean',
    },
  },
};

export const Controlled = (args) => {
  const [selected, setSelected] = useState('');
  return (
    <Dropdown {...args} value={selected} onChange={setSelected} color="info">
      <Dropdown.Item renderAs="a" value="item">
        Dropdown item
      </Dropdown.Item>
      <Dropdown.Item renderAs="a" value="other">
        Other Dropdown item
      </Dropdown.Item>
      <Dropdown.Item renderAs="a" value="active">
        Active Dropdown item
      </Dropdown.Item>
      <Dropdown.Item renderAs="a" value="other 2">
        Other Dropdown item
      </Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item renderAs="a" value="divider">
        With divider
      </Dropdown.Item>
    </Dropdown>
  );
};

Controlled.argTypes = {
  hoverable: {
    defaultValue: false,
    control: {
      type: 'boolean',
    },
  },
};
