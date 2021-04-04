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
      </Container>,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should use max prop on desktop breakpoint', () => {
    const component = renderer.create(
      <Container breakpoint="desktop" max>
        <p className="bd-notification is-success">
          <p>Default</p>
          <p>Container</p>
        </p>
      </Container>,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should ignore max prop on non desktop and non widescreen breakpoint', () => {
    const component = renderer.create(
      <Container breakpoint="fullhd" max>
        <p className="bd-notification is-success">
          <p>Default</p>
          <p>Container</p>
        </p>
      </Container>,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
