import React from 'react';

import { storiesOf } from '@storybook/react';

import { Pagination } from 'react-bulma-components';

storiesOf('Pagination', module)
  .addDecorator((story) => <div style={{ margin: 50 }}>{story()}</div>)
  .add('Default', () => <Pagination current={3} total={5} delta={1} />)
  .add('Without page number', () => (
    <Pagination current={3} total={5} delta={0} />
  ))
  .add('Without prev/next button', () => (
    <Pagination showPrevNext={false} current={3} total={5} delta={1} />
  ))
  .add('With all buttons manually disabled', () => (
    <Pagination disabled current={3} total={5} />
  ))
  .add('With first/last pages numbers', () => (
    <>
      <Pagination showFirstLast current={3} total={5} delta={1} />
      <Pagination showFirstLast current={1} total={5} delta={1} />
      <Pagination showFirstLast current={5} total={5} delta={1} />
      <Pagination showFirstLast current={2} total={2} delta={1} />
      <Pagination showFirstLast current={1} total={2} delta={1} />
    </>
  ));
