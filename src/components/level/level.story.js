import React from 'react';

import { storiesOf } from '@storybook/react';

import Level from 'react-bulma-components/lib/components/level';
import {
  Field,
  Control,
  Input,
} from 'react-bulma-components/lib/components/form';
import Heading from 'react-bulma-components/lib/components/heading';
import Button from 'react-bulma-components/lib/components/button';
import Hero from 'react-bulma-components/lib/components/hero';
import Container from 'react-bulma-components/lib/components/container';
import Box from 'react-bulma-components/lib/components/box';
import Section from 'react-bulma-components/lib/components/section';

const style = { textAlign: 'center' };

storiesOf('Level', module)
  .addDecorator(story => (
    <Hero size="fullheight">
      <Hero.Head renderAs="header">
        <Container>{story()}</Container>
      </Hero.Head>
    </Hero>
  ))
  .add('Default', () => (
    <Section>
      <Box>
        <Level renderAs="nav">
          <Level.Side align="left">
            <Level.Item>
              <Heading size={5} subtitle>
                <strong>123</strong> posts
              </Heading>
            </Level.Item>
            <Level.Item>
              <Field kind="addons">
                <Control>
                  <Input placeholder="Find a post" />
                </Control>
                <Control>
                  <Button renderAs="button">Search</Button>
                </Control>
              </Field>
            </Level.Item>
          </Level.Side>

          <Level.Side align="right">
            <Level.Item>
              <strong>All</strong>
            </Level.Item>
            <Level.Item>
              <a>Published</a>
            </Level.Item>
            <Level.Item>
              <a>Drafts</a>
            </Level.Item>
            <Level.Item>
              <a>Deleted</a>
            </Level.Item>
            <Level.Item>
              <Button renderAs="a" color="success">
                New
              </Button>
            </Level.Item>
          </Level.Side>
        </Level>
      </Box>
    </Section>
  ))
  .add('Items Centered', () => (
    <Section>
      <Box>
        <Level renderAs="nav">
          <Level.Item style={style}>
            <div>
              <Heading renderAs="p" heading>
                Tweets
              </Heading>
              <Heading renderAs="p">3,210</Heading>
            </div>
          </Level.Item>
          <Level.Item style={style}>
            <div>
              <Heading renderAs="p" heading>
                Following
              </Heading>
              <Heading renderAs="p">210</Heading>
            </div>
          </Level.Item>
          <Level.Item style={style}>
            <div>
              <Heading renderAs="p" heading>
                Followers
              </Heading>
              <Heading renderAs="p">321</Heading>
            </div>
          </Level.Item>
          <Level.Item style={style}>
            <div>
              <Heading renderAs="p" heading>
                Likes
              </Heading>
              <Heading renderAs="p">321K</Heading>
            </div>
          </Level.Item>
        </Level>
      </Box>
    </Section>
  ))
  .add('With breakpoint', () =>
    ['mobile', null].map(breakpoint => (
      <Section>
        <Heading>{breakpoint || 'Without breakpoint'}</Heading>
        <Box>
          <Level renderAs="nav" breakpoint={breakpoint}>
            <Level.Item style={style}>
              <div>
                <Heading renderAs="p" heading>
                  Tweets
                </Heading>
                <Heading renderAs="p">3,210</Heading>
              </div>
            </Level.Item>
            <Level.Item style={style}>
              <div>
                <Heading renderAs="p" heading>
                  Following
                </Heading>
                <Heading renderAs="p">210</Heading>
              </div>
            </Level.Item>
            <Level.Item style={style}>
              <div>
                <Heading renderAs="p" heading>
                  Followers
                </Heading>
                <Heading renderAs="p">321</Heading>
              </div>
            </Level.Item>
            <Level.Item style={style}>
              <div>
                <Heading renderAs="p" heading>
                  Likes
                </Heading>
                <Heading renderAs="p">321K</Heading>
              </div>
            </Level.Item>
          </Level>
        </Box>
      </Section>
    )),
  )
  .add('Horizontal level on mobile', () => (
    <Section>
      <Box>
        <Level mobile renderAs="nav">
          <Level.Item style={style}>
            <div>
              <Heading renderAs="p" heading>
                Tweets
              </Heading>
              <Heading renderAs="p">3,210</Heading>
            </div>
          </Level.Item>
          <Level.Item style={style}>
            <div>
              <Heading renderAs="p" heading>
                Following
              </Heading>
              <Heading renderAs="p">210</Heading>
            </div>
          </Level.Item>
          <Level.Item style={style}>
            <div>
              <Heading renderAs="p" heading>
                Followers
              </Heading>
              <Heading renderAs="p">321</Heading>
            </div>
          </Level.Item>
          <Level.Item style={style}>
            <div>
              <Heading renderAs="p" heading>
                Likes
              </Heading>
              <Heading renderAs="p">321K</Heading>
            </div>
          </Level.Item>
        </Level>
      </Box>
    </Section>
  ));
