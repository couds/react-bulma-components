import React from 'react';
import { render } from 'react-testing-library';
import { Label } from '../label';

describe('Label component', () => {
  it('should have label classname', () => {
    const { asFragment } = render(
      <Label>
        Test <a>Give me</a>
      </Label>
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it('should concat classname in props with Bulma classname', () => {
    const { asFragment } = render(
      <Label className="other-class this-is-a-test">
        <p>Default</p>
      </Label>
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it('should use inline styles', () => {
    const { asFragment } = render(
      <Label style={{ height: 250 }}>
        <p>Default</p>
      </Label>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
