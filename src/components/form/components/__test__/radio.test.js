import React from 'react';
import renderer from 'react-test-renderer';
import Radio from '../radio';

describe('Radio component', () => {
  it('Should exist', () => {
    expect(Radio).toMatchSnapshot();
  });
  it('Should have radio classname', () => {
    const component = renderer.create(
      <Radio name="test">
        Test <a>Give me</a>
      </Radio>,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should concat classname in props with Bulma classname', () => {
    const component = renderer.create(
      <Radio name="test" className="other-class this-is-a-test">
        <p>Default</p>
      </Radio>,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should use inline styles', () => {
    const component = renderer.create(
      <Radio name="test" style={{ height: 250 }}>
        <p>Default</p>
      </Radio>,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should be disabled, checked and with value', () => {
    const component = renderer.create(
      <Radio name="test" value="TEST" checked disabled>
        <p>Default</p>
      </Radio>,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
