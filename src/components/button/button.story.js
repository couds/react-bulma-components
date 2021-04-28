/* eslint-disable react/prop-types */
import React from 'react';

import { Button, Box } from '../..';

import CONSTANTS from '../../constants';

export const Default = ({ hasAddons, groupSize, align, ...args }) => {
  return (
    <>
      <Box>
        <Button {...args}>Button</Button>
      </Box>
      <Box>
        <Button.Group
          hasAddons={hasAddons}
          align={align === 'default' ? '' : align}
          size={groupSize === 'default' ? '' : groupSize}
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
      </Box>
    </>
  );
};

Default.argTypes = {
  hasAddons: {
    table: {
      category: 'Button Group',
    },
    default: false,
    control: {
      type: 'boolean',
    },
  },
  align: {
    table: {
      category: 'Button Group',
    },
    control: {
      type: 'select',
      options: ['default', 'center', 'right'],
    },
  },
  groupSize: {
    table: {
      category: 'Button Group',
    },
    control: {
      type: 'select',
      options: ['default', 'small', 'medium', 'large'],
    },
  },
  remove: {
    table: {
      category: 'Button',
    },
    control: {
      type: 'boolean',
    },
  },
  size: {
    table: {
      category: 'Button',
    },
    control: {
      type: 'select',
      options: ['default', 'small', 'medium', 'large'],
    },
  },
  colorVariant: {
    table: {
      category: 'Button',
    },
    description: 'Variant of the color scheme',
    control: {
      type: 'select',
      options: Object.values(CONSTANTS.COLOR_VARIANT),
    },
  },
  fullwidth: {
    table: {
      category: 'Button',
    },
    description: 'Whether the button should take up the entire parent width',
    control: {
      type: 'boolean',
    },
  },
  color: {
    table: {
      category: 'Button',
    },
    description: 'Color of the button',
    defaultValue: '',
    control: {
      type: 'select',
      options: Object.values(CONSTANTS.COLORS),
    },
  },
  outlined: {
    table: {
      category: 'Button',
    },
    description: 'Whether the button should have an outlined style',
    default: false,
    control: {
      type: 'boolean',
    },
  },
  inverted: {
    table: {
      category: 'Button',
    },
    description:
      'Whether the button should have an inverted color scheme. Useful when button is used on colored background',
    default: false,
    control: {
      type: 'boolean',
    },
  },
  disabled: {
    table: {
      category: 'Button',
    },
    description: 'Whether the button should be disabled',
    default: false,
    control: {
      type: 'boolean',
    },
  },
  text: {
    table: {
      category: 'Button',
    },
    description: 'Whether the button should have a text button style',
    default: false,
    control: {
      type: 'boolean',
    },
  },
  isStatic: {
    table: {
      category: 'Button',
    },
    description: 'Whether the button should be non-interactive',
    default: false,
    control: {
      type: 'boolean',
    },
  },
  rounded: {
    table: {
      category: 'Button',
    },
    description: 'Whether the button should have fully-rounded corners',
    default: false,
    control: {
      type: 'boolean',
    },
  },
};
