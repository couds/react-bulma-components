import React from 'react';
import { Form } from '../../..';
import CONSTANTS from '../../../constants';

export const BasicUsage = (args) => (
  <Form.Field>
    <Form.Control>
      <Form.Textarea
        {...args}
        placeholder="I am a textarea"
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
  rows: {
    control: {
      type: 'number',
    },
  },
  loading: {
    defaultValue: false,
    control: {
      type: 'boolean',
    },
  },
  status: {
    control: {
      type: 'select',
      options: ['focus', 'hover'],
    },
  },
  readOnly: {
    defaultValue: false,
    control: {
      type: 'boolean',
    },
  },
  fixedSize: {
    defaultValue: false,
    control: {
      type: 'boolean',
    },
  },
};

export const ColorsAndStates = () => (
  <>
    <Form.Field>
      <Form.Control>
        <Form.Textarea color="success" placeholder="Success textarea" />
      </Form.Control>
    </Form.Field>
    <Form.Field>
      <Form.Control>
        <Form.Textarea hovered color="warning" placeholder="Hovered warning" />
      </Form.Control>
    </Form.Field>
    <Form.Field>
      <Form.Control size="large" loading>
        <Form.Textarea size="large" loading placeholder="I am yyyuuuge" />
      </Form.Control>
    </Form.Field>
  </>
);

ColorsAndStates.storyName = 'Colors, sizes and states';

export const FixedSize = () => (
  <Form.Field>
    <Form.Control>
      <Form.Textarea fixedSize placeholder="You can't change my size" />
    </Form.Control>
  </Form.Field>
);
