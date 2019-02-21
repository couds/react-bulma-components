import React from 'react';
import { render } from 'react-testing-library';
import { Level } from '..';

describe('Level component', () => {
  it('should expose Level Side and Item', () => {
    expect(Level.Side).toBeDefined();
    expect(Level.Item).toBeDefined();
  });
  it('should have level classname', () => {
    const { asFragment } = render(
      <Level>
        <Level.Item>Item 1</Level.Item>
        <Level.Item>Item 2</Level.Item>
        <Level.Item>Item 3</Level.Item>
      </Level>
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it('should concat classname in props with Bulma classname', () => {
    const { asFragment } = render(
      <Level className="other-class this-is-a-test">
        <p>Default</p>
      </Level>
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it('should use inline styles', () => {
    const { asFragment } = render(
      <Level style={{ height: 250 }}>
        <p>Default</p>
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
