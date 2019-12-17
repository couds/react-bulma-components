import React from 'react';
import renderer from 'react-test-renderer';
import Level from '..';

describe('Level component', () => {
  it('Should exist', () => {
    expect(Level).toMatchSnapshot();
  });
  it('Should expose Level Side and Item', () => {
    expect(Level.Side).toMatchSnapshot();
    expect(Level.Item).toMatchSnapshot();
  });
  it('Should have level classname', () => {
    const component = renderer.create(
      <Level>
        <Level.Item>Item 1</Level.Item>
        <Level.Item>Item 2</Level.Item>
        <Level.Item>Item 3</Level.Item>
      </Level>,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should concat classname in props with Bulma classname', () => {
    const component = renderer.create(
      <Level className="other-class this-is-a-test">
        <p>Default</p>
      </Level>,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should use inline styles', () => {
    const component = renderer.create(
      <Level style={{ height: 250 }}>
        <p>Default</p>
      </Level>,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should render Levels with right and left side', () => {
    const component = renderer.create(
      <Level>
        <Level.Side>
          <Level.Item>Item 1</Level.Item>
          <Level.Item>Item 2</Level.Item>
        </Level.Side>
        <Level.Side align="right">
          <Level.Item>Item 3</Level.Item>
        </Level.Side>
      </Level>,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should have is-mobile class if mobile prop is true', () => {
    const component = renderer.create(
      <Level mobile>
        <Level.Side>
          <Level.Item>Item 1</Level.Item>
          <Level.Item>Item 2</Level.Item>
        </Level.Side>
        <Level.Side align="right">
          <Level.Item>Item 3</Level.Item>
        </Level.Side>
      </Level>,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
