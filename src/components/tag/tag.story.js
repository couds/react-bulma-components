import React from 'react';

import { storiesOf } from '@storybook/react';

import Tag from '.';

storiesOf('Tag', module)
  .addDecorator(story => (
    <div style={{ margin: 10 }}>
      {story()}
    </div>
  ))
  .add('Default', () => (
    <Tag>
      Tag Text
    </Tag>
  ))
  .add('Group Tags', () => (
    <Tag.Group>
      <Tag type="primary">
        Tag Text
      </Tag>
      <Tag type="success">
        Tag Text
      </Tag>
      <Tag type="danger">
        Tag Text
      </Tag>
      <Tag type="warrning">
        Tag Text
      </Tag>
      <Tag type="info">
        Tag Text
      </Tag>
    </Tag.Group>
  ))
  .add('Group Tags without gap', () => (
    <Tag.Group gapless>
      <Tag>
        Tag Text
      </Tag>
      <Tag>
        Tag Text
      </Tag>
      <Tag>
        Tag Text
      </Tag>
      <Tag>
        Tag Text
      </Tag>
      <Tag>
        Tag Text
      </Tag>
    </Tag.Group>
  ))
  .add('Others', () => (
    <Tag.Group>
      <Tag rounded>
        Rounded
      </Tag>
      <Tag remove />
    </Tag.Group>
  ));
