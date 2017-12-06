import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withReadme } from 'storybook-readme';
import { withKnobs } from '@storybook/addon-knobs';
import readme from './readme.md';

import Card from '.';
import Media from '../media';
import Image from '../image';
import Content from '../content';
import Heading from '../heading';

storiesOf('Card', module)
  .addDecorator(story => (
    <div style={{ margin: '10px auto', width: 450 }}>
      {story()}
    </div>
  ))
  .addDecorator((story, context) => withInfo()(story)(context))
  .addDecorator(withKnobs)
  .add('Default', withReadme(readme, () => (
    <Card>
      <Card type="image" size="4by3" src="http://bulma.io/images/placeholders/1280x960.png" />
      <Card type="content">
        <Media>
          <Media.Item renderAs="figure" position="left">
            <Image renderAs="p" size={64} alt="64x64" src="http://bulma.io/images/placeholders/128x128.png" />
          </Media.Item>
          <Media.Item>
            <Heading size={4}>John Smith</Heading>
            <Heading subtitle size={6}>@johnsmith</Heading>
          </Media.Item>
        </Media>
        <Content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Phasellus nec iaculis mauris. <a>@bulmaio</a>.
          <a href="#1">#css</a> <a href="#2">#responsive</a>
          <br />
          <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
        </Content>
      </Card>
    </Card>
  )))
  .add('With Footer actions', withReadme(readme, () => (
    <Card>
      <Card type="header">
        <Card type="header-title">Title</Card>
      </Card>
      <Card type="content">
        <Media>
          <Media.Item renderAs="figure" position="left">
            <Image renderAs="p" size={64} alt="64x64" src="http://bulma.io/images/placeholders/128x128.png" />
          </Media.Item>
          <Media.Item>
            <Heading size={4}>John Smith</Heading>
            <Heading subtitle size={6}>@johnsmith</Heading>
          </Media.Item>
        </Media>
        <Content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Phasellus nec iaculis mauris. <a>@bulmaio</a>.
          <a href="#1">#css</a> <a href="#2">#responsive</a>
          <br />
          <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
        </Content>
      </Card>
      <Card type="footer">
        <Card renderAs="a" href="#Yes" type="footer-item">Yes</Card>
        <Card renderAs="a" href="#No" type="footer-item">No</Card>
        <Card renderAs="a" href="#Maybe" type="footer-item">Maybe</Card>
      </Card>
    </Card>
  )));
