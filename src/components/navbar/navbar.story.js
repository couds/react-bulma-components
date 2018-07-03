
/* eslint-disable react/no-multi-comp, react/prop-types */
import React, { Fragment } from 'react';

import { storiesOf } from '@storybook/react';
import { select, boolean } from '@storybook/addon-knobs';
import { Field, Control } from 'react-bulma-components/lib/components/form';
import Button from 'react-bulma-components/lib/components/button';
import Navbar from 'react-bulma-components/lib/components/navbar';
import CONSTANTS from '../../constants';

const colors = {
  Default: '',
  primary: 'primary',
  info: 'info',
  danger: 'danger',
  warning: 'warning',
  success: 'success',
  white: 'white',
  black: 'black',
  light: 'light',
  dark: 'dark',
  link: 'link',
};

storiesOf('Navbar', module)
  .add('Default', (() => {
    return (
      <Navbar
        color={select('Color', colors)}
        fixed={select('Fixed', { default: null, top: 'top', bottom: 'bottom' })}
        active={boolean('Active', false)}
        transparent={boolean('Transparent', false)}
      >
        <Navbar.Brand>
          <Navbar.Item renderAs="a" href="#">
            <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" />
          </Navbar.Item>
          <Navbar.Burger active={open} onClick={() => this.setState(state => { open: !state.open } )} />
        </Navbar.Brand>
        <Navbar.Menu  active={open}>
          <Navbar.Container>
            <Navbar.Item href="#">
                  Second
            </Navbar.Item>
          </Navbar.Container>
          <Navbar.Container position="end">
            <Navbar.Item href="#">
                  At the end
            </Navbar.Item>
          </Navbar.Container>
        </Navbar.Menu>
      </Navbar>
    )
  }));
