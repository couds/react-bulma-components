import { storiesOf } from '@storybook/react';
import React from 'react';
import { Control, Field } from '../form';
import { Tag } from '../tag';

storiesOf('Tag', module)
  .addDecorator(story => <div style={{ margin: 10 }}>{story()}</div>)
  .add('Default', () => <Tag>Tag Text</Tag>)
  .add('Group Tags', () => (
    <Tag.Group>
      <Tag close color="primary">
        Tag Text
      </Tag>
      <Tag close color="success">
        Tag Text
      </Tag>
      <Tag close color="danger">
        Tag Text
      </Tag>
      <Tag close color="warning">
        Tag Text
      </Tag>
      <Tag close color="info">
        Tag Text
      </Tag>
    </Tag.Group>
  ))
  .add('Group Tags without gap', () => (
    <div>
      <Tag.Group gapless>
        <Tag ellipsis>Very long tag with some</Tag>
        <Tag color="primary">Tag Text</Tag>
      </Tag.Group>
      <Tag.Group gapless>
        <Tag color="danger">Delete</Tag>
        <Tag remove color="warning" renderAs="a" />
      </Tag.Group>
    </div>
  ))
  .add('Group Tags without gap multiline', () => (
    <div>
      <Field multiline kind="group">
        <Control>
          <Tag.Group gapless>
            <Tag color="dark">npm</Tag>
            <Tag color="info">V 5.3</Tag>
          </Tag.Group>
        </Control>
        <Control>
          <Tag.Group gapless>
            <Tag color="dark">Build</Tag>
            <Tag color="success">Pass</Tag>
          </Tag.Group>
        </Control>
        <Control>
          <Tag.Group gapless>
            <Tag color="dark">Chat</Tag>
            <Tag color="primary">Slack</Tag>
          </Tag.Group>
        </Control>
      </Field>
    </div>
  ))
  .add('Others', () => (
    <Tag.Group>
      <Tag rounded>Rounded</Tag>
      <Tag remove> </Tag>
    </Tag.Group>
  ));
