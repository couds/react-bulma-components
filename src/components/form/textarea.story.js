import React from 'react';
import { Form } from '../..';
import CONSTANTS from '../../constants';
import { BasicUsage } from './input.story';

export const BasicExample = (args) => (
  <Form.Field>
    <Form.Control>
      <Form.Textarea
        {...args}
        size={args.size === 'default' ? null : args.size}
      />
    </Form.Control>
  </Form.Field>
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
