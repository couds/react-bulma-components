
/* eslint-disable react/no-multi-comp, react/prop-types */
import React, { Fragment } from 'react';

import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs';
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
  .add('Default', (() => (
    <Navbar color={select('Color', colors)}>
      <Navbar.Brand>
        <Navbar.Item renderAs="a" href="#">
          <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" />
        </Navbar.Item>
        <Navbar.Burger />
      </Navbar.Brand>
      <Navbar.Menu>
        <Navbar.Container>
          <Navbar.Item dropdown hoverable>
            <Navbar.Link>
            Docs
            </Navbar.Link>
            <Navbar.Dropdown boxed>
              <Navbar.Item href="#">
                Home
              </Navbar.Item>
              <Navbar.Item href="#">
                List
              </Navbar.Item>
              <Navbar.Item href="#">
                Another Item
              </Navbar.Item>
              <Navbar.Divider />
              <Navbar.Item active href="#">
                Active
              </Navbar.Item>
            </Navbar.Dropdown>
          </Navbar.Item>
          <Navbar.Item href="#">
            Second
          </Navbar.Item>
        </Navbar.Container>
        <Navbar.Container position="end">
          <Navbar.Item dropdown hoverable>
            <Navbar.Link>
              Other Menu
            </Navbar.Link>
            <Navbar.Dropdown right boxed>
              <Navbar.Item href="#">
                this is aligned to the right
              </Navbar.Item>
            </Navbar.Dropdown>
          </Navbar.Item>
        </Navbar.Container>
      </Navbar.Menu>
    </Navbar>
  )))
  .add('Fixed', (() => {
    return (
      <div style={{ height: '150vh' }}>
        <Navbar fixed={select('Fixed', { default: null, top: 'top', bottom: 'bottom' })}>
          <Navbar.Brand>
            <Navbar.Item renderAs="a" href="#">
              <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" />
            </Navbar.Item>
            <Navbar.Burger />
          </Navbar.Brand>
          <Navbar.Menu>
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
      </div>
    );
  }));
