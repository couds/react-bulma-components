/* eslint-disable react/no-multi-comp, react/prop-types */
import { boolean, select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Box } from '../box';
import { Navbar } from '../navbar';

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
  link: 'link'
};

storiesOf('Navbar', module)
  .addDecorator(story => (
    <div>
      {story()}
      <Box style={{ margin: '15px auto', maxWidth: '75vw' }}>
        Check the Know tab to see the behavior of this component
      </Box>
    </div>
  ))
  .add('Default', () => {
    return (
      <Navbar
        color={select('Color', colors)}
        fixed={select('Fixed', { default: null, top: 'top', bottom: 'bottom' })}
        active={boolean('Active', false)}
        transparent={boolean('Transparent', false)}
      >
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
            <Navbar.Item href="#">Second</Navbar.Item>
          </Navbar.Container>
          <Navbar.Container position="end">
            <Navbar.Item href="#">At the end</Navbar.Item>
          </Navbar.Container>
        </Navbar.Menu>
      </Navbar>
    );
  });
