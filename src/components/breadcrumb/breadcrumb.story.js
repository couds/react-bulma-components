import React from 'react';

import { Box, Breadcrumb } from '../..';

export const Default = (args) => {
  return (
    <div>
      <Box>
        <Breadcrumb {...args}>
          <Breadcrumb.Item>
            <a>Storybook</a>
          </Breadcrumb.Item>
          <Breadcrumb.Item active>
            <a>Breadcrumb</a>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <a>Details</a>
          </Breadcrumb.Item>
        </Breadcrumb>
      </Box>
    </div>
  );
};

Default.argTypes = {
  separator: {
    control: {
      type: 'select',
      options: ['arrow', 'dot', 'bullet', 'succeeds'],
    },
  },
  align: {
    control: {
      type: 'select',
      options: ['center', 'right'],
    },
  },
  size: {
    control: {
      type: 'select',
      options: ['default', 'small', 'medium', 'large'],
    },
  },
};
