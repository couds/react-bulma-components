import React from 'react';

import { Box, Form, Button } from '../..';

export const Default = () => {
  return (
    <Box style={{ width: 400, margin: 'auto' }}>
      <form>
        <Form.Field>
          <Form.Label>Email</Form.Label>
          <Form.Control>
            <Form.Input
              type="email"
              placeholder="my.amazing.email@react-bulma.dev"
            />
          </Form.Control>
        </Form.Field>
        <Form.Field>
          <Form.Label>Password</Form.Label>
          <Form.Control>
            <Form.Input type="password" placeholder="*************" />
          </Form.Control>
        </Form.Field>
        <Button.Group align="right">
          <Button color="primary">Sign in</Button>
        </Button.Group>
      </form>
    </Box>
  );
};
