import React from 'react';

import { Level, Form, Heading, Button } from '../..';

const style = { textAlign: 'center' };

export const Default = () => (
  <Level renderAs="nav">
    <Level.Side align="left">
      <Level.Item>
        <Heading size={5} subtitle>
          <strong>123</strong> posts
        </Heading>
      </Level.Item>
      <Level.Item>
        <Form.Field kind="addons">
          <Form.Control>
            <Form.Input placeholder="Find a post" />
          </Form.Control>
          <Form.Control>
            <Button renderAs="button">Search</Button>
          </Form.Control>
        </Form.Field>
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
);

export const Centered = () => (
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
);

export const MobileLevel = () => (
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
);
