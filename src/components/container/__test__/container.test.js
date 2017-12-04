import React from 'react';
import renderer from 'react-test-renderer';
import Container from '..';

describe('Container component', () => {
  it('Should have container classname', () => {
    const component = renderer.create(
      <Container>
        <p className="bd-notification is-success">
          <p>Default</p>
          <p>Container</p>
        </p>
      </Container>);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
