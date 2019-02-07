import { storiesOf } from '@storybook/react';
import React from 'react';
import { Pagination } from '../pagination';

storiesOf('Pagination', module)
  .addDecorator(story => <div style={{ margin: 50 }}>{story()}</div>)
  .add('Default', () => <Pagination current={3} total={5} delta={1} />)
  .add('Without page number', () => <Pagination current={3} total={5} delta={0} />)
  .add('Without prev/next button', () => <Pagination showPrevNext={false} current={3} total={5} delta={1} />);
