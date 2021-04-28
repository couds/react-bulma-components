/* eslint-disable react/prop-types */
import React from 'react';
import { Progress, Block, Message } from '../..';
import CONSTANTS from '../../constants';

export const Default = (args) => {
  return (
    <>
      <Block>
        <Message color="info">
          <Message.Body>
            Play with the controls to see how the component behave with
            differents props
          </Message.Body>
        </Message>
      </Block>
      <Block>
        <Progress {...args} />
      </Block>
    </>
  );
};

Default.args = {
  value: 30,
  max: 100,
};

Default.argTypes = {
  color: {
    control: {
      type: 'select',
      options: ['default'].concat(Object.values(CONSTANTS.COLORS)),
    },
  },
  size: {
    control: {
      type: 'select',
      options: ['small', 'normal', 'medium', 'large'],
      defaultValue: 'normal',
    },
  },
};
