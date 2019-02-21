import React from 'react';
import { render } from 'react-testing-library';
import { Field } from '../field';

describe('Field component', () => {
  it('should export Label and Body as static properties', () => {
    expect(Field.Label).toBeDefined();
    expect(Field.Body).toBeDefined();
  });
  it('should have field classname', () => {
    const { asFragment } = render(
      <Field>
        <div className="bd-notification is-success">
          <p>Default</p>
          <p>Container</p>
        </div>
      </Field>
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it('should have field-label classname', () => {
    const { asFragment } = render(
      <Field.Label>
        <div className="bd-notification is-success">
          <p>Default</p>
          <p>Container</p>
        </div>
      </Field.Label>
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it('should have field-body classname', () => {
    const { asFragment } = render(
      <Field.Body>
        <div className="bd-notification is-success">
          <p>Default</p>
          <p>Container</p>
        </div>
      </Field.Body>
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it('should have field classname with grouped classname', () => {
    const { asFragment } = render(
      <Field kind="group">
        <div className="bd-notification is-success">
          <p>Default</p>
          <p>Container</p>
        </div>
      </Field>
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it('should have field classname with addons classname', () => {
    const { asFragment } = render(
      <Field kind="addons">
        <div className="bd-notification is-success">
          <p>Default</p>
          <p>Container</p>
        </div>
      </Field>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
