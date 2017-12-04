import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import Notification from '.';
import Button from '../button';
import Section from '../section';

storiesOf('Notification', module)
  .add('Default', withInfo()(() => (
    <Section>
      <Notification>
          Lorem ipsum dolor sit amet, consectetur
          adipiscing elit lorem ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a href="/">felis venenatis</a> efficitur. Sit amet,
          consectetur adipiscing elit
        <Button remove />
      </Notification>
      <Notification color="success">
          Lorem ipsum dolor sit amet, consectetur
          adipiscing elit lorem ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a href="/">felis venenatis</a> efficitur. Sit amet,
          consectetur adipiscing elit
        <Button remove />
      </Notification>
      <Notification color="danger">
          Lorem ipsum dolor sit amet, consectetur
          adipiscing elit lorem ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a href="/">felis venenatis</a> efficitur. Sit amet,
          consectetur adipiscing elit
        <Button remove />
      </Notification>
    </Section>
  )));
