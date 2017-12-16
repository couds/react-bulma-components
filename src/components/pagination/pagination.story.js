import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import Pagination from '.';

storiesOf('Pagination', module)
  .addDecorator(story => (
    <div style={{ margin: 50, marginTop: 100 }}>
      {story()}
    </div>
  ))
  .add('Default', withInfo('')(() => (
    <Pagination current={3} total={5} delta={1} />
  )))
  .add('Without page number', withInfo('')(() => (
    <Pagination current={3} total={5} delta={0} />
  )))
  .add('Without prev/next button', withInfo('')(() => (
    <Pagination showPrevNext={false} current={3} total={5} delta={1} />
  )));
