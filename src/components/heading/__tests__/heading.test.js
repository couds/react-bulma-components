import React from 'react';
import renderer from 'react-test-renderer';
import { Heading } from '..';

describe('Heading component', () => {
  it('should exist', () => {
    expect(Heading).toMatchSnapshot();
  });
  it('should have title classname', () => {
    const component = renderer.create(
      <Heading>
        Test <a>Give me</a>
      </Heading>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('should concat classname in props with Bulma classname', () => {
    const component = renderer.create(
      <Heading className="other-class this-is-a-test">
        <p>Default</p>
      </Heading>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('should use inline styles', () => {
    const component = renderer.create(
      <Heading style={{ height: 250 }}>
        <p>Default</p>
      </Heading>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('should be a subtitle with size rendered as P', () => {
    const component = renderer.create(
      <Heading size={3} subtitle renderAs="p">
        Subtitle
      </Heading>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('should not be spaced because is subtitle', () => {
    const component = renderer.create(
      <Heading spaced subtitle renderAs="p">
        Subtitle
      </Heading>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('should be spaced', () => {
    const component = renderer.create(
      <Heading spaced renderAs="p">
        Subtitle
      </Heading>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
