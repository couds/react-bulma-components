import React from 'react';
import { render } from 'react-testing-library';
import { Field } from '../field';

describe('Field component', () => {
  it.each([[Field], [Field.Label], [Field.Body]])('should render', Component => {
    const { asFragment } = render(<Component />);
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
