import React from 'react';

import { storiesOf } from '@storybook/react';

import Message from 'react-bulma-components/lib/components/message';
import Button from 'react-bulma-components/lib/components/button';

storiesOf('Message', module)
  .add('Default', () => (
    <Message>
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
  ))
  .add('Color', () => (
    <React.Fragment>
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
          sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi
          magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales
          sem.
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
          sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi
          magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales
          sem.
        </Message.Body>
      </Message>
    </React.Fragment>
  ));
