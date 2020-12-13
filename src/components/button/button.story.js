import React from 'react';
import PropTypes from 'prop-types';
import { addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Button, Section } from '../..';

import CONSTANTS from '../../constants';

addDecorator((story) => <div className="button-display">{story()}</div>);

export const Default = (args) => (
  <Button
    {...args}
    onClick={action('Button Click')}
    onMouseEnter={action('Hover')}
  >
    Button
  </Button>
);

Default.argTypes = {
  colorVariant: {
    description: 'Variant of the color scheme',
    control: {
      type: 'select',
      options: Object.values(CONSTANTS.COLOR_VARIANT),
    },
  },
  fullwidth: {
    description: 'Whether the button should take up the entire parent width',
    control: {
      type: 'boolean',
    },
  },
  color: {
    description: 'Color of the button',
    defaultValue: '',
    control: {
      type: 'select',
      options: Object.values(CONSTANTS.COLORS),
    },
  },
  outlined: {
    description: 'Whether the button should have an outlined style',
    default: false,
    control: {
      type: 'boolean',
    },
  },
  inverted: {
    description:
      'Whether the button should have an inverted color scheme. Useful when button is used on colored background',
    default: false,
    control: {
      type: 'boolean',
    },
  },
  disabled: {
    description: 'Whether the button should be disabled',
    default: false,
    control: {
      type: 'boolean',
    },
  },
  text: {
    description: 'Whether the button should have a text button style',
    default: false,
    control: {
      type: 'boolean',
    },
  },
  isStatic: {
    description: 'Whether the button should be non-interactive',
    default: false,
    control: {
      type: 'boolean',
    },
  },
  rounded: {
    description: 'Whether the button should have fully-rounded corners',
    default: false,
    control: {
      type: 'boolean',
    },
  },
};

export const CustomComponent = () => {
  const Custom = ({ customProp, children, className }) => (
    <a className={className} href={customProp}>
      {children}
    </a>
  );

  Custom.propTypes = {
    customProp: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
  };

  return (
    <Section>
      <Button
        color="info"
        renderAs={Custom}
        customProp="https://github.com/couds/react-bulma-components"
      >
        Button rendered using another React Component with props
      </Button>
    </Section>
  );
};

// eslint-disable-next-line react/prop-types
export const ButtonGroup = ({ position, size, ...args }) => (
  <Button.Group
    position={position === 'default' ? '' : position}
    size={size === 'default' ? '' : size}
    {...args}
  >
    <Button renderAs="span" color="success">
      Save changes
    </Button>
    <Button renderAs="span" color="info">
      Save and continue
    </Button>
    <Button renderAs="span" color="danger">
      Cancel
    </Button>
  </Button.Group>
);

ButtonGroup.argTypes = {
  hasAddons: {
    default: false,
    control: {
      type: 'boolean',
    },
  },
  position: {
    control: {
      type: 'select',
      options: ['default', 'centered', 'right'],
    },
  },
  size: {
    control: {
      type: 'select',
      options: ['default', 'small', 'medium', 'large'],
    },
  },
};
