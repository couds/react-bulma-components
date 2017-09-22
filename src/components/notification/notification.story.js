import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import Notification from '.';
import Button from '../button';

storiesOf('Notification', module)
  .add('Default', withInfo()(() => (
    <Notification>
      Lorem ipsum dolor sit amet, consectetur
      adipiscing elit lorem ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Sit amet,
      consectetur adipiscing elit
      <Button remove />
    </Notification>
  )))
  .add('Success', withInfo()(() => (
    <Notification color="success">
      Lorem ipsum dolor sit amet, consectetur
      adipiscing elit lorem ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Sit amet,
      consectetur adipiscing elit
      <Button remove />
    </Notification>
  )))
  .add('Danger', withInfo(() => (
    <Notification color="danger">
      Lorem ipsum dolor sit amet, consectetur
      adipiscing elit lorem ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Sit amet,
      consectetur adipiscing elit
      <Button remove />
    </Notification>
  )));
