import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';

import CONSTANTS from '../../constants';
import { Container } from '../..';
import Dropdown from '.';

export const Overview = (args) => (
  <Dropdown
    {...args}
    color={args.color === 'default' ? '' : args.color}
    onChange={action('selected item')}
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
      With divider
    </Dropdown.Item>
  </Dropdown>
);

Overview.argTypes = {
  label: {
    defaultValue: 'label',
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
};

export const CustomContent = (args) => (
  <Dropdown {...args} onChange={action('selected item')}>
    <Dropdown.Item value="custom content 1">
      <p>
        Insert <strong>any content</strong> you like here
      </p>
    </Dropdown.Item>
    <Dropdown.Divider />
    <Dropdown.Item value="custom content 2">
      <p>And it will look nice.</p>
    </Dropdown.Item>
    <Dropdown.Divider />
    <Dropdown.Item renderAs="a" value="link">
      A normal link
    </Dropdown.Item>
  </Dropdown>
);

CustomContent.argTypes = {
  label: {
    defaultValue: 'label',
    control: {
      type: 'text',
    },
  },
};

export const RightAlignment = () => (
  <Container fluid>
    <Dropdown right label="I am right-aligned" value="item">
      <Dropdown.Item value="item">Dropdown item</Dropdown.Item>
      <Dropdown.Item value="other">Other Dropdown item</Dropdown.Item>
      <Dropdown.Item value="active">Active Dropdown item</Dropdown.Item>
      <Dropdown.Item value="other 2">Other Dropdown item</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item value="divider">With divider</Dropdown.Item>
    </Dropdown>
  </Container>
);

export const MenuAbove = () => (
  <div style={{ paddingTop: 200 }}>
    <Dropdown up label="I am right-aligned" value="item">
      <Dropdown.Item value="item">Dropdown item</Dropdown.Item>
      <Dropdown.Item value="other">Other Dropdown item</Dropdown.Item>
      <Dropdown.Item value="active">Active Dropdown item</Dropdown.Item>
      <Dropdown.Item value="other 2">Other Dropdown item</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item value="divider">With divider</Dropdown.Item>
    </Dropdown>
  </div>
);

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
