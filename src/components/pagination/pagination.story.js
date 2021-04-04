import React from 'react';
import { Pagination } from '../..';

export const Default = (args) => {
  return <Pagination {...args} />;
};

Default.argTypes = {
  showFirstLast: {
    control: {
      type: 'boolean',
    },
    defaultValue: true,
  },
  showPrevNext: {
    control: {
      type: 'boolean',
    },
    defaultValue: true,
  },
  current: {
    control: {
      type: 'number',
    },
    defaultValue: 3,
  },
  total: {
    control: {
      type: 'number',
    },
    defaultValue: 5,
  },
  delta: {
    control: {
      type: 'number',
    },
    defaultValue: 1,
  },
  disabled: {
    control: {
      type: 'boolean',
    },
  },
  rounded: {
    control: {
      type: 'boolean',
    },
  },
  size: {
    control: {
      type: 'select',
      options: ['small', 'medium', 'large'],
    },
  },
  align: {
    control: {
      type: 'select',
      options: ['center', 'right'],
    },
  },
  previous: {
    control: {
      type: 'text',
    },
    defaultValue: 'Previous',
  },
  next: {
    control: {
      type: 'text',
    },
    defaultValue: 'Next',
  },
};
