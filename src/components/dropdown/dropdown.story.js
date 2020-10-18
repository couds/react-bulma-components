import React, { useState } from 'react';

import { boolean, select, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Dropdown, Container, Section } from 'react-bulma-components';

const alignment = {
  Default: '',
  right: 'right',
};

storiesOf('Dropdown', module)
  .add('Default', () => (
    <Dropdown onChange={action('select')} label={text('label', '')}>
      <Dropdown.Item value="item">Dropdown item</Dropdown.Item>
      <Dropdown.Item value="other">Other Dropdown item</Dropdown.Item>
      <Dropdown.Item value="active">Active Dropdown item</Dropdown.Item>
      <Dropdown.Item value="other 2">Other Dropdown item</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item value="divider">With divider</Dropdown.Item>
    </Dropdown>
  ))
  .add('Hoverable', () => (
    <Dropdown hoverable value="item" label={text('label', '')}>
      <Dropdown.Item value="item">Dropdown item</Dropdown.Item>
      <Dropdown.Item value="other">Other Dropdown item</Dropdown.Item>
      <Dropdown.Item value="active">Active Dropdown item</Dropdown.Item>
      <Dropdown.Item value="other 2">Other Dropdown item</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item value="divider">With divider</Dropdown.Item>
    </Dropdown>
  ))
  .add('Alignment', () => (
    <div>
      <Container>
        <Section size="large">
          <Dropdown
            align={select(
              'align (deprecated; will be removed in future releases)',
              alignment,
            )}
            right={boolean('right (will replace "align" prop)', false)}
            value="item"
            up={boolean('up', false)}
            label={text('label', '')}
          >
            <Dropdown.Item value="item">Dropdown item</Dropdown.Item>
            <Dropdown.Item value="other">Other Dropdown item</Dropdown.Item>
            <Dropdown.Item value="active">Active Dropdown item</Dropdown.Item>
            <Dropdown.Item value="other 2">Other Dropdown item</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item value="divider">With divider</Dropdown.Item>
          </Dropdown>
        </Section>
      </Container>
    </div>
  ))
  .add('Controlled component', () => {
    const [selected, setSelected] = useState(false);
    return (
      <Dropdown
        value={selected}
        onChange={setSelected}
        color="info"
        label={text('label', '')}
      >
        <Dropdown.Item value="item">Dropdown item</Dropdown.Item>
        <Dropdown.Item value="other">Other Dropdown item</Dropdown.Item>
        <Dropdown.Item value="active">Active Dropdown item</Dropdown.Item>
        <Dropdown.Item value="other 2">Other Dropdown item</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item value="divider">With divider</Dropdown.Item>
      </Dropdown>
    );
  })
  .add('Controlled component Hoverable', () => {
    const [selected, setSelected] = useState(false);
    return (
      <Dropdown
        hoverable
        value={selected}
        onChange={setSelected}
        color="info"
        label={text('label', '')}
      >
        <Dropdown.Item value="item">Dropdown item</Dropdown.Item>
        <Dropdown.Item value="other">Other Dropdown item</Dropdown.Item>
        <Dropdown.Item value="active">Active Dropdown item</Dropdown.Item>
        <Dropdown.Item value="other 2">Other Dropdown item</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item value="divider">With divider</Dropdown.Item>
      </Dropdown>
    );
  });
