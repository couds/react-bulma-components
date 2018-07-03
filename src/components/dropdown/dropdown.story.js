import React from 'react';

import { storiesOf } from '@storybook/react';

import Dropdown from '.';

class Wrapper extends React.Component {
  state = {
    selected: 'active',
  }
  onChange = (selected) => {
    this.setState({ selected });
  }
  render() {
    return (
      <Dropdown value={this.state.selected} onChange={this.onChange} color="info" {...this.props} >
        <Dropdown.Item value="item" >
          Dropdown item
        </Dropdown.Item>
        <Dropdown.Item value="other">
          Other Dropdown item
        </Dropdown.Item>
        <Dropdown.Item value="active">
          Active Dropdown item
        </Dropdown.Item>
        <Dropdown.Item value="other 2">
          Other Dropdown item
        </Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item value="divider">
          With divider
        </Dropdown.Item>
      </Dropdown>
    );
  }
}

storiesOf('Dropdown', module)
  .add('Default', (() => (
    <Dropdown>
      <Dropdown.Item value="item" >
        Dropdown item
      </Dropdown.Item>
      <Dropdown.Item value="other">
        Other Dropdown item
      </Dropdown.Item>
      <Dropdown.Item value="active">
        Active Dropdown item
      </Dropdown.Item>
      <Dropdown.Item value="other 2">
        Other Dropdown item
      </Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item value="divider">
        With divider
      </Dropdown.Item>
    </Dropdown>
  )))
  .add('Hoverable', (() => (
    <Dropdown hoverable>
      <Dropdown.Item value="item" >
        Dropdown item
      </Dropdown.Item>
      <Dropdown.Item value="other">
        Other Dropdown item
      </Dropdown.Item>
      <Dropdown.Item value="active">
        Active Dropdown item
      </Dropdown.Item>
      <Dropdown.Item value="other 2">
        Other Dropdown item
      </Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item value="divider">
        With divider
      </Dropdown.Item>
    </Dropdown>
  )))
  .add('Controlled component', (() => <Wrapper />))
  .add('Controlled component Hoverable', (() => <Wrapper hoverable color="dark" />));
