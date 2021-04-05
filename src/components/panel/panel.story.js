import React from 'react';

import { Panel, Form, Button } from '../..';
import CONSTANTS from '../../constants';

export const Default = (args) => {
  return (
    <Panel {...args}>
      <Panel.Header>Repositories</Panel.Header>
      <Panel.Block>
        <Form.Control>
          <Form.Input size="small" type="text" placeholder="search" />
        </Form.Control>
      </Panel.Block>
      <Panel.Tabs className="panel-tabs">
        <Panel.Tabs.Tab active>all</Panel.Tabs.Tab>
        <Panel.Tabs.Tab>public</Panel.Tabs.Tab>
        <Panel.Tabs.Tab>private</Panel.Tabs.Tab>
        <Panel.Tabs.Tab>sources</Panel.Tabs.Tab>
        <Panel.Tabs.Tab>forks</Panel.Tabs.Tab>
      </Panel.Tabs>
      <Panel.Block renderAs="a" active>
        <Panel.Icon>
          <i className="fas fa-angle-down" />
        </Panel.Icon>
        bulma
      </Panel.Block>
      <Panel.Block>
        <Panel.Icon>
          <i className="fas fa-angle-down" />
        </Panel.Icon>
        react-bulma-components
      </Panel.Block>
      <Panel.Block>
        <Panel.Icon>
          <i className="fas fa-angle-down" />
        </Panel.Icon>
        minireset.css
      </Panel.Block>
      <Panel.Block>
        <Panel.Icon>
          <i className="fas fa-angle-down" />
        </Panel.Icon>
        jgthms.github.io
      </Panel.Block>
      <Panel.Block renderAs="label">
        <Form.Checkbox />
        remember me
      </Panel.Block>
      <Panel.Block>
        <Button fullwidth color={args.color} outlined>
          reset all filters
        </Button>
      </Panel.Block>
    </Panel>
  );
};

Default.argTypes = {
  color: {
    control: {
      type: 'select',
      options: ['default'].concat(Object.values(CONSTANTS.COLORS)),
    },
  },
};
