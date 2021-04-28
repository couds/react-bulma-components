/* eslint-disable react/prop-types */
import React from 'react';
import { Notification, Button, Block } from '../..';
import CONSTANTS from '../../constants';

export const Default = (args) => {
  return (
    <Block>
      <Notification {...args}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum
        dolor. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut,
        porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam
        gravida purus diam, et dictum <a href="/">felis venenatis</a> efficitur.
        Sit amet, consectetur adipiscing elit
        <Button remove />
      </Notification>
    </Block>
  );
};

Default.argTypes = {
  color: {
    control: {
      type: 'select',
      options: ['default'].concat(Object.values(CONSTANTS.COLORS)),
    },
  },
};
