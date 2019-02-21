import React from 'react';
import { render } from 'react-testing-library';
import { Label } from '../label';

describe('Label component', () => {
  it('should render', () => {
    const { asFragment } = render(<Label />);
    expect(asFragment()).toMatchSnapshot();
  });
  it('should concat classname in props with classname', () => {
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
