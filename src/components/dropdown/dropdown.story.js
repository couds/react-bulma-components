import React from 'react';

import { boolean, select, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Dropdown from '.';
import Container from '../container';
import Section from '../section';

const alignment = {
  Default: '',
  right: 'right',
};

class Wrapper extends React.Component {
  state = {
    selected: '',
  };
  onChange = selected => {
    this.setState({ selected });
  };
  render() {
    return (
      <Dropdown
        {...this.props}
        value={this.state.selected}
        onChange={this.onChange}
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
  }
}

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
  .add('Controlled component', () => <Wrapper />)
  .add('Controlled component Hoverable', () => (
    <Wrapper hoverable color="dark" />
  ));
