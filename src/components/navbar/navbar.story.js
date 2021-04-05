/* eslint-disable react/prop-types */
import React from 'react';
import { Navbar } from '../..';
import CONSTANTS from '../../constants';

export const Default = ({
  arrowless,
  hoverable,
  itemAactive,
  up,
  right,
  boxed,
  ...args
}) => {
  return (
    <Navbar {...args}>
      <Navbar.Brand>
        <Navbar.Item renderAs="a" href="#">
          <img
            src="https://bulma.io/images/bulma-logo.png"
            alt="Bulma: a modern CSS framework based on Flexbox"
            width="112"
            height="28"
          />
        </Navbar.Item>
        <Navbar.Burger />
      </Navbar.Brand>
      <Navbar.Menu>
        <Navbar.Container>
          <Navbar.Item hoverable={hoverable} active={itemAactive} href="#">
            <Navbar.Link arrowless={arrowless}>First</Navbar.Link>
            <Navbar.Dropdown up={up} right={right} boxed={boxed}>
              <Navbar.Item href="#">Subitem 1</Navbar.Item>
              <Navbar.Item href="#">Subitem 2</Navbar.Item>
              <Navbar.Divider />
              <Navbar.Item href="#">After divider</Navbar.Item>
            </Navbar.Dropdown>
          </Navbar.Item>
          <Navbar.Item href="#">Second</Navbar.Item>
        </Navbar.Container>
        <Navbar.Container align="end">
          <Navbar.Item href="#">At the end</Navbar.Item>
        </Navbar.Container>
      </Navbar.Menu>
    </Navbar>
  );
};

Default.argTypes = {
  color: {
    table: {
      category: 'Navbar',
    },
    control: {
      type: 'select',
      options: Object.values(CONSTANTS.COLORS),
    },
  },
  fixed: {
    table: {
      category: 'Navbar',
    },
    control: {
      type: 'select',
      options: ['top', 'bottom'],
    },
  },
  active: {
    table: {
      category: 'Navbar',
    },
    control: {
      type: 'boolean',
    },
  },
  transparent: {
    table: {
      category: 'Navbar',
    },
    control: {
      type: 'boolean',
    },
  },
  arrowless: {
    table: {
      category: 'Navbar.Link',
    },
    control: {
      type: 'boolean',
    },
  },
  hoverable: {
    table: {
      category: 'Navbar.Link',
    },
    control: {
      type: 'boolean',
    },
  },
  itemAactive: {
    name: 'active',
    table: {
      category: 'Navbar.Link',
    },
    control: {
      type: 'boolean',
    },
  },
  up: {
    table: {
      category: 'Navbar.Dropdown',
    },
    control: {
      type: 'boolean',
    },
  },
  right: {
    table: {
      category: 'Navbar.Dropdown',
    },
    control: {
      type: 'boolean',
    },
  },
  boxed: {
    table: {
      category: 'Navbar.Dropdown',
    },
    control: {
      type: 'boolean',
    },
  },
};
