/* eslint-disable react/prop-types */
import React from 'react';
import { Navbar } from '../..';
import CONSTANTS from '../../constants';

export const Default = ({ arrowless, ...args }) => {
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
          <Navbar.Item dropdown hoverable href="#">
            <Navbar.Link arrowless={arrowless}>First</Navbar.Link>
            <Navbar.Dropdown>
              <Navbar.Item href="#">Subitem 1</Navbar.Item>
              <Navbar.Item href="#">Subitem 2</Navbar.Item>
            </Navbar.Dropdown>
          </Navbar.Item>
          <Navbar.Item href="#">Second</Navbar.Item>
        </Navbar.Container>
        <Navbar.Container position="end">
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
};
