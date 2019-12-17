import React from 'react';
import renderer from 'react-test-renderer';
import Field from '../field';

describe('Field component', () => {
  it('Should Exists', () => {
    expect(Field).toMatchSnapshot();
  });
  it('Should export Label and Body as static properties', () => {
    expect(Field.Label).toMatchSnapshot();
    expect(Field.Body).toMatchSnapshot();
  });
  it('Should have field classname', () => {
    const component = renderer.create(
      <Field>
        <p className="bd-notification is-success">
          <p>Default</p>
          <p>Container</p>
        </p>
      </Field>,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should have field-label classname', () => {
    const component = renderer.create(
      <Field.Label>
        <p className="bd-notification is-success">
          <p>Default</p>
          <p>Container</p>
        </p>
      </Field.Label>,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should have field-body classname', () => {
    const component = renderer.create(
      <Field.Body>
        <p className="bd-notification is-success">
          <p>Default</p>
          <p>Container</p>
        </p>
      </Field.Body>,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should have field classname with grouped classname', () => {
    const component = renderer.create(
      <Field kind="group">
        <p className="bd-notification is-success">
          <p>Default</p>
          <p>Container</p>
        </p>
      </Field>,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should have field classname with addons classname', () => {
    const component = renderer.create(
      <Field kind="addons">
        <p className="bd-notification is-success">
          <p>Default</p>
          <p>Container</p>
        </p>
      </Field>,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
