import React from 'react';

import { Container, Notification } from '../..';

export const ContainerExample = (args) => {
  return (
    <div>
      <Container {...args}>
        <Notification color="primary">
          This container will strech depending of the breakpoint you choose
        </Notification>
      </Container>
    </div>
  );
};

ContainerExample.argTypes = {
  breakpoint: {
    control: {
      type: 'select',
      options: ['mobile', 'tablet', 'desktop', 'widescreen', 'fullhd', 'fluid'],
    },
  },
  max: {
    control: {
      type: 'boolean',
    },
  },
};
