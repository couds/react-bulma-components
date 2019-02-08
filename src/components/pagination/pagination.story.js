import { storiesOf } from '@storybook/react';
import React from 'react';
import { Pagination } from '../pagination';

storiesOf('Pagination', module)
  .addDecorator(story => <div style={{ margin: 50 }}>{story()}</div>)
  .add('Default', () => <Pagination showPrevNext current={3} total={5} />)
  .add('Without prev/next button', () => <Pagination current={3} total={5} />);
