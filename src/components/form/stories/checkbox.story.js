import React from 'react';
import { Form } from '../../..';

export const BasicExample = () => (
  <Form.Field>
    <Form.Control>
      <Form.Checkbox> Remember me</Form.Checkbox>
    </Form.Control>
  </Form.Field>
);

export const CustomLabelComponent = () => (
  <Form.Field>
    <Form.Control>
      <Form.Checkbox>
        {'  '}I agree to the <a href="#">terms and conditions</a>
      </Form.Checkbox>
    </Form.Control>
  </Form.Field>
);
