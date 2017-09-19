import React from 'react';

import { storiesOf } from '@storybook/react';

import Tile from '.';
import Heading from '../heading';
import Image from '../image';

storiesOf('Tile', module)
  .add('Default', () => (
    <Tile kind="ancestor">
      <Tile size={8} vertical>
        <Tile>
          <Tile kind="parent" vertical>
            <Tile renderAs="article" kind="child" notification type="primary" >
              <Heading>Vertical...</Heading>
              <Heading subtitle>Top tile</Heading>
            </Tile>
            <Tile renderAs="article" kind="child" notification type="warning">
              <Heading>Tiles...</Heading>
              <Heading subtitle>Bottom Tile...</Heading>
            </Tile>
          </Tile>
          <Tile kind="parent">
            <Tile renderAs="article" kind="child" notification type="info">
              <Heading>Middle Tile...</Heading>
              <Heading subtitle>With image Tile...</Heading>
              <Image size="4by3" src="http://bulma.io/images/placeholders/640x480.png" />
            </Tile>
          </Tile>
        </Tile>
        <Tile kind="parent">
          <Tile renderAs="article" kind="child" notification type="danger">
            <Heading>Wide tile</Heading>
            <Heading subtitle>Aligned with the right tile</Heading>
            <div className="content" />
          </Tile>
        </Tile>
      </Tile>
      <Tile kind="parent">
        <Tile renderAs="article" kind="child" notification type="success">
          <div className="content">
            <Heading>Tall tile</Heading>
            <Heading subtitle>With even more content</Heading>
            <div className="content" />
          </div>
        </Tile>
      </Tile>
    </Tile>
  ));
