import React from 'react';

import { Level, Form, Heading, Button, Box } from '../..';

export const Default = ({ centeredItems, ...args }) => {
  return (
    <Box>
      {centeredItems ? (
        <Level {...args}>
          <Level.Item>
            <Heading size={5} subtitle>
              <strong>123</strong> posts
            </Heading>
          </Level.Item>
          <Level.Item>
            <strong>All</strong>
          </Level.Item>
          <Level.Item>
            <a>Published</a>
          </Level.Item>
          <Level.Item>
            <Button renderAs="a" color="success">
              New
            </Button>
          </Level.Item>
        </Level>
      ) : (
        <Level {...args}>
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
      )}
    </Box>
  );
};

Default.argTypes = {
  breakpoint: {
    control: {
      type: 'select',
      options: ['mobile'],
    },
  },
  centeredItems: {
    name: 'Center Items',
    control: {
      type: 'boolean',
    },
  },
};
