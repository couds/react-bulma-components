import React from 'react';
import renderer from 'react-test-renderer';
import Heading from '..';

describe('Heading component', () => {
  it('Should exist', () => {
    expect(Heading).toMatchSnapshot();
  });
  it('Should have title classname', () => {
    const component = renderer.create(
      <Heading>
        Test <a>Give me</a>
      </Heading>,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should concat classname in props with Bulma classname', () => {
    const component = renderer.create(
      <Heading className="other-class this-is-a-test">
        <p>Default</p>
      </Heading>,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should use inline styles', () => {
    const component = renderer.create(
      <Heading style={{ height: 250 }}>
        <p>Default</p>
      </Heading>,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should be a subtitle with size rendered as P', () => {
    const component = renderer.create(
      <Heading size={3} subtitle renderAs="p">
        Subtitle
      </Heading>,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should not be spaced because is subtitle', () => {
    const component = renderer.create(
      <Heading spaced subtitle renderAs="p">
        Subtitle
      </Heading>,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should be spaced', () => {
    const component = renderer.create(
      <Heading spaced renderAs="p">
        Subtitle
      </Heading>,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
