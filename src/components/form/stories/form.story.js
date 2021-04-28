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
        <Form.Control>
          <Form.Input
            color="success"
            value={username}
            onChange={(e) => {
              return setUsername(e.target.value);
            }}
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
        <Form.Control>
          <Form.Input
            color="danger"
            value={email}
            onChange={(e) => {
              return setEmail(e.target.value);
            }}
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
              onChange={(e) => {
                return setSubject(e.target.value);
              }}
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
          onChange={(e) => {
            return setMessage(e.target.value);
          }}
        />
      </Form.Field>

      <Form.Field>
        <Form.Control>
          <Form.Checkbox
            checked={tocAgreed}
            onChange={(e) => {
              return setTocAgreed(e.target.checked);
            }}
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
            onChange={(e) => {
              return setQuestionValue(e.target.value);
            }}
          >
            {'  '}Yes
          </Form.Radio>
          <Form.Radio
            value="no"
            name="question"
            checked={questionValue === 'no'}
            onChange={(e) => {
              return setQuestionValue(e.target.value);
            }}
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

export const LabelExample = (args) => {
  return (
    <Form.Field>
      <Form.Label {...args}>I&apos;m the label of this field</Form.Label>
      <Form.Control>
        <Form.Input placeholder="Inside a field set" />
      </Form.Control>
    </Form.Field>
  );
};

LabelExample.argTypes = {
  size: {
    control: {
      type: 'select',
      options: ['small', 'medium', 'large'],
    },
  },
};

export const Field = (args) => {
  return (
    <>
      <Box>
        <Message color="info">
          <Message.Body>Vertical Form</Message.Body>
        </Message>
        <Form.Field {...args}>
          <Form.Label>Field label</Form.Label>
          <Form.Control>
            <Form.Input type="text" placeholder="Field control - text input" />
          </Form.Control>
          <Form.Help>Help text for this field</Form.Help>
        </Form.Field>
        <Form.Field {...args}>
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
                <Form.Textarea
                  type="text"
                  placeholder="Field control - Aread"
                />
              </Form.Control>
            </Form.Field>
          </Form.Field.Body>
        </Form.Field>
      </Box>
    </>
  );
};

Field.argTypes = {
  size: {
    control: {
      type: 'select',
      options: ['small', 'medium', 'large'],
    },
  },
};

export const Control = ({ iconLeft, iconRight, ...args }) => {
  return (
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
};

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

export const TextAreaExample = (args) => {
  return (
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
};

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

export const SelectExample = ({ withIcon, ...args }) => {
  const [selectedOption, setSelectedOption] = React.useState('option1');
  React.useEffect(() => {
    if (args.multiple) {
      setSelectedOption([]);
      return;
    }
    setSelectedOption('option1');
  }, [args.multiple]);
  return (
    <Form.Field>
      <Form.Label>Select an option</Form.Label>
      <Form.Control>
        <Form.Select
          {...args}
          size={args.size === 'default' ? null : args.size}
          value={selectedOption}
          onChange={(e) => {
            const { value } = e.target;
            if (args.multiple) {
              setSelectedOption(
                Array.from(e.target.selectedOptions, (option) => {
                  return option.value;
                }),
              );
              return;
            }
            setSelectedOption(value);
          }}
        >
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
        </Form.Select>
        {withIcon && (
          <Icon align="left">
            <i className="fas fa-user" />
          </Icon>
        )}
      </Form.Control>
    </Form.Field>
  );
};

SelectExample.argTypes = {
  color: {
    description: 'Color of this dropdown',
    defaultValue: undefined,
    control: {
      type: 'select',
      options: Object.values(CONSTANTS.COLORS),
    },
  },
  size: {
    description: 'The size of this dropdown',
    defaultValue: undefined,
    control: {
      type: 'select',
      options: ['default', 'small', 'medium', 'large'],
    },
  },
  rounded: {
    description:
      'Whether the dropdown button should have fully rounded corners.',
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
  loading: {
    description:
      'Whether a loading spinner should be shown in place of the dropdown arrow',
    defaultValue: false,
    control: {
      type: 'boolean',
    },
  },
  multiple: {
    defaultValue: false,
    control: {
      type: 'boolean',
    },
  },
  status: {
    defaultValue: false,
    control: {
      type: 'select',
      options: ['focus', 'hover'],
    },
  },
  withIcon: {
    defaultValue: false,
    control: {
      type: 'boolean',
    },
  },
};

export const CheckboxExample = (args) => {
  return (
    <Form.Field>
      <Form.Control>
        <Form.Checkbox {...args}>Remember me</Form.Checkbox>
      </Form.Control>
    </Form.Field>
  );
};

CheckboxExample.argTypes = {
  disabled: {
    control: {
      type: 'boolean',
    },
  },
};

export const RadioExample = () => {
  const [selectedValue, setSelectedValue] = useState('yes');
  const onChange = (e) => {
    return setSelectedValue(e.target.value);
  };
  return (
    <Form.Control>
      <Form.Radio
        value="yes"
        name="story-radio-name"
        checked={selectedValue === 'yes'}
        onChange={onChange}
      >
        Yes
      </Form.Radio>
      <Form.Radio
        value="no"
        name="story-radio-name"
        checked={selectedValue === 'no'}
        onChange={onChange}
      >
        No
      </Form.Radio>
      <Form.Radio name="story-radio-name" disabled onChange={onChange}>
        I am disabled
      </Form.Radio>
    </Form.Control>
  );
};

export const InputExampleExample = ({ withIcon, ...args }) => {
  const [uploadedFile, setUploadedFile] = useState();

  return (
    <Form.InputFile
      {...args}
      value={uploadedFile}
      icon={withIcon ? <i className="fas fa-upload" /> : undefined}
      onChange={(e) => {
        setUploadedFile(e.target.files);
      }}
    />
  );
};

InputExampleExample.argTypes = {
  color: {
    defaultValue: undefined,
    control: {
      type: 'select',
      options: Object.values(CONSTANTS.COLORS),
    },
  },
  size: {
    description: 'The size of this InputFile',
    defaultValue: undefined,
    control: {
      type: 'select',
      options: ['default', 'small', 'medium', 'large'],
    },
  },
  align: {
    control: {
      type: 'select',
      options: ['center', 'right'],
    },
  },
  boxed: {
    description: 'Whether this InputFile should be a box',
    defaultValue: false,
    control: {
      type: 'boolean',
    },
  },
  label: {
    description: 'The label of the upload button',
    defaultValue: 'Choose a file...',
    control: {
      type: 'text',
    },
  },
  filename: {
    control: {
      type: 'text',
    },
  },
  withIcon: {
    control: {
      type: 'boolean',
    },
  },
};
