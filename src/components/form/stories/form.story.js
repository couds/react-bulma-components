import React, { useState } from 'react';
import { Block, Box, Button, Form, Icon } from '../../..';
import CONSTANTS from '../../../constants';
import Message from '../../message';

export const Default = () => {
  const [username, setUsername] = useState('bulma');
  const [email, setEmail] = useState('hello@');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [tocAgreed, setTocAgreed] = useState(false);
  const [questionValue, setQuestionValue] = useState('');

  return (
    <form>
      <Form.Field>
        <Form.Label>Username</Form.Label>
        <Form.Control iconLeft iconRight>
          <Form.Input
            color="success"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Icon align="left" size="small">
            <i className="fas fa-user" />
          </Icon>
          <Icon align="right" size="small">
            <i className="fas fa-check" />
          </Icon>
        </Form.Control>
        <Form.Help color="success">This username is available</Form.Help>
      </Form.Field>

      <Form.Field>
        <Form.Label>Email</Form.Label>
        <Form.Control iconLeft iconRight>
          <Form.Input
            color="danger"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Icon align="left" size="small">
            <i className="fas fa-envelope" />
          </Icon>
          <Icon align="right" size="small">
            <i className="fas fa-exclamation-triangle" />
          </Icon>
        </Form.Control>
        <Form.Help color="danger">This email is invalid</Form.Help>
      </Form.Field>

      <Block renderAs="fieldset" disabled>
        <Form.Field>
          <Form.Label>Label Text</Form.Label>
          <Form.Control>
            <Form.Input placeholder="Inside a field set" />
          </Form.Control>
        </Form.Field>
        <Form.Field>
          <Form.Label>Another disabled field</Form.Label>
          <Form.Control>
            <Form.Input placeholder="Another nside a field set" />
          </Form.Control>
        </Form.Field>
      </Block>
      <Form.Field>
        <Form.Label>Subject</Form.Label>
        <Form.Field kind="group">
          <Form.Control>
            <Form.Select
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            >
              <option value="select-dropdown">Select dropdown</option>
              <option value="with-options">With options</option>
            </Form.Select>
          </Form.Control>
          <Form.Control fullwidth loading>
            <Form.Input placeholder="With loading state" />
          </Form.Control>
        </Form.Field>
      </Form.Field>

      <Form.Field>
        <Form.Label>Message</Form.Label>
        <Form.Textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </Form.Field>

      <Form.Field>
        <Form.Control>
          <Form.Checkbox
            checked={tocAgreed}
            onChange={(e) => setTocAgreed(e.target.checked)}
          >
            {'  '}I agree to the <a href="#">terms and conditions</a>
          </Form.Checkbox>
        </Form.Control>
      </Form.Field>

      <Form.Field>
        <Form.Control>
          <Form.Radio
            value="yes"
            name="question"
            checked={questionValue === 'yes'}
            onChange={(e) => setQuestionValue(e.target.value)}
          >
            {'  '}Yes
          </Form.Radio>
          <Form.Radio
            value="no"
            name="question"
            checked={questionValue === 'no'}
            onChange={(e) => setQuestionValue(e.target.value)}
          >
            {'  '}No
          </Form.Radio>
        </Form.Control>
      </Form.Field>

      <Form.Field kind="group">
        <Form.Control>
          <Button color="link">Submit</Button>
        </Form.Control>
        <Form.Control>
          <Button color="link" colorVariant="light">
            Cancel
          </Button>
        </Form.Control>
      </Form.Field>
    </form>
  );
};

export const Field = () => (
  <>
    <Box>
      <Message color="info">
        <Message.Body>Vertical Form</Message.Body>
      </Message>
      <Form.Field>
        <Form.Label>Field label</Form.Label>
        <Form.Control>
          <Form.Input type="text" placeholder="Field control - text input" />
        </Form.Control>
        <Form.Help>Help text for this field</Form.Help>
      </Form.Field>
      <Form.Field>
        <Form.Label>With Button</Form.Label>
        <Form.Field kind="addons">
          <Form.Control>
            <Button disabled>+1</Button>
          </Form.Control>
          <Form.Control fullwidth>
            <Form.Input type="tel" placeholder="555-555-555" />
          </Form.Control>
        </Form.Field>
        <Form.Field kind="group" align="center">
          <Form.Control>
            <Button color="primary">Send</Button>
          </Form.Control>
          <Form.Control>
            <Button color="info">Cancel</Button>
          </Form.Control>
          <Form.Control>
            <Button color="link">Reset</Button>
          </Form.Control>
        </Form.Field>
      </Form.Field>
    </Box>
    <Box>
      <Message color="info">
        <Message.Body>Horizontal Form</Message.Body>
      </Message>
      <Form.Field horizontal>
        <Form.Field.Label>
          <Form.Label>Field label</Form.Label>
        </Form.Field.Label>
        <Form.Field.Body>
          <Form.Field>
            <Form.Control>
              <Form.Input
                type="text"
                placeholder="Field control - text input"
              />
            </Form.Control>
            <Form.Help>Help text for this field</Form.Help>
          </Form.Field>
        </Form.Field.Body>
      </Form.Field>
      <Form.Field horizontal>
        <Form.Field.Label>
          <Form.Label>Field label</Form.Label>
        </Form.Field.Label>
        <Form.Field.Body>
          <Form.Field>
            <Form.Control>
              <Form.Textarea type="text" placeholder="Field control - Aread" />
            </Form.Control>
          </Form.Field>
        </Form.Field.Body>
      </Form.Field>
    </Box>
  </>
);

export const Control = ({ iconLeft, iconRight, ...args }) => (
  <>
    <Form.Field>
      <Form.Label>Username</Form.Label>
      <Form.Control {...args}>
        <Form.Input type="text" placeholder="e.g. John Doe" />
        {iconLeft && (
          <Icon align="left">
            <i className="fas fa-user" />
          </Icon>
        )}
        {iconRight && (
          <Icon align="right">
            <i className="fas fa-check" />
          </Icon>
        )}
      </Form.Control>
    </Form.Field>
    <Form.Field>
      <Form.Label>Username</Form.Label>
      <Form.Control>
        <Form.Select>
          <option>Option 1</option>
          <option>Option 2</option>
          <option>Option 3</option>
        </Form.Select>
        <Icon align="left">
          <i className="fas fa-globe" />
        </Icon>
      </Form.Control>
    </Form.Field>
  </>
);

Control.argTypes = {
  size: {
    control: {
      type: 'select',
      options: ['small', 'medium', 'large'],
    },
  },
  iconLeft: {
    defaultValue: true,
    control: {
      type: 'boolean',
    },
  },
  iconRight: {
    defaultValue: true,
    control: {
      type: 'boolean',
    },
  },
  loading: {
    defaultValue: false,
    control: {
      type: 'boolean',
    },
  },
  fullwidth: {
    defaultValue: false,
    control: {
      type: 'boolean',
    },
  },
};

export const InputExample = (args) => {
  return (
    <>
      <Form.Field>
        <Form.Label>Username</Form.Label>
        <Form.Control>
          <Form.Input type="text" {...args} placeholder="e.g. John Doe" />
        </Form.Control>
      </Form.Field>
      <Form.Field>
        <Form.Label>Password</Form.Label>
        <Form.Control>
          <Form.Input {...args} type="password" placeholder="password" />
        </Form.Control>
      </Form.Field>
    </>
  );
};

InputExample.argTypes = {
  size: {
    control: {
      type: 'select',
      options: ['small', 'medium', 'large'],
    },
  },
  color: {
    control: {
      type: 'select',
      options: Object.values(CONSTANTS.COLORS),
    },
  },
  status: {
    control: {
      type: 'select',
      options: ['focus', 'hover'],
    },
  },
  readOnly: {
    control: {
      type: 'boolean',
    },
  },
  isStatic: {
    control: {
      type: 'boolean',
    },
  },
  disabled: {
    defaultValue: false,
    control: {
      type: 'boolean',
    },
  },
  rounded: {
    control: {
      type: 'boolean',
    },
  },
};

export const TextAreaExample = (args) => (
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

TextAreaExample.argTypes = {
  size: {
    control: {
      type: 'select',
      options: ['default', 'small', 'medium', 'large'],
    },
  },
  color: {
    control: {
      type: 'select',
      options: ['default', ...Object.values(CONSTANTS.COLORS)],
    },
  },
  rows: {
    control: {
      type: 'number',
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
  disabled: {
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
