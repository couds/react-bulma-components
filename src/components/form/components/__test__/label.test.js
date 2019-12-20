import React from 'react';
import renderer from 'react-test-renderer';
import Label from '../label';

describe('Label component', () => {
  it('Should exist', () => {
    expect(Label).toMatchSnapshot();
  });
  it('Should have label classname', () => {
    const component = renderer.create(
      <Label>
        Test <a>Give me</a>
      </Label>,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should concat classname in props with Bulma classname', () => {
    const component = renderer.create(
      <Label className="other-class this-is-a-test">
        <p>Default</p>
      </Label>,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should use inline styles', () => {
    const component = renderer.create(
      <Label style={{ height: 250 }}>
        <p>Default</p>
      </Label>,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
