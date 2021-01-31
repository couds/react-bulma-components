import React from 'react';
import CONSTANTS from '../../constants';
import { Form, Icon } from '../../index';

export const BasicUsage = (args) => {
  const [selectedOption, setSelectedOption] = React.useState('option1');
  return (
    <Form.Select
      {...args}
      size={args.size === 'default' ? null : args.size}
      value={selectedOption}
      onChange={(e) => setSelectedOption(e.target.value)}
    >
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
    </Form.Select>
  );
};

BasicUsage.argTypes = {
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
  readOnly: {
    description: 'Whether the dropdown should be read-only.',
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
  hovered: {
    defaultValue: false,
    control: {
      type: 'boolean',
    },
  },
  focused: {
    defaultValue: false,
    control: {
      type: 'boolean',
    },
  },
};

export const MultiSelect = () => {
  const [selectedOptions, setSelectedOptions] = React.useState(['option1']);

  return (
    <Form.Select
      multiple
      value={selectedOptions}
      onChange={(e) =>
        setSelectedOptions(
          Array.from(e.target.selectedOptions, (option) => option.value),
        )
      }
    >
      {[...Array(10).keys()].map((val) => (
        <option value={`option${val}`}>Option {val}</option>
      ))}
    </Form.Select>
  );
};

export const Rounded = () => (
  <Form.Select rounded>
    <option>Option 1</option>
    <option>Option 2</option>
  </Form.Select>
);

export const DifferentAppearances = () => (
  <>
    <Form.Field>
      <Form.Select size="small" color="success" value="0">
        <option value="0">Small and successful</option>
      </Form.Select>
    </Form.Field>
    <Form.Field>
      <Form.Select size="medium" color="warning" value="0">
        <option value="0">Medium but warning</option>
      </Form.Select>
    </Form.Field>
    <Form.Field>
      <Form.Select loading size="large" value="0">
        <option value="0">Big and loading</option>
      </Form.Select>
    </Form.Field>
  </>
);

export const EmbedIcon = () => (
  <Form.Control iconLeft>
    <Form.Select>
      <option>Option 1</option>
      <option>Option 2</option>
    </Form.Select>
    <Icon align="left">
      <i className="fas fa-user" />
    </Icon>
  </Form.Control>
);
