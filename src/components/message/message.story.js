import React from 'react';
import { Message, Button } from '../../index';
import CONSTANTS from '../../constants';

export const BasicUsage = (args) => (
  <Message {...args}>
    <Message.Header>
      Title
      <Button remove />
    </Message.Header>
    <Message.Body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}
      <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec
      nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus
      diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac{' '}
      <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et
      sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a
      neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
    </Message.Body>
  </Message>
);

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
};

export const DifferentColors = () => (
  <>
    <Message color="info">
      <Message.Header>
        Title
        <Button remove />
      </Message.Header>
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
    <Message color="danger">
      <Message.Header>
        Title
        <Button remove />
      </Message.Header>
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
  </>
);

export const BodyOnly = (args) => (
  <Message {...args}>
    <Message.Body>This is some profound, inspirational message.</Message.Body>
  </Message>
);

BodyOnly.argTypes = {
  color: {
    description: 'Color of the message block',
    defaultValue: '',
    control: {
      type: 'select',
      options: Object.values(CONSTANTS.COLORS),
    },
  },
};

export const DifferentSizes = () => (
  <Message size="large">
    <Message.Header>HUUUUGE</Message.Header>
    <Message.Body>I am a huuuuuge message.</Message.Body>
  </Message>
);
