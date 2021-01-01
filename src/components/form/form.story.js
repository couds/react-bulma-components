import React, { useState } from 'react';
import { Button, Form, Icon } from '../../index';

export const BasicExample = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('bulma');
  const [email, setEmail] = useState('hello@');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [tocAgreed, setTocAgreed] = useState(false);
  const [questionValue, setQuestionValue] = useState('');

  return (
    <form>
      <Form.Field>
        <Form.Label>Name</Form.Label>
        <Form.Control>
          <Form.Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Text input"
          />
        </Form.Control>
      </Form.Field>

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

      <Form.Field>
        <Form.Label>Subject</Form.Label>
        <Form.Control>
          <Form.Select
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          >
            <option value="select-dropdown">Select dropdown</option>
            <option value="with-options">With options</option>
          </Form.Select>
        </Form.Control>
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

export const FieldExample = () => (
  <Form.Field>
    <Form.Label>Field label</Form.Label>
    <Form.Control>
      <Form.Input type="text" placeholder="Field control - text input" />
    </Form.Control>
    <Form.Help>Help text for this field</Form.Help>
  </Form.Field>
);

FieldExample.storyName = 'Form field';

export const MultipleFields = () => (
  <>
    <Form.Field>
      <Form.Label>Username</Form.Label>
      <Form.Control>
        <Form.Input type="text" placeholder="e.g. John Doe" />
      </Form.Control>
    </Form.Field>
    <Form.Field>
      <Form.Label>Password</Form.Label>
      <Form.Control>
        <Form.Input type="password" placeholder="password" />
      </Form.Control>
    </Form.Field>
  </>
);

export const FormControlIcons = (args) => (
  <Form.Field>
    <Form.Label>Username</Form.Label>
    <Form.Control {...args}>
      <Form.Input type="text" placeholder="e.g. John Doe" />
      <Icon align="left">
        <i className="fas fa-user" />
      </Icon>
      <Icon align="right">
        <i className="fas fa-check" />
      </Icon>
    </Form.Control>
  </Form.Field>
);

FormControlIcons.argTypes = {
  iconLeft: {
    description: 'Whether to display an icon on the left side of this Control',
    defaultValue: true,
    control: {
      type: 'boolean',
    },
  },
  iconRight: {
    description: 'Whether to display an icon on the right side of this Control',
    defaultValue: true,
    control: {
      type: 'boolean',
    },
  },
};

export const GroupedControls = () => (
  <Form.Field kind="group">
    <Form.Control>
      <Form.Label>Password</Form.Label>
      <Form.Input type="password" />
    </Form.Control>
    <Form.Control>
      <Form.Label>Retype your password</Form.Label>
      <Form.Input type="password" />
    </Form.Control>
  </Form.Field>
);

export const GroupedButtons = () => (
  <Form.Field kind="group">
    <Form.Control>
      <Button color="primary">Submit</Button>
    </Form.Control>
    <Form.Control>
      <Button color="light">Cancel</Button>
    </Form.Control>
  </Form.Field>
);

export const ControlGroupAlignment = (args) => (
  <Form.Field kind="group" align={args.align === 'default' ? null : args.align}>
    <Form.Control>
      <Button color="primary">Submit</Button>
    </Form.Control>
    <Form.Control>
      <Button color="light">Cancel</Button>
    </Form.Control>
  </Form.Field>
);

ControlGroupAlignment.argTypes = {
  align: {
    description: 'Alter the alignment of controls in this Field.',
    defaultValue: 'centered',
    control: {
      type: 'select',
      options: ['default', 'centered', 'right'],
    },
  },
};

export const ExpandedControl = () => (
  <Form.Field kind="group">
    <Form.Control fullwidth>
      <Form.Input type="text" placeholder="Search..." />
    </Form.Control>
    <Form.Control>
      <Button color="primary">Search</Button>
    </Form.Control>
  </Form.Field>
);

export const MultilineControls = () => (
  <Form.Field kind="group" multiline>
    {[
      'zero',
      'one',
      'two',
      'three',
      'four',
      'five',
      'six',
      'seven',
      'eight',
      'nine',
    ].map((label) => (
      <Form.Control>
        <Button>{label}</Button>
      </Form.Control>
    ))}
  </Form.Field>
);

export const DisablingFields = (args) => (
  <fieldset {...args}>
    <Form.Field>
      <Form.Label>Username</Form.Label>
      <Form.Control>
        <Form.Input type="text" placeholder="e.g. John Doe" />
      </Form.Control>
    </Form.Field>
    <Form.Field>
      <Form.Label>Password</Form.Label>
      <Form.Control>
        <Form.Input type="password" placeholder="password" />
      </Form.Control>
    </Form.Field>
  </fieldset>
);

DisablingFields.argTypes = {
  disabled: {
    control: {
      type: 'boolean',
    },
  },
};

export const HorizontalForm = () => (
  <form>
    <Form.Field horizontal>
      <Form.Field.Label size="normal">
        <Form.Label>From</Form.Label>
      </Form.Field.Label>
      <Form.Field.Body>
        <Form.Field>
          <Form.Control iconLeft fullwidth>
            <Form.Input type="text" placeholder="Name" />
            <Icon align="left">
              <i className="fas fa-user" />
            </Icon>
          </Form.Control>
        </Form.Field>
        <Form.Field>
          <Form.Control iconLeft iconRight fullwidth>
            <Form.Input
              color="success"
              type="email"
              placeholder="Email"
              value="alex@smith.com"
            />
            <Icon align="left">
              <i className="fas fa-envelope" />
            </Icon>
            <Icon align="right">
              <i className="fas fa-check" />
            </Icon>
          </Form.Control>
        </Form.Field>
      </Form.Field.Body>
    </Form.Field>

    <Form.Field horizontal>
      {/* Empty field-label for spacing purpose */}
      <Form.Field.Label />
      <Form.Field.Body>
        <Form.Field>
          <Form.Field kind="addons">
            <Form.Control>
              <Button isStatic>+44</Button>
            </Form.Control>
            <Form.Control fullwidth>
              <Form.Input type="tel" placeholder="Phone number" />
            </Form.Control>
          </Form.Field>
          <Form.Help>Do not enter the first zero</Form.Help>
        </Form.Field>
      </Form.Field.Body>
    </Form.Field>

    <Form.Field horizontal>
      <Form.Field.Label size="normal">
        <Form.Label>Department</Form.Label>
      </Form.Field.Label>
      <Form.Field.Body>
        <Form.Field>
          <Form.Control fullwidth>
            <Form.Select>
              <option>Business development</option>
              <option>Marketing</option>
              <option>Sales</option>
            </Form.Select>
          </Form.Control>
        </Form.Field>
      </Form.Field.Body>
    </Form.Field>

    <Form.Field horizontal>
      <Form.Field.Label>
        <Form.Label>Already a member?</Form.Label>
      </Form.Field.Label>
      <Form.Field.Body>
        <Form.Field>
          <Form.Control>
            <Form.Radio name="member"> Yes</Form.Radio>
            <Form.Radio name="member"> No</Form.Radio>
          </Form.Control>
        </Form.Field>
      </Form.Field.Body>
    </Form.Field>

    <Form.Field horizontal>
      <Form.Field.Label size="normal">
        <Form.Label>Subject</Form.Label>
      </Form.Field.Label>
      <Form.Field.Body>
        <Form.Field>
          <Form.Control>
            <Form.Input type="text" placeholder="Subject" color="danger" />
          </Form.Control>
          <Form.Help color="danger">This field is required</Form.Help>
        </Form.Field>
      </Form.Field.Body>
    </Form.Field>

    <Form.Field horizontal>
      <Form.Field.Label size="normal">
        <Form.Label>Question</Form.Label>
      </Form.Field.Label>
      <Form.Field.Body>
        <Form.Field>
          <Form.Control>
            <Form.Textarea placeholder="Subject" />
          </Form.Control>
        </Form.Field>
      </Form.Field.Body>
    </Form.Field>

    <Form.Field horizontal>
      {/* Empty field-label for spacing purpose */}
      <Form.Field.Label />
      <Form.Field.Body>
        <Form.Field>
          <Form.Control>
            <Button color="primary">Submit</Button>
          </Form.Control>
        </Form.Field>
      </Form.Field.Body>
    </Form.Field>
  </form>
);

export const DifferentLabelSizes = () => (
  <>
    <Form.Field horizontal>
      <Form.Field.Label>
        <Form.Label>No padding</Form.Label>
      </Form.Field.Label>
      <Form.Field.Body>
        <Form.Field>
          <Form.Control>
            <Form.Checkbox> Checkbox</Form.Checkbox>
          </Form.Control>
        </Form.Field>
      </Form.Field.Body>
    </Form.Field>

    <Form.Field horizontal>
      <Form.Field.Label size="small">
        <Form.Label>Small padding</Form.Label>
      </Form.Field.Label>
      <Form.Field.Body>
        <Form.Field>
          <Form.Control>
            <Form.Input
              size="small"
              type="text"
              placeholder="Small sized input"
            />
          </Form.Control>
        </Form.Field>
      </Form.Field.Body>
    </Form.Field>

    <Form.Field horizontal>
      <Form.Field.Label size="normal">
        <Form.Label>Normal label</Form.Label>
      </Form.Field.Label>
      <Form.Field.Body>
        <Form.Field>
          <Form.Control>
            <Form.Input type="text" placeholder="Normal sized input" />
          </Form.Control>
        </Form.Field>
      </Form.Field.Body>
    </Form.Field>

    <Form.Field horizontal>
      <Form.Field.Label size="medium">
        <Form.Label>Medium label</Form.Label>
      </Form.Field.Label>
      <Form.Field.Body>
        <Form.Field>
          <Form.Control>
            <Form.Input
              type="text"
              size="medium"
              placeholder="Medium sized input"
            />
          </Form.Control>
        </Form.Field>
      </Form.Field.Body>
    </Form.Field>

    <Form.Field horizontal>
      <Form.Field.Label size="large">
        <Form.Label>Large label</Form.Label>
      </Form.Field.Label>
      <Form.Field.Body>
        <Form.Field>
          <Form.Control>
            <Form.Input
              type="text"
              size="large"
              placeholder="Large sized input"
            />
          </Form.Control>
        </Form.Field>
      </Form.Field.Body>
    </Form.Field>
  </>
);
