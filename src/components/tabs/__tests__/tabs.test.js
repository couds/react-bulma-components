import React from 'react';
import { render } from 'react-testing-library';
import { Tabs } from '..';

describe('Tabs component', () => {
  it.each([[Tabs], [Tabs.Tab]])('should render', Component => {
    const { asFragment } = render(<Component>Content</Component>);
    expect(asFragment()).toMatchSnapshot();
  });
  it('should concat classname in props with classname', () => {
    const { asFragment } = render(<Tabs className="other-class test" />);
    expect(asFragment()).toMatchSnapshot();
  });
  it('should render as an html section', () => {
    const { asFragment } = render(<Tabs renderAs="section">This should be a section</Tabs>);
    expect(asFragment()).toMatchSnapshot();
  });
  it('should have custom inline styles', () => {
    const { asFragment } = render(
      <Tabs renderAs="section" style={{ width: 200, zIndex: 1 }}>
        This should be a section with custom styles
      </Tabs>
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it('should accept a react Element as renderAs prop', () => {
    // eslint-disable-next-line react/prop-types
    const Custom = ({ children, ...props }) => (
      <p {...props}>
        Custom
        {children}
      </p>
    );
    const { asFragment } = render(<Tabs renderAs={Custom}>This should be a p element</Tabs>);
    expect(asFragment()).toMatchSnapshot();
  });
  it('should render propertly Inside Tabs', () => {
    const { asFragment } = render(
      <Tabs>
        <Tabs.Tab>Tab 1</Tabs.Tab>
        <Tabs.Tab>Tab 2</Tabs.Tab>
        <Tabs.Tab>Tab 3</Tabs.Tab>
      </Tabs>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
