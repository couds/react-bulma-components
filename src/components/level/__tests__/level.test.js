import React from 'react';
import { render } from 'react-testing-library';
import { Level } from '..';

describe('Level component', () => {
  it.each([[Level], [Level.Side], [Level.Item]])('should render', Component => {
    const { asFragment } = render(<Component />);
    expect(asFragment()).toMatchSnapshot();
  });
  it('should concat classname in props with classname', () => {
    const { asFragment } = render(
      <Level className="other-class this-is-a-test">
        <Level.Item>Item 1</Level.Item>
      </Level>
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it('should use inline styles', () => {
    const { asFragment } = render(
      <Level style={{ height: 250 }}>
        <Level.Item>Item 1</Level.Item>
      </Level>
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it('should render Levels with right and left side', () => {
    const { asFragment } = render(
      <Level>
        <Level.Side>
          <Level.Item>Item 1</Level.Item>
          <Level.Item>Item 2</Level.Item>
        </Level.Side>
        <Level.Side align="right">
          <Level.Item>Item 3</Level.Item>
        </Level.Side>
      </Level>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
