/* eslint-disable react/prop-types */
import React from 'react';
import { Message, Button } from '../../index';
import CONSTANTS from '../../constants';

export const BasicUsage = ({ withoutHeader, ...args }) => {
  return (
    <Message {...args}>
      {!withoutHeader && (
        <Message.Header>
          <span>Title</span>
          <Button remove />
        </Message.Header>
      )}
      <Message.Body>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}
        <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta
        nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida
        purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac{' '}
        <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et
        sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna
        a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
      </Message.Body>
    </Message>
  );
};

BasicUsage.argTypes = {
  color: {
    description: 'Color of the message block',
    defaultValue: '',
    control: {
      type: 'select',
      options: Object.values(CONSTANTS.COLORS),
    },
  },
  size: {
    description: 'Size of the message bloc',
    defaultValue: undefined,
    control: {
      type: 'select',
      options: ['small', 'medium', 'large'],
    },
  },
  withoutHeader: {
    name: 'Hide Header',
    control: {
      type: 'boolean',
    },
  },
};
