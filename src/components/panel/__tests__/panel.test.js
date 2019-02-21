import React from 'react';
import { render } from 'react-testing-library';
import { Panel } from '../panel';

describe('Panel component', () => {
  it.each([[Panel], [Panel.Block], [Panel.Header], [Panel.Icon], [Panel.Tabs], [Panel.Tabs.Tab]])(
    'should render',
    Component => {
      const { asFragment } = render(<Component />);
      expect(asFragment()).toMatchSnapshot();
    }
  );
  it('should render with all', () => {
    const { asFragment } = render(
      <Panel>
        <Panel.Header>repositories</Panel.Header>
        <Panel.Block>
          <div>Control</div>
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
            <i className="fa fa-bars" />
          </Panel.Icon>
          bulma
        </Panel.Block>
        <Panel.Block renderAs="label" className="panel-block">
          <input type="checkbox" />
          remember me
        </Panel.Block>
        <Panel.Block>
          <button type="button">reset all filters</button>
        </Panel.Block>
      </Panel>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
