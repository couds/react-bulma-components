import React from 'react';
import { Form } from '../../index';
import CONSTANTS from '../../constants';

export const BasicUsage = (args) => (
  <Form.Control>
    <Form.Input
      {...args}
      size={args.size === 'default' ? null : args.size}
      type="text"
      placeholder="Simple text input"
    />
  </Form.Control>
);

BasicUsage.argTypes = {
  size: {
    control: {
      type: 'select',
      options: ['default', 'small', 'medium', 'large'],
    },
  },
  color: {
    control: {
      type: 'select',
      options: [...Object.values(CONSTANTS.COLORS), 'default'],
    },
  },
  readOnly: {
    defaultValue: false,
    control: {
      type: 'boolean',
    },
  },
  isStatic: {
    defaultValue: false,
    control: {
      type: 'boolean',
    },
  },
};
