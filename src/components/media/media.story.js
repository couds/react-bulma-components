import React from 'react';

import { storiesOf } from '@storybook/react';

import Media from '.';
import Image from '../image';
import Content from '../content';
import Button from '../button';
import { Level, LevelContainer } from '../level';


const style = { background: '#e6e6e6', width: 64, height: 64 };

storiesOf('Media', module)
  .add('Default', () => (
    <Media>
      <Media.Item renderAs="figure" mediaRole="left">
        <Image renderAs="p" size={64} alt="64x64" src="http://bulma.io/images/placeholders/128x128.png" />
      </Media.Item>
      <Media.Item>
        <Content>
          <p>
            <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
          </p>
        </Content>
        <LevelContainer breakpoint="mobile">
          <Level align="left">
            <Button color="link">Like</Button>
            <Button color="link">Share</Button>
          </Level>
        </LevelContainer>
      </Media.Item>
    </Media>
  ))
  .add('Right Media', () => (
    <Media>
      <Media.Item>
        <p>Lorem Ipsum</p>
      </Media.Item>
      <Media.Item renderAs="figure" mediaRole="right">
        <img style={style} alt="64x64" src="http://bulma.io/images/placeholders/128x128.png" />
      </Media.Item>
    </Media>
  ))
  .add('Nested', () => (
    <Media>
      <Media.Item renderAs="figure" mediaRole="right">
        <img style={style} alt="64x64" src="http://bulma.io/images/placeholders/128x128.png" />
      </Media.Item>
      <Media.Item>
        <Media.Content>
          <p>Lorem Ipsum Level 1</p>
        </Media.Content>
        <Media>
          <Media.Item renderAs="figure" mediaRole="right">
            <img style={style} alt="64x64" src="http://bulma.io/images/placeholders/128x128.png" />
          </Media.Item>
          <Media.Item>
            <Media.Content>
              <p>Lorem Ipsum Level 2 - 1</p>
            </Media.Content>
          </Media.Item>
        </Media>
        <Media>
          Lorem Ipsum Level 2 - 2
        </Media>
        <Media>
          Lorem Ipsum Level 2 - 3
        </Media>
      </Media.Item>
    </Media>
  ));
