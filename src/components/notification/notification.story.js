import React from 'react';

import { storiesOf } from '@storybook/react';

import Notification from 'react-bulma-components/lib/components/notification';
import Button from 'react-bulma-components/lib/components/button';
import Section from 'react-bulma-components/lib/components/section';

storiesOf('Notification', module).add('Default', () => (
  <Section>
    <Notification>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor.{' '}
      <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec
      nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus
      diam, et dictum <a href="/">felis venenatis</a> efficitur. Sit amet,
      consectetur adipiscing elit
      <Button remove />
    </Notification>
    <Notification color="success">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor.{' '}
      <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec
      nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus
      diam, et dictum <a href="/">felis venenatis</a> efficitur. Sit amet,
      consectetur adipiscing elit
      <Button remove />
    </Notification>
    <Notification color="danger">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor.{' '}
      <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec
      nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus
      diam, et dictum <a href="/">felis venenatis</a> efficitur. Sit amet,
      consectetur adipiscing elit
      <Button remove />
    </Notification>
  </Section>
));
