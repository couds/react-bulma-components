import React from 'react';

import { Box, Breadcrumb } from 'react-bulma-components';

export const Default = (args) => (
  <div>
    <Box>
      <Breadcrumb
        {...args}
        items={[
          {
            name: 'Storybook',
            url: '#1',
          },
          {
            name: 'Breadcrumb',
            url: '#2',
          },
          {
            name: 'Breadcrumb Types',
            url: '#3',
            active: true,
          },
        ]}
      />
    </Box>
  </div>
);

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
};

export const CustomElement = () => {
  /* eslint-disable react/prop-types */
  const Anchor = ({ children, ...props }) => (
    <a className='Others' {...props}>
      {children}
    </a>
  );
  /* eslint-enable react/prop-types */

  return (
    <div>
      <Box>
        <Breadcrumb
          renderAs={Anchor}
          hrefAttr='href'
          items={[
            {
              name: 'Storybook',
              url: '#1',
            },
            {
              name: 'Breadcrumb',
              url: '#2',
            },
            {
              name: 'Breadcrumb Types',
              url: '#3',
              active: true,
            },
          ]}
        />
      </Box>
    </div>
  );
};

CustomElement.storyName = 'Use custom render element';
