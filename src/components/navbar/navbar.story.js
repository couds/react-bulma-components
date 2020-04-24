/* eslint-disable react/no-multi-comp, react/prop-types */
import React from 'react';

import { storiesOf } from '@storybook/react';
import { select, boolean } from '@storybook/addon-knobs';
import Navbar from 'react-bulma-components/lib/components/navbar';
import Box from '../box';
import CONSTANTS from '../../constants';

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
        color={select('Color', { ...CONSTANTS.COLORS, default: '' })}
        fixed={select('Fixed', {
          default: undefined,
          top: 'top',
          bottom: 'bottom',
        })}
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
            <Navbar.Item dropdown hoverable href="#">
              <Navbar.Link arrowless={boolean('Arrowless', false)}>
                First
              </Navbar.Link>
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
  });
