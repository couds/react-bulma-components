import React from 'react';
import renderer from 'react-test-renderer';
import Panel from '..';

describe('Panel component', () => {
  it('Should Exist', () => {
    expect(Panel).toMatchSnapshot();
  });
  it('Should be a primary panel', () => {
    const component = renderer.create(
      <Panel color="primary">
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
      </Panel>,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should have box classname', () => {
    const component = renderer.create(
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
      </Panel>,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
