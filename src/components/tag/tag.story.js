import React from 'react';

import { storiesOf } from '@storybook/react';

import { Tag, Form } from 'react-bulma-components';

storiesOf('Tag', module)
  .addDecorator((story) => <div style={{ margin: 10 }}>{story()}</div>)
  .add('Default', () => <Tag>Tag Text</Tag>)
  .add('Group Tags', () => (
    <Tag.Group>
      <Tag color="primary">Tag Text</Tag>
      <Tag color="success">Tag Text</Tag>
      <Tag color="danger">Tag Text</Tag>
      <Tag color="warning">Tag Text</Tag>
      <Tag color="info">Tag Text</Tag>
    </Tag.Group>
  ))
  .add('Group Tags without gap', () => (
    <div>
      <Tag.Group gapless>
        <Tag>Tag Text</Tag>
        <Tag color="primary">Tag Text</Tag>
      </Tag.Group>
      <Tag.Group gapless>
        <Tag color="danger">Delete</Tag>
        <Tag remove renderAs="a" />
      </Tag.Group>
    </div>
  ))
  .add('Group Tags without gap multiline', () => (
    <div>
      <Form.Field multiline kind="group">
        <Form.Control>
          <Tag.Group gapless>
            <Tag color="dark">npm</Tag>
            <Tag color="info">V 5.3</Tag>
          </Tag.Group>
        </Form.Control>
        <Form.Control>
          <Tag.Group gapless>
            <Tag color="dark">Build</Tag>
            <Tag color="success">Pass</Tag>
          </Tag.Group>
        </Form.Control>
        <Form.Control>
          <Tag.Group gapless>
            <Tag color="dark">Chat</Tag>
            <Tag color="primary">Slack</Tag>
          </Tag.Group>
        </Form.Control>
      </Form.Field>
    </div>
  ))
  .add('Others', () => (
    <Tag.Group>
      <Tag rounded>Rounded</Tag>
      <Tag remove />
    </Tag.Group>
  ));
