import React from 'react';

import { storiesOf } from '@storybook/react';

import Card from 'react-bulma-components/lib/components/card';
import Media from 'react-bulma-components/lib/components/media';
import Image from 'react-bulma-components/lib/components/image';
import Content from 'react-bulma-components/lib/components/content';
import Heading from 'react-bulma-components/lib/components/heading';

storiesOf('Card', module)
  .addDecorator(story => (
    <div style={{ margin: '0px auto', width: 450 }}>{story()}</div>
  ))
  .add('Default', () => (
    <Card>
      <Card.Image
        size="4by3"
        src="http://bulma.io/images/placeholders/1280x960.png"
      />
      <Card.Content>
        <Media>
          <Media.Item renderAs="figure" position="left">
            <Image
              size={64}
              alt="64x64"
              src="http://bulma.io/images/placeholders/128x128.png"
            />
          </Media.Item>
          <Media.Item>
            <Heading size={4}>John Smith</Heading>
            <Heading subtitle size={6}>
              @johnsmith
            </Heading>
          </Media.Item>
        </Media>
        <Content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
          iaculis mauris. <a>@bulmaio</a>.<a href="#1">#css</a>{' '}
          <a href="#2">#responsive</a>
          <br />
          <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
        </Content>
      </Card.Content>
    </Card>
  ))
  .add('With Footer actions', () => (
    <Card>
      <Card.Header>
        <Card.Header.Title>Title</Card.Header.Title>
      </Card.Header>
      <Card.Content>
        <Media>
          <Media.Item renderAs="figure" position="left">
            <Image
              size={64}
              alt="64x64"
              src="http://bulma.io/images/placeholders/128x128.png"
            />
          </Media.Item>
          <Media.Item>
            <Heading size={4}>John Smith</Heading>
            <Heading subtitle size={6}>
              @johnsmith
            </Heading>
          </Media.Item>
        </Media>
        <Content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
          iaculis mauris. <a>@bulmaio</a>.<a href="#1">#css</a>{' '}
          <a href="#2">#responsive</a>
          <br />
          <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
        </Content>
      </Card.Content>
      <Card.Footer>
        <Card.Footer.Item renderAs="a" href="#Yes">
          Yes
        </Card.Footer.Item>
        <Card.Footer.Item renderAs="a" href="#No">
          No
        </Card.Footer.Item>
        <Card.Footer.Item renderAs="a" href="#Maybe">
          Maybe
        </Card.Footer.Item>
      </Card.Footer>
    </Card>
  ));
