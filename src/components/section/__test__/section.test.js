import React from 'react';
import renderer from 'react-test-renderer';
import Section from '..';

describe('Section component', () => {
  it('Should exist', () => {
    expect(Section).toMatchSnapshot();
  });
  it('Should have section classname', () => {
    const component = renderer.create(
      <Section>
        Test <a href="/">Give me</a>
      </Section>,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should concat classname in props with Bulma classname', () => {
    const component = renderer.create(
      <Section className="other-class this-is-a-test">
        <p>Default</p>
      </Section>,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should use inline styles', () => {
    const component = renderer.create(
      <Section style={{ height: 250 }}>
        <p>Default</p>
      </Section>,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should be Large', () => {
    const component = renderer.create(
      <Section size="large">
        <p>Default</p>
      </Section>,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should render as nav element', () => {
    const component = renderer.create(
      <Section renderAs="nav">
        <p>Default</p>
      </Section>,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
