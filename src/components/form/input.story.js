import React from 'react';
import { Form, Icon } from '../../index';
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

export const Colors = () => (
  <>
    <Form.Field>
      <Form.Control>
        <Form.Input color="success" placeholder="Success input" />
      </Form.Control>
    </Form.Field>
    <Form.Field>
      <Form.Control>
        <Form.Input color="warning" placeholder="Warning input" />
      </Form.Control>
    </Form.Field>
    <Form.Field>
      <Form.Control>
        <Form.Input color="danger" placeholder="Danger input" />
      </Form.Control>
    </Form.Field>
  </>
);

export const States = () => (
  <>
    <Form.Field>
      <Form.Label>
        <code>{'<Form.Control loading />'}</code>
      </Form.Label>
      <Form.Control loading>
        <Form.Input placeholder="loading" />
      </Form.Control>
    </Form.Field>
    <Form.Field>
      <Form.Label>
        <code>{'<Form.Input hovered />'}</code>
      </Form.Label>
      <Form.Control>
        <Form.Input hovered placeholder="hovered" />
      </Form.Control>
    </Form.Field>
    <Form.Field>
      <Form.Label>
        <code>{'<Form.Input focused />'}</code>
      </Form.Label>
      <Form.Control>
        <Form.Input focused placeholder="focused" />
      </Form.Control>
    </Form.Field>
    <Form.Field>
      <Form.Label>
        <code>{'<Form.Input disabled />'}</code>
      </Form.Label>
      <Form.Control>
        <Form.Input disabled placeholder="disabled" />
      </Form.Control>
    </Form.Field>
  </>
);

export const Readonly = () => (
  <>
    <Form.Field>
      <Form.Input readOnly value="You can't modify me" />
    </Form.Field>
    <Form.Field>
      <Form.Input
        isStatic
        value="I look like normal text, and I am readonly."
      />
    </Form.Field>
  </>
);

export const Sizes = () => (
  <>
    <Form.Field>
      <Form.Control>
        <Form.Input size="small" placeholder="I am small" />
      </Form.Control>
    </Form.Field>
    <Form.Field>
      <Form.Control>
        <Form.Input placeholder="I am normal" />
      </Form.Control>
    </Form.Field>
    <Form.Field>
      <Form.Control>
        <Form.Input size="medium" placeholder="I am medium" />
      </Form.Control>
    </Form.Field>
    <Form.Field>
      <Form.Control>
        <Form.Input size="large" placeholder="I am large" />
      </Form.Control>
    </Form.Field>
  </>
);

export const Icons = () => (
  <>
    <Form.Field>
      <Form.Label>Left icon</Form.Label>
      <Form.Control iconLeft>
        <Form.Input placeholder="Left icon" />
        <Icon align="left">
          <i className="fas fa-user" />
        </Icon>
      </Form.Control>
    </Form.Field>
    <Form.Field>
      <Form.Label>Right icon</Form.Label>
      <Form.Control iconRight>
        <Form.Input placeholder="Right icon" />
        <Icon align="right">
          <i className="fas fa-user" />
        </Icon>
      </Form.Control>
    </Form.Field>
    <Form.Field>
      <Form.Label>Left and right icon</Form.Label>
      <Form.Control iconLeft iconRight>
        <Form.Input placeholder="Left and right icon" />
        <Icon align="left">
          <i className="fas fa-user" />
        </Icon>
        <Icon align="right">
          <i className="fas fa-check" />
        </Icon>
      </Form.Control>
    </Form.Field>
    <Form.Field>
      <Form.Label>Huge icon</Form.Label>
      <Form.Control iconLeft>
        <Form.Input size="large" placeholder="yuuge" />
        <Icon align="left">
          <i className="fas fa-envelope" />
        </Icon>
      </Form.Control>
    </Form.Field>
  </>
);
